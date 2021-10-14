import React, { useEffect, useRef } from "react";
import { Text, View, SafeAreaView,StyleSheet,Image,Animated,Dimensions} from "react-native";


const SplashScreen = ({navigation}) => {

    const moveAnim = useRef(new Animated.Value(0)).current;
    const fadeAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.sequence([
            Animated.timing(moveAnim, {
              duration: 2000,
              toValue: Dimensions.get('window').width / 1.6,
              delay: 0,
              useNativeDriver: false,
            }),
            Animated.timing(moveAnim, {
              duration: 2000,
              toValue: 0,
              delay: 0,
              useNativeDriver: false,
            }),
          ]).start();
          Animated.timing(fadeAnim, {
            duration: 2000,
            toValue: 1,
            delay: 2000,
            useNativeDriver: false,
          }).start();
        }, [moveAnim, fadeAnim]);

  setTimeout(()=>{
    navigation.replace('One')
  },4200);      
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.arriba} source={require('../src/img/arriba.png')} />
        </View>
          <View style={styles.contenido}>
          
            <Animated.Image style={[styles.logo, {opacity:fadeAnim}]} source={require('../src/img/logo2.png')} />
            <Animated.View style={[styles.content, {marginLeft: moveAnim}]}>
            <Text style={styles.texto}>M</Text>
            <Animated.Text style={[styles.texto,{opacity: fadeAnim}]}>achapu</Animated.Text>
            </Animated.View>
          </View>
          <View style={styles.footer}>
             <Image style={styles.abajo} source={require('../src/img/abajo.png')} />
          </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#018ABC',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
        width: 200,
        height: 160,
        marginRight: 17
    },
    texto: {
        fontSize: 35,
        color: 'white',
        fontWeight: '700',
      },
      contenido: {
        alignItems: 'center',
      },
      content: {
        flexDirection: 'row',
      },
      abajo:{
          height: 160,
          width: '100%',
      },
      arriba:{
        height: 160,
        width: '100%',
      },
      footer:{
          width: '100%',
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0
      },
      header:{
        width: '100%',
        position: "absolute",
        left: 0,
        right: 0,
        top: 0
      }
  });
export default SplashScreen;
