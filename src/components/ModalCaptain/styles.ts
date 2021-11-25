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
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  headerTitle: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
    color: '#951516',
  },
  closeModalButton: {
  },
  closeModalIcon: {
    fontSize: 18 
  },
  modalBody: {
    width: '100%'
  },
  playerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  playerHeader: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingLeft: 20
  },
  imgPlayer: {
    height: 59,
    width: 59,
    backgroundColor: "gray",
    borderRadius: 50
  },
  playerName: {
    marginLeft: 20,
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
    color: '#951516'
  },
  horizontalRule: {
    height: 1,
    backgroundColor: '#DFDFDF',
    marginTop: 10,
    marginBottom: 10,
    width: '90%',
  },
  choosePlayerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008B2F',
    width: 250,
    height: 40,
    padding: 10,
    borderRadius: 8,
  },
  choosePlayerButtonText: {
    fontFamily: 'Oxygen_700Bold',
    color: '#FFF',
    fontSize: 18
  }
});