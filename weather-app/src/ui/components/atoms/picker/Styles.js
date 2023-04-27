import { StyleSheet } from "react-native";

const pickerStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    textDecorationColor: "#fff",
    textShadowColor: "#fff",
    color: "#fff",
  },
  inputAndroid: {
    backgroundColor: "transparent",
    borderWidth: 0,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    color: "white",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputIOS: {
    backgroundColor: "transparent",
    borderWidth: 0,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    color: "white",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default pickerStyles;
