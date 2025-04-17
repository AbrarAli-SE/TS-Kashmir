import { Tabs } from 'expo-router';
import  TabIcon  from '../../styles/TabIcon'; 
import { Ionicons } from '@expo/vector-icons'
import COLORS from '../../constants/theme'; // Adjust the path to where COLORS is defined

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,

        tabBarActiveTintColor: COLORS.primary, // Active tab color  
        tabBarInactiveTintColor: COLORS.textTwo, // Inactive tab color  

        tabBarStyle: {
          backgroundColor: COLORS.white, // Tab bar background color  
          position: 'absolute',
          height: 84,
          paddingHorizontal: 10,
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          tabBarIcon: ({ color }) => (
            <TabIcon
              icon={require('../../assets/images/tabs_Icon/dashboard.png')} // Path to your custom logo
              label="Dashboard"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          tabBarIcon: ({ color }) => (
            <TabIcon
              icon={require('../../assets/images/tabs_Icon/list.png')} // Replace with your list icon
              label="List"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => (
            <TabIcon
              icon={require('../../assets/images/tabs_Icon/search.png')} // Replace with your search icon
              label="Search"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="vehicle"
        options={{
          tabBarIcon: ({ color }) => (
            <TabIcon
              icon={require('../../assets/images/tabs_Icon/vehicle.png')} // Replace with your vehicle icon
              label="Vehicle"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="employee"
        options={{
          tabBarIcon: ({ color }) => (
            <TabIcon
              icon={require('../../assets/images/tabs_Icon/employee.png')} // Replace with your employee icon
              label="Employee"
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}