import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import Header from "./src/ui/components/molecules/header";
import api from "./src/infra/index";

export default function App() {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleSelectOption = (optionValue) => {
    setSelectedOption(optionValue);
  };

  const handlePressButton = () => {
    // handle button press here
  };

  // useEffect(async () => {
  //   const response = await api.get(``);
  //   console.log(response);
  // }, []);
  return (
    <View style={styles.container}>
      <Header
        options={[
          { label: "Fortaleza", value: "option1" },
          { label: "Option 2", value: "option2" },
          { label: "Option 3", value: "option3" },
        ]}
        selectedOption={selectedOption}
        onSelectOption={handleSelectOption}
        onPressButton={handlePressButton}
        buttonText="on"
      />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#08244F",
    alignItems: "center",
    justifyContent: "center",
  },
});
