import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  logoLogin: {
    width: 129,
    height: 222,
  },
  titleCadastro: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 22,
    textAlign: 'center',
    color: '#2B2A29'
  },
  containerMenu: {
    backgroundColor: '#AF4153',
    height: 64,
    justifyContent: 'center',
    paddingLeft: 15,
    width: '100%',
  },
  textContainerMenu: {
    fontSize: 20,
    fontFamily: 'Roboto_500Medium',
    color: '#fff'
  },
  containerInput: {
    width: '90.4%',
    marginTop: '4%',
  },
  titleInput: {
    fontSize: 11,
    fontFamily: 'Montserrat_700Bold',
    color: '#000',
    marginBottom: 7
  },
  input: {
    width: '100%',
    height: 46,
    fontSize: 15,
    fontFamily: 'Roboto_400Regular',
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 20,
    borderColor: '#000',
    color: '#8C8C8C'
  },
  botao: {
    width: '90.4%',
    height: 51,
    backgroundColor: '#951516',
    marginTop: 31,
    marginBottom: 31,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textoBotao: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    color: '#fafafa'
  },

  buttonLogout: {
    width: '90.4%',
    height: 51,
    marginTop: 31,
    marginBottom: 31,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  buttonSave: {
    width: '90.4%',
    height: 51,
    backgroundColor: '#951516',
    marginTop: 48,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  buttonChangePassword: {
    width: '90.4%',
    height: 51,
    borderWidth: 1,
    borderColor: '#951516',
    marginTop: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textbuttonSave: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    color: '#fafafa'
  },
  
  textbuttonChangePassword: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    color: '#951516'
  },
  
  textbuttonLogout: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 18,
    color: '#D51737'
  },


})