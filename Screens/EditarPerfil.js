import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const EditarPerfil = () => {
  return (
    <>
      <View>
        <Image
          source={require("../img/mulan.jpg")}
          style={styles.imgP}
        />
        <Text
          style={styles.editarP}
        >
          Editar Perfil
        </Text>

        <View
          style={styles.ViewCont}
        >
          <Input
            style={styles.textoInput}
            placeholder="Jocelyn Cornejo"
            placeholderTextColor="#ECE5DB"
            inputContainerStyle={{ borderBottomWidth: 0 }}
            leftIcon={
              <Icon
                style={styles.cardIcon}
                name="id-card"
                size={30}
                color="#018ABC"
              />
            }
          />
        </View>
        <View
          style={styles.ViewCont}
        >
          <Input
            style={styles.textoInput}
            placeholder="jocornejo"
            placeholderTextColor="#ECE5DB"
            inputContainerStyle={{ borderBottomWidth: 0 }}
            leftIcon={
              <Icon
                style={styles.userIcon}
                name="user"
                size={30}
                color="#018ABC"
              />
            }
          />
        </View>
        <View
          style={styles.ViewCont}
        >
          <Input
            style={styles.textoInput}
            placeholder="**********"
            placeholderTextColor="#ECE5DB"
            secureTextEntry={true}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            leftIcon={
              <Icon
                style={styles.passIcon}
                name="key"
                size={30}
                color="#018ABC"
              />
            }
          />
        </View>
        <View
          style={styles.ViewCont}
        >
          <Input
            style={styles.textoInput}
            placeholder="jocornejo@gmail.com"
            placeholderTextColor="#ECE5DB"
            inputContainerStyle={{ borderBottomWidth: 0 }}
            leftIcon={
              <Icon
                style={styles.emailIcon}
                name="envelope"
                size={30}
                color="#018ABC"
              />
            }
          />
        </View>
        <TouchableOpacity style={styles.btnGuardar}>
          <Text
            style={{ textAlign: "center", fontSize: 25, fontWeight: "400" }}
          >
            Guardar
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default EditarPerfil;

const styles = StyleSheet.create({
  negrita: {
    fontWeight: "bold",
  },
  btnGuardar: {
    backgroundColor: "#ECE5DB",
    height: 59,
    padding: 8,
    width: 286,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    //marginLeft: "15%",
    marginTop: 25,
    alignSelf: 'center',
  },
  emailIcon: {
    backgroundColor: "#fff",
    width: 53,
    height: 53,
    padding: 11,
    paddingLeft: 12,
    borderRadius: 50,
    marginLeft: -11,
  },
  textoInput: {
    backgroundColor: "#74b4cc",
    color: "#ffffff",
    fontWeight: "bold",
    paddingLeft: 10,
  },
  passIcon:{
    backgroundColor: "#fff",
    width: 53,
    height: 53,
    padding: 11,
    paddingLeft: 15,
    borderRadius: 50,
    marginLeft: -11,
  },
  userIcon:{
    backgroundColor: "#fff",
    width: 53,
    height: 53,
    padding: 11,
    paddingLeft: 15,
    borderRadius: 50,
    marginLeft: -11,
  },
  cardIcon:{
    backgroundColor: "#fff",
    width: 53,
    height: 53,
    padding: 11,
    paddingLeft: 8.5,
    borderRadius: 50,
    marginLeft: -11,
  },
  ViewCont:{
    backgroundColor: "#74b4cc",
    height: 50,
    width: 323,
    borderRadius: 25,
    //marginLeft: "10%",
    margin: 10,
    alignSelf: 'center',
  },
  editarP:{
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF",
    marginTop: 10,
    marginBottom: 50,
  },
  imgP:{
    width: 140,
    height: 140,
    borderRadius: 100,
    borderColor: "#018ABC",
    borderWidth: 3,
    marginLeft: "33%",
    marginRight: "33%",
  }
});
