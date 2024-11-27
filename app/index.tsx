// app/(tabs)/index.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  const navigateToHome = () => {
    router.push('/(tabs)/home'); // Navega para a página do home
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao JukaStore</Text>
      <Button title="Inicio" onPress={navigateToHome} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
