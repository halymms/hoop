import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

interface IPlayerCircleProps {
  onPress: () => void;
  title: string;
  style?: object;
  isVertical?: boolean;
  playerImageUrl?: string;
}

const PlayerCircle: React.FC<IPlayerCircleProps> = (props) => {
  const { 
    onPress, 
    title, 
    style, 
    isVertical,
    playerImageUrl
  } = props;
  return (
    <>
    {
      isVertical
      ?
      <View style={[
        styles.playerCircleContainer,
        style || {},
        { flexDirection: 'column' }
      ]}>
        <Text 
          style={[
            styles.positionTitle,
            { opacity: playerImageUrl ? 0 : 1}
          ]}>
          {title}
        </Text>
        <TouchableOpacity 
          style={[
            styles.playerCircleButton,
            { backgroundColor: playerImageUrl ? "#c4c4c4" : "#D51737" }
          ]}
          onPress={onPress}
        >
          {
            playerImageUrl
            ? 
              <Image 
                source={{ uri: playerImageUrl }} 
                style={styles.imgPlayer}
              />
            :
            <Text style={styles.playerPlus}>+</Text> 
          }
        </TouchableOpacity>
      </View>
      :
      <View style={[
        styles.playerCircleContainer,
        style || {},
        { flexDirection: 'row' }
      ]}>
        <TouchableOpacity 
          style={[
            styles.playerCircleButton,
            { backgroundColor: playerImageUrl ? "#c4c4c4" : "#D51737" }
          ]}
          onPress={onPress}
        >
          {
            playerImageUrl
            ?
              <Image 
                source={{ uri: playerImageUrl }} 
                style={styles.imgPlayer}
              />
            :
            <Text style={styles.playerPlus}>+</Text> 
          }
        </TouchableOpacity>
        <Text 
          style={[
            styles.positionTitle,
            { opacity: playerImageUrl ? 0 : 1 }
          ]}
        >
          {title}
        </Text>
      </View>
    }
    </>
  );
}

export default PlayerCircle;