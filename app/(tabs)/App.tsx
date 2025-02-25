// App.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const App = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="grid" size={24} color="black" />
                <Text style={styles.headerTitle}>Items</Text>
                <Ionicons name="search" size={24} color="black" />
                <Ionicons name="ellipsis-vertical" size={24} color="black" />
            </View>
            <View style={styles.body}>
                <Image
                    source={require('')}
                    style={styles.image}
                />
                <Text style={styles.mainText}>It's empty here</Text>
                <Text style={styles.subText}>Add your first item by tapping the "+"</Text>
            </View>
            <TouchableOpacity style={styles.addButton}>
                <Ionicons name="add" size={30} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    mainText: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subText: {
        fontSize: 16,
        color: '#555',
    },
    addButton: {
        position: 'absolute',
        right: 25,
        bottom: 25,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;
