import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    borderRadius: 20,
    width: "86%",
    height: 217,
    justifyContent: "space-between",
    marginTop: 15,
    alignItems: "center",
    alignContent: "center",
  },
  containerTitle: {
    width: "100%",
    height: 35,
    marginTop: 13,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 15,
    color: "#FFF",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 15,
    color: "#FFF",
  },
});

export default styles;
