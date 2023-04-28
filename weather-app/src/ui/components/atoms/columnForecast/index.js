import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styles from "./Style";
import moment from "moment";

export default function ColumnForecast({ data }) {
  const isToday = data.date.includes(moment().format("DD/MM"))
  return (
    <View style={ isToday ? styles.contentWithBorder : styles.content  }>
      <View style={styles.temperature}>
        <Text style={styles.textMax}>{data.max}°C</Text>
      </View>
      <Image style={styles.icon} source={require("../../../assets/sun.png")} />
      <Text style={styles.date}>{data.date}</Text>
    </View>
  );
}
