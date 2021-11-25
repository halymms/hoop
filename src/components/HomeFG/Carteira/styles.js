import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  containerLabel: {
    width: '90.5%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 33,
    marginBottom: 33,
  },
  textLabel: {
    fontSize: 16,
    fontFamily: 'Montserrat_700Bold',
    color: '#2B2A29'
  },
  containerCarteira: {
    backgroundColor: '#F6F6F6',
    width: '90.5%',
    height: 216,
    borderRadius: 10,
    paddingTop: 21,
    paddingLeft: 23,
    paddingRight: 23
  },
  lineOne: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingBottom: 44
  },
  nomeDoTime: {
    fontSize: 14,
    fontFamily: 'Roboto_400Regular',
    color: '#951516'
  },
  buttonVerPerfil: {

  },
  verPerfil: {
    fontSize: 14,
    fontFamily: 'Roboto_700Bold',
    color: '#951516'
  },
  lineTwo: {
    paddingTop: 16
  },
  patrimonioRow: {
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  patrimonioText: {
    fontSize: 15,
    fontFamily: 'Roboto_400Regular',
    color: '#535461'
  },
  patrimonioValue: {
    fontSize: 18,
    fontFamily: 'Roboto_400Regular',
    color: '#951516'
  },
  buttonGoEscalacao: {
    width: '100%',
    height: 33,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#008B2F',
    borderRadius: 5,
    marginTop: 24
  },
  textButtonEscalacao: {
    fontSize: 16,
    fontFamily: 'Roboto_500Medium',
    color: '#fafafa'
  }
})