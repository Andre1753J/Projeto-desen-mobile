import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { useState, useEffect } from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pam Pam Pam... PAAAAAAAAM</Text>
      <TextInput style={styles.input} placeholder='escreva algo' placeholderTextColor={"#202"} />
      <Image source={require("./gato-explod.gif")}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#999",
    fontSize: 25
  },
  input: {
    backgroundColor: "#999",
    width: 200,
    borderRadius: 20
  }
});

// View == div && section
//Button == button
//Text == p