import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

interface TabIconProps {
    icon: any; // Path to the icon
    label: string; // Label text
    color: string; // Active/Inactive color
}

const TabIcon: React.FC<TabIconProps> = ({ icon, label, color }) => {
    return (
        <View style={styles.container}>
            <Image
                source={icon}
                style={[styles.icon, { tintColor: color }]} // Apply dynamic color
            />
            <Text style={[styles.label, { color }]}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    icon: {
        width: 16,
        height: 16,
    },
    label: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 12,
        width: 50,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 16,
        marginTop: 5,
    },
});

export default TabIcon;