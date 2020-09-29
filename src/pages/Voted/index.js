import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Vote() {
    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
    }

    return (
        <View style={ styles.container } >
            
            <View style={ styles.head }>
                <Text style={[ styles.text, styles.title ]} >Desculpe,</Text>
                <Text style={[ styles.text ]}>mas seu voto já foi confirmado!</Text>
            </View>

            <TouchableOpacity
                style={ styles.backButton }
                onPress={ navigateBack }>
                <Feather style={ styles.svg } name="arrow-left" size={ 16 } color="#767676" />
                <Text style={[ styles.text ]}>Voltar</Text>
            </TouchableOpacity>

        </View>
    );

}