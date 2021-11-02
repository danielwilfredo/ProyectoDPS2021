import React, { useState} from "react";
import {Text,View,TouchableOpacity,StyleSheet,Image,TextInput,Alert,} from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { AuthContext } from "../src/Context/AuthContext";
import { useContext} from "react";
import { loadImageFromGallery } from "../src/utils/helpers";
import { updateProfile, uploadImage } from "../src/utils/actions";
import { auth } from '../Database/Firebase';
import Buttons from '../components/Buttons';
import Alerts from '../components/AlertaCheck';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

const EditarPerfil = () => {
  const [alertVisible, setAlertVisible] = useState(false)
  const [error,setError] = useState('')
  const {cerrarSesion,foto,nombre,correo,id,actualizarUsuario} = useContext(AuthContext)
  const user = auth.currentUser
  const [photoUrl, setPhotoUrl] = useState(foto)
  const [newDisplayName, setNewDisplayName] = useState('')
  const [errorNombre, setErrorNombre] = useState('')

  const ShowAlert = () => {
    if(alertVisible){
      return(
        <Alerts title="Actualizado" message={error}/>
      )
    }
  }

  const validateData = () => {
   setErrorNombre
    let isValid = true
    if(newDisplayName.length<5){
      setErrorNombre('Su nombre tiene que contener al menos 5 caracteres.')
      console.log(errorNombre)
      isValid = false
    }
    return isValid
  }

  const updateProfileData = () =>{
    if(!validateData()){
      return;
    }
    cambiarNombre()
    setAlertVisible(true)
    setError('Datos actualizados')
    setTimeout(()=>{
      setAlertVisible(false)
    },1150)
  }

  const changePhoto = async() => {
    const result = await loadImageFromGallery([1, 1])
    if (!result.status) {
        return
    }
    const resultUploadImage = await uploadImage(result.image, "avatars", id)
    if (!resultUploadImage.statusResponse) {
        Alert.alert("Ha ocurrido un error al almacenar la foto de perfil.")
        return
    }
    const resultUpdateProfie = await updateProfile({ photoURL: resultUploadImage.url })
    if (resultUpdateProfie.statusResponse) {
        setPhotoUrl(resultUploadImage.url)
        actualizarUsuario(user.displayName,user.email,user.photoURL,user.uid)
        setAlertVisible(true)
        setError('Datos actualizados')
        setTimeout(()=>{
          setAlertVisible(false)
        },1150)
    } else {
        Alert.alert("Ha ocurrido un error al actualizar la foto de perfil.")
    }
}

  const cambiarNombre = async () => {
    const result = await updateProfile({displayName: newDisplayName})
    if (!result.statusResponse) {
      setError("Error al actualizar nombres y apellidos, intenta más tarde.")
      return
  }
    actualizarUsuario(user.displayName,user.email,user.photoURL,user.uid)
    
    
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
          <View
              
              style={{
                backgroundColor: '#ECE5DB',
                height: 30,
                width: 30,
                alignItems: 'center',
                borderRadius: 200 / 2,
                borderColor: '#018ABC',
                borderStyle: 'solid',
                justifyContent: 'center',
                position: 'absolute',
                left: 230,
                bottom: 7,
              }}>
              <Icon
                onPress = {changePhoto}
                style={styles.icono}
                name="pencil"
                color="#018ABC"
                size={20}
              />
            </View>
        </View>  
        <Text
          style={styles.editarP}
        >
          Editar Perfil
        </Text>

        <View
          style={styles.ViewCont}
        >
          <Input
            errorStyle={{color:'white', textAlign:'center'}}
            errorMessage={errorNombre}
            value={newDisplayName} onChangeText={text=> setNewDisplayName(text)}
            style={styles.textoInput}
            placeholder={nombre}
            placeholderTextColor="#ECE5DB"
            inputContainerStyle={{ borderBottomWidth: 0 }}
            leftIcon={
              <Icon
                style={styles.cardIcon}
                name="id-card"
                size={30}
                color="#018ABC"
              />
            }
          />
        </View>
        <View
          style={styles.ViewCont}
        >
          <Input
            style={styles.textoInput}
            placeholder="jocornejo"
            placeholderTextColor="#ECE5DB"
            inputContainerStyle={{ borderBottomWidth: 0 }}
            leftIcon={
              <Icon
                style={styles.userIcon}
                name="user"
                size={30}
                color="#018ABC"
              />
            }
          />
        </View>
        <View
          style={styles.ViewCont}
        >
          <Input
            style={styles.textoInput}
            placeholder="**********"
            placeholderTextColor="#ECE5DB"
            secureTextEntry={true}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            leftIcon={
              <Icon
                style={styles.passIcon}
                name="key"
                size={30}
                color="#018ABC"
              />
            }
          />
        </View>
        <View
          style={styles.ViewCont}
        >
          <Input
            style={styles.textoInput}
            placeholder={correo}
            placeholderTextColor="#ECE5DB"
            inputContainerStyle={{ borderBottomWidth: 0 }}
            leftIcon={
              <Icon
                style={styles.emailIcon}
                name="envelope"
                size={30}
                color="#018ABC"
              />
            }
          />
        </View>
      <View style={{alignItems: 'center'}}>
        <Buttons onPress={updateProfileData} text='Guardar' color='#ECE5DB' />
      </View>  
      {ShowAlert()}
      </KeyboardAwareScrollView>
    </>
  );
};

export default EditarPerfil;

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
});
