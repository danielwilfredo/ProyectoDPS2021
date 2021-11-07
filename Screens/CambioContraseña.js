import React, { useState} from "react";
import {Text,View,TouchableOpacity,StyleSheet,Image,TextInput,Alert,} from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { AuthContext } from "../src/Context/AuthContext";
import { useContext} from "react";
import { auth } from '../Database/Firebase';
import Buttons from '../components/Buttons';
import Alerts from '../components/AlertaCheck';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import { reauthenticate, updatePassword } from '../src/utils/actions'

const CambioContraseña = () => {
  const [alertVisible, setAlertVisible] = useState(false)
  const [error,setError] = useState('')
  const {cerrarSesion,foto,nombre,correo,id,actualizarUsuario} = useContext(AuthContext)
  const user = auth.currentUser
  const [newPassword, setNewPassword] = useState(null)
  const [currentPassword, setCurrentPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [errorNewPassword, setErrorNewPassword] = useState(null)
  const [errorCurrentPassword, setErrorCurrentPassword] = useState(null)
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(null)

  const validateForm = () => {
    setErrorNewPassword(null)
    setErrorCurrentPassword(null)
    setErrorConfirmPassword(null)
    let isValid = true
    if(newPassword !== confirmPassword) {
        setErrorNewPassword("La nueva contraseña y la confirmación no son iguales.")
        setErrorConfirmPassword("La nueva contraseña y la confirmación no son iguales.")
        isValid = false
    }

    if(newPassword === currentPassword) {
        setErrorCurrentPassword("Debes ingresar una contraseña diferentes al actual.")
        setErrorNewPassword("Debes ingresar una contraseña diferentes al actual.")
        setErrorConfirmPassword("Debes ingresar una contraseña diferentes al actual.")
        isValid = false
    }
    if(newPassword.length<6){
        setNewErrorPassword('La contraseña tiene que tener al menos 6 caracteres.')
        isValid = false
      }

    return isValid
}

    const onSubmit = async() =>{
        if(!validateForm()){
            return
        }   
        const resultReauthenticate = await reauthenticate(currentPassword)
        if (!resultReauthenticate.statusResponse) {
            setErrorCurrentPassword("Contraseña incorrecta.")
            return
        }

        const resultUpdatePassword = await updatePassword(newPassword)

        if (!resultUpdatePassword.statusResponse) {
            setErrorNewPassword("Hubo un problema cambiando la contraseña, por favor intente más tarde.")
            return
        }
        setAlertVisible(true)
        setError('Contraseña modificada')
    }
  
    const ShowAlert = () => {
        if(alertVisible){
          return(
            <Alerts title="Actualizado" message={error}/>
          )
        }
      }
  return (
    <>
      <KeyboardAwareScrollView style={styles.fondo}>
      <Image
          style={styles.arriba}
          source={require('../src/img/arriba.png')}
        />
        
       <View style={{flexDirection:'row'}}>
        <Image
          source={
            foto
            ? { uri: foto } :
            require('../src/img/mulan.jpg')}
          style={styles.imgP}
        />
        </View>  
        <Text
          style={styles.editarP}
        >
          Nueva contraseña
        </Text>
        <View style={styles.contInputs}>
            <Input
              value={newPassword}
              onChangeText={(text) => setNewPassword(text)}
              placeholderTextColor="white"
              inputStyle={{ color: 'white', fontSize: 16 }}
              placeholder="Nueva contraseña"
              style={styles.input}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              containerStyle={{ width: '100%' }}
              secureTextEntry
              errorMessage={errorNewPassword}
              errorStyle={{ color: 'white', textAlign: 'center' }}

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
                name="lock"
                color="#018ABC"
                size={30}
              />
            </View>
          </View>
          <View style={styles.contInputs}>
            <Input
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              placeholderTextColor="white"
              inputStyle={{ color: 'white', fontSize: 16 }}
              placeholder="Confirmar nueva contraseña"
              style={styles.input}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              containerStyle={{ width: '100%' }}
              secureTextEntry
              errorMessage={errorConfirmPassword}
              errorStyle={{ color: 'white', textAlign: 'center' }}

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
                name="lock"
                color="#018ABC"
                size={30}
              />
            </View>
          </View>
          <View style={styles.contInputs}>
            <Input
              value={currentPassword}
              onChangeText={(text) => setCurrentPassword(text)}
              placeholderTextColor="white"
              inputStyle={{ color: 'white', fontSize: 16 }}
              placeholder="Contraseña actual"
              style={styles.input}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              containerStyle={{ width: '100%' }}
              secureTextEntry
              errorMessage={errorCurrentPassword}
              errorStyle={{ color: 'white', textAlign: 'center' }}

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
                name="lock"
                color="#018ABC"
                size={30}
              />
            </View>
          </View>
      <View style={{alignItems: 'center'}}>
        <Buttons onPress={onSubmit} text='Guardar' color='#ECE5DB' />
      </View>
      {ShowAlert()}
      </KeyboardAwareScrollView>
    </>
  );
};

export default CambioContraseña;

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
    //marginLeft: "15%",
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
