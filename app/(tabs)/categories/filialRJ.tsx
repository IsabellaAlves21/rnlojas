import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const FilialRJ = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://your-image-url.com/rj.png' }}
        style={styles.image}
      />
      <Text style={styles.title}>Filial RJ</Text>
      <Text style={styles.address}>Rua Exemplo, 123 - Rio de Janeiro, RJ</Text>
      <Button title="Voltar para Sobre Nós" onPress={() => navigation.navigate('AboutUs')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  address: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default FilialRJ;
