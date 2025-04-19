import React, { useState, useEffect } from 'react';
import Splash from './splash';
import { useRouter } from 'expo-router'; // Correctly import useRouter

export default function RootLayout() {
    const [isSplashVisible, setIsSplashVisible] = useState(true);
    const router = useRouter(); // Use the useRouter hook

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsSplashVisible(false);
            router.replace('/(auth)'); // Navigate to the login screen after 3 seconds
        }, 3000);

        return () => clearTimeout(timer);
    }, [router]);

    if (isSplashVisible) {
        return <Splash />;
    }

    return null; // Return null after the splash screen
}