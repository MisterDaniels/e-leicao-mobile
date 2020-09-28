import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import api from '../../services/api';
import { FlatList } from 'react-native-gesture-handler';

export default function Vote() {
    const [candidates, setCandidates] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const navigation = useNavigation();
    const route = useRoute();

    const token = route.params.token;

    async function loadCandidates() {
        if (loaded) {
            return;
        }

        api.get(`/api/candidate?secret_token=${token}`).then(res => {
            setCandidates([...candidates, ...res.data]);
            setLoaded(true);
        }).catch(err => {
            console.log(err);
        });
    }

    async function navigateToConfirmVote(candidate) {
        navigation.navigate('ConfirmVote', { token, candidate });
    }

    useEffect(() => {
        loadCandidates();
    }, []);

    return (
        <View style={ styles.container } >
            
            <Text style={[ styles.text, styles.title ]} >Escolha o seu candidato</Text>

            <FlatList
                data={ candidates }
                style={ styles.candidatesList }
                keyExtractor={ candidate => String(candidate.id) }
                showsVerticalScrollIndicator={ false }
                onEndReached={ loadCandidates }
                onEndReachedThreshold={ 0.2 }
                renderItem={({ item: candidate }) => (
                    <View style={ styles.candidate }>
                        <Image style={ styles. avatar } source={ candidate.avatar } />

                        <View>
                            <Text style={ styles.text, styles.name }>{ candidate.name }</Text>
                            <Text style={ styles.text, styles.number }>{ candidate.number }</Text>
                            <Text style={ styles.text, styles.acronym }>{ candidate.acronym }</Text>

                            <TouchableOpacity
                                style={ styles.voteButtom }
                                onPress={ () => navigateToConfirmVote(candidate) }>
                                <Text style={ styles.text }>Votar</Text>
                                <Feather name="arrow-right" size={ 16 } color="#079449" />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

        </View>
    );

}