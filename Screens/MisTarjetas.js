import React from 'react'
import {
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback,
    StyleSheet,
    Image,
    ScrollView,
    ImageBackground,
    SafeAreaView,
    FlatList,
  } from 'react-native';

 import Icon from "react-native-vector-icons/FontAwesome";
import Texto from '../src/utils/texto';

const MisTarjetas = () => {
    return (
        <>
          <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.arriba} source={require('../src/img/SandCorner.png')} />
      </View>

      <Text style={[styles.texto, {}]}>Mis Tarjetas</Text>
      <View style={styles.viewwhite}>
        <View style={styles.contenidoF}>
          <View style={{ marginVertical: 10 }}>
            <TouchableOpacity style={styles.btnOpa}>
              <View style={styles.btnText}>
                <View
                  style={{
                    backgroundColor: '#018ABC',
                    height: 53,
                    width: 53,
                    alignItems: 'center',
                    borderRadius: 200 / 2,
                    borderColor: '#018ABC',
                    borderStyle: 'solid',
                    justifyContent: 'center',
                    position: 'absolute',
                    left: -14,
                    top: -12,
                  }}></View>
                <Icon name="plus" size={29} color="#FFF" />
                <Text style={styles.negrita}>Añadir Tarjeta</Text>
                <Icon name="check" size={29} color="#565666" />
              </View>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal={false}
            data={Texto}
            renderItem={({ item }) => (
              <View style={{ marginVertical: 10 }}>
                <TouchableOpacity style={styles.btnOpa}>
                  <View style={styles.btnText}>
                    <View
                      style={{
                        backgroundColor: '#018ABC',
                        height: 53,
                        width: 53,
                        alignItems: 'center',
                        borderRadius: 200 / 2,
                        borderColor: '#018ABC',
                        borderStyle: 'solid',
                        justifyContent: 'center',
                        position: 'absolute',
                        left: -11,
                        top: -11,
                      }}></View>
                    <Icon name="credit-card" size={29} color="#FFF" />
                    <View>
                      <Text style={styles.negrita}>{item.text}</Text>
                    </View>
                    <Icon name="check" size={29} color="#565666" />
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />

          <View style={styles.contenedorLogo}>
            <TouchableOpacity style={styles.btnA}>
              <Text style={styles.textoFR}>Reservar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
        </>
      );
}
 
export default MisTarjetas;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#018ABC',
      padding: 1,
    },
    texto: {
      fontSize: 30,
      color: 'white',
      fontWeight: '700',
      textAlign: 'left',
      marginBottom: 10,
      marginTop: 50,
      paddingLeft: 15,
    },
    arriba: {
      height: 160,
      width: '100%',
    },
    header: {
      width: '100%',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
    },
    contenidoF: {
      backgroundColor: '#F7F7F7',
      width: '100%',
      height: 350,
      borderRadius: 20,
      alignItems: 'center',
      display: 'flex',
      marginTop: 30,
    },
    textoFR: {
      fontSize: 17,
      color: '#fff',
      fontWeight: '700',
      textAlign: 'center',
    },
    btnA: {
      backgroundColor: '#018ABC',
      paddingTop: 8,
      paddingBottom: 8,
      paddingRight: 18,
      paddingLeft: 18,
      borderRadius: 10,
      width: 250,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    negrita: {
      fontWeight: 'bold',
      paddingBottom: 10,
      textAlign: 'center',
      color: '#fff',
      fontSize: 18,
    },
    btnOpa: {
      backgroundColor: '#76B7CB',
      height: 45,
      padding: 8,
      width: 300,
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      margin: 3,
      paddingBottom: 10,
    },
  
    btnText: {
      paddingBottom: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    contenedorLogo: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },
  
    viewwhite: {
      backgroundColor: '#F7F7F7',
      flex: 1,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
  });