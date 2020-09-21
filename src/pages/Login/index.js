import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';

import logoImg from '../../assets/images/logo.png';
import avatarImg from '../../assets/images/avatar.svg';

import styles from './styles';

export default function Login() {

    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View style={ styles.container } >

            <View>
                <TouchableOpacity>
                    <Image style={ styles.logo } source={ logoImg } />
                </TouchableOpacity>
                <Text style={ styles.title } >e-leição</Text>
            </View>

            <View style={ styles.form } >
                <Image style={ styles.avatar } source={ avatarImg } />
            </View>

        </View>
    );

}