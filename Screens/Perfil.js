import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import React, { useState, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Platform,
  ImageBackground,
} from "react-native";
import Colors from "../src/utils/colors";
import { AuthContext } from "../src/Context/AuthContext";
import { auth } from "../Database/Firebase";
import { useNavigation } from "@react-navigation/core";

export default function Perfil() {
  const navigation = useNavigation();
  const logOut = () => {
    auth
      .signOut()
      .then(() => {
        cerrarSesion();
      })
      .catch((error) => alert(error.message));
  };
  const { cerrarSesion, foto, nombre, correo } = useContext(AuthContext);
  const user = auth.currentUser;
  console.log(user);
  return (
    <>
      <View style={styles.v1}>
        <ImageBackground
          source={require("../src/img/SandCorner2.png")}
          resizeMode="contain"
          style={styles.image}
        ></ImageBackground>
        <View style={styles.vtitle}>
          <Text style={styles.title}>Mi Perfil</Text>
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
        <View style={styles.raya}></View>
        <View style={styles.viewwhite}>
          <Image
            source={foto ? { uri: foto } : require("../src/img/user1.png")}
            style={styles.profilePic}
          />

          <Text style={styles.userText}>{nombre ? nombre : "Anónimo"}</Text>

          <Text style={styles.userName}>{user.email}</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("Editar")}
            style={styles.btnOpa}
          >
            <View style={styles.btnText}>
              <Icon
                name="account-edit"
                type="material-community"
                size={32}
                color="#565666"
              />
              <Text style={styles.negrita}>{"\t"}Editar Perfil</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOpa}>
            <View style={styles.btnText}>
              <Icon
                name="calendar-month"
                type="material-community"
                size={32}
                color="#565666"
              />

              <Text style={styles.negrita}>{"\t"}Mis Reservaciones</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOpa}>
            <View style={styles.btnText}>
              <Icon
                name="credit-card-check"
                type="material-community"
                size={32}
                color="#565666"
              />

              <Text style={styles.negrita}>{"\t"}Mis Formas de Pago</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOpa}>
            <View style={styles.btnText}>
              <Icon
                name="lock-reset"
                type="material-community"
                size={32}
                color="#565666"
              />
              <Text style={styles.negrita}>{"\t"}Cambiar Contraseña</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOpa} onPress={logOut}>
            <View style={styles.btnText}>
              <Icon
                name="logout"
                type="material-community"
                size={32}
                color="#565666"
              />

              <Text style={styles.negrita}>{"\t"}Cerrar Sesión</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
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
    fontSize: 23,
    color: "#565666",
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
    width: "95%",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    margin: 3,
    justifyContent: "center",
    alignSelf: "center",
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
    borderWidth: 5,
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
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "baseline",
  },
  fondo: {
    backgroundColor: "white",
    flex: 1,
    marginTop: -525,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    width: "100%",
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
    marginTop: Platform.OS == "ios" ? 60 : 50,
    backgroundColor: "transparent",
    position: "absolute",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginLeft: 15,
    color: "#FFFFFF",
  },
  viewwhite: {
    backgroundColor: "#F7F7F7",
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: Platform.OS == "ios" ? 10 : 12,
  },
  imghabit: {
    width: "92%",
    height: 200,
    borderRadius: 20,
  },
  objectview: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: Platform.OS == "ios" ? 4 : 3,
  },
  viewtext: {
    height: Platform.OS == "ios" ? 90 : 102,
    width: "80%",
    backgroundColor: "white",
    marginRight: 5,
    borderRadius: 20,
    elevation: 6,
    shadowColor: "#000",
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
    fontWeight: "bold",
    paddingTop: 5,
    textAlign: "center",
  },
  minis: {
    fontSize: 13,
    textAlign: "left",
    paddingLeft: 25,
    paddingTop: 1,
    marginTop: Platform.OS == "ios" ? 0 : -3,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.PRICE,
    textAlign: "right",
    paddingRight: 25,
    paddingTop: Platform.OS == "ios" ? 2 : 0,
    marginTop: Platform.OS == "ios" ? 0 : -2,
  },
});
