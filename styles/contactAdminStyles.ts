import { StyleSheet } from 'react-native';
import COLORS from '../constants/theme';
import TYPOGRAPHY from '../constants/typography';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 190, // Push content below the fixed logo container
        paddingHorizontal: 20,
        justifyContent: 'flex-start',
    },

    logoContainer: {
        width: '100%',
        height: 170,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: COLORS.primary,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },

    logo: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },

    title: {
        ...TYPOGRAPHY.h1,
        color: COLORS.primary,
        marginBottom: 24,
    },

    input: {
        ...TYPOGRAPHY.body16,
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: COLORS.textTwo,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
        color: COLORS.black,
    },

    textArea: {
        height: 100, // Increase height for multiline input
        textAlignVertical: 'top', // Align text to the top
    },

    dropdownContainer: {
        borderWidth: 1,
        borderColor: COLORS.textTwo,
        borderRadius: 8,
        marginBottom: 20,
    },

    dropdown: {
        width: '100%',
        height: 50,
    },

    button: {
        width: '100%',
        height: 50,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 24,
    },

    buttonText: {
        ...TYPOGRAPHY.h2,
        color: COLORS.white,
    },

    errorText: {
        color: '#ff4d4d',
        fontSize: 14,
        marginBottom: 16,
        textAlign: 'left',
    },
});

export default styles;