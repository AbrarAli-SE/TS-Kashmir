import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ActivityIndicator } from 'react-native';
import styles from '../../styles/authStyles';
import { useRouter } from 'expo-router';
import COLORS from '../../constants/theme';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

export default function EmailAndPasswordInput() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
    const [isEmailValid, setIsEmailValid] = useState(false); // Track email validity
    const [loading, setLoading] = useState(true); // Track loading state
    const router = useRouter();

    // Check if the user is already logged in
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // If the user is logged in, replace the login screen with the dashboard
                router.replace('/(tabs)/dashboard');
            } else {
                // If no user is logged in, stop the loading spinner
                setLoading(false);
            }
        });

        // Cleanup the listener on component unmount
        return unsubscribe;
    }, []);

    // Function to validate email format
    const validateEmail = (input: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
        setIsEmailValid(emailRegex.test(input));
        setEmail(input);
        setErrorMessage(''); // Clear error message when user types
    };

    // Function to handle "Continue" button press
    const handleContinue = async () => {
        setLoading(true); // Show spinner
        try {
            // Attempt to sign in with the provided email and password
            await signInWithEmailAndPassword(auth, email, password);
            // If successful, navigate to the dashboard
            router.push('/(tabs)/dashboard');
        } catch (error: any) {
            setErrorMessage('Invalid credentials. Please contact admin.');
        } finally {
            setLoading(false); // Hide spinner
        }
    };

    return (
        <View style={{ flex: 1 }}>
            {/* Logo Container */}
            <View style={styles.logoContainer}>
                <Image source={require('../../assets/images/ts-logo.png')} style={styles.logo} />
            </View>

            <SafeAreaView style={styles.container}>
                {/* Title */}
                <Text style={styles.title}>Login</Text>

                {/* Subtitle */}
                <Text style={styles.subtitle}>Enter your registered email to proceed</Text>

                {/* Email Input */}
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor="#aaa"
                    value={email}
                    onChangeText={validateEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                {/* Password Input (Shown only if email is valid) */}
                {isEmailValid && (
                    <View style={styles.passwordInputContainer}>
                        <TextInput
                            style={styles.passwordInput}
                            placeholder="Enter your password"
                            placeholderTextColor="#aaa"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword} // Toggle password visibility
                        />
                        <TouchableOpacity
                            onPress={() => setShowPassword(!showPassword)}
                            style={styles.eyeIcon} // Position the eye icon properly
                        >
                            <Image
                                source={
                                    showPassword
                                        ? require('../../assets/images/icons/show-eye.png') // Path to your "eye open" icon
                                        : require('../../assets/images/icons/hide-eye.png') // Path to your "eye closed" icon
                                }
                                style={{ width: 20, height: 20 }} // Adjust size as needed
                            />
                        </TouchableOpacity>
                    </View>
                )}
                {/* Spinner Overlay */}
                {loading && (
                    <View style={styles.spinnerOverlay}>
                        <ActivityIndicator size={50} color={COLORS.primary} />
                    </View>
                )}

                {/* Error Message */}
                {errorMessage ? (
                    <TouchableOpacity onPress={() => router.push('/(auth)/ContactAdmin')}>
                        <Text style={styles.errorText}>{errorMessage}</Text>
                    </TouchableOpacity>
                ) : null}

                {/* Continue Button */}
                <TouchableOpacity
                    style={[
                        styles.button,
                        !(isEmailValid && password.length >= 8) && styles.buttonDisabled, // Disable button if criteria not met
                    ]}
                    onPress={handleContinue}
                    disabled={!(isEmailValid && password.length >= 8)} // Disable button functionality
                >
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
}