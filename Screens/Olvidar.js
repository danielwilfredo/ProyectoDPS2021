import React, { useState } from 'react';
import {Text,View,StyleSheet,Image,TouchableOpacity,Platform,ImageBackground,Alert,} from 'react-native';
import Colors from '../src/utils/colors';
import {Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/core';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Buttons from '../components/Buttons';
import { validateEmail } from '../src/utils/helpers';
import { sendEmail } from '../src/utils/actions';
import Alerts from '../components/Alerts';
import AlertaCheck from '../components/AlertaCheck';

export default function Olvidar() {
  const navigation = useNavigation()
  const [errorEmail, setErrorEmail] = useState('');
  const [email, setEmail] = useState('')
  const [alertVisible, setAlertVisible] = useState(false)
  const [alertVisible2, setAlertVisible2] = useState(false)
  const [error,setError] = useState('') 

  const ShowAlert2 = () => {
    if(alertVisible2){
      return(
        <AlertaCheck title="Actualizado" message={error}/>
      )
    }
  }

  const ShowAlert = () => {
    if(alertVisible){
      return(
        <Alerts title="Ups..." message={error}/>
      )
    }
  }
  const validateData = () => {
    setErrorEmail('')
    let isValid = true

    if (!validateEmail(email)) {
      setErrorEmail('Debes ingresar un correo válido.')
      isValid = false
    }
    return isValid
  };

  const recuperar = async() => {
    setAlertVisible(false)
    if (!validateData()) {
      return;
    }
    const result = await sendEmail(email)
    
    if(!result.statusResponse){
      setAlertVisible(true)
      setError('Este correo no se encuentra registrado')
      return
    }
    setAlertVisible2(true)
    setError('Correo de recuperación enviado.')
    setAlertVisible(false)
  };

  return (
    <>
      <KeyboardAwareScrollView  style={styles.container}>
        <Image
          style={styles.arriba}
          source={require('../src/img/arriba.png')}
        />
        <View style={styles.content}>
          <Image
            style={styles.logo}
            source={require('../src/img/logotext.png')}
          />
          <Text style={{ color: 'white', fontSize: 19, paddingBottom: 5, textAlign:'center' }}>
            Ingresa el correo asociado electrónico a tu cuenta.
          </Text>
          <View style={styles.contInputs}>
            <Input
              errorStyle={{ color: 'white', textAlign: 'center' }}
              errorMessage={errorEmail}
              keyboardType="email-address"
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholderTextColor="white"
              inputStyle={{ color: 'white', fontSize: 16 }}
              placeholder="Email"
              style={styles.input}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              containerStyle={{ width: '100%' }}
            />
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
                left: 7,
                top: 0,
              }}>
              <Icon
                style={styles.icono}
                name="envelope"
                color="#018ABC"
                size={24}
              />
            </View>
          </View>
          <Buttons text="Recuperar" color="#ECE5DB" onPress={recuperar}/>
        </View>
        <View style={styles.registro}>
          <Text style={styles.textoPlano}>¿No tienes cuenta?</Text>
          <View style={{ marginLeft: 10 }}>
            <TouchableOpacity>
              <Text
                style={styles.textoRegistro}
                onPress={() => navigation.navigate('Register')}
                >
                Registrarse
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text
            onPress={() => navigation.navigate('Login')}
            style={{
              fontSize: 17,
              fontStyle: 'italic',
              color: 'white',
              marginTop: 5,
              textAlign:'center'
            }}
            
            >
            Regresar al inicio de sesión.
          </Text>
        </View>
        {ShowAlert()}
        {ShowAlert2()}

      </KeyboardAwareScrollView>
      
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
  abajo: {
    height: 200,
    width: '100%',
  
  },
  arriba: {
    height: 200,
    width: '100%',
  },
  footer: {
    width: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  header: {
    width: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
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
  logo: {
    width: 200,
    height: 112,
  },
  content: {
    alignItems: 'center',
  },
  conte: {
    alignItems: 'center',
  },
  registro: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  textoPlano: {
    color: 'white',
    fontSize: 17,
  },
  textoRegistro: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  contInputs: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
  },
  container: {
    flex: 1,
    backgroundColor: '#018ABC',
    
  },
});
