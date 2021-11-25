import React, { useContext } from 'react';

import { View, Modal, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

import leftTeam from '../../assets/teams/houston-rockets.png';
import rightTeam from '../../assets/teams/milwaukee-bucks.png';
import { Player } from '../../entities/Player';
import { useNavigation } from "@react-navigation/core";
import { SvgCssUri } from 'react-native-svg';
import { Team } from '../../entities/Team';
import { Game } from '../../entities/Game';
import { LineupContext } from '../../context/LineupContext';

interface IModalMarketProps {
  onClose: () => void;
  deletePlayer: () => void;
  switchPlayer: () => void;
  isCurrentStageClosed?: boolean;
  player?: Player;
  playerTeam?: Team;
  game?: Game;
}

const ModalOpenMarket: React.FC<IModalMarketProps> = (props) => {
  const { 
    onClose, 
    player,
    deletePlayer,
    switchPlayer,
    playerTeam,
    isCurrentStageClosed,
    game
  } = props;

  const {
    currentJourney,
    currentStageIndex
  } = useContext(LineupContext);

  const verEstatisca = async () => {
    const navigation = useNavigation();
    navigation.navigate("Pes_Estatistica");
  };
  
  function formatDateTime(dateTime: string): string {
    const [date, time] = dateTime.split("T");
    const [year, month, day] = date.split("-");
    const brazilianDateFormat = `${day}/${month}`;
    const [hour, minutes] = time.split(":");
    const formattedHour = `${hour}H${minutes}`;
    return `${brazilianDateFormat} - ${formattedHour}`;
  }

  return (
  <Modal transparent style={styles.centeredView} animationType="slide">
    <View style={styles.container} >  
      <TouchableOpacity style={styles.closeModal} onPress={onClose}>
        <Text style={styles.closeModalIcon}>
          X
        </Text>
      </TouchableOpacity>
      {
        player &&
        <ScrollView contentContainerStyle={styles.modalScrollView}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderText}>
              {player.lastName} - <Text style={styles.modalHeaderTextBold}>{player.jersey}</Text>
            </Text>
            {
              playerTeam &&
              <SvgCssUri 
                height={40}
                width={40}
                uri={playerTeam.image} 
                fill="#000"
              />
            }
          </View>
          <View style={styles.statusContainer}>
            <View style={styles.valueContainer}>
              <Text style={styles.valueLabel}>
                Valor
                <Text style={styles.valueText}>
                  {" "}${player.price || 0}
                  <Text style={styles.valueTextBold}>CAP</Text>
                </Text>
              </Text>
              <Text style={styles.averageLabel}>
                Media PT: 
                {' '}<Text style={styles.valueText}>{player.averagePoints}</Text>
              </Text>
            </View>
          </View>
          <View style={styles.journeyContainer}>
            <View style={styles.topContainer}>
              <Text style={styles.journeyTitleLight}>
                <Text style={styles.journeyTitle}>
                  {
                    currentJourney && currentJourney.name
                  }
                </Text>
                {/* {" - "}Etapa {currentStageIndex+1} */}
              </Text>
              <Text style={{
                fontFamily: 'Roboto_400Regular',
                color: '#951516',
              }}>
                {game && formatDateTime(game.date_time)}
              </Text>
            </View> 
            <View style={styles.line} />
            {
              game &&
              <View style={styles.bottomContainer}>
                <View style={styles.teamContainer}>
                    <SvgCssUri 
                      uri={game.home_team.image}
                      width={45}
                      height={45}
                      fill="#000"
                    />
                    <Text style={styles.teamText}>
                      {game.home_team.name}
                    </Text>
                </View>
                <Text style={styles.versusText}>X</Text>
                <View style={styles.teamContainer}>
                  <SvgCssUri 
                    width={45} 
                    height={45}
                    uri={game.away_team.image}
                    fill="#000"
                  />
                  <Text style={styles.teamText}>
                    {game.away_team.name}
                  </Text>
                </View>
              </View>
            }
          </View>
          <TouchableOpacity style={styles.statisticContainer}>
            
            <Text style={styles.statisticTitle} onPress={verEstatisca}>
              Estatísticas
            </Text>

          </TouchableOpacity>
          {
            !isCurrentStageClosed
            &&
            <View style={styles.finalButtonsRow}>
                <TouchableOpacity 
                  style={styles.deleteButton}
                  onPress={deletePlayer}
                >
                  <Text style={styles.deleteButtonText}>Excluir</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.switchButton}
                  onPress={switchPlayer}
                >
                  <Text style={styles.switchButtonText}>Substituir</Text>
                </TouchableOpacity>
            </View>
          }
        </ScrollView>
      }
    </View>
  </Modal>
  )
};

export default ModalOpenMarket;