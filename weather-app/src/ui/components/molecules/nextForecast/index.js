import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import styles from "./Style";

function getCompleteDayWeek(day) {
  switch (day) {
    case "Seg":
      return "Monday";
    case "Ter":
      return "Tuesday";
    case "Qua":
      return "Wednesday";
    case "Qui":
      return "Thursday";
    case "Sex":
      return "Friday";
    case "Sáb":
      return "Saturday";
    case "Dom":
      return "Sunday";
    default:
      return null;
  }
}
export default function NextForecast({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Next Forecast</Text>
        <Image
          style={styles.iconContainer}
          source={require("../../../assets/calendar.png")}
        />
      </View>
      <FlatList
        showsHorizontalScrollIndicator={true}
        horizontal={false}
        contentContainerStyle={{ paddingBottom: "5%" }}
        style={styles.forecast}
        data={data?.results?.forecast}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => {
          return (
            <View style={styles.containerForecastRow}>
              <Text style={styles.textRow}>
                {getCompleteDayWeek(item.weekday)}
              </Text>
              <Image
                style={styles.iconCOntainerInsideTable}
                source={require("../../../assets/sun.png")}
              />
              <Text style={styles.textRow}>
                {"  "}
                {item.min}ºc{"  "}
                {item.max}ºc
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}
