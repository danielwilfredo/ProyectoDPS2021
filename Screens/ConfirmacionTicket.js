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
    ImageBackground,SafeAreaView
  } from "react-native";

  import { useNavigation } from "@react-navigation/core";


const ConfirmacionTicket = () => {

    const navigation = useNavigation();
    
    return (  
        <>
      
      <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.arriba} source={require('../src/img/arriba.png')} />
      </View>

        <View styles={styles.contenedorLogo}>
          <Image style={styles.logo} source={require('../src/img/logoblanco1.png')} />
        </View>
                <View styles={styles.contenedorLogo}>
          <Image style={styles.logo2} source={require('../src/img/dd.png')} />
        </View>

         <Text style={[styles.textoF, {marginTop:15, marginBottom:10, fontSize:18, padding:10}]}>¡Su reservación ha sido realizada, recibirá un correo con la información de la reserva!</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={styles.btnC}><Text style={styles.textoFR}>Aceptar</Text></TouchableOpacity>

        <View style={styles.footer}>
        <Image style={styles.abajo} source={require('../src/img/abajo.png')} />
      </View>
    </SafeAreaView>
        </>



    );
}
 
export default ConfirmacionTicket;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#018ABC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contenedorLogo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
    logo2: {
    width: 250,
    height: 150,
  },
  textoF: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
  },
  abajo: {
    height: 160,
    width: '100%',
  },
  arriba: {
    height: 160,
    width: '100%',
  },
  footer: {
    width: '100%',
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0
  },
  header: {
    width: '100%',
    position: "absolute",
    left: 0,
    right: 0,
    top: 0
  },
  textoFR: {
    fontSize: 20,
    color: '#000',
    fontWeight: '500',
    textAlign: 'center',
  },
  btnC:{
    backgroundColor:'#ECE5DB',
    paddingTop:10,
    paddingBottom:15,
    paddingRight:20,
    paddingLeft:20,
    borderRadius:20,
  },

});
