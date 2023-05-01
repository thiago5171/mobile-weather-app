import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    height: "auto",
    width: "86%",
    display: "flex",
    
  },
  floatContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  defaultText: {
    marginBottom: 5,
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
  icon: {
    marginTop: 2,
    width: 24,
    height: 24,
  },
  temperature: {
    color: "#FFF",
    fontSize: 64,
    fontWeight: "bold",
  },
  infoIcon: {
    fontSize: 15,
    color: "#FFF",
  },
  footer: {
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#104084",
    height: 47,
    alignItems: "center",
    alignContent: "center",
    borderRadius: 20,
    paddingHorizontal: 20,
    width: "100%",
  },
  SimpleContainer: {
    flexDirection: "row",
  },
});

export default styles;