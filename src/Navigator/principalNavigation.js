import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Platform,
  SafeAreaView,
} from 'react-native';
import Home from '../../Screens/Home';
import Homex from '../../Screens/Homex';
import Habitaciones from '../../Screens/Habitaciones';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons,} from '@expo/vector-icons';
import Colors from '../utils/colors';

export default function principalNavigation() {
  return (
    
      <MyTabs />
    
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRoutename="Habitaciones"
      screenOptions={{
        tabBarActiveTintColor: Colors.FONDO,
        tabBarActiveBackgroundColor: '#FFFFFF',
        tabBarInactiveTintColor: '#A4A4A4',
        tabBarInactiveBackgroundColor: 'FFFFFF',
        showLabel: false,
        tabStyle: {
          height: 100,
        },
        style: {
          height: 100,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home"
              style={styles.iconos}
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Habitaciones"
        component={Habitaciones}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="bed"
              style={styles.iconos}
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Reserva"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="calendar-edit"
              style={styles.iconos}
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={Homex}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-circle"
              style={styles.iconos}
              color={color}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconos: {
    marginTop: 15,
  },
});
