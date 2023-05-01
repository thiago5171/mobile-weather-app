import React from "react";
import { View, Text } from "react-native";
import * as Animatable from "react-native-animatable";
import { Feather } from "@expo/vector-icons";
import styles from "./Styles"; 

const Loading = () => {
  return (
      <View style={styles.container}>
        <Animatable.View
          animation="rotate"
          easing="linear"
          iterationCount="infinite"
          style={styles.spinner}
        >
          <Feather name="sun" size={50} color="orange" />
        </Animatable.View>
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
  );
};

export default Loading;
