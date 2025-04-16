import React, { useState, useEffect } from 'react';
import Splash from './splash';
import { Redirect, router } from 'expo-router';
// SplashScreen.preventAutoHideAsync(); // Prevent the splash screen from auto-hiding

export default function RootLayout() {
    const [isSplashVisible, setIsSplashVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsSplashVisible(false);
            router.replace('/(tabs)');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    
    if (isSplashVisible) {
        return <Splash />;
    }

    return null;
}