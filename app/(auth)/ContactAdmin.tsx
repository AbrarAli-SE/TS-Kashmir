import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../../styles/contactAdminStyles';
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore methods
import { db } from '../../firebaseConfig'; // Import Firestore instance


export default function ContactAdmin() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [queryType, setQueryType] = useState(''); // Dropdown selection
    const [description, setDescription] = useState(''); // Optional query description
    const [errorMessage, setErrorMessage] = useState('');

    // Function to validate if the form is ready for submission
    const isFormValid = () => {
        return (
            name.trim() !== '' &&
            email.trim() !== '' &&
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

                    {/* Error Message */}
                    {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

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
                        onChangeText={setEmail}
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
                        style={[
                            styles.button,
                            !isFormValid() && styles.buttonDisabled, // Apply disabled style if form is invalid
                        ]}
                        onPress={handleSubmit}
                        disabled={!isFormValid()} // Disable button if form is invalid
                    >
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}