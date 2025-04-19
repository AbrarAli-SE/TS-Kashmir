import React, { useState } from 'react';
import COLORS from '../../constants/theme'; // Import your colors from constants
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../../styles/contactAdminStyles';
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore methods

// Regular expression for email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
import { db } from '../../firebaseConfig'; // Import Firestore instance

export default function ContactAdmin() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [queryType, setQueryType] = useState(''); // Dropdown selection
    const [description, setDescription] = useState(''); // Optional query description
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false); // Properly define loading state

    // Function to validate if the form is ready for submission
    const isFormValid = () => {
        return (
            name.trim() !== '' &&
            email.trim() !== '' &&
            emailRegex.test(email) && // Validate email format
            phone.trim().length === 11 && // Ensure phone number is exactly 11 digits
            queryType.trim() !== ''
        );
    };

    const handleSubmit = async () => {
        if (!isFormValid()) {
            setErrorMessage('All fields except description are mandatory, and phone number must be 11 digits.');
            return;
        }
        setErrorMessage('');
        setLoading(true); // Show spinner

        try {
            // Save data to Firestore with an auto-generated document ID
            const now = new Date();
            const formattedDate = now.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            }) + ` - ${now.toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            })}`;

            await addDoc(collection(db, 'queries'), {
                name,
                email,
                phone,
                queryType,
                description: description || 'No description provided',
                createdAt: formattedDate, // Save formatted timestamp
            });

            alert('Your query has been submitted successfully!');
            setName('');
            setEmail('');
            setPhone('');
            setQueryType('');
            setDescription('');
        } catch (error) {
            console.error('Error saving query:', error);
            alert('Failed to submit your query. Please try again later.');
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

            {/* Form Container */}
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                    {/* Title */}
                    <Text style={styles.title}>Contact Admin</Text>

                    {/* Spinner Overlay */}
                    {loading && (
                        <View style={styles.spinnerOverlay}>
                            <ActivityIndicator size={50} color={COLORS.primary} />
                        </View>
                    )}
                    {/* Name Input */}
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your name"
                        placeholderTextColor="#aaa"
                        value={name}
                        onChangeText={setName}
                    />

                    {/* Email Input */}
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your email"
                        placeholderTextColor="#aaa"
                        value={email}
                        onChangeText={(text) => {
                            setEmail(text);
                            setErrorMessage(emailRegex.test(text) ? '' : 'Invalid email format'); // Set error message if email is invalid
                        }}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    {/* Phone Number Input */}
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your phone number"
                        placeholderTextColor="#aaa"
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType="phone-pad"
                    />

                    {/* Dropdown for Query Type */}
                    <View style={styles.dropdownContainer}>
                        <Picker
                            selectedValue={queryType}
                            onValueChange={(itemValue: string) => setQueryType(itemValue)}
                            style={styles.dropdown}
                        >
                            <Picker.Item label="Select Query Type" value="" />
                            <Picker.Item label="Password" value="password" />
                            <Picker.Item label="Email" value="email" />
                            <Picker.Item label="General Query" value="general" />
                        </Picker>
                    </View>

                    {/* Optional Query Description */}
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Enter query description (optional)"
                        placeholderTextColor="#aaa"
                        value={description}
                        onChangeText={setDescription}
                        multiline
                        numberOfLines={4}
                    />

                    {/* Submit Button */}
                    <TouchableOpacity
                        style={[styles.button, !isFormValid() && styles.buttonDisabled]}
                        onPress={handleSubmit}
                        disabled={!isFormValid()}
                    >
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}