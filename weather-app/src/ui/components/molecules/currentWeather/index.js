import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import styles from "./Styles";

function CurrentWeather({ background, weather }) {
  return (
    <View style={styles.container} colors={background}>
      <View style={styles.floatContainer}>
        <Image source={require("../../../assets/cloudy-sun.png")} />
        <Text style={styles.temperature}>{weather?.results?.temp}°</Text>
        <Text style={styles.defaultText}>Preciptations</Text>
        <Text style={styles.defaultText}>
          Max.: {weather?.results?.forecast[0]?.max}º {"  "}
          Min.: {weather?.results?.forecast[0]?.min}º
        </Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.SimpleContainer}>
          <Image
            style={styles.icon}
            source={require("../../../assets/noun-rain.png")}
          />
          <Text style={styles.infoIcon}>{weather?.results?.rain}%</Text>
        </View>
        <View style={styles.SimpleContainer}>
          <Image
            style={styles.icon}
            source={require("../../../assets/humidity.png")}
          />
          <Text style={styles.infoIcon}>{weather?.results?.humidity}%</Text>
        </View>
        <View style={styles.SimpleContainer}>
          <Image
            style={styles.icon}
            source={require("../../../assets/wind.png")}
          />
          <Text style={styles.infoIcon}>{weather?.results?.wind_speedy}</Text>
        </View>
      </View>
    </View>
  );
}

export default CurrentWeather;
