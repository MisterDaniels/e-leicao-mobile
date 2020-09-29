import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    container: {
        flex: 1,
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
        marginLeft: '-30%',
        marginBottom: '20%'
    },
    
    candidate: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        width: '80%'
    },
    
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 8
    },

    name: {
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 20
    },

    party: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
        marginTop: 20
    },

    number: {
        fontWeight: 'bold',
        fontSize: 24
    },

    acronym: {
        fontSize: 16
    },

    voteButtom: {
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#079449',
        paddingVertical: 5,
        borderRadius: 8
    },

    buttonText: {
        color: '#ffffff',
        fontSize: 28
    },

    backButton: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 30
    },

    svg: {
        marginRight: 10
    }

});