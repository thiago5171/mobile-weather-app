import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./Style";
import getCompleteDayWeek from "../../../../core/utils/getCompleteDayWeek";

function RowForecast({ item }) {
  return (
    <View style={styles.containerForecastRow} key={item.date}>
      <Text style={styles.textRow}>{getCompleteDayWeek(item.weekday)}</Text>
      <Image
        style={styles.iconContainerInsideTable}
        source={require("../../../assets/sun.png")}
      />
      <Text style={styles.textRow}>
        {"  "}
        {item.min}ºc{"  "}
        {item.max}ºc
      </Text>
    </View>
  );
}
export default RowForecast;
