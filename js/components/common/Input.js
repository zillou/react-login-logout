import React from "react"
import { StyleSheet, TextInput, View, Text } from "react-native"

const Input = ({ label, value, placeholder, secureTextEntry, onChangeText }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      value={value}
      autoCorrect={false}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      style={styles.input} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  label: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  }
})

export { Input }