import React from "react";
import {Text,View,TouchableHighlight,TouchableOpacity,StyleSheet,Image,ScrollView,} from "react-native";
import { useNavigation } from '@react-navigation/core';

const Reserva = ({route}) => {
  
  
  const navigation = useNavigation()
  const {habitacion} = route.params
  console.log(habitacion)
  return (
    <>
      <ScrollView>
        <View style={styles.cBanner}>
          <Image
            style={styles.banner}
            source={{uri: habitacion.url}}
          />
        </View>

        <View style={styles.mt}>
          <Text style={styles.titlesReserva}>{habitacion.Name}</Text>
          <Text style={styles.textoInfo}>
            {habitacion.Descripcion}
          </Text>
        </View>
        <View style={styles.mt}>
          <Text style={styles.titlesReserva}>Servicios</Text>
          <View style={styles.viewReserva}>
            <View
              style={{
                flexBasis: "18%",
              }}
            >
              <View style={styles.circuloServicios}>
                <Image
                  style={{ width: 40, height: 40 }}
                  source={{uri: habitacion.Servicios[0]}}
                />
              </View>
              <Text style={styles.textoServicios}>Piscinas</Text>
            </View>
            <View style={{ flexBasis: "18%" }}>
              <View style={styles.circuloServicios}>
                <Image
                  style={{ width: 40, height: 40 }}
                  source={{uri: habitacion.Servicios[1]}}
                />
              </View>
              <Text style={styles.textoServicios}>Spa</Text>
            </View>
            <View
              style={{
                flexBasis: "18%",
              }}
            >
              <View style={styles.circuloServicios}>
                <Image
                  style={{ width: 40, height: 40 }}
                  source={{uri: habitacion.Servicios[2]}}
                />
              </View>
              <Text style={styles.textoServicios}>Lavanderia</Text>
            </View>
            <View
              style={{
                flexBasis: "18%",
              }}
            >
              <View style={styles.circuloServicios}>
                <Image
                  style={{ width: 40, height: 40 }}
                  source={{uri: habitacion.Servicios[3]}}
                />
              </View>
              <Text style={styles.textoServicios}>Parking</Text>
            </View>
            <View
              style={{
                flexBasis: "18%",
              }}
            >
              <View style={styles.circuloServicios}>
                <Image
                  style={{ width: 40, height: 40 }}
                  source={{uri: habitacion.Servicios[4]}}
                />
              </View>
              <Text style={styles.textoServicios}>Servicio de Streaming</Text>
            </View>
            <View
              style={{
                flexBasis: "18%",
              }}
            >
              <View style={styles.circuloServicios}>
                <Image
                  style={{ width: 40, height: 40 }}
                  source={{uri: habitacion.Servicios[5]}}
                />
              </View>
              <Text style={styles.textoServicios}>Wifi</Text>
            </View>
            <View
              style={{
                flexBasis: "18%",
              }}
            >
              <View style={styles.circuloServicios}>
                <Image
                  style={{ width: 40, height: 40 }}
                  source={{uri: habitacion.Servicios[6]}}
                />
              </View>
              <Text style={styles.textoServicios}>Enfermeria</Text>
            </View>
            <View
              style={{
                flexBasis: "18%",
              }}
            >
              <View style={styles.circuloServicios}>
                <Image
                  style={{ width: 40, height: 40 }}
                  source={{uri: habitacion.Servicios[7]}}
                />
              </View>
              <Text style={styles.textoServicios}>Espacios Deportivos</Text>
            </View>
            <View
              style={{
                flexBasis: "19%",
              }}
            >
              <View style={styles.circuloServicios}>
                <Image
                  style={{ width: 40, height: 40 }}
                  source={{uri: habitacion.Servicios[8]}}
                />
              </View>
              <Text style={styles.textoServicios}>Transporte</Text>
            </View>
            <View
              style={{
                flexBasis: "18%",
              }}
            >
              <View style={styles.circuloServicios}>
                <Image
                  style={{ width: 40, height: 40 }}
                  source={{uri: habitacion.Servicios[9]}}
                />
              </View>
              <Text style={styles.textoServicios}>Barra Libre</Text>
            </View>
          </View>
        </View>

        <View style={styles.mt}>
          <Text style={styles.titlesReserva}>Galeria</Text>
          <View style={styles.minisections}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              centerContent={true}
              snapToAlignment="start"
            >
              <View>
                <TouchableHighlight underlayColor="rgba(73,182,77,1,0.9)">
                  <View>
                    <Image
                      style={styles.minione}
                      source={{uri: habitacion.Gallery[0]}}
                    />
                    <Text style={styles.minit}></Text>
                  </View>
                </TouchableHighlight>
              </View>

              <View>
                <TouchableHighlight underlayColor="rgba(73,182,77,1,0.9)">
                  <View>
                    <Image
                      style={styles.minione}
                      source={{uri: habitacion.Gallery[1]}}
                    />
                    <Text style={styles.minit}></Text>
                  </View>
                </TouchableHighlight>
              </View>
              <View>
                <TouchableHighlight underlayColor="rgba(73,182,77,1,0.9)">
                  <View>
                    <Image
                      style={styles.minione}
                      source={{uri: habitacion.Gallery[2]}}
                    />
                    <Text style={styles.minit}></Text>
                  </View>
                </TouchableHighlight>
              </View>
              <View>
                <TouchableHighlight underlayColor="rgba(73,182,77,1,0.9)">
                  <View>
                    <Image
                      style={styles.minione}
                      source={{uri: habitacion.Gallery[3]}}
                    />
                    <Text style={styles.minit}></Text>
                  </View>
                </TouchableHighlight>
              </View>
              <View>
                <TouchableHighlight underlayColor="rgba(73,182,77,1,0.9)">
                  <View>
                    <Image
                      style={styles.minione}
                      source={{uri: habitacion.Gallery[4]}}
                    />
                    <Text style={styles.minit}></Text>
                  </View>
                </TouchableHighlight>
              </View>
            </ScrollView>
          </View>
        </View>
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 15,
            flexDirection: "row",
            paddingLeft: 10,
            paddingRight: 10,
            backgroundColor: "#fff",
            height: 60,
            marginRight: 5,
            marginLeft: 5,
            borderRadius: 15,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
          }}
        >
          <Text style={{ color: "#018ABC", fontSize: 25, fontWeight: "bold" }}>
          ${habitacion.Precio}/día
          </Text>
          <TouchableOpacity
            style={{
              width: 182,
              height: 44,
              backgroundColor: "#018ABC",
              justifyContent: "center",
              borderRadius: 15,
              alignItems: "center",
            }}
            onPress={() => navigation.navigate('Reservacion2',{habitaciones: habitacion})}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#fff",
                padding: 5,
              }}
            >
              Reservar
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default Reserva;

