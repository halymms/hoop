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
    height: 129,
    marginTop: 19
  },
  titleCadastro: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 22,
    marginTop: 5,
    marginBottom: 25,
    textAlign: 'center',
    color: '#951516'
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
    marginBottom: 18,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textoBotao: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    color: '#fafafa'
  },
  lgpd: {
    width: '90.4%',
    fontSize: 11,
    fontFamily: 'Roboto_400Regular',
    textAlign: 'left',
    color: '#585858',
    marginBottom: 34
  }
})