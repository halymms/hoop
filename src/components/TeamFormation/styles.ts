import { Dimensions, StyleSheet } from "react-native";
import Court from '../../assets/quadradebasquete.png';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  teamFormationContainer: {
    marginTop: 20,
    marginBottom: 20,
    width: width > 400 ? 400 : width,
    height: 300,
  },
  allPlayers: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%'
  },
  playerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    
  }
});