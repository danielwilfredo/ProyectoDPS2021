import LottieView from "lottie-react-native";
import React, {useState} from "react";
import { Text, View, Modal, StyleSheet, TouchableOpacity, TouchableHighlight } from "react-native";

const Alerts = ({title, message, buttonColor, jsonPath}) => {

    const [alertVisible, setAlertVisible] = useState(true)
  return (
        <View style={styles.centrado}>
            <Modal
                animationType='slide'
                transparent={true}
                visible={alertVisible}>
                <View style={styles.centrado}>
                    <View style={styles.modalView}>
                        <Text style={styles.textoModal}>{title}</Text>
                        <View style={{width:'100%', height:0.5,backgroundColor:'gray', marginVertical: 15}}></View>
                        <View style={{width: '100%', height: 100, justifyContent:'center', alignItems:'center'}}>
                            <LottieView style={{}} autoPlay loop source={require('../src/json/56132-error.json')}></LottieView>
                        </View>
                        <Text style={styles.texto}>{message}</Text>
                        <TouchableHighlight style={styles.boton} onPress={()=>{
                            setAlertVisible(!alertVisible);
                        }}><Text style={styles.ok}>Cerrar</Text></TouchableHighlight>
                    </View>
                </View>
            </Modal>
        </View>
  )
}

const styles = new StyleSheet.create({
    centrado:{
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flex: 1
    },
    modalView:{
        width: '80%',
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset:{
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.85,
        elevation: 5,
    },
    texto:{
        color:'black',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 20
    },
    ok:{
        color: 'white',
        textAlign:'center',
        fontSize: 20,
    },
    textoModal:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 34,
        shadowColor: 'black',
        shadowOffset:{
            height: 2,
            width: 0
        },shadowOpacity: 0.3,
        shadowRadius: 3.84,
        elevation: 5,
    },
    boton:{
        backgroundColor: '#018ABC',
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        width: '100%',
        marginTop: 40,
    }
})

export default Alerts;
