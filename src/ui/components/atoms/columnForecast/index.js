import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styles from "./Style";
import moment from "moment";
import SelectedWeatherSituation from "../../../../core/utils/selectedWeatherSituation";
import Components from "../../../../core/utils/enum/components";

export default function ColumnForecast({ data }) {
  const isToday = data.date.includes(moment().format("DD/MM"));
  return (
    <View style={isToday ? styles.contentWithBorder : styles.content}>
      <View style={styles.temperature}>
        <Text style={styles.textMaxAndMin}>{data.max}°C</Text>
      </View>
      {SelectedWeatherSituation(
        data.description,
        styles.icon,
        Components.DAILY_TEMPERATURE
      )}

      <Text style={styles.date}>{data.date}</Text>
    </View>
  );
}
