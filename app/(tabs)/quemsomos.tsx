import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';


const AboutUs = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://your-logo-url.com/logo.png' }}
        style={styles.logo}
      />
      <Text style={styles.title}>Sobre Nós</Text>
      <Text style={styles.description}>
        Bem-vindo à nossa aplicação! Somos uma empresa dedicada a proporcionar a melhor experiência
        para nossos usuários. Nosso objetivo é entregar soluções inovadoras, úteis e fáceis de usar.
      </Text>
      <Button title="Filial RJ" onPress={() => navigation.navigate('FilialRJ')} />
      <Button title="Filial SP" onPress={() => navigation.navigate('FilialSP')} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 22,
  },
});

export default AboutUs;
