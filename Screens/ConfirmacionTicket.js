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
  } from "react-native";
  import { resize } from "../src/utils/ResizeF";

  import { useNavigation } from "@react-navigation/core";


const ConfirmacionTicket = () => {

    const navigation = useNavigation();
    
    return (  
        <>
      
        <KeyboardAwareScrollView style={styles.fondo}>
      <Image
          style={styles.arriba}
          source={require('../src/img/arriba.png')}
        />

        <Text>Facturación</Text>




      </KeyboardAwareScrollView>
        </>



    );
}
 
export default ConfirmacionTicket;



const styles = StyleSheet.create({
    fondo:{
      backgroundColor: '#018ABC',
      flex: 1,
    },
    negrita: {
      fontWeight: "bold",
    },
    btnGuardar: {
      backgroundColor: "#ECE5DB",
      height: 59,
      padding: 8,
      width: 286,
      borderRadius: 30,
      shadowColor: "#000",
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      marginTop: 25,
      alignSelf: 'center',
    },
    emailIcon: {
      backgroundColor: "#fff",
      width: 53,
      height: 53,
      padding: 11,
      paddingLeft: 12,
      borderRadius: 50,
      marginLeft: -11,
    },
    textoInput: {
      backgroundColor: "#74b4cc",
      color: "#ffffff",
      fontWeight: "bold",
      paddingLeft: 10,
    },
    passIcon:{
      backgroundColor: "#fff",
      width: 53,
      height: 53,
      padding: 11,
      paddingLeft: 15,
      borderRadius: 50,
      marginLeft: -11,
    },
    userIcon:{
      backgroundColor: "#fff",
      width: 53,
      height: 53,
      padding: 11,
      paddingLeft: 15,
      borderRadius: 50,
      marginLeft: -11,
    },
    cardIcon:{
      backgroundColor: "#fff",
      width: 53,
      height: 53,
      padding: 11,
      paddingLeft: 8.5,
      borderRadius: 50,
      marginLeft: -11,
    },
    cardIcon2:{
      backgroundColor: "#fff",
      width: 33,
      height: 33,
      borderRadius: 50,
      position: 'absolute',
      right: 40,
    },
    ViewCont:{
      backgroundColor: "#74b4cc",
      height: 50,
      width: 323,
      borderRadius: 25,
      //marginLeft: "10%",
      margin: 10,
      alignSelf: 'center',
    },
    editarP:{
      textAlign: 'center',
      fontSize: 30,
      fontWeight: "bold",
      color: "#FFF",
      marginTop: 10,
      marginBottom: 10,
    },
    imgP:{
      width: 140,
      height: 140,
      borderRadius: 100,
      borderColor: "#018ABC",
      borderWidth: 3,
      marginLeft: "33%",
      marginRight: "33%",
      alignSelf: 'center'
    },
    arriba: {
      height: 200,
      width: '100%',
    },
    contInputs: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 2,
    },
    input: {
      height: 54,
      width: 320,
      borderWidth: 1,
      padding: 10,
      borderRadius: 200 / 2,
      backgroundColor: '#ECE5DB90',
      textAlign: 'center',
      borderColor: '#018ABC',
    },
  });
  