import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import MyCarousel from "./myCarousel";

export default function App() {
  
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.inline}>
          <Image source={require("./img/profile.png")} style={styles.img} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Tiago Rôxo</Text>
            <Text style={styles.subtitle}>Software Developer</Text>
          </View>
          
        </View>
        <MyCarousel />
        <View style={styles.container2}>
      </View>
          
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
 
  profileContainer: {
    top:100,
    marginBottom: 0,
    justifyContent: "center",
    alignItems: "center",
    height: "80%"
  },
  inline: {
    flexDirection: "row",
    marginBottom: -80,
  },
  textContainer: {
    marginLeft: 20,
    marginTop: 10,
  },
  img: {
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    color: "gray",
  },
  
});
