import React, { useContext, useEffect } from "react";
import { useState, useRef } from "react";
import { 
  SafeAreaView, 
  View, 
  TouchableOpacity, 
  Text,
  ScrollView
} from "react-native";
import api from "../../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import { useNavigation } from "@react-navigation/core";
import { Picker } from '@react-native-picker/picker';
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

import TeamFormationScreen from "../../../components/TeamFormation";

import styles from "./styles"; 
import PlayerCircle from "../../../components/PlayerCircle";
import ModalOpenMarket from "../../../components/ModalOpenMarket";
import ModalClosedMarket from "../../../components/ModalClosedMarket";
import { CAPTAIN, currentDateGMT, formations, LineupContext, TeamFormation } from "../../../context/LineupContext";
import { Player } from "../../../entities/Player";
import { getJourneyByIdUseCase } from "../../../useCases/GetJourneyByIdUseCase";
import { createLineupUseCase } from "../../../useCases/CreateLineupUseCase";
import { getLineupsByUserTeamAndStageUseCase } from "../../../useCases/GetLineupByUserTeamAndStageUseCase";
import { Journey } from "../../../entities/Journey";
import { updateLineupUseCase } from "../../../useCases/UpdateLineupUseCase";
import { Stage } from "../../../entities/Stage";
import { getPlayerStatByPlayerIdAndDate } from "../../../useCases/GetPlayerStatByPlayerIdAndDate";
import { PlayerStat } from "../../../entities/PlayerStat";
import { Game } from "../../../entities/Game";
import { Team } from "../../../entities/Team";
import moment from "moment-timezone";
import { getBalanceByUserTeamIdUseCase } from "../../../useCases/GetBalanceByUserTeamIdUseCase";
import { getUserTeamByIdUseCase } from "../../../useCases/GetUserTeamByIdUseCase";
import { UserTeam } from "../../../entities/UserTeam";
import { getCurrentJourneyUseCase } from "../../../useCases/GetCurrentJourneyUseCase";
import { MenuSuperior } from "../../../components/MenuSuperior";
import ModalCaptain from "../../../components/ModalCaptain";
import { getPlayerStatByGameIdUseCase } from "../../../useCases/GetPlayerStatByGameIdUseCase";

type tTeamFormationIndexable = {
  [key: string]: Player;
};


const debugType: { [key:string]: any }= {
  playerStat: {
    userTeam: 1
  },
  changeOrCreate: {
    userTeam: 5
  },

  
}

// const { userTeam } = debugType['changeOrCreate'];
const userTeam = 3;

