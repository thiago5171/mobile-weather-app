import { StyleSheet } from "react-native";

export const headerStyles = StyleSheet.create({
  container: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  selectContainer: {
    flex: 1,
    marginLeft: 0,
    marginRight: 150,
    backgroundColor: "transparent",
    maxWidth: 200,
    borderColor: "transparent",
  },
  picker: {
    flex: 1,
    backgroundColor: "transparent",
  },
  button: {},
  buttonText: {},
  header: {
    backgroundColor: "transparent",
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    zIndex: 10,
  },
});
