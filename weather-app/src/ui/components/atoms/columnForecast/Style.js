import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {
    justifyContent: "space-around",
    alignItems: "center",
    marginRight: 15,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 8,
    backgroundColor: "transparent",
    height: 155,
    borderRadius: 20,
  },
  contentWithBorder: {
    justifyContent: "space-around",
    alignItems: "center",
    marginRight: 15,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 8,
    backgroundColor: "transparent",
    height: 155,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
  },
  date: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "600",
  },
  icon: {
    width: 50,
    height: 50,
  },
  temperature: {
    alignItems: "center",
  },
  textMin: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "500",
  },
  textMax: {
    color: "#FFF",
    fontSize: 18,
  },
});

export default styles;
