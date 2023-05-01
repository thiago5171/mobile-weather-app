import React from "react";
import {View} from "react-native";
import {TouchableHighlight, Image} from "react-native";
import {headerStyles} from "./Styles";
import CustomPicker from "../../atoms/picker";

const Header = ({
                    options,
                    selectedOption,
                    onSelectOption,
                    onPressButton,
                }) => {

    return (
        <View style={headerStyles.container}>
            <Image
                style={headerStyles.iconLocation}
                source={require("../../../assets/location.png")}
            />
            <View style={headerStyles.selectContainer}>
                <CustomPicker
                    items={options}
                    value={selectedOption}
                    onValueChange={(value) => onSelectOption(value)}
                ></CustomPicker>
            </View>
            <TouchableHighlight style={headerStyles.button} onPress={onPressButton}>
                <Image
                    style={headerStyles.iconNotify}
                    source={require("../../../assets/notify.png")}
                />
            </TouchableHighlight>
        </View>
    );
};

export default Header;
