import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../../styles/contactAdminStyles';

export default function ContactAdmin() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [queryType, setQueryType] = useState(''); // Dropdown selection
    const [description, setDescription] = useState(''); // Optional query description
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = () => {
        if (!name || !email || !phone || !queryType) {
            setErrorMessage('All fields except description are mandatory.');
            return;
        }
        setErrorMessage('');
        // Handle form submission logic here
        console.log({ name, email, phone, queryType, description });
        alert('Your query has been submitted successfully!');
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
                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}