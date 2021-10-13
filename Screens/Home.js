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
} from 'react-native';
import Colors from '../src/utils/colors';
import Data from '../src/utils/minisections';
import Servicios from '../src/utils/icons';
import Redes from '../src/utils/redes';

export default function Home() {
  const [minisection, setMiniSection] = useState(false);
  const [bigsections, setBigSections] = useState(false);
  return (
    <>
      <ScrollView style={styles.container} vertical  showsVerticalScrollIndicator={false}>
        <View style={styles.cBanner}>
          <Image
            style={styles.banner}
            source={require('../src/img/header.png')}
          />
        </View>

        <View style={styles.minisections}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            centerContent={true}
            snapToAlignment="start">
            <FlatList
              horizontal={true}
              data={Data}
              renderItem={({ item }) => (
                <View>
                  <TouchableHighlight
                    underlayColor="rgba(73,182,77,1,0.9)"
                    onPress={() => {
                      setMiniSection(!minisection);
                    }}>
                    <View>
                      <Image style={styles.minione} source={item.img} />
                      <Text style={styles.minit}>{item.text}</Text>
                    </View>
                  </TouchableHighlight>
                </View>
              )}
            />
          </ScrollView>
        </View>

        <View style={styles.bigsections}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            centerContent={true}
            snapToAlignment="start">
            <FlatList
              horizontal={true}
              data={Data}
              renderItem={({ item }) => (
                <View>
                  <View style={styles.bigview}>
                    <View style={styles.secondary}>
                      <Image style={styles.bigone} source={item.img} />
                      <TouchableHighlight
                        underlayColor="rgba(73,182,77,1,0.9)"
                        style={styles.bubblechoice}
                        onPress={() => {
                          setBigSections(!bigsections);
                        }}>
                        <Text style={styles.moreinfo}>MÁS INFO</Text>
                      </TouchableHighlight>
                    </View>
                    <View style={styles.third}>
                      <Text style={styles.bigt}>{item.title}</Text>
                      <Text style={styles.parrafo}>{item.paragraph}</Text>
                    </View>
                  </View>
                </View>
              )}
            />
          </ScrollView>
        </View>

        <View style={styles.servicessection}>
          <View style={styles.titlewhite}>
            <Text style={styles.titleinwhite}>{'\t'}Servicios</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            centerContent={true}
            snapToAlignment="start">
            <FlatList
              horizontal={true}
              data={Servicios}
              renderItem={({ item }) => (
                <View>
                  <View style={styles.circulito}>
                    <Image style={styles.servicio} source={item.code} />
                  </View>
                  <View>
                    <Text style={styles.textservicios}>{item.text}</Text>
                  </View>
                </View>
              )}
            />
          </ScrollView>
        </View>

        <View style={styles.servicessection}>
          <View style={styles.titlewhite}>
            <Text style={styles.titleinwhite}>Contáctanos</Text>
          </View>
        </View>
        <View style={styles.redessection}>
          <FlatList
            horizontal={true}
            data={Redes}
            renderItem={({ item }) => (
              <View style={{ paddingRight: 5, paddingBottom: 40 }}>
                <Image style={styles.redes} source={item.code} />
              </View>
            )}
          />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  cBanner: {
    backgroundColor: Colors.FONDO,
    flexDirection: 'row',
    flex: 1,
    borderBottomLeftRadius: 90,
    paddingLeft: 5,
    height: 260,
    paddingBottom: 3,
    marginLeft: -5,
  },
  banner: {
    height: 250,
    flex: 1,
    borderBottomLeftRadius: 90,
  },
  minione: {
    width: 85,
    height: 85,
    borderRadius: 20,
    marginRight: 10,
  },
  minisections: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 20,
    justifyContent: 'center',
  },
  minit: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.FONDO,
    paddingTop: 5,
    paddingBottom: 5,
    fontFamily: 'RobotoSlab_400Regular',
    flex: 1,
    marginLeft: -10,
  },
  bigsections: {
    flex: 1,
    marginHorizontal: 5,
    marginTop: 10,
    justifyContent: 'center',
  },
  bigview: {
    height: 210,
    width: 355,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginRight: 5,
    borderRadius: 20,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 5,
  },
  bigone: {
    width: '100%',
    height: 165,
    borderRadius: 20,
    marginTop: 10,
    marginLeft: 10,
  },
  secondary: {
    width: '60%',
    height: 210,
    borderRadius: 20,
  },
  third: {
    width: '30%',
    height: 210,
    marginLeft: 20,
  },
  moreinfo: {
    textAlign: 'center',
    backgroundColor: Colors.SAND,
    marginLeft: 55,
    marginRight: 45,
    marginTop: -15,
    borderRadius: 20,
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  bigt: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.FONDO,
    paddingTop: 5,
    marginRight: 5,
    marginTop: 10,
  },
  bubblechoice: {
    height: '100%',
    borderRadius: 10,
    width: '100%',
    paddingBottom: 15,
  },
  parrafo: {
    fontSize: 10.5,
    textAlign: 'justify',
    color: 'black',
    paddingTop: 5,
    marginRight: 3,
    marginTop: 2,
    borderRadius: 20,
  },
  titlewhite: {
    height: 35,
    width: 225,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginRight: 5,
    borderRadius: 20,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginBottom: 10,
    marginTop: 5,
    marginLeft: -20,
  },
  servicessection: {
    flex: 1,
    marginHorizontal: 5,
    marginTop: 10,
  },
  redessection: {
    flex: 1,
    marginHorizontal: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  titleinwhite: {
    color: Colors.FONDO,
    textAlign: 'right',
    paddingLeft: 100,
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 5,
  },
  servicio: {
    width: 45,
    height: 45,
  },
  redes: {
    width: 50,
    height: 50,
  },
  circulito: {
    width: 80,
    height: 80,
    borderRadius: 90,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginRight: 10,
  },
  textservicios: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.FONDO,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10,
    marginRight: 10,
  },
  modalImage: {
    width: '100%',
    height: 200,
    marginTop: 10,
    marginBottom: 10,
  },
  modaltext: {
    marginBottom: 10,
  },
});
