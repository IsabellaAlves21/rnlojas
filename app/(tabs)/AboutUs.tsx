// app/AboutUs.tsx
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function AboutUs() {
  const router = useRouter();

  function navigateToFilialRJ() {
    router.push("/AboutUs/FilialRJ"); // Navega para a filial RJ
  }

  function navigateToFilialSP() {
    router.push("/AboutUs/FilialSP"); // Navega para a filial SP
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre a Juka's Store</Text>
      <Text style={styles.text}>Aqui seu dinheiro rende mais!</Text>
      <Button title="Filial RJ" onPress={navigateToFilialRJ} />
      <Button title="Filial SP" onPress={navigateToFilialSP} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    marginVertical: 10,
  },
});
