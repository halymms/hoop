import React, { useContext, useEffect } from 'react';
import { useState, useRef } from 'react';
import {
    SafeAreaView,
    View,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    Dimensions
} from 'react-native'

import { RouteProp, useNavigation } from '@react-navigation/core';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import PickersContainer from './PickersContainer';
import PlayerCard from '../../../components/PlayerCard';
import { getAllPlayersUseCase } from '../../../useCases/GetAllPlayersUseCase';
import { Player } from '../../../entities/Player';
import { getAllTeamsUseCase } from '../../../useCases/GetAllTeamsUseCase';
import { FlatList } from 'react-native-gesture-handler';
import { Team } from '../../../entities/Team';
import { Stage } from '../../../entities/Stage';
import { getStagesByJourneyIdUseCase } from '../../../useCases/GetStagesByJourneyIdUseCase';
import { LineupStackParamList } from '../../../routes/stackLineUp.routes';
import { StackNavigationProp } from '@react-navigation/stack';
import { CAPTAIN, LineupContext, TeamFormation } from '../../../context/LineupContext';

export interface Step {
  name: string;
  id: number;
}

export type tAllTeams = {
  [key: string]: Team;
};

export type tAllStages = {
  [key: string]: Stage;
};

type tTeamFormationIndexable = {
  [key: string]: Player;
};

const elementLimit = 10;

type SelecaoScreenRouteProp = RouteProp<LineupStackParamList, 'Selecao'>;
type SelecaoScreenNavigationProp = StackNavigationProp<LineupStackParamList, 'Selecao'>;

type SelecaoProps = {
  route: SelecaoScreenRouteProp;
  navigation: SelecaoScreenNavigationProp;
}

