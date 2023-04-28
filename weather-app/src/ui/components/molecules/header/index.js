import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import { TouchableHighlight, Image } from "react-native";
import { headerStyles } from "./Styles";
import CustomPicker from "../../atoms/picker";

const Header = ({
  options,
  selectedOption,
  onSelectOption,
  onPressButton,
  placeholder,
}) => {
   
  
  let icon = true
    ? "../../../assets/notify.png"
    : "../../../assets/notify-with-alert.png";
  return (
      <View style={headerStyles.container}>
        <Image source={require("../../../assets/location.png")} />
        <View style={headerStyles.selectContainer}>
          <CustomPicker
            items={options}
            value={selectedOption}
            onValueChange={(value) => onSelectOption(value)}
          ></CustomPicker>
        </View>
        <TouchableHighlight style={headerStyles.button} onPress={onPressButton}>
          <Image source={require("../../../assets/notify.png")} />
        </TouchableHighlight>
      </View>
  );
};

export default Header;
