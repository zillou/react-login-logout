import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"

const Button = ({onPress, text}) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007AFF",
    marginLeft: 5,
    marginRight: 5
  },
  buttonText: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  }
})

export { Button }