const Selecao: React.FC<SelecaoProps> = ({ route, navigation }) => {
  const [selectedTeams, setSelectedTeams] = useState<tAllTeams>({});
  const [selectedStages, setSelectedStages] = useState<tAllStages>({});
  const [allPlayers, setAllPlayers] = useState<Player[]>([]);
  const [allStages, setAllStages] = useState<tAllStages>({});
  const [allTeams, setAllTeams] = useState<tAllTeams>({});
  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>([]);
  const [allFilteredPlayers, setAllFilteredPlayers] = useState<Player[]>([]);
  const [ text, setText ] = useState('');
  const [error, setError] = useState<string|null>(null);
  const [lastIndex, setLastIndex] = useState(10);
  const [loading, setLoading] = useState(true);

  const { 
    position, 
    isReserve,
    oldPlayerSwitch
  } = route.params;
  
  const {
    teamFormation,
    setTeamFormation,
    cash,
    setCash,
    teamValue,
    setTeamValue,
    reserveFormation,
    setReserveFormation,
    setCaptain,
    currentJourney,
  } = useContext(LineupContext);

  function handleBuyPlayer(playerId: number) {
    const player = allPlayers.find(player => player.id === playerId);
    if (!player) return;
    const playerValue = Number(player.price) || 0;
    if (playerValue > cash) {
      setError("Saldo insuficiente.");
      return;
    }
    if (position === CAPTAIN) {
      navigation.goBack();
      return;
    }
    let finalCash = cash - playerValue;
    let finalTeamValue = teamValue + playerValue
    if (oldPlayerSwitch) {
      const oldPlayerValue = Number(oldPlayerSwitch.price);
      if (oldPlayerValue < Number(player.price)) {
        finalCash += oldPlayerValue;
        finalTeamValue -= oldPlayerValue;
      }
    }
    setCash(finalCash);
    setTeamValue(finalTeamValue);
    if (isReserve) {
      const reserveFormationIndexable = reserveFormation as tTeamFormationIndexable;
      reserveFormationIndexable[position] = player;
      setReserveFormation(reserveFormationIndexable as TeamFormation);
      console.log("Reserve formation: ", reserveFormationIndexable as TeamFormation);
      console.log("Cash: ", cash - playerValue);
      console.log("Team value: ", teamValue + playerValue);
      navigation.goBack();
      return;
    }
    const teamFormationIndexable = teamFormation as tTeamFormationIndexable;
    teamFormationIndexable[position] = player;
    setTeamFormation(teamFormationIndexable as TeamFormation);
    console.log("Team formation: ", teamFormationIndexable as TeamFormation);
    console.log("Cash: ", cash - playerValue);
    console.log("Team value: ", teamValue + playerValue);
    setError(null);
    navigation.goBack();
  }

  function playerWillBeInCurrentJourney(player: Player): boolean {
    if (!currentJourney) return false;
    if (!currentJourney.stages) return false;
    const playerTeamId = player.teamNumber;
    const stageWithGame = currentJourney.stages.find(stage => {
      const game = stage.game.find(game => {
        const isFromAwayTeam = game.away_team.id === playerTeamId;
        if (isFromAwayTeam) {
          return true;
        }
        const isFromHomeTeam = game.home_team.id === playerTeamId;
        if (isFromHomeTeam) {
          return true;
        }
        return false;
      })
      const hasGame = !!game;
      return hasGame;
    });
    const hasStageWithGame = !!stageWithGame;
    return hasStageWithGame;
  }

  function filterAllPlayers(players: Player[])  {
    return players.filter(player => {
      const indexableTeamFormation = teamFormation as tTeamFormationIndexable;
      const indexableReserveFormation = reserveFormation as tTeamFormationIndexable;
      const isSelectedOnTeam = Object.keys(indexableTeamFormation).find(teamFormationKey => {
        return indexableTeamFormation[teamFormationKey].id === player.id
      });
      const isSelectedOnReserve = Object.keys(indexableReserveFormation).find(reserveFormationKey => {
        return indexableReserveFormation[reserveFormationKey].id === player.id
      });
      const isInThisJourney = playerWillBeInCurrentJourney(player);
      return player.status === 'Active'
      && player.position === position
      && isInThisJourney
      && !isSelectedOnReserve 
      && !isSelectedOnTeam;
    });
  }

  function generateAllTeams(teams: Team[]) {
    const tempAllTeams: tAllTeams = {};
    teams.forEach(team => {
      tempAllTeams[team.id + ""] = team;
    });
    setAllTeams(tempAllTeams);
  }

  function generateAllStages() {
    if (!currentJourney) return;
    if (!currentJourney.stages) return;
    const tempAllStages: tAllStages = {};
    currentJourney.stages.forEach((stage, index) => {
      tempAllStages[index+1 + ""] = stage;
    });
    setAllStages(tempAllStages);
  }

  function handleLoadMorePlayers() {
    if (lastIndex >= allFilteredPlayers.length) return;
    const wantedSlice = allFilteredPlayers.slice(lastIndex, lastIndex + elementLimit);
    setFilteredPlayers(filteredPlayers.concat(wantedSlice));
    setLastIndex(lastIndex + elementLimit);
  }

  function searchPlayer(name: string) {
    const pattern = new RegExp(name);
    const players = allPlayers.filter(player => pattern.test(`${player.firstName} ${player.lastName}`));
    setAllFilteredPlayers(players);
    setFilteredPlayers(players.slice(0, elementLimit));
  }

  function getPlayerGame(currentStage: Stage, player: Player) {
    const playerTeamId = player.teamNumber;
    const game = currentStage.game.find(game => {
      const isFromAwayTeam = game.away_team.id === playerTeamId;
      if (isFromAwayTeam) {
        return true;
      }
      const isFromHomeTeam = game.home_team.id === playerTeamId;
      if (isFromHomeTeam) {
        return true;
      }
      return false;
    });
    console.log("Player team: ", player.teamNumber)
    console.log("Game: ", game)
    return game;
  }

  function filterPlayers() {
    const areNoFilterActive = 
      Object.keys(selectedTeams).length === 0
      && Object.keys(selectedStages).length === 0 
      && text.length === 0;
    
    if (areNoFilterActive) {
      setAllFilteredPlayers(allPlayers);
      setFilteredPlayers(allPlayers.slice(0, elementLimit));
      return;
    }
    const players = allPlayers.filter(player => {
      const isOnSelectedTeams = (`${player.teamNumber}` in selectedTeams)
      let isOnSelectedStages = false;
      Object.keys(selectedStages).every(stageIndex => {
        const currentStage = selectedStages[stageIndex];
        const isOnStage = !!getPlayerGame(currentStage, player);
        if (isOnStage) {
          isOnSelectedStages = true;
          return false;
        }
        return true;
      })
      if (Object.keys(selectedTeams).length === 0) {
        if (Object.keys(selectedStages).length === 0) {
          return true;
        } else {
          return isOnSelectedStages;
        }
      } else {
        if (Object.keys(selectedStages).length === 0)  {
          return isOnSelectedTeams;
        } else {
          return isOnSelectedTeams && isOnSelectedStages;
        }
      }
    });
    const notRepeatedPlayers = [...new Set(players)];
    setAllFilteredPlayers(notRepeatedPlayers);
    setFilteredPlayers(notRepeatedPlayers.slice(0, elementLimit));
  }

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const players = await getAllPlayersUseCase.execute();
        const teams = await getAllTeamsUseCase.execute();
        players.forEach(player => {
          player.team = teams.find(team => team.id === player.teamNumber);
        });
        const tmpFilteredPlayers = filterAllPlayers(players);
        setAllPlayers(tmpFilteredPlayers);
        setFilteredPlayers(tmpFilteredPlayers.slice(0, 10));
        setAllFilteredPlayers(tmpFilteredPlayers);
        generateAllTeams(teams);
        const stages = await getStagesByJourneyIdUseCase.execute(1);
        generateAllStages();
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, []);
  
  useEffect(() => {
    if (selectedTeams || selectedStages) {
      filterPlayers();
    }
  }, [selectedTeams, selectedStages]);

  if (loading) {
    return <View style={{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
      }}>
        <Text>Carregando...</Text>
      </View>;
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Seleção</Text>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        </View>
      </View>
      <View
        style={styles.body}
      >
        <View style={styles.input}>
          <TextInput
            onChangeText={pattern => {
              searchPlayer(pattern);
              setText(pattern);
            }}
            value={text}
            placeholder="Busque o jogador que está procurando"
          />
          <AntDesign
            style={styles.searchIcon}
            name="search1" 
            size={20} 
            color="#6B6A6A" 
          />
        </View>
        <PickersContainer
          selectedTeams={selectedTeams}
          setSelectedTeams={setSelectedTeams}
          selectedSteps={selectedStages}
          setSelectedSteps={setSelectedStages}
          teams={allTeams}
          steps={allStages}
        />
        <View 
          style={{ 
            minWidth: Dimensions.get('window').width, 
            height: 70, 
          }}
        >
          <ScrollView
            contentContainerStyle={styles.filtersListContainer}
            style={{
              flex: 1
            }}
            horizontal={true}
          >
          {
            selectedTeams && Object.keys(selectedTeams).map(teamKey => {
              const team = selectedTeams[teamKey];
              return <View 
                style={styles.filterContainer}
                key={teamKey + ""}
                >
                <TouchableOpacity
                  onPress={() => {
                    if (!allTeams) return;
                    const { [teamKey]: removedKey, ...restTeams } = selectedTeams;
                    setSelectedTeams(restTeams);
                  }} 
                >
                  <Text style={styles.filterCloseButton}>
                    X
                  </Text>
                </TouchableOpacity>
                <Text style={styles.filterName}>{team.name}</Text>                
              </View>
            })
          }
          {
            selectedStages && Object.keys(selectedStages).map(stepKey => {
              const step = selectedStages[stepKey];
              return <View 
                style={styles.filterContainer}
                key={step.id + "2"}
              >
                <TouchableOpacity 
                  style={{
                    width: 20,
                    height: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onPress={() => {
                    if (!allStages) return;
                    const { [stepKey]: removedKey, ...restStages } = selectedStages;
                    setSelectedStages(restStages);
                  }}
                >
                  <Text style={styles.filterCloseButton}>
                    X
                  </Text>
                </TouchableOpacity>
                <Text style={styles.filterName}>Etapa {stepKey}</Text>                
              </View>
            })
          }
          </ScrollView>
        </View>
        <View style={styles.availablePlayers}>
          <View style={styles.availablePlayersHeader}>
            <Text style={styles.availablePlayersHeaderTitle}>
              Jogadores disponíveis
            </Text>
            <Text style={styles.availablePlayersHeaderAmount}>
              {allFilteredPlayers.length}
            </Text>
          </View>
          {
            error && <Text style={{
              textAlign: 'center', 
              color: 'red', 
              marginTop: 20,
              fontFamily: 'Roboto_400Regular',
              fontSize: 15
            }}>
              {error}
            </Text>
          }
          
          <View style={styles.availablePlayersBody}>
            <FlatList 
              data={filteredPlayers} 
              onEndReached={handleLoadMorePlayers} 
              keyExtractor={(item, index) => 'key'+index}
              style={styles.playersList}
              contentContainerStyle={{ paddingBottom: 160 }}
              onEndReachedThreshold={2}
              renderItem={({ item }) => {
                const player = item as Player;
                return (
                  <PlayerCard 
                    key={"key"+player.id}
                    playerName={`${player.firstName} ${player.lastName}`}
                    playerImageUrl={player.image}
                    handleBuyPlayer={handleBuyPlayer}
                    teamImageUrl={player.team ? player.team.image : undefined}
                    id={player.id}
                    playerValue={Number(player.price)}
                    injuryStatus={player.injuryStatus}
                  />
                );
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
export default Selecao;