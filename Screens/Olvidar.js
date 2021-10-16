import React, { useState, Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
  Platform,
  FlatList,
  ImageBackground,
} from 'react-native';
import Colors from '../src/utils/colors';
import { Icon, Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';

export default function Olvidar() {
  const navigation = useNavigation()

  return (
    <>
      <View style={styles.v1}>
        <ImageBackground
          source={require('../src/img/SandCorner2.png')}
          resizeMode="contain"
          style={styles.image}></ImageBackground>
        <View style={{ marginBottom: 800 }}>
          <View style={styles.vtitle}>
            <Image
              source={require('../src/img/OlvidarContra_preview_rev_2.png')}
              style={styles.imgP}
            />
            <View>
              <Text style={styles.editarP}>
                Ingresa el correo electronico asociado a tu cuenta
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.ViewCont}>
                  <Input
                    style={styles.textoInput}
                    placeholder="E-Mail"
                    placeholderTextColor="#ECE5DB"
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                    leftIcon={
                      <Icon
                        style={styles._Icon}
                        name="mail"
                        size={30}
                        color="#018ABC"
                      />
                    }
                  />
                </View>
                <View
              style={{
                backgroundColor: '#ECE5DB',
                height: 53,
                width: 53,
                alignItems: 'center',
                borderRadius: 200 / 2,
                borderColor: '#018ABC',
                borderStyle: 'solid',
                justifyContent: 'center',
                position: 'absolute',
                left: 40,
                top: 12.5,
              }}>
              <Icon
                style={styles.icono}
                name="mail"
                color="#018ABC"
                size={30}
              />
            </View>
              </View>

              <TouchableOpacity style={styles.btnRecuperar}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: '400',
                    marginTop: 5,
                  }}>
                  Recuperar Cuenta
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ marginTop: 50, marginRight: 20 }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#FFF',
                  }}
                  onPress={() => navigation.navigate('Login')}   
                  >
                  Regresar a Inicio de Sesión
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: 200,
    marginTop: -70,
  },
  v1: {
    flex: 1,
    backgroundColor: Colors.FONDO,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  vtitle: {
    flex: 1,
    marginTop: Platform.OS == 'ios' ? 60 : 50,
    backgroundColor: 'transparent',
    position: 'absolute',
  },

  btnRecuperar: {
    backgroundColor: '#ECE5DB',
    height: 59,
    padding: 8,
    width: 286,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginLeft: 55,
    marginTop: 25,
  },

  textoInput: {
    backgroundColor: '#74b4cc',
    color: '#ffffff',
    fontWeight: 'bold',
    paddingLeft: 10,
    borderStyle:"solid",
  },

  _Icon: {
   backgroundColor: '#ECE5DB',
                height: 53,
                width: 53,
                alignItems: 'center',
                borderRadius: 200 / 2,
                borderColor: '#018ABC',
                borderStyle: 'solid',
                justifyContent: 'center',
                left: -11,
                top: 0,
  },
  ViewCont: {
    backgroundColor: '#74b4cc',
    height: 50,
    width: 320,
    borderRadius: 25,
    marginLeft: 40,
    marginRight: '15%',
    margin: 15
  },
  editarP: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 10,
    marginBottom: 50,
    marginHorizontal: 50,
  },
  imgP: {
    width: 250,
    height: 250,
    marginLeft: 75,
    marginRight: 25,
    marginTop: 20,
  },
});
