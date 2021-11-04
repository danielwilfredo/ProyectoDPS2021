import React, {useContext} from 'react';
import { StyleSheet} from 'react-native';
import SplashScreen from '../../Screens/SplashScreen';
import ScreenOne from '../../Screens/ScreenOne';
import LoginScreen from '../../Screens/LoginScreen';
import RegisterScreen from '../../Screens/RegisterScreen';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import principalNavigation from './principalNavigation';
import { AuthContext } from '../Context/AuthContext';
import Editar from '../../Screens/EditarPerfil';
import verReserva from '../../Screens/VerReserva';
import Olvidar from "../../Screens/Olvidar"
import Reserva from "../../Screens/Reserva"
import Reservacion2 from "../../Screens/Reservacion2"
import CambioContraseña from '../../Screens/CambioContraseña';


const Stack = createNativeStackNavigator();

export default function AuthNavigation() {

    const {logueado,cargando} = useContext(AuthContext)
    if(cargando){
        return(
            <SplashScreen />
        )
    }
    return (
     
      
        <Stack.Navigator>
          {
              logueado ? (
                <>  
                <Stack.Screen options={{headerShown: false}} name="Principal" component={principalNavigation} />
                <Stack.Screen options={{headerShown: false}} name="Editar" component={Editar} />
                <Stack.Screen options={{headerShown: false}} name="Ver" component={verReserva} />
                <Stack.Screen options={{headerShown: false}} name="Reservas" component={Reserva} />
                <Stack.Screen options={{headerShown: false}} name="Reservacion2" component={Reservacion2} />
                <Stack.Screen options={{headerShown: false}} name="Cambio" component={CambioContraseña} />

                </>
              ) : (
                <>
                
                <Stack.Screen options={{headerShown: false}} name="One" component={ScreenOne} /> 
                <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
                <Stack.Screen options={{headerShown: false}} name="Register" component={RegisterScreen} />
                <Stack.Screen options={{headerShown: false}} name="olvidar" component={Olvidar} />

                

                </>
              )
          }
          
  
        </Stack.Navigator>
      
    );
  }
  
