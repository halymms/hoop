import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    width: '100%',
  },
  container: {
    position: 'absolute',
    width: '90%',
    height: '70%',
    alignSelf: 'center',
    marginTop: '15%',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  closeModal: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    width: '20%',
    padding: 20,
  },
  closeModalIcon: {
    alignSelf: 'flex-end',
    fontSize:  18
  },
  modalScrollView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalHeader: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingLeft: 40,
    paddingRight: 40,
  },
  modalHeaderText: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
    color: '#951516'
  },
  modalHeaderTextBold: {
    fontFamily: 'Roboto_700Bold'
  },
  nop: {
    backgroundColor: '#D51737',
    paddingLeft: 20,
    paddingRight: 20,
    padding: 10,
    borderRadius: 8,
  },
  nopText: {
    color: '#FFF',
    fontFamily: 'Roboto_700Bold'
  },
  statusContainer: {
    width: '85%',
    marginTop: 30,
    justifyContent: 'center',
    backgroundColor: '#F6F6F6',
    padding: 20,
    borderRadius: 8
  },
  valueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10
  },
  valueLabel: {
    fontFamily: 'Roboto_400Regular',
    color: '#951516',
    fontSize: 18
  },
  valueText: {
    fontFamily: 'Roboto_700Bold',
    color: '#951516',
    fontSize: 18
  },
  valueTextBold: {
    fontSize: 13
  },
  averageLabel: {
    fontFamily: 'Roboto_400Regular',
    color: '#951516',
    fontSize: 18
  },
  valueTextBold: {
    fontSize: 13
  },
  line: {
    height: 2,
    backgroundColor: '#DFDFDF'
  },
  averageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10
  },
  popularityTextBold: {
    fontFamily: 'Roboto_700Bold',
    color: '#951516',
    fontSize: 16
  },
  journeyContainer: {
    width: '85%',
    marginTop: 30,
    backgroundColor: '#F6F6F6',
    padding: 20,
    borderRadius: 8,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  journeyTitle: {
    fontFamily: 'Roboto_700Bold',
    color: '#951516',
  },
  journeyTitleLight: {
    fontFamily: 'Roboto_400Regular',
    color: '#951516',
  },
  journeyDate: {
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  teamContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: '30%',
    marginLeft: 20,
    marginRight: 20,
  },
  teamImage: {
    width: 40,
    height: 40 
  },
  teamText: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 13,
    color: '#951516',
    textAlign: 'center',
  },
  versusText: {
    fontSize: 20,
    color: '#6B6A6A',
    fontFamily: 'Roboto_700Bold'
  },
  statisticContainer: {
    width: '85%',
    marginTop: 30,
    backgroundColor: '#F6F6F6',
    padding: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  statisticTitle: {
    fontFamily: 'Roboto_400Regular',
    color: '#951516'
  },
  finalButtonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: 25,
    paddingRight: 25,
    marginBottom: 30,
    marginTop: 20
  },
  deleteButton: {
    width: 130,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.6,
    borderColor: '#2B2A29',
    borderRadius: 5,
  },
  deleteButtonText: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 15,
    color: '#000'
  },
  switchButton: {
    width: 130,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.6,
    borderColor: '#2B2A29',
    borderRadius: 5,
    backgroundColor: '#008B2F'
  },
  switchButtonText: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 15,
    color: '#fff'
  },
})