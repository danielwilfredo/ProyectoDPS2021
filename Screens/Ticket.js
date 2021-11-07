import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { resize } from "../src/utils/ResizeF";

import { useNavigation } from "@react-navigation/core";

const Ticket = () => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.arriba} source={require("./img/arriba.png")} />
        </View>

        <Text style={styles.texto}>Facturación</Text>
        <View style={styles.contenidoF}>
          <View styles={styles.contenedorLogo}>
            <Image
              style={styles.logo}
              source={require("./img/logoblanco1.png")}
            />
          </View>
          <View style={styles.contenedorTexto}>
            <View>
              <Text style={styles.textoFI}>Factura:#0000 </Text>
            </View>
            <View>
              <Text style={styles.textoFR}> 03/11/2021</Text>
            </View>
          </View>
          <Text style={[styles.textoF, { marginBottom: 10, fontSize: 20 }]}>
            Detalles
          </Text>
          <View style={styles.contenedorTexto}>
            <View>
              <Text style={styles.textoFI}>Hospedaje: </Text>
            </View>
            <View>
              <Text style={styles.textoFR}>$0.00</Text>
            </View>
          </View>
          <View style={styles.contenedorTexto}>
            <View>
              <Text style={styles.textoFI}>Servicios: </Text>
            </View>
            <View>
              <Text style={styles.textoFR}>$0.00</Text>
            </View>
          </View>
          <View style={styles.contenedorTexto}>
            <View>
              <Text style={styles.textoFI}>Descuentos: </Text>
            </View>
            <View>
              <Text style={styles.textoFR}>$0.00</Text>
            </View>
          </View>
          <View style={styles.contenedorTexto}>
            <View>
              <Text style={styles.textoFI}>Total: </Text>
            </View>
            <View>
              <Text style={styles.textoFR}>$0.00</Text>
            </View>
          </View>
        </View>

        <View style={styles.contenedorBtn}>
          <View>
            <TouchableOpacity style={styles.btnC}>
              <Text style={styles.textoFR}>Cancelar</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.btnA}>
              <Text style={styles.textoFR}>Reservar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <Image style={styles.abajo} source={require("./img/abajo.png")} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Ticket;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#018ABC",
    alignItems: "center",
    justifyContent: "center",
  },
  contenedorLogo: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
  },
  texto: {
    fontSize: 30,
    color: "white",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },
  textoF: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
  },
  contenido: {
    alignItems: "center",
  },
  content: {
    flexDirection: "row",
  },
  abajo: {
    height: 160,
    width: "100%",
  },
  arriba: {
    height: 160,
    width: "100%",
  },
  footer: {
    width: "100%",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  header: {
    width: "100%",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
  },
  contenidoF: {
    backgroundColor: "#76B7CB",
    width: 270,
    height: 350,
    borderRadius: 20,
    alignItems: "center",
    display: "flex",
  },
  contenedorTexto: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "90%",
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
  },
  contenedorBtn: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "65%",
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    marginTop: 10,
  },
  textoFI: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
  },
  textoFR: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
  },
  btnC: {
    backgroundColor: "#FB7979",
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 18,
    paddingLeft: 18,
    borderRadius: 20,
  },
  btnA: {
    backgroundColor: "#02C7DE",
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 18,
    paddingLeft: 18,
    borderRadius: 20,
  },
});
