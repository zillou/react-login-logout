import React from "react"
import { StyleSheet, View } from "react-native"

const CardSection = ({ children }) => (
  <View style={styles.container}>
    { children }
  </View>
)

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#FFF",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#DDD",
    position: "relative"
  }
})

export { CardSection }