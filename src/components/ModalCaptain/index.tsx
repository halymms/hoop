import React, { useContext } from 'react';
import { Image, Modal, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { LineupContext } from '../../context/LineupContext';
import { Player } from '../../entities/Player';
import styles from './styles';

interface IModalCaptainProps {
  onClose: () => void;
}

type indexableFormation = {
  [key: string]: Player;
};

const ModalCaptain: React.FC<IModalCaptainProps> = (props) => {
  const { onClose } = props;

  const {
    teamFormation,
    setCaptain
  } = useContext(LineupContext);

  const indexableTeamFormation = teamFormation as indexableFormation;

  return (
    <Modal transparent style={styles.centeredView} animationType="slide">
      <View style={styles.container} >  
        <View style={styles.modalHeader}>
          <Text style={styles.headerTitle}>Selecione o capitão</Text>
          <TouchableOpacity
            onPress={onClose}
            style={styles.closeModalButton}
          >
            <Text style={styles.closeModalIcon}>
              X
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.modalBody}>
          {
            Object.keys(indexableTeamFormation).map(playerPosition => {
              const currentPlayer = indexableTeamFormation[playerPosition];
              return <View 
                style={styles.playerContainer}
                key={playerPosition}
              >
                <View style={styles.playerHeader}>
                  <Image 
                    source={{ uri: currentPlayer.image }} 
                    style={styles.imgPlayer}
                  />
                  <Text style={styles.playerName}>
                    {currentPlayer.firstName} {currentPlayer.lastName} {currentPlayer.jersey}
                  </Text>
                </View>
                <View style={styles.horizontalRule} />
                <TouchableOpacity 
                  style={styles.choosePlayerButton}
                  onPress={() => {
                    setCaptain(currentPlayer); 
                    onClose();
                  }}
                >
                  <Text style={styles.choosePlayerButtonText}>Selecionar</Text>
                </TouchableOpacity>
              </View>;
            })
          }
        </ScrollView>
      </View>
    </Modal>
  );
}

export default ModalCaptain;