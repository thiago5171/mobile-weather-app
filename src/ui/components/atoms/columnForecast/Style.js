import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {
    justifyContent: "space-around",
    alignItems: "center",
    marginRight: 7,
    marginLeft: 7,
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
    marginRight: 7,
    marginLeft: 7,
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
    fontWeight: "300",
  },
  icon: {
    width: 60,
    height: 60,
  },
  temperature: {
    alignItems: "center",
  },

  textMaxAndMin: {
    color: "#FFF",
    fontWeight: "300",
    fontSize: 18,
  },
});

export default styles;
