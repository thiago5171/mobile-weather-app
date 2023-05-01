import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./Styles";
import RNPickerSelect from "react-native-picker-select";
import cities from "../../../../core/utils/cityList";
const CustomPicker = ({ value, items, onValueChange }) => {
  return (
    <View>
      <RNPickerSelect
        placeholder={{
          label: cities[0].label,
          value: cities[0].value,
        }}
        value={value}
        items={items}
        onValueChange={onValueChange}
        style={{
          inputAndroid: {
            backgroundColor: "transparent",
            borderWidth: 0,
            width: 950,
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
            width: 950,
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
