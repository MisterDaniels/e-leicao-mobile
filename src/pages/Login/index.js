import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { Formik } from 'formik';
import * as Notifications from 'expo-notifications';

import logoImg from '../../assets/images/logo.png';
import AvatarSvg from '../../assets/images/avatar.svg';

import styles from './styles';

import api from '../../services/api';

export default function Login() {

    const navigation = useNavigation();

    Notifications.scheduleNotificationAsync({
        content: {
            title: 'Hora de votar!',
            body: 'Decida quem deve governar o Brasil.',
        },
        trigger: {
            seconds: 60 * 20,
            repeats: true
        },
    });

    async function login(values) {
        if (!values) {
            return;
        }

        api.get(`/api/auth?et=${values.et}&password=${values.password}`).then(res => {
                if (res.status != 200) {
                    return;
                } 

                if (res.data.has_voted) {
                    return navigation.navigate('Voted');    
                }

                navigation.navigate('Vote', { token: res.data.token });
            }).catch(err => {
                console.log(err);
            });
    }

    return (
        <View style={ styles.container } >

            <View>
                <TouchableOpacity>
                    <Image style={ styles.logo } source={ logoImg } />
                </TouchableOpacity>
                <Text style={[ styles.title, styles.text ]} >e-leição</Text>
            </View>

            <View style={ styles.form } >
                <AvatarSvg style={ styles.avatar } width={80} height={80} />
                <Text style={[ styles.subtitle, styles.text ]} >BEM-VINDO(A)...</Text>
                <Formik
                    initialValues={{ et: '', password: '' }}
                    onSubmit={ values => login(values) }>
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View style={ styles.inputs } >
                            <Text style={ styles.text } >E-Título</Text>
                            <TextInput 
                                style={ styles.input }
                                onChangeText={ handleChange('et') }
                                onBlur={ handleBlur('et') }
                                value={ values.et }
                                autoCompleteType='username'
                                autoFocus={ true } />
                            <View style={ styles.line } />
                            <Text style={ styles.text }>Senha</Text>
                            <TextInput 
                                style={ styles.input }
                                onChangeText={ handleChange('password') }
                                onBlur={ handleBlur('password') }
                                value={ values.password }
                                autoCompleteType='password'
                                secureTextEntry={ true } />
                            <View style={ styles.line } />
                            <TouchableOpacity style={ styles.button } onPress={ handleSubmit }>
                                <Text style={[ styles.text, styles.buttonText ]} >ENTRAR</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </View>

        </View>
    );

}