import React, { useEffect, useState, useRef } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Alert, ActivityIndicator, Animated } from 'react-native';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import listStyles from '../../styles/listStyles'; // Import styles
import { AntDesign, MaterialIcons } from '@expo/vector-icons'; // For icons
import FolderCard from '../../components/FolderCard';
import FileCard from '../../components/FileCard';


export default function List() {
  const [folders, setFolders] = useState<any[]>([]); // Store folders and files
  const [loading, setLoading] = useState(true);
  const [fabOpen, setFabOpen] = useState(false); // State to toggle FAB menu
  const [currentFolder, setCurrentFolder] = useState<string | null>(null); // Track the current folder
  const fabPosition = useRef(new Animated.Value(0)).current; // Animated value for FAB position
  const rotation = useRef(new Animated.Value(0)).current; // Animated value for rotation

  const isRootFolder = !currentFolder; // Check if the current folder is the root (super parent)

  // Fetch folders and files from Firestore
  const fetchFoldersAndFiles = async () => {
    setLoading(true);
    try {
      const folderQuery = query(collection(db, 'inventory')); // Query all folders
      const folderSnapshot = await getDocs(folderQuery);

      const folderData = await Promise.all(
        folderSnapshot.docs.map(async (doc) => {
          const folder = { id: doc.id, ...doc.data() };

          // Fetch files in the folder's items subcollection
          const itemsQuery = query(collection(db, `inventory/${doc.id}/items`));
          const itemsSnapshot = await getDocs(itemsQuery);

          const files = itemsSnapshot.docs.map((fileDoc) => ({
            id: fileDoc.id,
            ...fileDoc.data(),
          }));

          return { ...folder, files }; // Combine folder and its files
        })
      );

      setFolders(folderData); // Set the fetched data
    } catch (error) {
      console.error('Error fetching folders and files:', error);
      Alert.alert('Error', 'Failed to fetch data from Firestore.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoldersAndFiles(); // Fetch data on component mount
  }, []);

  const toggleFab = () => {
    if (!fabOpen) {
      // Open FAB: Move up first, then show the menu
      Animated.timing(fabPosition, {
        toValue: 1, // Move up
        duration: 300, // Animation duration in milliseconds
        useNativeDriver: false,
      }).start(() => {
        setFabOpen(true); // Show the menu after the FAB moves up
      });

      // Rotate the FAB icon
      Animated.timing(rotation, {
        toValue: 1, // Rotate to 45 degrees
        duration: 100,
        useNativeDriver: true,
      }).start();
    } else {
      // Close FAB: Close the menu first, then move down
      setFabOpen(false); // Hide the menu immediately

      // Rotate the FAB icon back
      Animated.timing(rotation, {
        toValue: 0, // Rotate back to 0 degrees
        duration: 100,
        useNativeDriver: true,
      }).start(() => {
        // Move FAB down after menu is closed
        Animated.timing(fabPosition, {
          toValue: 0, // Move down
          duration: 300, // Animation duration in milliseconds
          useNativeDriver: false,
        }).start();
      });
    }
  };
  const handleFolderPress = (folderId: string) => {
    setCurrentFolder(folderId); // Navigate into the folder
  };

  const handleBackPress = () => {
    setCurrentFolder(null); // Go back to the root folder
  };

  const renderFolderOrFile = ({ item }: { item: any }) => {
    if (item.type === 'folder') {
      return (
        <FolderCard
          folder={{
            id: item.id,
            name: item.name,
            totalItems: item.subFoldersCount || 0,
            totalValue: item.totalValue || '0',
          }}
          onPress={() => handleFolderPress(item.id)} // Handle folder click
        />
      );
    } else if (item.type === 'file') {
      return (
        <FileCard
          file={{
            id: item.id,
            name: item.name,
            price: item.price || 0,
            quantity: item.quantity || 0,
            pack: item.pack || 0,
            image: item.image || null, // Use null if no image is provided
          }}
        />
      );
    }
    return null;
  };


  if (loading) {
    return (
      <View style={listStyles.spinnerOverlay}>
        <ActivityIndicator size={50} color="#f00" />
      </View>
    );
  }
  const getCurrentFolderName = () => {
    if (!currentFolder) return 'Inventory'; // Root folder name
    const folder = folders.find((folder) => folder.id === currentFolder);
    return folder ? folder.name : 'Folder'; // Show folder name or fallback to "Folder"
  };

  const currentData = isRootFolder
    ? folders // Show all folders in the root
    : folders.find((folder) => folder.id === currentFolder)?.files || []; // Show files and subfolders in the selected folder
  return (
    <View style={listStyles.container}>
      {/* Header */}
      <View style={listStyles.header}>
        {!isRootFolder && (
          <TouchableOpacity onPress={handleBackPress} style={listStyles.backButton}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        )}
        <Text style={listStyles.headerTitle}>
          {getCurrentFolderName()}
        </Text>
      </View>

      {/* Content */}
      {currentData.length > 0 ? (
        <FlatList
          data={currentData}
          renderItem={renderFolderOrFile}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View style={listStyles.emptyContainer}>
          <Image
            source={require('../../assets/images/icons/no-item-logo.png')}
            style={listStyles.emptyImage}
          />
          <Text style={listStyles.emptyText}>It's Empty Here</Text>
        </View>
      )}

      {/* Floating Action Button */}
      <View style={listStyles.fabContainer}>
        {fabOpen && (
          <View style={listStyles.fabMenu}>
            <Text style={listStyles.fabAddMoreText}>Adding to: Items</Text>
            <TouchableOpacity
              style={listStyles.fabMenuItem}
              onPress={() => Alert.alert('Add Item')}
            >
              <MaterialIcons name="add-box" size={24} color="white" />
              <Text style={listStyles.fabMenuText}>Add Item Manually</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={listStyles.fabMenuItem}
              onPress={() => Alert.alert('Scan Barcode')}
            >
              <MaterialIcons name="qr-code-scanner" size={24} color="white" />
              <Text style={listStyles.fabMenuText}>Scan Bar-Code</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={listStyles.fabMenuItem}
              onPress={() => Alert.alert('Add Folder')}
            >
              <MaterialIcons name="folder" size={24} color="white" />
              <Text style={listStyles.fabMenuText}>Add Folder</Text>
            </TouchableOpacity>
          </View>
        )}
        <Animated.View
          style={[
            listStyles.fab,
            {
              bottom: fabPosition.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 195],
              }),
            },
          ]}
        >
          <TouchableOpacity onPress={toggleFab}>
            <Animated.View
              style={{
                transform: [
                  {
                    rotate: rotation.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '45deg'],
                    }),
                  },
                ],
              }}
            >
              <AntDesign name="plus" size={27} color="white" />
            </Animated.View>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
}