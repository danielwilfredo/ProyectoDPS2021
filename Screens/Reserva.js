import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  LogBox,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { app } from "../Database/Firebase";
import Colors from "../src/utils/colors";

LogBox.ignoreLogs(["Setting a timer"]);
const Reserva = ({ route }) => {
  const [servicio, setServicio] = useState(null);
  const [reservaciones, setReservas] = useState(null);

  useEffect(() => {
    getServicios();
    getReservaciones();
  }, []);
  const getServicios = async () => {
    app.firestore().collection("ServiciosExtras").onSnapshot(manejarSnapshot);
  };
  const getReservaciones = async () => {
    app
      .firestore()
      .collection("Reservaciones")
      .where("idHabitacion", "==", habitacion.id)
      .onSnapshot(manejarSnapshotR);
  };

  const manejarSnapshot = (snapshot) => {
    const servicios = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setServicio(servicios);
  };

  const manejarSnapshotR = (snapshot) => {
    const resr = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setReservas(resr);
  };

  const navigation = useNavigation();
  const { habitacion } = route.params;
  const numColumns = 5;

  return (
    <>
      <ScrollView>
        <View style={styles.cBanner}>
          <Image style={styles.banner} source={{ uri: habitacion.url }} />
        </View>

        <View style={styles.mt}>
          <Text style={styles.titlesReserva}>{habitacion.Name}</Text>
          <Text style={styles.textoInfo}>{habitacion.Descripcion}</Text>
        </View>
        <View style={styles.mt}>
          <Text style={styles.titlesReserva}>Servicios</Text>
          <View style={styles.viewReserva}>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              scrollEnabled={false}
              numColumns={numColumns}
              style={{ flexDirection: "row", flexWrap: "wrap" }}
              data={habitacion.Servicios}
              renderItem={({ item }) => (
                <View
                  style={{
                    justifyContent: "flex-end",
                    borderRadius: 5,
                    padding: 6,
                  }}
                >
                  <View style={styles.circuloServicios}>
                    <Image
                      style={{ width: 35, height: 35 }}
                      source={{ uri: item.service }}
                    />
                  </View>
                  <Text style={styles.textoServicios}>
                    {item.servicename.replace("\\n", "\n")}
                  </Text>
                </View>
              )}
            />
          </View>
        </View>

        <View style={{ marginTop: -20 }}>
          <Text style={styles.titlesReserva}>Galeria</Text>
          <View style={styles.minisections}>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              horizontal={true}
              data={habitacion.Gallery}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View>
                  <TouchableHighlight underlayColor="rgba(73,182,77,1,0.9)">
                    <View>
                      <Image style={styles.minione} source={{ uri: item }} />
                    </View>
                  </TouchableHighlight>
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
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
          width: "98%",
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
          position: "absolute",
          bottom: 10,
          top: "92%",
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
          onPress={() =>
            navigation.navigate("Reservacion2", {
              habitaciones: habitacion,
              servicios: servicio,
              reservas: reservaciones,
            })
          }
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#fff",
              padding: 5,
            }}
            onPress={() =>
              navigation.navigate("Reservacion2", {
                habitaciones: habitacion,
                servicios: servicio,
                reservas: reservaciones,
              })
            }
          >
            Reservar
          </Text>
        </TouchableOpacity>
      </View>
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
    textAlign: "justify",
    marginRight: 5,
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
    fontSize: 10,
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 2,
    height: 40,
    color: Colors.FONDO,
  },
  viewReserva: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    margin: 5,
    alignItems: "center",
    marginTop: -10,
  },
  minione: {
    width: 85,
    height: 120,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 90,
  },
  minisections: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 15,
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
  gridView: {
    marginTop: 10,
    flex: 1,
  },
});