export function Escalacao () {
  const [ modalVisible, setModalVisible ] = useState(false);
  const [ modalClosedMarketVisible, setModalClosedMarketVisible ] = useState(false);
  const [modalCaptainVisible, setModalCaptainVisible] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<Player>();
  const [selectedPosition, setSelectedPosition] = useState("");
  const [isSelectedPlayerReserve, setIsSelectedPlayerReserve] = useState(false);
  const [timeToCloseJourney, setTimeToCloseJourney] = useState(0);
  const [timeToCloseEachStage, setTimeToCloseEachStage] = useState([0, 0, 0]);
  const [currentHourToClose, setCurrentHourToClose] = useState<string>();
  const [isJourneyClosed, setIsJourneyClosed] = useState(false);
  const [currentPlayerStat, setCurrentPlayerStat] = useState<PlayerStat>();
  const [currentPlayerGame, setCurrentPlayerGame] = useState<Game>();
  const [currentAgainstTeam, setCurrentAgainstTeam] = useState<Team>();
  const [currentPlayerTeam, setCurrentPlayerTeam] = useState<Team>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);
  const [success, setSuccess] = useState<string|null>(null);
  const [userTeamObject, setUserTeamObject] = useState<UserTeam>();
  const navigation = useNavigation();
  const pickerRef = useRef<Picker<any>>(null);

  const {
    teamFormation,
    setTeamFormation,
    cash,
    setCash,
    teamValue,
    setTeamValue,
    reserveFormation,
    setReserveFormation,
    captain,
    setCaptain,
    selectedFormationType,
    setSelectedFormationType,
    currentJourney,
    setCurrentJourney,
    currentStageIndex,
    setCurrentStageIndex,
    lineupId,
    setLineupId,
    currentLineup,
    setCurrentLineup,
    isCurrentJourneyTheLast,
    setIsCurrentJourneyTheLast
  } = useContext(LineupContext);

  async function updateBalance() {
    
    const token = await AsyncStorage.getItem("@storage_Token");
    const user_id = jwt_decode(token);

    const response = await api.get(`user_team/user/${user_id.user_id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    //const balance = await getBalanceByUserTeamIdUseCase.execute(userTeam);
    const balance = await getBalanceByUserTeamIdUseCase.execute(response.data[0].id);
    setCash(balance);
  }

  async function getUserTeamData() {
    try {
      const token = await AsyncStorage.getItem("@storage_Token");
      const user_id = jwt_decode(token);
  
      const response = await api.get(`user_team/user/${user_id.user_id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
            
      const userTeamObject = await getUserTeamByIdUseCase.execute(response.data[0].id);
      setUserTeamObject(userTeamObject);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        setSuccess(null);
      } else {
        console.error(error);
      }
    }
  }

  function findCurrentStage(stages: Stage[]) {
    const currentStage = stages.find(stage => {
      const currentDate = currentDateGMT("+05:00");
      const startDate = new Date(stage.start_date);
      const endDate = new Date(stage.end_date);
      return currentDate >= startDate && currentDate < endDate;
    });
    return currentStage;
  }

  async function loadLineup(journeyId?: number) {


    try {
      setLoading(true);
      await updateBalance();
      await getUserTeamData();
      let response;
      if (journeyId) {
        response = await getJourneyByIdUseCase.execute(journeyId);
      } else {
        response = await getCurrentJourneyUseCase.execute();
      }
      let currentStageIndex = 0;
      if (response) {
        const currentDate = new Date();
        const startDate = new Date(response.start_date);
        const endDate = new Date(response.end_date);
        const isTheLastJourney = currentDate >= startDate && currentDate < endDate;
        setIsCurrentJourneyTheLast(isTheLastJourney);
        setCurrentJourney(response);
        console.log(response.name)
        const timeToClose = dateDifference(new Date(), new Date(response.start_date));
        if (timeToClose < 0) {
          setIsJourneyClosed(true);
        } else {
          setIsJourneyClosed(false);
        }
        if (response.stages) {
          const timesToClose = response.stages.map(stage => {
            return getDaysToClose(stage);
          });
          setTimeToCloseEachStage(timesToClose);
          const currentStage = findCurrentStage(response.stages);
          if (currentStage) {
            currentStageIndex = response.stages.indexOf(currentStage);
            setCurrentStageIndex(currentStageIndex);
          }
        }
        setTimeToCloseJourney(timeToClose);
        await handleChangeStage(currentStageIndex, response);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }  

  useEffect(() => {
    loadLineup();
  }, []);

  useEffect(() => {
    const actualTeamValue = computeTeamValue();
    setTeamValue(actualTeamValue);
  }, [teamFormation, reserveFormation]);
 
  async function changeLineup(currentStage: Stage) {

    const token = await AsyncStorage.getItem("@storage_Token");
    const user_id = jwt_decode(token);

    const response = await api.get(`user_team/user/${user_id.user_id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const lineups = await getLineupsByUserTeamAndStageUseCase.execute(response.data[0].id, currentStage.id);
    if (lineups.length === 0) {
      setTeamFormation({});
      setReserveFormation({});
      setCaptain(undefined);
      setSelectedFormationType(formations[0]);
      setLineupId(null);
      return;
    }
    const lineup = lineups[0];
    setCurrentLineup(lineup);
    const holderPlayers = lineup.player.filter(player => player.holder);
    const holderFormation: { [key: string]: any } = {}
    holderPlayers.forEach(player => {
      holderFormation[player.position] = player;
    })
    setTeamFormation({
      SF: holderFormation["SF"],
      PF: holderFormation["PF"],
      SG: holderFormation["SG"],
      C: holderFormation["C"],
      PG: holderFormation["PG"],
    });
    const nonHolderPlayers = lineup.player.filter(player => !player.holder);
    const nonHolderFormation: { [key:string]: any } = {};
    nonHolderPlayers.forEach(player => {
      nonHolderFormation[player.position] = player;
    });
    setReserveFormation({
      SF: nonHolderFormation["SF"],
      PF: nonHolderFormation["PF"],
      SG: nonHolderFormation["SG"],
      C: nonHolderFormation["C"],
      PG: nonHolderFormation["PG"],
    });
    setCaptain(lineup.captain as Player);
    setSelectedFormationType(lineup.formation);
    setLineupId(lineup.id);
  }

  async function handleChangeStage(index: number, currentJourneyParam?: Journey) {
    setCurrentStageIndex(index);
    const journey = currentJourneyParam || currentJourney;
    if (!journey) return;
    if (!journey.stages) return;
    const currentStage = journey?.stages[index];
    setError(null);
    setSuccess(null);
    setCurrentHourToClose(getHourToClose(currentStage));
    await changeLineup(currentStage);
  }

  async function handleSubmit() {
    const token = await AsyncStorage.getItem('@storage_Token')
    const user_id = jwt_decode(token);
    
    const response = await api.get(`user_team/user/${user_id.user_id}/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    
    
    if (isCurrentStageClosed()) return;
    const teamFormationIndexable = teamFormation as tTeamFormationIndexable;
    const reserveFormationIndexable = reserveFormation as tTeamFormationIndexable;
    const mainPlayers = Object.keys(teamFormationIndexable).map(playerIndex => {
      return {
        player: teamFormationIndexable[playerIndex].id,
        holder: true
      };
    });
    const reservePlayers = Object.keys(reserveFormationIndexable).map(playerIndex => {
      return {
        player: reserveFormationIndexable[playerIndex].id,
        holder: false
      }
    });
    const players = [...mainPlayers, ...reservePlayers];
    if (players.length < 10) {
      setError("Jogadores insuficientes.")
      setSuccess(null);
      return;
    }
    if (!captain) {
      setError("Selecione um capitão.");
      setSuccess(null);
      return;
    }
    if (!currentJourney) return;
    if (!currentJourney.stages) return;
    const data = {
      formation: selectedFormationType,
      player: players,
      stage: currentJourney?.stages[currentStageIndex].id,
      //user_team: userTeam,
      user_team: response.data[0].id,
      captain: captain?.id
    };
    try {
      if (lineupId !== null) {
        await updateLineupUseCase.execute(data, lineupId);
        setSuccess("Escalação atualizada com sucesso!");
        setError(null);
        await updateBalance();
      } else {
        console.log("Create")
        const newLineupId = await createLineupUseCase.execute(data);
        setLineupId(newLineupId);
        setSuccess("Escalação criada com sucesso!");
        setError(null);
        await updateBalance();
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        setSuccess(null);
      } else {
        console.error(error);
      }
    }
  }

  async function getPlayerStat(playerId: number) {
    if (!currentJourney) return;
    if (!currentJourney.stages) return;
    const currentStage = currentJourney?.stages[currentStageIndex];
    const playerStat = await getPlayerStatByPlayerIdAndDate.execute(playerId, currentStage.start_date);
    if (!playerStat) return;
    setCurrentPlayerStat(playerStat);
  }

  async function goToPlayersSelection(position: string) {
    const isCurrentStageOpen = !isCurrentStageClosed();
    let isPlayerSelected;
    let selectedPlayer;
    if (position === CAPTAIN) {
      selectedPlayer = captain as Player;
      isPlayerSelected = !!selectedPlayer;
    } else {
      selectedPlayer = (teamFormation as tTeamFormationIndexable)[position] as Player;
      isPlayerSelected = !!selectedPlayer;
    }
    if (isCurrentStageOpen && !isPlayerSelected) {
      navigation.navigate('Selecao', { position });
      return;
    } else if (!isCurrentStageOpen && !isPlayerSelected) {
      return;
    }
    const playerGame = getPlayerGame(selectedPlayer);
    let wasGameFinished = false;
    if (playerGame) {
      const currentDate = currentDateGMT("+05:00");
      const endDate = new Date(playerGame.date_time);
      wasGameFinished = currentDate >= endDate;
    }
    if (!wasGameFinished && isPlayerSelected) {
      setIsSelectedPlayerReserve(false);
      setSelectedPosition(position);
      setModalVisible(true);
      setSelectedPlayer(selectedPlayer);
    } else if (wasGameFinished && isPlayerSelected) {
      if (playerGame) {
        await getPlayerStatByGameId(playerGame.id, selectedPlayer.id);
      }
      setIsSelectedPlayerReserve(false);
      setSelectedPosition(position);
      setModalClosedMarketVisible(true);
      setSelectedPlayer(selectedPlayer);
    }
  }

  async function handleCaptain() {
    const isCurrentStageOpen = !isCurrentStageClosed();
    if (!captain && isCurrentStageOpen) {
      setModalCaptainVisible(true);
      return;
    }
    if (isCurrentStageOpen && captain) {
      getPlayerGame(captain as Player);
      setSelectedPosition(CAPTAIN);
      setModalVisible(true);
      setSelectedPlayer((captain as Player));
      return;
    }
    if (!isCurrentStageOpen && captain) {
      const game = getPlayerGame(captain as Player);
      if (game) {
        await getPlayerStatByGameId(game.id, (captain as Player).id);
      }
      setSelectedPosition(CAPTAIN);
      setModalClosedMarketVisible(true);
      setSelectedPlayer((captain as Player));
      return;
    }
  }

  async function getPlayerStatByGameId(playerId: number, gameId: number) {
    const playerStat = await getPlayerStatByGameIdUseCase.execute(playerId, gameId);
    if (!playerStat) return null;
    setCurrentPlayerStat(playerStat);
    return playerStat;
  }

  function playerGameInCurrentJourney(player: Player) {
    if (!currentJourney) return null;
    if (!currentJourney.stages) return null;
    const playerTeamId = player.teamNumber;
    let gameIndex;
    let stageWithGame = currentJourney.stages.find((stage, index) => {
      if (index < currentStageIndex) return false;
      const game = stage.game.find((game, index) => {
        const isFromAwayTeam = game.away_team.id === playerTeamId;
        if (isFromAwayTeam) {
          gameIndex = index;
          setCurrentAgainstTeam(game.home_team);
          setCurrentPlayerTeam(game.away_team);
          return true;
        }
        const isFromHomeTeam = game.home_team.id === playerTeamId;
        if (isFromHomeTeam) {
          gameIndex = index;
          setCurrentAgainstTeam(game.away_team);
          setCurrentPlayerTeam(game.home_team);
          return true;
        }
        return false;
      })
      const hasGame = !!game;
      return hasGame;
    });
    if (!stageWithGame || !gameIndex) {
      stageWithGame = currentJourney.stages.find((stage, index) => {
        if (index >= currentStageIndex) return false;
        const game = stage.game.find((game, index) => {
          const isFromAwayTeam = game.away_team.id === playerTeamId;
          if (isFromAwayTeam) {
            gameIndex = index;
            setCurrentAgainstTeam(game.home_team);
            setCurrentPlayerTeam(game.away_team);
            return true;
          }
          const isFromHomeTeam = game.home_team.id === playerTeamId;
          if (isFromHomeTeam) {
            gameIndex = index;
            setCurrentAgainstTeam(game.away_team);
            setCurrentPlayerTeam(game.home_team);
            return true;
          }
          return false;
        })
        const hasGame = !!game;
        return hasGame;
      });
    }
    if (gameIndex && stageWithGame) return stageWithGame.game[gameIndex];
    return null;
  }

  function getPlayerGame(player: Player) {
    if (!currentJourney) return;
    if (!currentJourney.stages) return;
    const game = playerGameInCurrentJourney(player);
    if (!game) return;
    setCurrentPlayerGame(game);
    return game;
  }

  async function handleReservePlayersSelection(position: string) {
    const isCurrentStageOpen = !isCurrentStageClosed();
    const selectedPlayer = (reserveFormation as tTeamFormationIndexable)[position];
    const isPlayerSelected = !!selectedPlayer;
    if (isCurrentStageOpen && !isPlayerSelected) {
      navigation.navigate('Selecao', { position, isReserve: true });
      return;
    } else if (!isCurrentStageOpen && !isPlayerSelected) {
      return;
    }
    const playerGame = getPlayerGame(selectedPlayer);
    let wasGameFinished = false;
    if (playerGame) {
      const currentDate = currentDateGMT("+05:00");
      const endDate = new Date(playerGame.date_time);
      wasGameFinished = currentDate >= endDate;
    }
    if (!wasGameFinished && isPlayerSelected) {
      setIsSelectedPlayerReserve(true);
      setSelectedPosition(position);
      setModalVisible(true);
      setSelectedPlayer(selectedPlayer);
    } else if (wasGameFinished && isPlayerSelected) {
      if (playerGame) {
        await getPlayerStatByGameId(playerGame.id, selectedPlayer.id);
      }
      setIsSelectedPlayerReserve(true);
      setSelectedPosition(position);
      setModalClosedMarketVisible(true);
      setSelectedPlayer(selectedPlayer);
    }
  }

  function computeTeamValue() {
    const teamFormationIndexable = teamFormation as tTeamFormationIndexable;
    const reserveFormationIndexable = reserveFormation as tTeamFormationIndexable;
    let teamValue = 0;
    Object.keys(teamFormationIndexable).forEach(position => {
      const currentPlayer = teamFormationIndexable[position];
      if (!currentPlayer?.price) return;
      teamValue += Number(currentPlayer.price);
    });
    Object.keys(reserveFormationIndexable).forEach(position => {
      const currentPlayer = reserveFormationIndexable[position];
      if (!currentPlayer?.price) return;
      teamValue += Number(currentPlayer.price);
    });
    return teamValue;
  }

  function dateDifference(firstDate: Date, secondDate: Date) {
    const firstDateUTC = Date.UTC(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate());
    const secondDateUTC = Date.UTC(secondDate.getFullYear(), secondDate.getMonth(), secondDate.getDate() - 1);
    const day = 1000 * 60 * 60 * 24;
    return (secondDateUTC - firstDateUTC) / day;
  }

  function secondsToHour(seconds: number) {
      const numberHour = Math.round(seconds / 60);
      let hours = String(Math.floor(numberHour / 60));
      let minutes = numberHour % 60 || "00";
      if (minutes < 10 && minutes !== "00")
      {
        minutes = `0${minutes}`;
      }
      if (Number(hours) < 10)
      {
        hours = `0${hours}`;
      }
      return `${hours}:${minutes}`;
  }

  function getDaysToClose(stage: Stage) {
    const end = moment(stage.end_date)
    const current = moment();
    const diffInSeconds = end.diff(current, "seconds")
    const diffInDays = diffInSeconds / (3600*24);
    return Math.floor(diffInDays);
  }

  function getHourToClose(stage: Stage) {
    const end = moment(stage.end_date)
    const current = moment(currentDateGMT("+05:00"));
    console.log("CURRENT HOUR: ", current)
    const diffInSeconds = end.diff(current, "seconds")
    if (diffInSeconds <= 0) return "00:00";
    const diff = secondsToHour(diffInSeconds);
    return diff;
  }

  function roundNumber(someNumber: number) {
    return Math.round(someNumber * 100) / 100;
  }

  async function handleGoBackJourney() {
    if (!currentJourney) return;
    if (currentJourney.id === 1) return;
    const lastJourneyId = currentJourney?.id - 1;
    await loadLineup(lastJourneyId);
  }

  async function handleGoForthJourney() {
    if (!currentJourney) return;
    if (isCurrentJourneyTheLast) return;
    const nextJourneyId = currentJourney?.id + 1;
    await loadLineup(nextJourneyId);
  }

  function isCurrentStageClosed() {
    if (!currentJourney) return;
    if (!currentJourney.stages) return;
    const currentStage = currentJourney.stages[currentStageIndex];
    const currentDate = currentDateGMT("+05:00");
    const endDate = new Date(currentStage.end_date);
    const startDate = new Date(currentStage.start_date);
    return currentDate >  endDate || currentDate < startDate
  }

  function handleDeletePlayerModal() {
    if (!selectedPlayer) return;
    if (selectedPosition === CAPTAIN) {
      setCaptain(undefined);
    } else if (isSelectedPlayerReserve) {
      const reserveFormationIndexable = reserveFormation as tTeamFormationIndexable;
      const { [selectedPosition]: removedPosition, ...restFormation } = reserveFormationIndexable;
      setReserveFormation(restFormation as TeamFormation);
    } else {
      const teamFormationIndexable = teamFormation as tTeamFormationIndexable;
      const { [selectedPosition]: removedPosition, ...restFormation } = teamFormationIndexable;
      setTeamFormation(restFormation as TeamFormation);
    }
    const playerPrice = Number(selectedPlayer.price);
    setCash(Number(cash) + playerPrice);
    setTeamValue(teamValue - playerPrice);
    setModalVisible(false);
    setModalClosedMarketVisible(false);
  }

  if (loading || !currentJourney) return <View style={{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }}>
    <Text>Carregando...</Text>
  </View>;

  return(
    <SafeAreaView style={styles.container}>
      <MenuSuperior />
      {
        (modalVisible || modalClosedMarketVisible || modalCaptainVisible) &&
        <>
          <View 
            style={{
              flex: 1,
              position: 'absolute',
              width: '100%',
              height: '100%',
              zIndex: 5,
              backgroundColor: 'rgba(0, 0, 0, 0.8)'
            }} 
          />
          {
            modalVisible &&
            <ModalOpenMarket 
              onClose={() => {
                setModalVisible(false)
                setSelectedPlayer(undefined);
                setCurrentPlayerTeam(undefined);
                setCurrentPlayerGame(undefined);
              }} 
              player={selectedPlayer} 
              playerTeam={currentPlayerTeam}
              game={currentPlayerGame}
              deletePlayer={handleDeletePlayerModal}
              switchPlayer={() => {
                setModalVisible(false);
                if (selectedPosition === CAPTAIN) {
                  setModalCaptainVisible(true);
                } else {
                  navigation.navigate('Selecao', { 
                    position: selectedPosition, 
                    isReserve: isSelectedPlayerReserve,
                    oldPlayerSwitch: selectedPlayer
                  });
                }
              }}
              isCurrentStageClosed={isCurrentStageClosed()}
            />
          }
          {
            modalClosedMarketVisible &&
            <ModalClosedMarket 
              onClose={() => {
                setModalClosedMarketVisible(false);
                setCurrentPlayerStat(undefined);
                setCurrentPlayerGame(undefined);
                setCurrentAgainstTeam(undefined);
                setCurrentPlayerTeam(undefined);
              }} 
              isCurrentStageClosed={isCurrentStageClosed()}
              player={selectedPlayer} 
              playerStat={currentPlayerStat}
              playerTeam={currentPlayerTeam}
              againstTeamName={currentAgainstTeam?.key}
              deletePlayer={handleDeletePlayerModal}
            />
          }
          {
            modalCaptainVisible &&
            <ModalCaptain
              onClose={() => {
                setModalCaptainVisible(false);
              }}
            />
          }
        </>
      }
      <View style={styles.header}>
        <Text style={styles.headerText}>Escalação</Text>
      </View>
      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.titleContainer}>
          <View style={styles.closeTime}>
            <Ionicons 
              name="briefcase" 
              color={isCurrentStageClosed() ? '#D51737' : "#008B2F"}
              size={20} 
              style={styles.closeTimeIcon}
            />
            {
             isCurrentStageClosed() 
              ?
              <Text style={[styles.closeTimeText, {color: '#D51737'}]}>
                Fechada
              </Text>
              :
              <Text style={[styles.closeTimeText, {color: '#008B2F'}]}>
                Fecha em
                <Text style={[
                  styles.closeTimeTextBold,
                  { color: '#008B2F' }
                ]}>
                  {" "}{currentHourToClose?.split(':')[0]}H
                </Text>
              </Text>
            }
          </View>
          <View style={styles.journeySwitchContainer}>
            {
              currentJourney.id === 1
              ?
              <View></View>
              :
              <TouchableOpacity onPress={handleGoBackJourney}>
                <Text style={{ fontSize: 24 }}>{"<"}</Text>
              </TouchableOpacity>
            }
            <Text style={styles.title}>
              {currentJourney.name.replace('Journey', 'Jornada')}
            </Text>            
            {
              isCurrentJourneyTheLast
              ?
              <View></View>
              :
              <TouchableOpacity onPress={handleGoForthJourney}>
                <Text style={{ fontSize: 24 }}>{">"}</Text>
              </TouchableOpacity>
            }
          </View>
        </View>

        <View style={styles.stepsContainer}>
          {
            currentJourney?.stages && currentJourney.stages.map((step, index) => {
              return <View style={styles.stepContainer} key={index}>
                <TouchableOpacity 
                  style={[
                    styles.step,
                    {
                      backgroundColor: currentStageIndex != index ? '#F6F6F6' : '#951516'
                    }
                  ]}
                  onPress={() => handleChangeStage(index)}
                >
                  <Text style={[
                    styles.stepText,
                    { color: currentStageIndex != index ? '#2B2A29' : '#fff' }
                  ]}>Etapa {index + 1}</Text>
                </TouchableOpacity>
              </View>
            })
          }
        </View>

        {
          (isCurrentStageClosed() && currentDateGMT("+05:00") > new Date(currentJourney?.stages[currentStageIndex].end_date))
          ?
            <View style={styles.pointsContainer}>
              <View style={styles.dataContainerClosed}>
                <Text style={styles.dataTitleClosed}>Pontos:</Text>
                <Text style={styles.dataClosed}>{currentLineup?.points}</Text>
              </View>
              <View style={styles.separator} />
              <View style={styles.dataContainerClosed}>
                <Text style={styles.dataTitleClosed}>Ganhos:</Text>
                <Text style={styles.dataClosed}>{currentLineup?.gain}</Text>
              </View>
              <View style={styles.separator} />
              <View style={styles.dataContainerClosed}>
                <Text style={styles.dataTitleClosed}>Total de pontos:</Text>
                <Text style={styles.dataClosed}>{userTeamObject?.total_points}</Text>
              </View>
            </View>
          :
            <View style={styles.cashContainer}>
              <View style={styles.dataContainer}>
                <Text style={styles.dataTitle}>CAP Total:</Text>
                <Text style={styles.data}> C$<Text style={styles.dataBold}>{cash ? roundNumber(cash) : 0}</Text></Text>
              </View>
              <View style={styles.separator}></View>
              <View style={styles.dataContainer}>
                <Text style={styles.dataTitle}>Preço do time:</Text>
                <Text style={styles.data}> C$<Text style={styles.dataBold}>{teamValue}</Text></Text>
              </View>
            </View>
        }


        <Text style={styles.teamFormationTitle}>Formação de time</Text>

        <View style={styles.formationTypesContainer}>
          <View style={styles.formationTypesLeft}>
            <Text 
              style={styles.formationTypeTitle}
            >
              Tipo de jogada
            </Text>
           <View
           style={styles.pickerViewContainer}
           > 
            <Picker
              selectedValue={selectedFormationType}
              ref={pickerRef}
              style={{width: 130, color: 'white' }}
              onValueChange={(value) => {
                setSelectedFormationType(value)
              }}
              mode='dropdown'
            >
              {
                formations && formations.map((formation, index) => {
                  return <Picker.Item 
                    label={formation} 
                    value={formation} 
                    key={index}
                  />
                })
              }
            </Picker>
            </View>
          </View>
          <TouchableOpacity 
            style={styles.captainButton}
            onPress={() => handleCaptain()}
          >
            <Text style={styles.captainButtonText}>Capitão</Text>
          </TouchableOpacity>
        </View>

        <TeamFormationScreen
          formationType={selectedFormationType} 
          goToPlayersSelection={goToPlayersSelection}
        />
        <View style={styles.reserveContainer}>
          <Text style={styles.reserveTitle}>Banco de reservas</Text>
          <View style={styles.reserveButtons}>
            <PlayerCircle 
              title="SF" 
              onPress={() => handleReservePlayersSelection("SF")} 
              isVertical
              style={{
                marginTop: 30,
                width: 70
              }}
              playerImageUrl={(reserveFormation as tTeamFormationIndexable)["SF"]?.image}
            />
            <PlayerCircle 
              title="C" 
              onPress={() => handleReservePlayersSelection("C")} 
              isVertical
              style={{
                marginTop: 30 ,
                width: 70
              }}
              playerImageUrl={(reserveFormation as tTeamFormationIndexable)["C"]?.image}
            />
            <PlayerCircle 
              title="PF" 
              onPress={() => handleReservePlayersSelection("PF")} 
              isVertical
              style={{
                marginTop: 30 ,
                width: 70
              }}
              playerImageUrl={(reserveFormation as tTeamFormationIndexable)["PF"]?.image}
            />
            <PlayerCircle 
              title="SG" 
              onPress={() => handleReservePlayersSelection("SG")} 
              isVertical
              style={{
                marginTop: 30 ,
                width: 70
              }}
              playerImageUrl={(reserveFormation as tTeamFormationIndexable)["SG"]?.image}
            />
            <PlayerCircle 
              title="PG" 
              onPress={() => handleReservePlayersSelection("PG")} 
              isVertical
              style={{
                marginTop: 30 ,
                width: 70
              }}
              playerImageUrl={(reserveFormation as tTeamFormationIndexable)["PG"]?.image}
            />
          </View>
          {
            error && <Text style={{color: 'red', marginBottom: 20}}>{error}</Text>
          }
          {
            success && <Text style={{color: 'green', marginBottom: 20}}>{success}</Text>
          }
          <View style={styles.finalButtonsRow}>
              <TouchableOpacity 
                style={styles.cancelButton}
                onPress={() => {

                }}
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.saveButton}
                onPress={handleSubmit}
              >
                <Text style={styles.saveButtonText}>Salvar</Text>
              </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
};