import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";
function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center", // main-axis [top to bottom] as flex direction is column
    alignItems: "center", // cross-axis [left to right]
    padding: 16,
    marginTop: 30,
    backgroundColor: Colors.primary800, //"#4f24f1",
    borderRadius: 8,
    marginHorizontal: 24,
    elevation: 4, //for android
    shadowColor: "black", //for ios
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});

export default Card;
