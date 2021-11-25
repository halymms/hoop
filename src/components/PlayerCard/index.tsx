import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SvgCssUri } from 'react-native-svg';
import styles from './styles';

interface IPlayerCardProps {
  playerImageUrl: string;
  teamImageUrl?: string;
  playerName: string;
  playerValue: number;
  injuryStatus: boolean;
  id: number;
  handleBuyPlayer: (playerId: number) => void;
}

const PlayerCard: React.FC<IPlayerCardProps> = (props) => {
  const {
    playerName,
    playerImageUrl,
    teamImageUrl,
    id,
    playerValue,
    handleBuyPlayer,
    injuryStatus
  } = props;

  return(
  <View style={styles.container}>
    <View style={styles.cardPlayer}>
      <View style={styles.containerImgPlayer}>
        <Image 
          source={{ uri: playerImageUrl }} 
          style={styles.imgPlayer}
        />
      </View>
      {
        teamImageUrl &&
        <View style={styles.containerImgTeam}>
          <SvgCssUri
            width={59} 
            height={59}
            uri={teamImageUrl}
            fill="#000"
          />
        </View>
      }
      <View style={styles.containerText}>
        <View style={styles.textPlayerView}>
          {
            injuryStatus
            ?
            <View style={[styles.ball, {backgroundColor: '#D51737'}]}/>
            :
            <View style={[styles.ball, {backgroundColor: '#008B2F'}]} />
          }
          <Text style={styles.textPlayer}>{playerName}</Text>
        </View>
        <Text style={styles.textSelectPlayer}>Seleção deste Jogador</Text>
      </View>
    </View>
    <View style={styles.lineCenter}/>
    <View style={styles.containerPrice}>
      <Text style={styles.textPrice}>{playerValue}C$</Text>
    </View>
    <TouchableOpacity 
      style={styles.buttonBuy}
      onPress={() => handleBuyPlayer(id)}
    >
      <Text style={styles.textButton}>Comprar Jogador</Text>
    </TouchableOpacity>
  </View>
)}

export default PlayerCard;