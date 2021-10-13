import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TextInput,Image,KeyboardAvoidingView} from "react-native";
import Buttons from "../components/Buttons";
import {auth} from '../Database/Firebase';
import Icon from 'react-native-vector-icons/FontAwesome';

const RegisterScreen = () => {

    const [email,setEmail] =  useState('')
    const [password,setPassword] =  useState('')
    
    const handleSignup = () => {
      auth.createUserWithEmailAndPassword(email,password)
      .then(userCredentials => {
        const user = userCredentials.user
        console.log(user);
      })
      .catch(error => alert(error.message))
    } 

  return (
    <>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../src/img/logotext.png')} />
        <View style={styles.contInputs}>
                <TextInput style={styles.input} placeholder="Email" placeholderTextColor='white' value={email} onChangeText={text=> setEmail(text)}></TextInput>
                <View style={{
                        backgroundColor:'#ECE5DB',
                        height:53, width: 53,
                        alignItems:'center',
                        borderRadius: 200/2,
                        borderColor:'#018ABC',
                        borderStyle:'solid',
                        justifyContent:'center',
                        position: 'absolute',
                        left: 2,
                        bottom: 12.5
                        }}>
                    <Icon style={styles.icono} name='envelope' color='#018ABC' size={29}/>
                </View>
            </View>
            <View style={styles.contInputs}>
                <TextInput style={styles.input} placeholder="Contraseña" value={password} onChangeText={text=> setPassword(text)} secureTextEntry={true} placeholderTextColor='white'></TextInput>
                <View style={{
                        backgroundColor:'#ECE5DB',
                        height:53, width: 53,
                        alignItems:'center',
                        borderRadius: 200/2,
                        borderColor:'#018ABC',
                        borderStyle:'solid',
                        justifyContent:'center',
                        position: 'absolute',
                        left: 2,
                        bottom: 12.5
                        }}>
                    <Icon style={styles.icono} name='lock' color='#018ABC' size={35}/>
                </View>
            </View>
        <Buttons text='Registrarse' color='#ECE5DB' onPress={handleSignup}/>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#018ABC',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        height: 54,
        width: 320,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 200/2,
        backgroundColor: '#ECE5DB90',
        textAlign: 'center',
        borderColor: '#018ABC',
        color:'white',
  },
  logo:{
    width: 200,
    height: 150
  },
  contInputs:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
}
})

export default RegisterScreen;
