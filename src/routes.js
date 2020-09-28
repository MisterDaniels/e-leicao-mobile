import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/Login';
import Vote from './pages/Vote';
import ConfirmVote from './pages/ConfirmVote';

export default function Routes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Login" component={ Login } />
                <AppStack.Screen name="Vote" component={ Vote } />
                <AppStack.Screen name="ConfirmVote" component={ ConfirmVote } />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}