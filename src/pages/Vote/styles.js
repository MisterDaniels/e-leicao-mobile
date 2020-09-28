import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#FAFAFA'
    },

    logo: {
        width: 150,
        height: 150
    },

    text: {
        fontFamily: 'poppins-bold',
    },  

    title: {
        fontSize: 22,
        color: '#079449',
        marginLeft: 20
    },

    subtitle: {
        fontSize: 12,
        color: '#767676'
    },

    form: {
        alignItems: 'center',
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginTop: 28,
        width: '80%'
    },

    avatar: {
        marginBottom: 10
    },

    inputs: {
        width: '100%',
        marginTop: 10
    },

    input: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 2,
        paddingHorizontal: 10,
        paddingVertical: 5
    },

    button: {
        marginTop: 10,
        padding: 10,
        backgroundColor:'#079449',
        borderRadius: 2
    },

    buttonText: {
        color: '#fff',
        alignSelf: 'center'
    },

    line: {
        borderWidth: 0.5,
        borderColor: '#d9d9d9',
        margin: 10
    }

});