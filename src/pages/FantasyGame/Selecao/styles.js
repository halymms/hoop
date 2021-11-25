import { StyleSheet, Dimensions } from 'react-native'; 

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#FFF'
    },
    header: {
        backgroundColor: '#AF4153',
        width: "100%",
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerText: {
        color: '#FFF',
        fontFamily: 'Rubik_500Medium',
        fontSize: 20,
        marginLeft: 5
    },
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth,
        marginTop: 150,
        marginBottom: 200
    },
    textInputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15
    },
    input: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 350,
        height: 60,
        padding: 10,
        backgroundColor: '#F6F6F6',
        borderRadius: 8
    },
    searchIcon: {
        padding: 10,
    },
    pickersContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: 15,
        paddingRight: 15,
        alignItems: 'center',
        marginTop: 20
    },
    pickerViewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 150,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1.5,
        borderColor: '#951516'
    },
    filtersListContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        height: 100,
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#F6F6F6',
        width: 100,
        borderRadius: 30,
        marginRight: 10,
        marginBottom: 10
    },
    filterName: {
        color: '#951516'
    },
    filterCloseButton: {
        color: '#951516',
        fontFamily: 'Roboto_700Bold',
        textAlign: 'center'
    },
    availablePlayers: {
        width: windowWidth,
    },
    availablePlayersHeader: {
        width: windowWidth,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 25,
        paddingRight:25,
        marginTop: 30
    },
    availablePlayersHeaderTitle: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18
    },
    availablePlayersHeaderAmount: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color: '#6B6A6A'
    },
    availablePlayersBody: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    playersList: {
        width: '100%',
        marginTop: 20,
        height: '90%',
    }
})