import React, { compoent } from "react"
import { StyleSheet, View, Text } from "react-native"

const Header = ({ title }) => (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>
      { title }
    </Text>
  </View>
)

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative"
  },
  textStyle: {
    fontSize: 20,
  },
})

export { Header }