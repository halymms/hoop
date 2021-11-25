import React, { useContext } from 'react';

import { View, Modal, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/core";
import styles from './styles'

import ModalClosedMarketTable from './ModalClosedMarketTable';
import { Player } from '../../entities/Player';
import { PlayerStat } from '../../entities/PlayerStat';
import { Game } from '../../entities/Game';
import { SvgCssUri } from 'react-native-svg';
import { Team } from '../../entities/Team';

interface IModalMarketProps {
  onClose: () => void;
  player?: Player;
  playerStat?: PlayerStat;
  playerTeam?: Team;
  deletePlayer: () => void;
  againstTeamName?: string;
  isCurrentStageClosed?: boolean;
}

const verEstatisca = async () => {
  const navigation = useNavigation();
  navigation.navigate("Pes_Estatistica");
};

const ModalClosedMarket: React.FC<IModalMarketProps> = (props) => {
  const { 
    onClose, 
    player, 
    playerStat, 
    playerTeam,
    deletePlayer,
    againstTeamName,
    isCurrentStageClosed
  } = props;

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
              {player.lastName} - <Text style={styles.modalHeaderTextBold}>3</Text>
            </Text>
            {
              playerTeam &&
              <SvgCssUri 
                width={40} 
                height={40}
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
          {
            playerStat && <ModalClosedMarketTable 
              playerStat={playerStat} 
              againstTeamName={againstTeamName} 
            />  
          }
          <TouchableOpacity style={styles.statisticContainer}>

            <Text style={styles.statisticTitle} onPress={verEstatisca}>
              Estatísticas
            </Text>
            
          </TouchableOpacity>
          {
            !isCurrentStageClosed &&
            <View style={styles.finalButtonsRow}>
                <TouchableOpacity 
                  style={styles.deleteButton}
                  onPress={deletePlayer}
                >
                  <Text style={styles.deleteButtonText}>Excluir</Text>
                </TouchableOpacity>
            </View>
          }
        </ScrollView>
      }
    </View>
  </Modal>
  )
};

export default ModalClosedMarket;