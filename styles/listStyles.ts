import { StyleSheet } from 'react-native';
import COLORS from '../constants/theme';
import TYPOGRAPHY from '../constants/typography';

const listStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  spinnerOverlay: {
    position: 'absolute',
    top: -170,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000, // Ensure it overlays everything
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  subText: {
    fontSize: 14,
    color: '#666', // Light gray color for subtle text
    marginTop: 4, // Small spacing from the main text
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyContainer: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyImage: {
    width: 130,
    height: 130,
    marginBottom: 16,
  },

  emptyText: {
    ...TYPOGRAPHY.body16,
    fontSize: 18,
    textAlign: 'center',
    color: COLORS.textTwo,
  },
  fabContainer: {
    position: 'absolute',
    bottom: 96,
    right: 0,
    padding: 16,
    alignItems: 'center',
  },

  fab: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    zIndex: 1000,
  },

  fabMenu: {
    position: 'absolute',
    bottom: 8,
    height: 230,
    width: 270,
    right: 0,
    backgroundColor: COLORS.white,
    elevation: 4,
    shadowColor: '#80869A',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    padding: 16,
  },

  fabMenuItem: {
    backgroundColor: COLORS.primary,
    marginTop: 16,
    marginEnd: 24,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },

  fabAddMoreText: {
    ...TYPOGRAPHY.body14,
    color: COLORS.black,
    fontWeight: 'bold',
    marginLeft: 8,
  },

  fabMenuText: {
    ...TYPOGRAPHY.body14,
    color: COLORS.white,
    marginLeft: 8,
  },
});

export default listStyles;