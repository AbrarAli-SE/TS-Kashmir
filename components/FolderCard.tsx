import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Modal,
    Alert,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import COLORS from '../constants/theme';
import TYPOGRAPHY from '@/constants/typography';

export default function FolderCard({ folder, onPress }: { folder: any; onPress: () => void }) {
    const [modalVisible, setModalVisible] = useState(false);

    const handleAction = (action: string) => {
        setModalVisible(false);
        Alert.alert(`Action: ${action}`, `You selected ${action} for folder ${folder.name}`);
    };

    return (
        <>
            {/* Folder Card */}
            <TouchableOpacity style={styles.card} onPress={onPress}>
                <MaterialIcons name="folder" size={48} color={COLORS.textTwo} />
                <View style={styles.textContainer}>
                    <Text style={styles.id}>ID: {folder.id}</Text>
                    <Text style={styles.title}>{folder.name}</Text>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsText}>Total Items: </Text>
                        <Text style={styles.detailsValue}>{folder.totalItems}</Text>
                        <Text style={styles.detailsText}>  Total Value: </Text>
                        <Text style={styles.detailsValue}>{folder.totalValue}</Text>
                    </View>
                </View>

                {/* Three-Dot Menu */}
                <TouchableOpacity
                    style={styles.menuButton}
                    onPress={() => setModalVisible(true)}
                >
                    <MaterialIcons name="more-vert" size={24} color={COLORS.textOne} />
                </TouchableOpacity>
            </TouchableOpacity>

            {/* Bottom Sheet Modal */}
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                {/* Dark Overlay */}
                <TouchableOpacity
                    style={styles.overlay}
                    activeOpacity={1}
                    onPress={() => setModalVisible(false)}
                />

                {/* Bottom Sheet */}
                <View style={styles.bottomSheet}>
                    {/* Folder Details */}
                    <View style={styles.folderDetails}>
                        <MaterialIcons name="folder" size={48} color={COLORS.textTwo} />
                        <View style={styles.textContainer}>
                            <Text style={styles.id}>ID: {folder.id}</Text>
                            <Text style={styles.title}>{folder.name}</Text>
                        </View>
                    </View>

                    {/* Options */}
                    <TouchableOpacity
                        style={styles.option}
                        onPress={() => handleAction('Move')}
                    >
                        <MaterialIcons name="drive-file-move" size={24} color={COLORS.textOne} />
                        <Text style={styles.optionText}>Move</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.option}
                        onPress={() => handleAction('History')}
                    >
                        <MaterialIcons name="history" size={24} color={COLORS.textOne} />
                        <Text style={styles.optionText}>History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.option}
                        onPress={() => handleAction('Export')}
                    >
                        <MaterialIcons name="file-upload" size={24} color={COLORS.textOne} />
                        <Text style={styles.optionText}>Export</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.option}
                        onPress={() => handleAction('Clone')}
                    >
                        <MaterialIcons name="content-copy" size={24} color={COLORS.textOne} />
                        <Text style={styles.optionText}>Clone</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.option}
                        onPress={() => handleAction('Details')}
                    >
                        <MaterialIcons name="info" size={24} color={COLORS.textOne} />
                        <Text style={styles.optionText}>Details</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.option}
                        onPress={() => handleAction('Update')}
                    >
                        <MaterialIcons name="edit" size={24} color={COLORS.textOne} />
                        <Text style={styles.optionText}>Update</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.option, { borderBottomWidth: 0, borderBottomColor: COLORS.lightGray }]}
                        onPress={() => handleAction('Delete')}
                    >
                        <MaterialIcons name="delete" size={24} color={COLORS.textOne} />
                        <Text style={styles.optionText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: COLORS.white,
        borderRadius: 8,
        marginBottom: 10,
        elevation: 2,
        shadowColor: '#80869A',
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        position: 'relative',
    },
    textContainer: {
        flex: 1,
        marginLeft: 16,
    },
    id: {
        color: COLORS.textTwo,
        ...TYPOGRAPHY.body12,
    },
    title: {
        ...TYPOGRAPHY.body16,
        fontWeight: 'bold',
        color: COLORS.primary,
        marginVertical: 4,
    },
    detailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: 2,
    },
    detailsText: {
        ...TYPOGRAPHY.body14,
        color: COLORS.textTwo,
        marginEnd: 2,
    },
    detailsValue: {
        ...TYPOGRAPHY.body14,
        color: COLORS.black,
        marginEnd: 12,
        fontWeight: 'bold',
    },
    menuButton: {
        position: 'absolute',
        top: 16,
        right: 16,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    bottomSheet: {
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        padding: 16,
        paddingBottom: 32,
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    folderDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGray,
    },
    optionText: {
        ...TYPOGRAPHY.body16,
        marginLeft: 24,
        color: COLORS.black,
    },
});