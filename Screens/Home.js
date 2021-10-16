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
  TouchableOpacity,
  Linking,
} from 'react-native';
import Colors from '../src/utils/colors';
import Data from '../src/utils/minisections';
import Servicios from '../src/utils/icons';
import Redes from '../src/utils/redes';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { SliderBox } from 'react-native-image-slider-box';

export default function Home() {
  const [bigsections, setBigSections] = useState(false);
  const [currentitem, setCurrentItem] = useState([]);

  return (
    <>
      <ScrollView
        style={styles.container}
        vertical
        showsVerticalScrollIndicator={false}>
        <Modal
          animationType="slide"
          visible={bigsections}
          onRequestClose={() => {
            if (bigsections) {
              setBigSections(!bigsections);
            }
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <View style={styles.headerModal}>
                <Text style={styles.modaltitulo}>{currentitem.title}</Text>
              </View>
              <View style={styles.modalImage}>
                <SliderBox
                  dotColor={Colors.PRICE}
                  inactiveDotColor={Colors.SAND}
                  images={currentitem.extras}
                  sliderBoxHeight={250}
                  autoplay
                  circleLoop
                  resizeMethod={'resize'}
                  resizeMode={'cover'}
                  paginationBoxStyle={{
                    position: 'absolute',
                    bottom: 0,
                    padding: 0,
                    alignItems: 'center',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    paddingVertical: 10,
                  }}
                  dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    padding: 0,
                    margin: 0,
                    backgroundColor: Colors.SAND,
                  }}
                  ImageComponentStyle={{
                    width: '100%',
                  }}
                />
              </View>
              <View style={styles.boxtextmodal}>
                <Text style={styles.modaltext}>{currentitem.complete}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            underlayColor="rgba(73,182,77,1,0.9)"
            style={styles.buttonclose}
            onPress={() => {
              setBigSections(!bigsections);
              console.log('close');
            }}>
            <Image
              style={styles.ex}
              source={require('../src/img/borrar.png')}
            />
          </TouchableOpacity>
        </Modal>

        <View style={styles.cBanner}>
          <Image
            style={styles.banner}
            source={require('../src/img/header.png')}
          />
        </View>

        <View style={styles.bigsections}>
          <SwiperFlatList
            autoplay
            autoplayDelay={7}
            autoplayLoop
            autoplayLoopKeepAnimation={true}
            index={0}
            showPagination
            paginationActiveColor={Colors.SAND}
            paginationDefaultColor={Colors.FONDO}
            horizontal={true}
            data={Data}
            renderItem={({ item }) => (
              <View style={{ marginBottom: 30 }}>
                <View style={styles.bigview}>
                  <View style={styles.secondary}>
                    <Image style={styles.bigone} source={item.img} />
                    <TouchableHighlight
                      underlayColor="rgba(73,182,77,1,0.9)"
                      style={styles.bubblechoice}
                      onPress={() => {
                        setBigSections(!bigsections);
                        setCurrentItem(item);
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
        </View>

        <View style={styles.servicessection}>
          <View style={styles.titlewhite}>
            <Text style={styles.titleinwhite}>{'\t'}Servicios</Text>
          </View>
          <SwiperFlatList
            style={{ marginHorizontal: 5 }}
            autoplay
            autoplayDelay={10}
            autoplayLoop
            autoplayLoopKeepAnimation={true}
            index={0}
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
        </View>

        <View style={styles.servicessection}>
          <View style={styles.titlewhite}>
            <Text style={styles.titleinwhite}>Contáctanos</Text>
          </View>
        </View>
        <View style={styles.redessection}>
          <FlatList
          keyExtractor={(item,index)=> index.toString()}
            horizontal={true}
            data={Redes}
            renderItem={({ item }) => (
              <TouchableHighlight
                underlayColor="rgba(73,182,77,1,0.9)"
                onPress={() => {
                  Linking.openURL(item.text);
                }}>
                <View style={{ paddingRight: 5, paddingBottom: 40 }}>
                  <Image style={styles.redes} source={item.code} />
                </View>
              </TouchableHighlight>
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
    width: 60,
    height: 60,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  minisections: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  minit: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.FONDO,
    paddingTop: 5,
    paddingBottom: 5,
    flex: 1,
    marginLeft: -10,
  },
  bigsections: {
    flex: 1,
    marginHorizontal: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  bigview: {
    height: 210,
    width: Platform.OS == 'ios' ? 355 : 375,
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
    marginLeft: -40,
  },
  servicessection: {
    flex: 1,
    marginHorizontal: 5,
    marginTop: 8,
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
    height: 255,
    marginTop: 0,
    marginBottom: 10,
  },
  boxtextmodal: {
    margin: 15,
    position: Platform.OS == 'ios' ? 'absolute' : 'relative',
    marginTop: Platform.OS == 'ios' ? 410 : 15,
  },
  modaltext: {
    textAlign: 'justify',
    fontSize: 15,
  },
  Modal: {
    marginTop: -10,
    marginBottom: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    flex: 1,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  headerModal: {
    backgroundColor: Colors.FONDO,
    height: Platform.OS == 'ios' ? 125 : 90,
    width: '100%',
    marginBottom: 0,
    flexDirection: 'row',
    marginTop: 9,
    justifyContent: 'space-between',
  },
  modaltitulo: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: Platform.OS == 'ios' ? 90 : 40,
    marginLeft: 20,
  },
  buttonclose: {
    width: 28,
    height: 28,
    backgroundColor: 'white',
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS == 'ios' ? 45 : 15,
    marginRight: Platform.OS == 'ios' ? 15 : 10,
    position: 'absolute',
    marginLeft: Dimensions.get('screen').width - 40,
  },
  ex: {
    width: 15,
    height: 15,
  },
});
