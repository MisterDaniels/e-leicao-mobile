import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#FAFAFA'
    },

    logo: {
        width: 150,
        height: 150
    },

    title: {
        fontFamily: 'poppins-bold',
        fontSize: 35,
        color: '#079449',
        marginTop: 10
    },

    form: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginTop: 28
    },

    avatar: {
        width: 80,
        height: 80
    }

});