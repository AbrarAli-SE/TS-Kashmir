import { View, Image, StyleSheet } from 'react-native';
import React from 'react';

const Splash = () => {
    return (
        <View style={styles.container}>
            {/* Logo */}
            <Image source={require('../../assets/images/splash-icon.png')} style={styles.logo} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff', 
    },
    logo: {
        width: 200, 
        height: 200, 
        resizeMode: 'contain', 
    },
});

export default Splash;