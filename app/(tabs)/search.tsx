import React, { useState } from 'react';
import COLORS from '../../constants/theme'; // Import your colors from constants
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';

export default function Search() {
  const [loading, setLoading] = useState(false); // State to control spinner visibility

  const handleTestSpin = () => {
    setLoading(true); // Show spinner
    setTimeout(() => {
      setLoading(false); // Hide spinner after 5 seconds
    }, 5000); // 5 seconds delay
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>

      {/* Spinner */}
      {/* Spinner Overlay */}
      {loading && (
        <View style={styles.spinnerOverlay}>
          <ActivityIndicator size={50} color={COLORS.primary} />
        </View>
      )}
      {/* Test Spin Button */}
      <TouchableOpacity style={styles.button} onPress={handleTestSpin}>
        <Text style={styles.buttonText}>Test Spin</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  spinnerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000, // Ensure it overlays everything
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    width: '60%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});