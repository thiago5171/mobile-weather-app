import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "./Style";
import RowForecast from "../../atoms/rowForecast";

export default function NextForecast({ data, color }) {
  return (
    <View style={{ ...styles.container, backgroundColor: color.boxColor }}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Next Forecast</Text>
        <Image
          style={styles.iconContainer}
          source={require("../../../assets/calendar.png")}
        />
      </View>
      <ScrollView
        style={styles.scrollView}
        directionalLockEnabled={true}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.containerForecast}>
          {data?.results?.forecast.map((item, index) => {
            return (
              <RowForecast
                key={`${item.date}-${index}`}
                item={item}
                index={index}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
