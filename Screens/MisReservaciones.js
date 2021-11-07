import React from "react";
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
} from "react-native";
import { resize } from "../src/utils/ResizeF";
import { useNavigation } from "@react-navigation/core";
import Buttons from "../components/Buttons";

const MisReservaciones = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.v1}>
        <ImageBackground
          source={require("../src/img/SandCorner2.png")}
          resizeMode="contain"
          style={styles.image}
        ></ImageBackground>
        <View style={styles.vtitle}>
          <Text style={styles.title}>Mis Reservaciones</Text>
        </View>
      </View>
      <ScrollView
        style={styles.fondo}
        vertical
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          overflow: "hidden",
          height: "100%",
          backgroundColor: "#F7F7F7",
        }}
      >
        <View style={styles.viewwhite}>
          <View style={styles.container}>
            <View style={styles.mt}>
              <Text style={styles.titlesReserva}>Pendientes: </Text>
              <View style={styles.contenedorMisR}>
                <Image
                  style={styles.minione}
                  source={require("../src/img/room4.jpg")}
                />
                <View style={styles.contenedorMisRmini}>
                  <Text style={styles.titlesMReserva}>
                    Nombre de Habitación
                  </Text>
                  <Text style={styles.misRtext}>Fecha Entrada: </Text>
                  <Text style={styles.misRtext}>Fecha Salida: </Text>
                  <Text style={styles.misRtext}>
                    #huespedes, #camas, #baños, algo mmas
                  </Text>
                  <Text style={styles.misRtext}>Informacion adicional* s</Text>
                  <View style={styles.btnVer}>
                    <TouchableNativeFeedback
                      onPress={() => navigation.navigate("tarjeta")}
                    >
                      <Text style={styles.btnTextVer}>Ver otr</Text>
                    </TouchableNativeFeedback>
                  </View>
                </View>
              </View>
              <View style={styles.contenedorMisR}>
                <Image
                  style={styles.minione}
                  source={require("../src/img/room4.jpg")}
                />
                <View style={styles.contenedorMisRmini}>
                  <Text style={styles.titlesMReserva}>
                    Nombre de Habitación
                  </Text>
                  <Text style={styles.misRtext}>Fecha Entrada: </Text>
                  <Text style={styles.misRtext}>Fecha Salida: </Text>
                  <Text style={styles.misRtext}>
                    #huespedes, #camas, #baños, algo mmas
                  </Text>
                  <Text style={styles.misRtext}>Informacion adicional* s</Text>
                  <View style={styles.btnVer}>
                    <TouchableNativeFeedback
                      onPress={() => navigation.navigate("Ver")}
                    >
                      <Text style={styles.btnTextVer}>Ver</Text>
                    </TouchableNativeFeedback>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.mt}>
              <Text style={styles.titlesReserva}>Pasadas: </Text>
              <View style={styles.contenedorMisR}>
                <Image
                  style={styles.minione}
                  source={require("../src/img/room4.jpg")}
                />
                
                <View style={styles.contenedorMisRmini}>
                  <Text style={styles.titlesMReserva}>
                    Nombre de Habitación
                  </Text>
                  <Text style={styles.misRtext}>Fecha Entrada: </Text>
                  <Text style={styles.misRtext}>Fecha Salida: </Text>
                  <Text style={styles.misRtext}>
                    #huespedes, #camas, #baños, algo mmas
                  </Text>
                  <Text style={styles.misRtext}>Informacion adicional* s</Text>
                  <View style={styles.btnVer}>
                    <TouchableNativeFeedback
                      onPress={() => navigation.navigate("Ver")}
                    >
                      <Text style={styles.btnTextVer}>Ver</Text>
                    </TouchableNativeFeedback>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default MisReservaciones;

const styles = StyleSheet.create({
  containerElements: {
    width: "100%",
    height: resize(300, "h"),
  },
  image: {
    flex: 1,
    width: "100%",
    height: 200,
    marginTop: -70,
  },
  v1: {
    flex: 1,
    backgroundColor: "#018ABC",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  vtitle: {
    flex: 1,
    marginTop: Platform.OS == "ios" ? 60 : 50,
    backgroundColor: "transparent",
    position: "absolute",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginLeft: 15,
    color: "#FFFFFF",
    paddingTop: 10,
  },
  fondo: {
    backgroundColor: "#018ABC",
    flex: 1,
    marginTop: -550,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },
  viewwhite: {
    backgroundColor: "#F7F7F7",
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: Platform.OS == "ios" ? 10 : 12,
  },
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    marginTop: 5,
    padding: 5,
    marginBottom: 10,
  },
  titlesReserva: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#018ABC",
    marginLeft: 15,
    marginBottom: 10,
  },
  titlesMReserva: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#018ABC",
  },
  mt: {
    marginTop: 10,
  },
  textoInfo: {
    fontSize: 14,
    paddingLeft: 15,
    paddingRight: 3,
  },
  minione: {
    width: 100,
    height: 145,
    borderRadius: 20,
    marginRight: 10,
    marginLeft: 18,
  },
  misRtext: {
    fontSize: 12,
  },
  btnVer: {
    alignSelf: "flex-end",
    marginRight: resize(1),
    width: resize(60),
    height: resize(44),
    backgroundColor: "#018ABC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: resize(15),
  },
  btnTextVer: {
    fontSize: 18,
    color: "#F7F7F7",
    fontWeight: "bold",
  },
  contenedorMisR: {
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
    flexDirection: "row",
    height: resize(150),
    width: resize(358),
    marginRight: 5,
    marginLeft: 5,
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  contenedorMisRmini: {
    marginRight: 15,
    width: resize(230),
  },
});
