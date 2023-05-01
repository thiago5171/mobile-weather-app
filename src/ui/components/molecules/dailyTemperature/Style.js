import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    borderRadius: 20,
    width: "86%",
    height: 217,
    justifyContent: "space-between",
    backgroundColor: "#001026",
    marginTop: 15,
    alignItems: "center",
    alignContent: "center",
  },
  containerTitle: {
    width: "100%",
    height: 30,
    marginTop: 10,
    marginBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    color: "#FFF",
  },
});

export default styles;
