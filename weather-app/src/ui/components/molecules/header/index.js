import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
// import { Picker } from "@react-native-picker/picker";
import { TouchableHighlight, Image } from "react-native";
import { headerStyles } from "./Styles";
// import { MaterialIcons } from "@expo/vector-icons";
import CustomPicker from "../../atoms/picker";

const Header = ({
  options,
  selectedOption,
  onSelectOption,
  onPressButton,
  buttonText,
}) => {
  const [localSelectedOption, setLocalSelectedOption] =
    useState(selectedOption);

  const handleSelectOption = (optionValue) => {
    setLocalSelectedOption(optionValue);
    onSelectOption(optionValue);
  };
  let icon = true
    ? "../../../assets/notify.png"
    : "../../../assets/notify-with-alert.png";
  return (
    <SafeAreaView style={headerStyles.header}>
      <View style={headerStyles.container}>
        <Image source={require("../../../assets/location.png")} />
        <View style={headerStyles.selectContainer}>
          <CustomPicker
            items={options}
            placeholder={"a9a"}
            value={localSelectedOption}
            onValueChange={(value) => handleSelectOption(value)}
          ></CustomPicker>
        </View>
        <TouchableHighlight style={headerStyles.button} onPress={onPressButton}>
          <Image source={require("../../../assets/notify.png")} />
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default Header;
