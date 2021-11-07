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
  FlatList,LogBox
} from "react-native";
import { resize } from "../src/utils/ResizeF";
import { useNavigation } from "@react-navigation/core";
import Buttons from "../components/Buttons";
import { app } from "../Database/Firebase";
import { AuthContext } from "../src/Context/AuthContext";
import { auth } from "../Database/Firebase";



const MisReservaciones = () => {
  LogBox.ignoreLogs(["VirtualizedLists"]);
  const navigation = useNavigation();
  const [reservacion, setReservacion] = useState(null);
  const [reservacionpasada, setReservacionPasada] = useState(null);
  const user = auth.currentUser;

  useEffect(() => {
    getReservaciones();
    getReservacionesPasadas();
  }, []);

  const getReservaciones = async () => {
    app.firestore().collection("Reservaciones").where("idUsuario", "==", user.uid).onSnapshot(manejarSnapshot1);
  };
  const manejarSnapshot1 = async(snapshot) => {
    const reservaciones = []


     await Promise.all(snapshot.docs.map(async(doc) => {
       const habitacion = await app.firestore().collection('Habitaciones').doc(doc.data().idHabitacion).get().then(snasho =>{
          return{
            id: doc.id,
            habitacion: snasho.data(),
            ...doc.data()
          }
       })
       reservaciones.push(habitacion)
    })) 
    
    setReservacion(reservaciones)
    
  };

  const getReservacionesPasadas = async () => {
    app.firestore().collection('Habitaciones').onSnapshot(manejarSnapshot2)
  };

  const manejarSnapshot2 = (snapshot) => {
    const reservacionespasadas = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setReservacionPasada(reservacionespasadas);
  };

  console.log(reservacion)
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
        <ScrollView style={styles.viewwhite}>
          <View style={styles.container}>
            <View style={styles.mt}>
              <Text style={styles.titlesReserva}>Pendientes: </Text>

              {reservacion ? (
                <FlatList
                vertical={true}
                data={reservacion}
                renderItem={({ item }) => (
                  <TouchableOpacity activeOpacity={0.85} onPress={() => navigation.navigate("Ver",{habitacion: item.habitacion, FechaI: item.FechaEntrada, FechaF: item.FechaSalida, Precio: item.PrecioTotal})}>
                  <View style={styles.contenedorMisR}>
                    <Image
                      style={styles.minione}
                      source={{ uri: item.habitacion.url }}
                    />
                    <View style={styles.contenedorMisRmini}>
                      <Text style={styles.titlesMReserva}>
                        {item.habitacion.Name}
                      </Text>
                      <Text style={styles.misRtext}>Fecha Entrada: {item.FechaEntrada}</Text>
                      <Text style={styles.misRtext}>Fecha Salida: {item.FechaSalida}</Text>
                      <Text style={styles.misRtext}>
                        {item.habitacion.Huespuedes} huesped(es), {item.habitacion.Camas} cama(s), {item.habitacion.Baños} baño(s)
                      </Text>
                      {/* <View onPress={() => navigation.navigate("Ver",{habitacion: item.habitacion, FechaI: item.FechaEntrada, FechaF: item.FechaSalida, Precio: item.PrecioTotal})} style={styles.btnVer}>
                        <TouchableNativeFeedback
                          onPress={() => navigation.navigate("Ver",{habitacion: item.habitacion, FechaI: item.FechaEntrada, FechaF: item.FechaSalida, Precio: item.PrecioTotal})}
                        >
                          <Text style={styles.btnTextVer}>Ver</Text>
                        </TouchableNativeFeedback>
                      </View> */}
                    </View>
                  </View>
                  </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
              ) : <Text>Cargando reservaciones...</Text>}

            </View>



            {/* <View style={styles.mt}>
              <Text style={styles.titlesReserva}>Pasadas: </Text>
              <FlatList
                vertical={true}
                data={reservacionpasada}
                renderItem={({ item }) => (
                  <View style={styles.contenedorMisR}>
                    <Image
                      style={styles.minione}
                      source={require("../src/img/room4.jpg")}
                    />
                    <View style={styles.contenedorMisRmini}>
                      <Text style={styles.titlesMReserva}>
                        {item.idHabitacion}
                      </Text>
                      <Text style={styles.misRtext}>Fecha Entrada: {item.FechaEntrada}</Text>
                      <Text style={styles.misRtext}>Fecha Salida: {item.FechaSalida} </Text>
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

                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View> */}
          </View>
        </ScrollView>
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
    marginTop: -520,
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
    height: 130,
    borderRadius: 20,
    marginRight: 15,
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
    position: 'absolute',
    bottom: -50,
    right: 4

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