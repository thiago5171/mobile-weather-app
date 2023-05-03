import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerForecastRow: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    width: "100%",
    height: 50,
    backgroundColor: "transparent",
    justifyContent: "space-between",
  },
  textRow: {
    fontSize: 18,
    color: "#fff",
    justifyContent: "flex-start",
    width: "45%",
    alignItems: "center",
  },
  textRowTemperature: {
    fontSize: 18,
    color: "#fff",
  },
  iconContainerInsideTable: {
    width: 35,
    height: 35,
    padding: 5,
  },
});

export default styles;
