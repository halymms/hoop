import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#AF4153',
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerText: {
    color: '#FFF',
    fontFamily: 'Rubik_500Medium',
    fontSize: 20,
    marginLeft: 5
  },
  body: {
    justifyContent: "center",
    alignItems: 'center',
    width: windowWidth,
    paddingTop: 30,
    marginBottom: 200
  },
  titleContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  title: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 16,
    color: '#951516'
  },
  closeTime: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    width: 130
  },
  closeTimeIcon: {
    marginRight: 15
  },
  closeTimeText: {
    fontFamily: 'Roboto_400Regular',
  },
  closeTimeTextBold: {
    fontFamily: 'Roboto_700Bold',
  },
  journeySwitchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    marginTop: 20,
  },
  stepsContainer: {
    marginTop: 40,
    width: '100%',
    marginLeft: 0,
    marginRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  stepContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100
  },
  stepStatusContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  stepStatus: {
    width: 16,
    height: 16,
    borderRadius: 50
  },
  step: {
    width: '100%',
    padding: 15,
    backgroundColor: '#951516',
    borderRadius: 5
  },
  stepText: {
    textAlign: 'center',
    color: '#FFF'
  },
  cashContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    width: '100%',
    padding: 20,
    marginTop: 30,
    marginBottom: 30
  },
  separator: {
    backgroundColor: '#AEAEAE',
    width: 1.5,
    height: '90%'
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  dataTitle: {
    fontFamily: 'Roboto_400Regular',
    color: '#951516',
    marginTop: 2
  },
  data: {
    color: '#951516',
    fontFamily: 'Roboto_400Regular',
    fontSize: 22
  },
  pointsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    width: '100%',
    padding: 20,
    marginTop: 30,
    marginBottom: 30
  },
  dataContainerClosed: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  dataTitleClosed: {
    fontFamily: 'Roboto_400Regular',
    color: '#951516',
    marginTop: 2
  },
  dataClosed: {
    color: '#951516',
    fontFamily: 'Roboto_700Bold',
    fontSize: 22
  },
  dataBold: {
    fontFamily: 'Roboto_700Bold'
  },
  teamFormationTitle: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 16,
    alignSelf: 'flex-start',
    paddingRight: 30,
    paddingLeft: 30
  },
  formationTypesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 20
  },
  formationTypesLeft: {

  },
  formationTypeTitle: {
    color: '#6B6A6A',
    fontFamily: 'Roboto_500Medium',
    fontSize: 14,
    marginBottom: 20
  },
  captainButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 18,
    paddingBottom: 18,
    width: 110,
    height: 52,
    backgroundColor: '#AEAEAE',
    borderRadius: 8
  },
  captainButtonText: {
    color: '#fff',
    fontFamily: 'Roboto_500Medium',
  },
  reserveContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  reserveTitle: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 15,
    color: '#D51737'
  },
  reserveButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 40,
  },
  finalButtonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: windowWidth,
    marginBottom: 30
  },
  cancelButton: {
    width: 160,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.6,
    borderColor: '#2B2A29',
    borderRadius: 5,
  },
  cancelButtonText: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 15,
    color: '#000'
  },
  saveButton: {
    width: 160,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.6,
    borderColor: '#2B2A29',
    borderRadius: 5,
    backgroundColor: '#008B2F'
  },
  saveButtonText: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 15,
    color: '#fff'
  },
  pickerViewContainer: {
    height: 50,
    width: 125,
    color: 'white',
    backgroundColor: '#AEAEAE',
    borderRadius: 8,
  },
})