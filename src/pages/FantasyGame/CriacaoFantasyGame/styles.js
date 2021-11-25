import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  backContainer: {
    width: "100%",
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  logo: {
    width: 180,
    height: 180,
    marginTop: 70
  },
  text1: {
    fontSize: 20,
    fontFamily: 'Roboto_500Medium',
    textAlign: 'center',
    paddingTop: 8,
    paddingBottom: 10
  },
  text2: {
    fontSize: 17,
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center',
    color: '#D51737'
  },
  containerInput: {
    marginTop: 30,
    width: '87.5%'
  },
  titleInput: {
    fontSize: 12,
    fontFamily: 'Montserrat_700Bold',
    color: '#D51737',
    marginBottom: 13
  },
  input: {
    width: '100%',
    height: 56,
    fontSize: 15,
    fontFamily: 'Roboto_400Regular',
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 20,
    borderColor: '#D51737',
    color: '#8C8C8C'
  },
  botao: {
    width: '87.5%',
    height: 62,
    backgroundColor: '#D51737',
    marginTop: 31,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textoBotao: {
    fontSize: 16,
    fontFamily: 'Roboto_500Medium',
    color: '#fafafa',
    textAlign: 'center'
  }
})