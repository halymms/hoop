import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  containerClassificacao: {
    width: '90.5%',
    height: 210,
    marginTop: 21,
    paddingLeft: 23,
    paddingRight: 23,
    marginBottom: 21,
    backgroundColor: '#951516',
    borderRadius: 10
  },
  containerTitle: {
    paddingTop: 17
  },
  title: {
    fontSize: 14,
    fontFamily: 'Roboto_700Bold',
    color: '#ffffff',
    paddingBottom: 23
  },
  containerDados: {
    
  },
  rowTimes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8
  },
  textTimes: {
    fontSize: 15,
    fontFamily: 'Oxygen_400Regular',
    color: '#fff'
  },
  valueTimes: {
    fontSize: 15,
    fontFamily: 'Oxygen_700Bold',
    color: '#fff'
  }
})