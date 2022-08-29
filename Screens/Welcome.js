import React from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import welcome from "../assets/img/w.jpeg";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Welcome({ navigation }) {
  return (
    <View style={styles.welcomecontainer}>
      <ImageBackground source={welcome} style={styles.image}>
        <View style={styles.header}>
          <Ionicons name="fast-food-outline" size={24} color="#fff" />
          <Text style={styles.headertxt}>JBY FOODS</Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.bottomtxt}>Enjoy delicious meals right now.</Text>
          <TouchableOpacity style={styles.btn}>
            <Text
              onPress={() => navigation.navigate("Home")}
              style={styles.btntxt}
            >
              Sign in
            </Text>
          </TouchableOpacity>
          <View style={styles.signup}>
            <Text style={styles.signuptxt}>Don't have an account?</Text>
            <TouchableOpacity>
              <Text style={styles.sign}>Sign up.</Text>
            </TouchableOpacity>
          </View>
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
    marginTop: 50,
  },

  headertxt: {
    fontSize: 19,
    fontFamily: "serif",
    fontStyle: "italic",
    fontWeight: "700",
    marginLeft: 10,
    color: "#fff",
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
    width: "80%",
  },

  btn: {
    backgroundColor: "orange",
    marginTop: 55,
    padding: 8,
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
  },

  btntxt: {
    color: "#fff",
    fontSize: 16,
  },

  signup: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "center",
  },

  signuptxt: {
    color: "#fff",
    fontSize: 15,
  },

  sign: {
    color: "#fff",
    fontSize: 15,
    marginLeft: 5,
    textDecorationLine: "underline",
  },
});
