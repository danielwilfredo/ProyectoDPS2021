import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Onboarding from '../components/Onboarding';
import Buttons from '../components/Buttons';
import { useNavigation } from '@react-navigation/core';

const ScreenOne = () => {

  const navigation = useNavigation()
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.arriba} source={require('../src/img/arriba.png')} />
        </View>
        <View>
        <Image style={styles.logo} source={require('../src/img/logo2.png')} />

        </View>
        <Onboarding />
        <View style={styles.boton}>
        <Buttons text = 'Explorar' color='#ECE5DB' onPress={()=>navigation.replace('Login')} />
        </View>
        <View style={styles.footer}>
             <Image style={styles.abajo} source={require('../src/img/abajo.png')} />
        </View>
        
      </View>
    </>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#018ABC',
      alignItems: 'center',
      justifyContent: 'center',
    },
      abajo:{
          height: 150,
          width: '100%',
      },
      arriba:{
        height: 160,
        width: '100%',
      },
      footer:{
          width: '100%',
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0
      },
      header:{
        width: '100%',
        position: "absolute",
        left: 0,
        right: 0,
        top: 0
      },
      boton:{
        left: 0,
        right: 0,
        bottom: 70
      },
      logo:{
        width: 100,
        height: 120,
        left: -50,
        right: 0,
        top: 35,
        position: 'absolute'
    },
});

export default ScreenOne;
