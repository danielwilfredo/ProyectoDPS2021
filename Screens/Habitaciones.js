import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
  Button,
  TouchableHighlight,
  Platform,
  FlatList,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Colors from '../src/utils/colors';
import Rooms from '../src/utils/rooms';
import { useNavigation } from '@react-navigation/core';

export default function Habitaciones() {
  const navigation = useNavigation()


  const [habitacion, setHabitacion] = useState(false);


  return (
    <>
      <View style={styles.v1}>
        <ImageBackground
          source={require('../src/img/SandCorner2.png')}
          resizeMode="contain"
          style={styles.image}></ImageBackground>
        <View style={styles.vtitle}>
          <Text style={styles.title}>Habitaciones</Text>
        </View>
      </View>
      <ScrollView
        style={styles.fondo}
        vertical
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          overflow: 'hidden',
          height:'100%',
          backgroundColor:'#F7F7F7'
        }}>
        <View style={styles.raya}></View>
        <View style={styles.viewwhite}>
          <FlatList
            vertical={true}
            data={Rooms}
            renderItem={({ item }) => (
              <View>
                <TouchableHighlight
                  underlayColor="rgba(73,182,77,1,0.9)"
                  onPress={() => navigation.navigate('Reservas')}>
                  <View style={styles.objectview}>
                    <Image style={styles.imghabit} source={item.img} />
                    <View style={styles.viewtext}>
                      <Text style={styles.nameroom}>{item.roomname}</Text>
                      <Text style={styles.minis}>
                        {item.numberbeds} | {item.numberbath} |{' '}
                        {item.numberbalc}
                      </Text>
                      <Text style={styles.minis}>
                        Para {item.numberhuespe} | {item.specialdetails}
                      </Text>
                      <Text style={styles.price}>{item.price}</Text>
                    </View>
                  </View>
                </TouchableHighlight>
              </View>
            )}
            keyExtractor={(item,index)=> index.toString()}
          />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  fondo: {
    backgroundColor: Colors.FONDO,
    flex: 1,
    marginTop: -525,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
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
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 15,
    color: '#FFFFFF',
  },
  viewwhite: {
    backgroundColor: '#F7F7F7',
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: Platform.OS == 'ios' ? 10 : 12,
  },
  imghabit: {
    width: '92%',
    height: 200,
    borderRadius: 20,
  },
  objectview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: Platform.OS == 'ios' ? 4 : 3,
  },
  viewtext: {
    height: Platform.OS == 'ios' ? 90 : 102,
    width: '80%',
    backgroundColor: 'white',
    marginRight: 5,
    borderRadius: 20,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginBottom: 10,
    marginTop: -30,
    marginLeft: 5,
    flex: 1,
  },
  nameroom: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 5,
    textAlign: 'center',
  },
  minis: {
    fontSize: 13,
    textAlign: 'left',
    paddingLeft: 25,
    paddingTop: 1,
    marginTop: Platform.OS == 'ios' ? 0 : -3,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.PRICE,
    textAlign: 'right',
    paddingRight: 25,
    paddingTop: Platform.OS == 'ios' ? 2 : 0,
    marginTop: Platform.OS == 'ios' ? 0 : -2,
  },
});
