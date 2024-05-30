import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Swiper from "react-native-swiper";
import Icon from "react-native-vector-icons/Ionicons";
import { useFonts } from "expo-font";

const MyCarousel = () => {

  let [fontsLoaded] = useFonts({
    santello: require("./fonts/SANTELLO.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.mainContainer}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
      >
        <View style={[styles.slide, styles.slideContentCenter]}>
          <TouchableOpacity style={styles.card}>
            <Image
              source={{
                uri: "https://ouch-cdn2.icons8.com/E74LhAF570ANY4cfETzQ4i21AXoNLKvVhlGtW551i8M/rs:fit:368:425/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzE3/L2NmNmM1NjFhLTQy/ZjAtNGE4OS1iNThh/LTU0MWVlYzhjNDY0/MS5zdmc.png",
              }}
              style={styles.image}
            />
            <Text style={styles.title}>Sobre mim</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Bio")}
            >
              <Text style={styles.buttonText}>Ver mais</Text>
              <Icon name="arrow-forward" size={15} color="#fff" />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        <View style={[styles.slide, styles.slideContentCenter]}>
          <TouchableOpacity style={styles.card}>
            <Image
              source={{
                uri: "https://ouch-cdn2.icons8.com/x6VdZEyKnS8gyUyt1uMLY6XCpW4xamThH_Lbop8SqvI/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMTA4/LzliMTMyNTVhLWIz/YWEtNGFiNi1hMGY5/LTY1ODFhYTY3ZWU1/My5zdmc.png",
              }}
              style={styles.image}
            />
            <Text style={styles.title}>Contate-me</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Ver mais</Text>
              <Icon name="arrow-forward" size={15} color="#fff" />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        <View style={[styles.slide, styles.slideContentCenter]}>
          <TouchableOpacity style={styles.card}>
            <Image
              source={{
                uri: "https://ouch-cdn2.icons8.com/kjrQY4a9uDRwGExVBUWlqgJkBCvDUy357hmI1l0BXNA/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjQ0/LzViNGU3NTAzLWU2/YWQtNGIzNC05ODhl/LWJhODdmMmQxZGZj/MS5zdmc.png",
              }}
              style={styles.image}
            />
            <Text style={styles.title}>Portfólio</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Ver mais</Text>
              <Icon name="arrow-forward" size={15} color="#fff" />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  dot: {
    backgroundColor: "#e7edea",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: "black",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  slide: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  card: {
    width: "87%",
    height: "60%",
    paddingRight: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 10,
    top: 130,
  },
  image: {
    width: "40%",
    height: "50%",
    top: 15,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    color: "black",
    fontSize: 30,
    fontFamily: "santello",
    marginBottom: 5,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "orange",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 5,
  },
});

export default MyCarousel;
