import React from "react";
import { Link, router } from 'expo-router';
import { View, StyleSheet, Text, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Button/button";

export default function index() {
    function handlePressButton(){
        router.replace('/home');
    }
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../assets/isinha.png.jpg')}
            resizeMode='contain'
            style={styles.logo}/>
            <View style={styles.buttonAreaContainer}>
            <View style={styles.tituloContainer}>
            <Text style={[styles.titulo, styles.destaque]}>Juka's</Text>
            <Text style={styles.titulo}>Store</Text>
            </View>
            <Text style={styles.text}>Aqui seu dinheiro rende mais!</Text>
            <Button text="Começar as Compras" function={handlePressButton}/>
            <Text>Sou a Index</Text>
            <Link href="(tabs)/home">Meu Link</Link>
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',

    },
    logo:{
        width:250,
        height:250,
    },
    titulo:{
        fontSize:32,
        fontWeight:'900',
    },
    text: {
        fontSize: 16,
    },
    tituloContainer:{
        flexDirection: 'row',
        gap:8,
    },
    destaque:{
        color:"#E67A31",
    },
    buttonAreaContainer: {
        gap:16,
        justifyContent:'center',
        alignItems:'center'
    }

});