import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    borderRadius: 20,
    width: "86%",
    height: 217,
    backgroundColor: "#001026",
    marginTop: 15,
    alignContent: "center",
  },
  containerTitle: {
    width: "100%",
    height: 30,
    marginTop: 10,
    marginBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    color: "#FFF",
  },
  iconContainer: {
    marginTop: 6,
    marginRight: 5,
    width: 24,
    height: 24,
  },
  forecast: {
    width: "100%",
    height: 50,
    backgroundColor: "transparent",
  },
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
    alignItems: "center",
  },
  iconCOntainerInsideTable: {
    width: 24,
    height: 24,
    padding: 5,
  },
});

export default styles;
