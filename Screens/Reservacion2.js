import { StatusBar } from "expo-status-bar";
import React, { useState, Component, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
  Platform,
  FlatList,
  ImageBackground,
  LogBox,
  Alert,
} from "react-native";
import Colors from "../src/utils/colors";
import CalendarPicker from "react-native-calendar-picker";
import { auth } from "../Database/Firebase";
import Alerts from "../components/Alerts";
export default class Reservacion2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: "| una Seleccione fecha",
      selectedEndDate: "| una Seleccione fecha",
      selectedItem: null,
      renderData: this.props.route.params.servicios,
      totalservicio: 0,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }
  onPressHandler(id) {
    let renderData = [...this.state.renderData];
    for (let data of renderData) {
      if (data.id == id) {
        data.selected = data.selected == null ? true : !data.selected;
        break;
      }
    }
    this.setState({ renderData });
  }

  RecogerService(amount) {
    let actual = this.state.totalservicio;
    actual += amount;
    if (actual < 0) {
      actual = 0;
    }
    this.setState({ totalservicio: actual });
  }
  onDateChange(date, type) {
    if (type === "END_DATE") {
      this.setState({
        selectedEndDate: date,
      });
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: null,
      });
    }
  }

  render() {
    LogBox.ignoreLogs(["Setting a timer"]);
    const user = auth.currentUser;
    const reservas = this.props.route.params.reservas;
    const habitacion = this.props.route.params.habitaciones; //Guardar la info de la habitación en una variable para no poner el gran chorro de letras.
    const { selectedStartDate, selectedEndDate, totalservicio, renderData } =
      this.state;
    const minDate = new Date();
    const startDate = selectedStartDate
      ? selectedStartDate.toString()
      : "| una Seleccione fecha";
    const endDate = selectedEndDate
      ? selectedEndDate.toString()
      : "| una Seleccione fecha";
    const fecha = startDate.split(" ");
    let fechasOcupadas = reservas.map(function ({
      FechaCEntrada,
      FechaCSalida,
      FechaEntrada,
      FechaSalida,
    }) {
      return { FechaCEntrada, FechaCSalida, FechaEntrada, FechaSalida };
    });

    const dia = fecha[2];
    const año = fecha[3];
    let mes;
    let num;
    const fechaF = endDate.split(" ");
    let mesF;
    let numF;
    const diaF = fechaF[2];
    const añoF = fechaF[3];
    if (fecha[1] === "Jan") {
      mes = "Enero";
      num = "01";
    } else if (fecha[1] === "Feb") {
      mes = "Febrero";
      num = "02";
    } else if (fecha[1] === "Mar") {
      mes = "Marzo";
      num = "03";
    } else if (fecha[1] === "Apr") {
      mes = "Abril";
      num = "04";
    } else if (fecha[1] === "May") {
      mes = "Mayo";
      num = "05";
    } else if (fecha[1] === "Jun") {
      mes = "Junio";
      num = "06";
    } else if (fecha[1] === "Jul") {
      mes = "Julio";
      num = "07";
    } else if (fecha[1] === "Aug") {
      mes = "Agosto";
      num = "08";
    } else if (fecha[1] === "Sep") {
      mes = "Septiembre";
      num = "09";
    } else if (fecha[1] === "Oct") {
      mes = "Octubre";
      num = "10";
    } else if (fecha[1] === "Nov") {
      mes = "Noviembre";
      num = "11";
    } else if (fecha[1] === "Dec") {
      mes = "Diciembre";
      num = "12";
    } else {
      mes = fecha[1];
      num = "00";
    }
    if (fechaF[1] === "Jan") {
      mesF = "Enero";
      numF = "01";
    } else if (fechaF[1] === "Feb") {
      mesF = "Febrero";
      numF = "02";
    } else if (fechaF[1] === "Mar") {
      mesF = "Marzo";
      numF = "03";
    } else if (fechaF[1] === "Apr") {
      mesF = "Abril";
      numF = "04";
    } else if (fechaF[1] === "May") {
      mesF = "Mayo";
      numF = "05";
    } else if (fechaF[1] === "Jun") {
      mesF = "Junio";
      numf = "06";
    } else if (fechaF[1] === "Jul") {
      mesF = "Julio";
      numF = "07";
    } else if (fechaF[1] === "Aug") {
      mesF = "Agosto";
      numF = "08";
    } else if (fechaF[1] === "Sep") {
      mesF = "Septiembre";
      numF = "09";
    } else if (fechaF[1] === "Oct") {
      mesF = "Octubre";
      numF = 10;
    } else if (fechaF[1] === "Nov") {
      mesF = "Noviembre";
      numF = "11";
    } else if (fechaF[1] === "Dec") {
      mesF = "Diciembre";
      numF = "12";
    } else {
      mesF = fechaF[1];
      numF = "0";
    }
    const f1 = dia + " " + mes + " " + año;
    const f2 = diaF + " " + mesF + " " + añoF;
    const fecha1 = año + "-" + num + "-" + dia;
    const fecha2 = añoF + "-" + numF + "-" + diaF;
    let fi = new Date(fecha1 + "T07:00:00.000Z");
    let ff = new Date(fecha2 + "T07:00:00.000Z");
    let Difference_In_Time = ff.getTime() - fi.getTime();
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24) + 1;
    let precioxnoche = habitacion.Precio;
    let total, totaldias, totalserv;
    if (Number(Difference_In_Days)) {
      total = precioxnoche * Difference_In_Days;
      totaldias = precioxnoche * Difference_In_Days; //total x dias seleccionados
    } else {
      total = 0;
      totaldias = 0;
    }
    totalserv = totalservicio; //total x servicios
    total += totalserv; //total a pagar
    total.toFixed(2);
    totalserv.toFixed(2);
    totaldias.toFixed(2);
    let data = renderData
      .filter(function (item) {
        return item.selected == true;
      })
      .map(function ({ id, Nombre, Precio, Name }) {
        return { id, Nombre, Precio, Name };
      });

    function getDates(startDate, endDate) {
      if (startDate != null && endDate != null) {
        const dates = [];
        let currentDate = startDate;
        const addDays = function (days) {
          const date = new Date(this.valueOf());
          date.setDate(date.getDate() + days);
          return date;
        };
        while (currentDate <= endDate) {
          dates.push(currentDate);
          currentDate = addDays.call(currentDate, 1);
        }
        return dates;
      } else {
        return "";
      }
    }
    let vector = [];
    fechasOcupadas.forEach(function (date) {
      vector.push(
        getDates(new Date(date.FechaCEntrada), new Date(date.FechaCSalida))
      );
    });

    const paraBase = {
      FechaEntrada: fecha1,
      FechaSalida: fecha2,
      FechaRealizacion: new Date(),
      PrecioTotal: total,
      idUsuario: user.uid,
      idHabitación: habitacion.id,
      FacturaNumero: "generenfacturaplease",
      DetallexDias: totaldias,
      DetallexServicios: totalserv,
      extras: { data },
      FechaCEntrada: startDate,
      FechaCSalida: endDate,
    };

    return (
      <>
        <View style={styles.v1}>
          <ImageBackground
            source={require("../src/img/SandCorner2.png")}
            resizeMode="contain"
            style={styles.image}
          ></ImageBackground>
          <View style={styles.vtitle}>
            <Text style={styles.title}>Reservación</Text>
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
            height: "110%",
            backgroundColor: "#F7F7F7",
          }}
        >
          <View style={styles.viewwhite}>
            <View style={styles.container}>
              <CalendarPicker
                allowRangeSelection={true}
                todayBackgroundColor="#02C7DE"
                selectedDayColor="#018ABC"
                selectedDayTextColor="#FFFFFF"
                onDateChange={this.onDateChange}
                width={350}
                height={350}
                weekdays={["Dom", "Lun", "Mar", "Mie", "Jue", "Vier", "Sab"]}
                months={[
                  "Enero",
                  "Febrero",
                  "Marzo",
                  "Abril",
                  "Mayo",
                  "Junio",
                  "Julio",
                  "Agosto",
                  "Septiembre",
                  "Octubre",
                  "Noviembre",
                  "Diciembre",
                ]}
                previousTitle="Anterior"
                nextTitle="Siguiente"
                minDate={minDate}
                disabledDates={vector.toString().split(",")}
                disabledDatesTextStyle={{
                  color: "white",
                  backgroundColor: "#A4A4A4",
                  width: "100%",
                  height: "100%",
                  textAlign: "center",
                  alignItems: "center",
                  borderRadius: 120,
                  justifyContent: "center",
                  paddingTop: 3,
                }}
              />
              <View style={{ alignItems: "center" }}>
                <Text style={styles.letra3}>
                  {habitacion.Name} = ${habitacion.Precio}/día
                </Text>
              </View>

              <View style={{ paddingLeft: 20 }}>
                <Text style={styles.letra2}>Fechas</Text>
              </View>

              <View style={{ paddingTop: 10, paddingLeft: 5 }}>
                <Text style={styles.texto}>
                  Fecha Entrada: {"\t"} {f1}
                </Text>
                <Text style={styles.texto}>
                  Fecha Salida: {"\t\t"} {f2}
                </Text>
              </View>

              <View style={{ paddingTop: 5, paddingLeft: 20 }}>
                <View style={{ paddingLeft: 0 }}>
                  <Text style={styles.letra2}>Huespedes</Text>
                </View>
              </View>
              <View style={styles.ViewCont}>
                <Text
                  style={styles.textoInput}
                  inputContainerStyle={{ borderBottomWidth: 0 }}
                >
                  {habitacion.Huespuedes} huesped(es)
                </Text>
              </View>

              <View style={{ paddingLeft: 20 }}>
                <Text style={styles.letra2}>Servicios Extra</Text>
              </View>

              <View style={styles.servicessection}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  centerContent={true}
                  snapToAlignment="start"
                  horizontal={true}
                  keyExtractor={(item) => item.id.toString()}
                  data={renderData}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      underlayColor="rgba(73,182,77,1,0.9)"
                      activeOpacity={0.5}
                      style={{
                        borderRadius: 90,
                        elevation: 7,
                        height: 70,
                        marginRight: 12,
                      }}
                      onPress={() => {
                        this.onPressHandler(item.id);
                        this.RecogerService(
                          item.selected ? item.Precio : -item.Precio
                        );
                      }}
                    >
                      <View
                        style={
                          item.selected == true
                            ? {
                                width: 70,
                                height: 70,
                                borderRadius: 90,
                                backgroundColor: Colors.CIRCLES,
                                alignItems: "center",
                                justifyContent: "center",
                              }
                            : {
                                width: 70,
                                height: 70,
                                borderRadius: 90,
                                backgroundColor: "white",
                                alignItems: "center",
                                justifyContent: "center",
                              }
                        }
                      >
                        <Image
                          style={styles.servicio}
                          source={{ uri: item.Imagen }}
                        />
                        <Text
                          style={{
                            fontWeight: "bold",
                            textAlign: "center",
                            fontSize: 11,
                            color: Colors.FONDO,
                            marginTop: 2,
                          }}
                        >
                          ${item.Precio.toFixed(2)}
                        </Text>
                      </View>
                      <View>
                        <Text style={styles.textservicios}>
                          {item.Nombre.replace("\\n", "\n")}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.viewwhite2}>
          <View
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 5,
              marginLeft: 25,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ marginBottom: 5 }}>
                <Text style={styles.letra}>Precio Total</Text>
                <Text style={styles.total}>${total.toFixed(2)}</Text>
              </View>

              <View style={{ marginLeft: 90, marginBottom: 10 }}>
                <TouchableOpacity
                  onPress={() => {
                    if (
                      fecha1 != "fecha-00-Seleccione" &&
                      fecha2 != "fecha-0-Seleccione"
                    ) {
                      this.props.navigation.navigate("mitarjeta", {
                        informacion: paraBase,
                      });
                    } else {
                      console.log("error");
                      Alert.alert(
                        "Error",
                        "Por favor seleccione unas fechas del calendario."
                      );
                    }
                  }}
                  style={styles.btnGuardar}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 15,
                      fontWeight: "400",
                      color: "#FFF",
                    }}
                  >
                    Siguiente
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  fondo: {
    backgroundColor: Colors.FONDO,
    flex: 1,
    marginTop: -540,
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

  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    marginTop: 5,
    padding: 5,
    marginBottom: 10,
  },
  letra: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#018ABC",
    marginRight: 10,
  },
  texto: {
    fontWeight: "bold",
    marginLeft: 15,
  },
  total: {
    fontWeight: "bold",
    marginLeft: 5,
    fontSize: 15,
  },
  ViewCont: {
    backgroundColor: "#018ABC",
    height: 35,
    width: 260,
    borderRadius: 15,
    marginLeft: 15,
    margin: 10,
    alignItems: "center",
  },
  textoInput: {
    backgroundColor: "#018ABC",
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
    marginTop: 5,
  },

  servicessection: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 10,
  },

  servicio: {
    width: 30,
    height: 30,
  },

  circulito: {
    width: 65,
    height: 65,
    borderRadius: 90,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
    marginRight: 10,
  },
  textservicios: {
    fontSize: 10,
    textAlign: "center",
    fontWeight: "bold",
    color: Colors.FONDO,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 2,
  },
  btnGuardar: {
    backgroundColor: "#018ABC",
    height: 40,
    padding: 8,
    width: 150,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginLeft: "15%",
    marginTop: 25,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  viewwhite2: {
    backgroundColor: "#FFF",
    height: 70,
    paddingTop: Platform.OS == "ios" ? 10 : 12,
    elevation: 100,
  },
  letra2: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#018ABC",
    marginLeft: 0,
  },
  letra3: {
    fontSize: 15,
    fontWeight: "bold",
    backgroundColor: Colors.FONDO,
    color: "white",
    marginLeft: 0,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: 330,
    textAlign: "center",
  },
});
