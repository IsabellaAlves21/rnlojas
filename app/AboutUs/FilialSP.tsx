
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function FilialSPCategory() {
  const router = useRouter();

  function navigateBack() {
    router.back(); // Volta para a lista de categorias
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filial SP</Text>
      <Text style={styles.text}>Endereço: Av. Fictícia, 456, São Paulo - SP</Text>
      <Button title="Voltar para Categorias" onPress={navigateBack} />
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
