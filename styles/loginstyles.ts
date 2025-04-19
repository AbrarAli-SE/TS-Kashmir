import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    logoContainer: {
        backgroundColor: '#ff4d4d', // Red background for the logo
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ff4d4d', // Red color for the title
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        color: '#aaa',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
        fontSize: 16,
        color: '#000',
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#ff4d4d', // Red background for the button
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    userDetailsContainer: {
        marginTop: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
        width: '100%',
    },
    userDetailsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    userDetailsText: {
        fontSize: 16,
        color: '#555',
        marginBottom: 5,
    },
});

export default styles;