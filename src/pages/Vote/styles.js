import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight + 50,
        backgroundColor: '#FAFAFA'
    },

    text: {
        fontFamily: 'poppins-bold',
    },  

    title: {
        fontSize: 22,
        color: '#079449',
        marginLeft: '-10%',
        marginBottom: '20%'
    },

    subtitle: {
        fontSize: 12,
        color: '#767676'
    },
    
    candidate: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'center',
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        width: '80%',
        marginBottom: 20
    },

    details: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 20
    },
    
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 8
    },

    name: {
        fontWeight: 'bold',
        fontSize: 14
    },

    party: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    number: {
        fontWeight: 'bold',
        fontSize: 24
    },

    acronym: {
        alignSelf: 'center',
        fontSize: 16
    },

    voteButtom: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#079449',
        paddingHorizontal: 10,
        borderRadius: 2
    },

    buttonText: {
        color: '#ffffff',
        marginRight: 5
    },

    svg: {
        alignSelf: 'center'
    }

});