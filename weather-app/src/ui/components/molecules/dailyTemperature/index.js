import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import ColumnForecast from "../../atoms/columnForecast";
import styles from "./Style";

import moment from "moment";

export default function DailyTemperature({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Today</Text>
        <Text style={styles.title}>{moment().format("MMMM, DD")} </Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{ paddingBottom: "5%" }}
        style={styles.forecast}
        data={data?.results?.forecast}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => <ColumnForecast data={item} />}
      />
    </View>
  );
}
