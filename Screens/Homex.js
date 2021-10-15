import { useNavigation } from '@react-navigation/core';
import React, {useContext} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Buttons from '../components/Buttons';
import { auth } from '../Database/Firebase';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements/dist/input/Input';
import { Avatar } from 'react-native-elements';
import { AuthContext } from '../src/Context/AuthContext';
import Alerts from '../components/Alerts';
export default function Home() {

    const {cerrarSesion,foto,nombre,email} = useContext(AuthContext)

    const navigation = useNavigation()
    const user = auth.currentUser
    console.log(user)
    const logOut = () => {
        auth.signOut()
        .then(() => {
            // navigation.replace("Login")
            cerrarSesion()
        })
        .catch(error => alert(error.message))
    }

    
    return (
        <View style={styles.container}>
                        

            <Text>Homexd</Text>
            <Text>Hola, {nombre ? nombre: 'Usuario sin nombre'}</Text>  
            <Avatar
                rounded
                size='large'
                source={
                    foto ? {foto} :
                    require('../src/img/Rosé.jpg')}/>
            <Buttons text='Cerrar sesión' color='#ECE5DB' onPress={logOut}/>
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
})
