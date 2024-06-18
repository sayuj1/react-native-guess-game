import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ currentGuess }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{currentGuess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default NumberContainer;
