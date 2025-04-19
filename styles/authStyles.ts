import { StyleSheet } from 'react-native';
import COLORS from '../constants/theme';
import TYPOGRAPHY from '@/constants/typography';

const styles = StyleSheet.create({
  // Main container for the screen
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align items from the top
    alignItems: 'stretch',
    marginTop: 190, // No margin at the top
    paddingHorizontal: 20, // Apply consistent padding to the container
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
    zIndex: 1,
    marginBottom: 20, // Space below the logo container
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },

  title: {
    ...TYPOGRAPHY.h1, // Use typography for title
    color: COLORS.primary,
    marginBottom: 24, // Space below the title
  },

  subtitle: {
    ...TYPOGRAPHY.body14, // Use typography for subtitle
    textAlign: 'left',
    color: COLORS.textTwo,
    marginBottom: 16, // Space below the subtitle
  },

  input: {
    ...TYPOGRAPHY.body16,
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.textTwo,
    borderRadius: 8,
    paddingHorizontal: 10, // Padding inside the input
    marginBottom: 20, // Space below the input
    color: COLORS.black,
  },

  passwordInputContainer: {
    position: 'relative', // Position relative for the eye icon
    width: '100%',
    marginBottom: 20, // Space below the password input
  },

  passwordInput: {
    ...TYPOGRAPHY.body16,
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.textTwo,
    borderRadius: 8,
    paddingHorizontal: 10, // Padding inside the input
    color: COLORS.black,
  },

  eyeIcon: {
    position: 'absolute',
    right: 10, // Position the eye icon on the right side
    top: 15, // Center the icon vertically
  },

  button: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 24, // Space above the button
  },
  buttonDisabled: {
    backgroundColor: '#ff9999', // Lighter red for disabled state
  },
  buttonText: {
    ...TYPOGRAPHY.h2,
    color: COLORS.white,
  },

  errorText: {
    color: '#ff4d4d',
    fontSize: 14,
    textAlign: 'left',
  },
  linkText: {
    color: '#007bff',
    fontSize: 14,
    marginTop: 10,
  },
});

export default styles;