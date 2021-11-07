import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { StyleSheet, Image } from "react-native";
import Home from "../../Screens/Home";
import MisReservaciones from "../../Screens/MisReservaciones"; //pantallla mis reservas
import Perfil from "../../Screens/Perfil";
import Homex from "../../Screens/Homex";
import { useNavigationState } from "@react-navigation/native";
import Habitaciones from "../../Screens/Habitaciones";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../utils/colors";
import { AuthContext } from "../Context/AuthContext";

export default function principalNavigation() {
  const { cerrarSesion, foto, nombre, correo } = useContext(AuthContext);
  return <MyTabs />;
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  const { cerrarSesion, foto, nombre, correo } = useContext(AuthContext);
  const [col, setcol] = useState("#A4A4A4");
  return (
    <Tab.Navigator
      initialRoutename="Habitaciones"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors.FONDO,
        tabBarActiveBackgroundColor: "#FFFFFF",
        tabBarInactiveTintColor: "#A4A4A4",
        tabBarInactiveBackgroundColor: "FFFFFF",
        showLabel: false,
        tabStyle: {
          height: 100,
        },
        style: {
          height: 100,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        listeners={{
          tabPress: (e) => {
            setcol("#A4A4A4");
          },
        }}
        options={{
          headerShown: false,
          tabBarLabel: "",
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
        listeners={{
          tabPress: (e) => {
            setcol("#A4A4A4");
          },
        }}
        options={{
          headerShown: false,
          tabBarLabel: "",
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
        component={MisReservaciones}
        listeners={{
          tabPress: (e) => {
            setcol("#A4A4A4");
          },
        }}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="calendar-month"
              style={styles.iconos}
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={Perfil}
        listeners={{
          tabPress: (e) => {
            setcol(Colors.FONDO);
          },
        }}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={foto ? { uri: foto } : require("../img/user1.png")}
              style={{
                width: 30,
                height: 30,
                borderRadius: 90,
                borderColor: col,
                borderWidth: 2,
                marginTop: 15,
              }}
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
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 90,
    borderColor: "#018ABC",
    borderWidth: 3,
    marginTop: 15,
  },
});
