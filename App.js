import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function App() {
  return (
    <View style={styles.Container}>
      <Text style={styles.text}>Hello world</Text>
    </View>)
}

const styles = StyleSheet.create({
  Container: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    fontSize:30,
    fontWeight:'bold'
  }
})
export default App