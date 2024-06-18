import { TextInput, View, StyleSheet } from "react-native";
import PrimaryBtn from "../components/PrimaryBtn";
function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none" //not allow to capitalize
        autoCorrect={false} //not allow to autocorrect
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryBtn>Confirm</PrimaryBtn>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryBtn>Reset</PrimaryBtn>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center", // main-axis [top to bottom] as flex direction is column
    alignItems: "center", // cross-axis [left to right]
    padding: 16,
    marginTop: 100,
    backgroundColor: "#4e0329", //"#4f24f1",
    borderRadius: 8,
    marginHorizontal: 24,
    elevation: 4, //for android
    shadowColor: "black", //for ios
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "white",
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
