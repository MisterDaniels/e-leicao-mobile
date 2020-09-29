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

    head: {
        marginLeft: '-30%',
        marginBottom: '20%'
    },

    title: {
        fontSize: 22,
        color: '#079449'
        
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