import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Routes from './src/routes';

const fetchFonts = () => {
    return Font.loadAsync({
        'poppins-light': require('./src/assets/fonts/Poppins-Light.ttf'),
        'poppins-regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
        'poppins-medium': require('./src/assets/fonts/Poppins-Medium.ttf'),
        'poppins-bold': require('./src/assets/fonts/Poppins-Bold.ttf')
    });
}

export default function App() {
    
    const [ dataLoaded, setDataLoaded ] = useState(false);

    if (!dataLoaded) {
        return (
            <AppLoading
                startAsync={ fetchFonts }
                onFinish={ () => setDataLoaded(true) }
            />
        );
    }

    return (
        <Routes />
    );
    
}