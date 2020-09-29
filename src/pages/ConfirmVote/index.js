import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import * as Notifications from 'expo-notifications';

import styles from './styles';

import api from '../../services/api';

export default function Vote() {
    const navigation = useNavigation();
    const route = useRoute();

    const candidate = route.params.candidate;
    const token = route.params.token;

    function navigateBack() {
        navigation.goBack();
    }

    async function vote() {
        const soundObject = new Audio.Sound();

        api.post(`/api/vote?secret_token=${token}&candidate_id=${candidate._id}`).then(res => {
            try {
                soundObject.loadAsync(require('../../assets/audios/urna.mp3'));
                soundObject.playAsync();
              
                soundObject.unloadAsync();

                Notifications.dismissAllNotificationsAsync();

                navigation.navigate('Login');
            } catch (err) {
                console.log(err);
            }

        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <View style={ styles.container } >
            
            <Text style={[ styles.text, styles.title ]} >Tem certeza?</Text>
            
            <View style={ styles.candidate }>
                <Image style={ styles.avatar } source={{ uri: `${candidate.avatar}` }} />
                <Text style={ styles.text, styles.name }>{ candidate.name }</Text>
                <View style={ styles.party }>
                    <Text style={ styles.text, styles.number }>{ candidate.number }</Text>
                    <Text style={ styles.text, styles.acronym }>{ candidate.acronym }</Text>
                </View>

                <TouchableOpacity
                    style={ styles.voteButtom }
                    onPress={ () => vote() }>
                    <Text style={[ styles.text, styles.buttonText ]}>Votar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={ styles.backButton }
                    onPress={ navigateBack }>
                    <Feather style={ styles.svg } name="arrow-left" size={ 16 } color="#767676" />
                    <Text style={[ styles.text ]}>Voltar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );

}