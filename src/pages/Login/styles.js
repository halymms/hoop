
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  content: {
    flex: 1,
    width: '100%'
  },
  form: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  logoLogin: {
    width: 129,
    height: 129,
    marginTop: 19,

  },
  textLogin: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 22,
    marginTop: 5,
    marginBottom: 23,
    textAlign: 'center',
    color: '#951516'
  },
  containerInput: {
    width: '90.4%',
    marginTop: '5%',
  },
  titleInput: {
    fontSize: 11,
    fontFamily: 'Montserrat_700Bold',
    color: '#000',
    marginBottom: 4
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
    marginTop: 53,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botaoCadastro: {
    width: '90.4%',
    height: 51,
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderColor: '#951516',
    borderRadius: 5,
    marginTop: "6%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  textoBotao: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    color: '#fafafa'
  },
  textoBotaoCadastrar: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    color: '#951516'
  },
})