import React from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import welcome from "../assets/images/welcome.jpeg";
import { Ionicons } from "@expo/vector-icons";

export default function Welcome({ navigation }) {
  return (
    <View style={styles.welcomecontainer}>
      <ImageBackground source={welcome} style={styles.image}>
        <View style={styles.header}>
          <Ionicons name="fast-food-outline" size={30} color="#fff" />
          <Text style={styles.headertxt}>JBY FOODS</Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.bottomtxt}>
            Enjoy delicious meals with just a click of a button.{" "}
          </Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.btntxt}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomecontainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    backgroundColor: "#000",
  },

  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
    marginTop: 60,
  },

  headertxt: {
    fontSize: 25,
    fontStyle: "italic",
    marginLeft: 10,
    color: "#fff",
    fontWeight: "bold",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  bottom: {
    position: "absolute",
    bottom: "10%",
    width: "100%",
  },

  bottomtxt: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "700",
    marginLeft: 20,
    width: "75%",
    letterSpacing: 2,
  },

  btn: {
    backgroundColor: "darkorange",
    marginTop: "30%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
  },

  btntxt: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
