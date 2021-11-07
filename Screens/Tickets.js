import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ScrollView,
  Alert,
  LogBox,
} from "react-native";
import { resize } from "../src/utils/ResizeF";
import { app } from "../Database/Firebase";
import { useNavigation } from "@react-navigation/core";

const Ticket = ({ route }) => {
  const navigation = useNavigation();
  const [error, setError] = useState("");
  const random = Math.floor(Math.random() * 999999);
  const fac = "MR" + random;

  LogBox.ignoreLogs(["Non-serializable"]);
  const {informacion} = route.params
  console.log(informacion)
  const uwu = informacion.FechaRealizacion.toString()
  const spl = uwu.split(' ')
  let mes
  if(spl[1] === 'Nov'){
    mes = '11'
    
  }else if(spl[1] === 'Dec'){
    mes = '12'
  }else if(spl[1] === 'Jan'){
    mes = '01'
  }else if(spl[1] === 'Feb'){
    mes = '02'
  }else if(spl[1] === 'Mar'){
    mes = '03'
  }else if(spl[1] === 'Apr'){
    mes = '04'
  }
  const hoy = spl[2] + "/" + mes + "/" + spl[3];
  const hoy2 = spl[3] + "-" + mes + "-" + spl[2];
  //guardar

  const reservar = async () => {
    let FechaCEntrada = informacion.FechaCEntrada;
    let FechaCSalida = informacion.FechaCSalida;
    let FacturaNumero = fac;
    let FechaEntrada = informacion.FechaEntrada;
    let FechaSalida = informacion.FechaSalida;
    let FechaRealizacion = hoy2;
    let PrecioTotal = informacion.PrecioTotal;
    let idUsuario = informacion.idUsuario;
    let idHabitacion = informacion.idHabitación;
    let ServiciosExtras = informacion.extras.data.map(function ({
      Name,
      Precio,
    }) {
      return { Name, Precio };
    });
    let Reserva = {
      FacturaNumero,
      FechaEntrada,
      FechaSalida,
      FechaRealizacion,
      PrecioTotal,
      idUsuario,
      idHabitacion,
      ServiciosExtras,
      FechaCEntrada,
      FechaCSalida,
    };
    await app.firestore().collection("Reservaciones").add(Reserva);
    navigation.navigate("Confirmacion");
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.arriba}
            source={require("../src/img/arriba.png")}
          />
        </View>

        <Text style={styles.texto}>Facturación</Text>
        <View style={styles.contenidoF}>
          <View styles={styles.contenedorLogo}>
            <Image
              style={styles.logo}
              source={require("../src/img/logoblanco1.png")}
            />
          </View>
          <View style={styles.contenedorTexto}>
            <View>
              <Text style={styles.textoFI}>Factura: #{fac} </Text>
            </View>
            <View>
              <Text style={styles.textoFR}>{hoy}</Text>
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
              <Text style={styles.textoFR}>${informacion.DetallexDias}</Text>
            </View>
          </View>
          <View style={styles.contenedorTexto}>
            <View>
              <Text style={styles.textoFI}>Servicios: </Text>
            </View>
            <View>
              {/* <Text style={styles.textoFR}>${informacion.DetallexServicios}</Text> */}
            </View>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            centerContent={true}
            snapToAlignment="start"
            vertical={true}
            keyExtractor={(item) => item.id.toString()}
            data={informacion.extras.data}
            renderItem={({ item }) => (
              <View style={styles.contenedorTexto}>
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.textoFI2}>- {item.Name} </Text>
                </View>
                <View style={{ marginRight: 52 }}>
                  <Text style={styles.textoFR2}>${item.Precio}</Text>
                </View>
              </View>
            )}
          />
          <View style={styles.contenedorTexto}>
            <View>
              <Text style={styles.textoFI}>Total: </Text>
            </View>
            <View>
              <Text style={styles.textoFR}>${informacion.PrecioTotal}</Text>
            </View>
          </View>
        </View>

        <View style={styles.contenedorBtn}>
          <View>
            <TouchableOpacity style={styles.btnC}>
              <Text
                onPress={() => navigation.navigate("Home")}
                style={styles.textoFR}
              >
                Cancelar
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={reservar} style={styles.btnA}>
              <Text style={styles.textoFR}>Reservar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <Image
            style={styles.abajo}
            source={require("../src/img/abajo.png")}
          />
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
    height: 365,
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
  textoFI2: {
    fontSize: 11,
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
  },
  textoFR2: {
    fontSize: 11,
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
  },
});
