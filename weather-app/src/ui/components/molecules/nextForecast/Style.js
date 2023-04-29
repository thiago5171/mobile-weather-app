import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex1: 1,
    flexDirection: "column",
    borderRadius: 20,
    width: "86%",
    maxHeight: 217,
    backgroundColor: "#001026",
    marginTop: 15,
    marginBottom: 25,
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

  containerForecast: {
    paddingBottom: "5%",
    margin: "5%",
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
    backgroundColor: "#fff",
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
  scrollView: {
    height: 200,
  },
});

export default styles;
