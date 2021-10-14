import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Buttons from '../components/Buttons';
import { auth } from '../Database/Firebase';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements/dist/input/Input';
import { Avatar } from 'react-native-elements';

export default function Home() {

    const navigation = useNavigation()
    const user = auth.currentUser
    console.log(user)
    const cerrarSesion = () => {
        auth.signOut()
        .then(() => {
            navigation.replace("Login")
        })
        .catch(error => alert(error.message))
    }

    
    return (
        <View style={styles.container}>
            <Text>Homexd</Text>
            {/* <View style={styles.contInputs}>
                <TextInput style={styles.input} placeholder="Email" ></TextInput>
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
                <TextInput style={styles.input} placeholder="Contraseña" ></TextInput>
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
            </View> */}
            <Text>Hola, {user.displayName ? user.displayName: 'Usuario sin nombre'}</Text>  
            <Avatar
                rounded
                size='large'
                source={
                    user.photoURL ? {uri: photoURL} :
                    require('../src/img/Rosé.jpg')}/>
            <Buttons text='Cerrar sesión' color='#ECE5DB' onPress={cerrarSesion}/>
        </View>
    )
}

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
        borderWidth: 1,
        padding: 10,
        borderRadius: 200/2,
        backgroundColor: '#ECE5DB90',
        textAlign: 'center',
        borderColor: '#018ABC',
        marginTop: -7
      },
      contInputs:{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
      }
})
