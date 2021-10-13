import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, TextInput, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import Buttons from '../components/Buttons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {auth} from '../Database/Firebase';
import {useNavigation} from '@react-navigation/core';

const LoginScreen = () => {
  const [email,setEmail] =  useState('');
  const [password,setPassword] =  useState('');
  const navigation = useNavigation();
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user=>{
      if(user){
        navigation.replace("Home")
      }
    })
    return unsubscribe
  },[])

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(email,password)
    .then(userCredentials => {
      const user = userCredentials.user
      console.log('Logged with: ', user.email);
    })
    .catch(error => alert(error.message))
  }

  return (
    <>
       
     <KeyboardAvoidingView style={styles.container} behavior='padding' >
         {/* <View style={styles.header}>
            <Image style={styles.arriba} source={require('../src/img/arriba.png')} />
        </View>   */}
      <Image style={styles.arriba} source={require('../src/img/arriba.png')} />
        <View style={styles.content}>
          <Image style={styles.logo} source={require('../src/img/logotext.png')} />
          <Text style={{color:'white', fontSize:16}}>Para comenzar a explorar inicia tu sesión</Text>
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
          <Buttons text='Iniciar Sesión' color='#ECE5DB' onPress={handleLogin}/>
        </View>
        <View style={styles.registro}>
            <Text style={styles.textoPlano}>¿No tienes cuenta?</Text>
            <View style={{marginLeft: 10}}>
                <Text style={styles.textoRegistro} onPress={() => navigation.navigate('Register')}>Registrarse</Text>
            </View>  
        </View>
        <View>
            <Text style={{fontSize: 17, fontStyle: 'italic', color:'white', marginTop: 5}}>¿Olvidaste tu contraseña?</Text>
        </View>
        <View style={{
                        backgroundColor:'#ECE5DB',
                        height:53, width: 53,
                        alignItems:'center',
                        borderRadius: 200/2,
                        borderColor:'#018ABC',
                        borderStyle:'solid',
                        justifyContent:'center',
                        }}>

                    <Icon style={styles.icono} name='google' color='#018ABC' size={35}/>
        </View>
        {/* <Image style={styles.abajo} source={require('../src/img/abajo.png')} /> */}

        {/* <View style={styles.footer}>
             <Image style={styles.abajo} source={require('../src/img/abajo.png')} />
        </View>  */}
     </KeyboardAvoidingView>
    </>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#018ABC',
      alignItems: 'center',
    },
      abajo:{
          height: 160,
          width: '100%',
          right: 0,
          left: 0,
          bottom: 0
          
          
      },
      arriba:{
        height: 200,
        width: '100%',
      },
      footer:{
          width: '100%',
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          
      },
      header:{
        width: '100%',
        position: "absolute",
        left: 0,
        right: 0,
        top: 0
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
        height: 112
    },
    content:{
        alignItems: 'center'
    },
    conte:{
        alignItems: 'center'
    },
    registro:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
    },
    textoPlano:{
        color: 'white',
        fontSize: 17
    },
    textoRegistro:{
        color: 'white',
        fontSize: 17,
        fontWeight: "bold",
    },
    contInputs:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  }
})

export default LoginScreen;
