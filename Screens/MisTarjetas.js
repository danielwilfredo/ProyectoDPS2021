import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  FlatList,
  Alert,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import Texto from "../src/utils/texto";
import { app } from "../Database/Firebase";
import { useNavigation } from "@react-navigation/core";
import { auth } from "../Database/Firebase";
import Colors from "../src/utils/colors";
import { render } from "react-dom";

const MisTarjetas = ({ route }) => {
  const navigation = useNavigation();
  const user = auth.currentUser;
  let Elegida;
  const [tarjeta, setTarjeta] = useState({});
  const { informacion } = route.params;
  console.log(informacion);
  useEffect(() => {
    getTarjetas();
  }, []);
  const getTarjetas = async () => {
    app
      .firestore()
      .collection("Tarjetas")
      .where("id", "==", user.uid)
      .onSnapshot(manejarSnapshot);
  };

  const manejarSnapshot = (snapshot) => {
    const tarjetas = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setTarjeta(tarjetas);
  };
  const onPressHandler = (numeroTarjeta) => {
    for (let data of tarjeta) {
      if (data.numeroTarjeta == numeroTarjeta) {
        data.selected = data.selected == null ? true : !data.selected;
      } else {
        data.selected = data.selected == null ? false : false;
      }
    }
    Elegida = numeroTarjeta;
    setTarjeta(tarjeta);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.arriba}
            source={require("../src/img/SandCorner.png")}
          />
        </View>

        <Text style={[styles.texto, {}]}>Mis Tarjetas</Text>
        <View style={styles.viewwhite}>
          <View style={styles.contenidoF}>
            <View style={{ marginVertical: 10 }}>
              <TouchableOpacity
                style={styles.btnOpa}
                onPress={() => navigation.navigate("tarjeta")}
              >
                <View style={styles.btnText}>
                  <View
                    style={{
                      backgroundColor: "#018ABC",
                      height: 53,
                      width: 53,
                      alignItems: "center",
                      borderRadius: 200 / 2,
                      borderColor: "#018ABC",
                      borderStyle: "solid",
                      justifyContent: "center",
                      position: "absolute",
                      left: -14,
                      top: -12,
                    }}
                  ></View>
                  <Icon name="plus" size={29} color="#FFF" />
                  <Text style={styles.negrita}>Añadir Tarjeta</Text>
                  <Icon name="check" size={29} color="#565666" />
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <FlatList
                horizontal={false}
                data={tarjeta}
                renderItem={({ item }) => (
                  <View style={{ marginVertical: 10 }} key={item.numeroTarjeta}>
                    <TouchableOpacity
                      style={styles.btnOpa}
                      onPress={() => {
                        {
                          onPressHandler(item.numeroTarjeta);
                          console.log(tarjeta);
                        }
                      }}
                    >
                      <View style={styles.btnText}>
                        <View
                          style={{
                            backgroundColor: "#018ABC",
                            height: 53,
                            width: 53,
                            alignItems: "center",
                            borderRadius: 200 / 2,
                            borderColor: "#018ABC",
                            borderStyle: "solid",
                            justifyContent: "center",
                            position: "absolute",
                            left: -11,
                            top: -11,
                          }}
                        ></View>
                        <Icon name="credit-card" size={29} color="#FFF" />
                        <View>
                          <Text style={styles.negrita}>
                            {item.nombreTarjeta}
                          </Text>
                        </View>
                        <Icon
                          name="check"
                          size={29}
                          color={item.selected == true ? "#ABEBC6" : "#565666"}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.btnA}
          onPress={() => {
            if (Elegida != undefined) {
              navigation.navigate("Ticket", {
                informacion: informacion,
                numTarjeta: Elegida,
              });
            } else {
              Alert.alert("Error", "Por favor seleccione un método de pago..");
            }
          }}
        >
          <Text style={styles.textoFR}>Reservar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default MisTarjetas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#018ABC",
    padding: 1,
  },
  texto: {
    fontSize: 30,
    color: "white",
    fontWeight: "700",
    textAlign: "left",
    marginBottom: 10,
    marginTop: 50,
    paddingLeft: 15,
  },
  arriba: {
    height: 160,
    width: "100%",
  },
  header: {
    width: "100%",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
  },
  contenidoF: {
    backgroundColor: "#F7F7F7",
    width: "100%",
    height: 350,
    borderRadius: 20,
    alignItems: "center",
    display: "flex",
    marginTop: 30,
  },
  textoFR: {
    fontSize: 17,
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
  },
  btnA: {
    backgroundColor: "#018ABC",
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 18,
    paddingLeft: 18,
    borderRadius: 10,
    width: 250,
    height: 50,
    marginBottom: 100,
    marginLeft: 25,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    left: 50,
  },
  negrita: {
    fontWeight: "bold",
    paddingBottom: 10,
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
  },
  btnOpa: {
    backgroundColor: "#76B7CB",
    height: 45,
    padding: 8,
    width: 300,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    margin: 3,
    paddingBottom: 10,
  },

  btnText: {
    paddingBottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contenedorLogo: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  viewwhite: {
    backgroundColor: "#F7F7F7",
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
