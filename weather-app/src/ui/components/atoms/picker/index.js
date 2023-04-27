import React from "react";
import { View, StyleSheet } from "react-native";
// import Icon from "react-native-vector-icons/MaterialIcons";
// import PickerSelect from "react-native-picker-select";
// import { MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./Styles";
import RNPickerSelect from "react-native-picker-select";
const CustomPicker = ({ placeholder, value, items, onValueChange }) => {
  return (
    <View>
      <RNPickerSelect
        placeholder={{
          label: placeholder,
          value: null,
        }}
        value={value}
        items={items}
        onValueChange={onValueChange}
        style={{
          inputAndroid: {
            backgroundColor: "transparent",
            borderWidth: 0,
            fontSize: 16,
            paddingHorizontal: 10,
            paddingVertical: 8,
            color: "white",
            paddingRight: 90,
          },
          inputIOS: {
            backgroundColor: "transparent",
            borderWidth: 0,
            fontSize: 16,
            paddingHorizontal: 10,
            paddingVertical: 8,
            color: "white",
            paddingRight: 30,
          },
          iconContainer: {
            backgroundColor: "#fff",
          },
          placeholder: {
            color: "white",
          },
        }}
      />
    </View>
  );
};

export default CustomPicker;
