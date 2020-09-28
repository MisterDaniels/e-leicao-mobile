import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import * as Notifications from 'expo-notifications';

import styles from './styles';

import api from '../../services/api';

export default function Vote() {
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();
    const route = useRoute();

    const candidate = route.params.candidate;
    const token = route.params.token;

    function navigateBack() {
        navigation.goBack();
    }

    async function vote() {
        if (loading) {
            
        }

        setLoading(true);
        const soundObject = new Audio.Sound();

        console.log(token);
        console.log(candidate._id);

        api.post(`/api/vote?secret_token=${token}&candidate_id=${candidate._id}`).then(res => {
            try {
                soundObject.loadAsync(require('../../assets/audios/urna.mp3'));
                soundObject.playAsync();
              
                soundObject.unloadAsync();

                console.log('votado');

                Notifications.dismissAllNotificationsAsync();
            } catch (err) {
                console.log(err);
            }

            setLoading(false);
        }).catch(err => {
            console.log(err);
            setLoading(false);
        });
    }

    return (
        <View style={ styles.container } >
            
            <Text style={[ styles.text, styles.title ]} >Tem certeza?</Text>
            
            <Image style={ styles. avatar } source={ candidate.avatar } />
            <Text style={ styles.text, styles.name }>{ candidate.name }</Text>
            <Text style={ styles.text, styles.number }>{ candidate.number }</Text>
            <Text style={ styles.text, styles.acronym }>{ candidate.acronym }</Text>

            <TouchableOpacity
                style={ styles.voteButtom }
                onPress={ () => vote() }>
                <Text style={ styles.text }>Votar</Text>
                <Feather name="arrow-right" size={ 16 } color="#079449" />
            </TouchableOpacity>

            <TouchableOpacity
                style={ styles.voteButtom }
                onPress={ navigateBack }>
                <Text style={ styles.text }>Voltar</Text>
                <Feather name="arrow-left" size={ 16 } color="#767676" />
            </TouchableOpacity>

        </View>
    );

}