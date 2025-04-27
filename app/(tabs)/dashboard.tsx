import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import FolderCard from '../../components/FolderCard';
import FileCard from '../../components/FileCard';

export default function Dashboard() {
  const dummyFolder = {
    id: '12345678',
    name: 'Cooking',
    totalItems: 15,
    totalValue: '1,50,000',
  };

  const dummyFile = {
    id: '78654321',
    name: 'Baking Powder',
    price: 150,
    quantity: 15,
    pack: 9,
    image: 'https://th.bing.cth/id/R.8f829da9a5e99e16cdf785b35721d484?rik=DXgAfHOQWSFbVw&pid=ImgRaw&r=0'
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Folder Card */}
      <FolderCard folder={dummyFolder} />

      {/* File Card */}
      <FileCard file={dummyFile} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
});