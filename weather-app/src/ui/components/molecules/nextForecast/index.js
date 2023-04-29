import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "./Style";
import RowForecast from "../../atoms/rowForecast";

export default function NextForecast({ data, background }) {
  return (
    <View style={styles.container}>
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
          {data?.results?.forecast.map((item) => {
            return <RowForecast item={item} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
}
