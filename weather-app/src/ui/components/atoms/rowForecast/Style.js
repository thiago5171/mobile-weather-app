import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerForecastRow: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    width: "100%",
    height: 50,
    backgroundColor: "transparent",
    justifyContent: "space-between",
  },
  textRow: {
    fontSize: 18,
    color: "#fff",
    justifyContent: "center",
    width: "35%",
    alignItems: "center",
  }, 
  textRowTemperature: {
    fontSize: 18,
    color: "#fff",
    
  },
  iconContainerInsideTable: {
    width: 24,
    height: 24,
    padding: 5,
  },
});

export default styles;
