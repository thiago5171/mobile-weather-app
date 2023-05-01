import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./Style";
import getCompleteDayWeek from "../../../../core/utils/getCompleteDayWeek";
import SelectedWeatherSituation from "../../../../core/utils/selectedWeatherSituation";
import Components from "../../../../core/utils/enum/components";

function RowForecast({ item }) {
  return (
    <View style={styles.containerForecastRow}>
      <Text style={styles.textRow}>{getCompleteDayWeek(item.weekday)}</Text>
      {/* <Image
        style={styles.iconContainerInsideTable}
        source={require("../../../assets/sun.png")}
      /> */}
      {SelectedWeatherSituation(
        item.description,
        styles.iconContainerInsideTable,
        Components.NEXT_FORECAST
      )}
      <Text style={styles.textRowTemperature}>
        {"  "}
        {item.min}ºc{"  "}
        {item.max}ºc
      </Text>
    </View>
  );
}
export default RowForecast;