const styles = StyleSheet.create({
  cBanner: {
    backgroundColor: "#018abc",
    flexDirection: "row",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingBottom: 5,
  },
  banner: {
    height: 250,
    flex: 1,
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
    borderWidth: 2,
  },
  titlewhite: {
    height: 35,
    width: 225,
    flexDirection: "row",
    backgroundColor: "white",
    marginRight: 5,
    borderRadius: 20,
    elevation: 6,
    shadowColor: "#000",
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

  titleinwhite: {
    color: "#018ABC",
    textAlign: "right",
    paddingLeft: 100,
    fontWeight: "bold",
    fontSize: 16,
    paddingTop: 5,
  },
  negrita: {
    fontWeight: "bold",
  },
  miPerfil: {
    textAlign: "left",
    fontSize: 35,
    fontWeight: "bold",
    color: "#FFF",
    paddingLeft: 15,
    paddingBottom: 10,
  },
  btnOpa: {
    backgroundColor: "#ffffff",
    height: 59,
    padding: 8,
    width: 392,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    margin: 3,
  },
  userText: {
    textAlign: "center",
    fontSize: 36,
    color: "#018ABC",
    fontWeight: "bold",
  },
  userName: {
    textAlign: "center",
    fontSize: 18,
    color: "#018ABC",
    marginBottom: 25,
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderColor: "#018ABC",
    borderWidth: 3,
    marginLeft: "30%",
    marginRight: "30%",
  },
  vistaC: {
    backgroundColor: "#E5E5E5",
    paddingTop: 50,
    paddingBottom: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  btnText: {
    color: "#565666",
    fontSize: 23,
  },
  titlesReserva: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#018ABC",
    marginLeft: 15,
  },
  mt: {
    marginTop: 10,
  },
  textoInfo: {
    fontSize: 14,
    paddingLeft: 15,
    paddingRight: 3,
    textAlign: 'justify',
    marginRight: 5
  },
  circuloServicios: {
    backgroundColor: "#fff",
    width: 60,
    height: 60,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  textoServicios: {
    textAlign: "center",
    fontSize: 12,
    marginBottom: 10,
    marginTop: 10,
  },
  viewReserva: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    margin: 5,
    alignItems: "center",
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
    justifyContent: "center",
  },
  minit: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
    color: "red",
    paddingTop: 5,
    paddingBottom: 5,
    flex: 1,
    marginLeft: -10,
  },
});
