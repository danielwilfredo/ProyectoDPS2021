import { StatusBar } from 'expo-status-bar';
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
import { Icon, Input } from 'react-native-elements';
import Colors from '../src/utils/colors';
import Servicios from '../src/utils/icons';
import CalendarPicker from 'react-native-calendar-picker';

export default function Reservacion2() {
  return (
    <>
      <View style={styles.v1}>
        <ImageBackground
          source={require('../src/img/SandCorner2.png')}
          resizeMode="contain"
          style={styles.image}></ImageBackground>
        <View style={styles.vtitle}>
          <Text style={styles.title}>Reservación</Text>
        </View>
      </View>
      <ScrollView
        style={styles.fondo}
        vertical
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          overflow: 'hidden',
          height: '100%',
          backgroundColor: '#F7F7F7',
        }}>
        <View style={styles.viewwhite}>
          <View style={styles.container}>
            <CalendarPicker
              allowRangeSelection={true}
              todayBackgroundColor="#02C7DE"
              selectedDayColor="#018ABC"
              selectedDayTextColor="#FFFFFF"
              onDateChange={this.onDateChange}
              width={350}
              height={350}
            />

            <View style={{ paddingLeft: 5 }}>
              <Text style={styles.letra2}>Fecha</Text>
            </View>

            <View
              style={{ flexDirection: 'row', paddingTop: 10, paddingLeft: 5 }}>
              <Text style={styles.texto}>Fecha de Entrada</Text>
              <Text style={styles.texto}> ------- </Text>
              <Text style={styles.texto}>Fecha de Salida</Text>
            </View>

            <View style={{ paddingTop: 5, paddingLeft: 5 }}>

              <View style={{ paddingLeft: 0 }}>
                <Text style={styles.letra2}>Huespedes</Text>
              </View>

            </View>
            <View style={styles.ViewCont}>
              <Input
                style={styles.textoInput}
                placeholder="# de personas"
                placeholderTextColor="#FFF"
                inputContainerStyle={{ borderBottomWidth: 0 }}
              />
            </View>

            <View style={{ paddingLeft: 5 }}>
              <Text style={styles.letra2}>Servicios Extra</Text>
            </View>

            <View style={styles.servicessection}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                centerContent={true}
                snapToAlignment="start">
                <FlatList
                  horizontal={true}
                  data={Servicios}
                  renderItem={({ item }) => (
                    <View>
                      <View style={styles.circulito}>
                        <Image style={styles.servicio} source={item.code} />
                      </View>
                      <View>
                        <Text style={styles.textservicios}>{item.text}</Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginRight: 20,
                          }}>
                          {item.price}
                        </Text>
                      </View>
                    </View>
                  )}
                />
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.viewwhite2}>
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 5,
            marginLeft: 25,
          }}>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Text style={styles.letra}>Precio Total</Text>
              <Text style={styles.texto}>$0.00</Text>
            </View>

            <View style={{ marginLeft: 90 }}>
              <TouchableOpacity style={styles.btnGuardar}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 15,
                    fontWeight: '400',
                    color: '#FFF',
                  }}>
                  Siguiente
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
  fondo: {
    backgroundColor: Colors.FONDO,
    flex: 1,
    marginTop: -550,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
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
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 15,
    color: '#FFFFFF',
  },
  viewwhite: {
    backgroundColor: '#F7F7F7',
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: Platform.OS == 'ios' ? 10 : 12,
  },

  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 5,
    padding: 5,
    marginBottom: 10,
  },
  letra: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#018ABC',
    marginRight: 10,

  },
  texto: {
    fontWeight: 'bold',
  },
  ViewCont: {
    backgroundColor: '#018ABC',
    height: 40,
    width: 150,
    borderRadius: 15,
    marginLeft: 5,
    margin: 10,
  },
  textoInput: {
    backgroundColor: '#018ABC',
    color: '#FFF',
    fontWeight: 'bold',
    paddingLeft: 10,
    fontSize: 15,
  },

  servicessection: {
    flex: 1,
    marginHorizontal: 5,
    marginTop: 10,
  },

  servicio: {
    width: 45,
    height: 45,
  },

  circulito: {
    width: 70,
    height: 70,
    borderRadius: 90,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    marginRight: 25,
  },
  textservicios: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.FONDO,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10,
    marginRight: 20,
  },
  btnGuardar: {
    backgroundColor: '#018ABC',
    height: 40,
    padding: 8,
    width: 150,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginLeft: '15%',
    marginTop: 25,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  viewwhite2: {
    backgroundColor: '#FFF',
    height: 50,
    paddingTop: Platform.OS == 'ios' ? 10 : 12,
  },
   letra2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#018ABC',
    marginLeft: 0,
    
   },
});
