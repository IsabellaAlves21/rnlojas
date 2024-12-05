import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { getProductById } from '../../services/product';

export default function Product() {
    const { id } = useLocalSearchParams(); 
    const router = useRouter();  // Usar o hook de navegação

    const product = getProductById(parseInt(id as string)); 

    // Função para exibir o alert de compra
    const handleBuy = () => {
        Alert.alert(`Você comprou o produto: ${product?.title}`);
    };

    return (
        <ScrollView style={styles.container}>
            {/* Botão de Voltar */}
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                <Text style={styles.backButtonText}>Voltar</Text>
            </TouchableOpacity>

            <View style={styles.imageContainer}>
                <Image source={{ uri: product?.image }} style={styles.image} />
            </View>

            {/* Título e Descrição juntos */}
            <View style={styles.textContainer}>
                <Text style={styles.title}>{product?.title}</Text>
                <Text style={styles.description}>{product?.description}</Text>
            </View>

            <Text style={styles.price}>R$ {product?.price}</Text>

            {/* Botão de Compra */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buyButton} onPress={handleBuy}>
                    <Text style={styles.buttonText}>Comprar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 50,
        paddingTop: 50,  // Espaçamento no topo
        backgroundColor: '#fff',
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: '100%',  // Largura 100% da tela
        height: 250,  // Altura fixa da imagem
        resizeMode: 'contain',
        marginBottom: 20,
    },
    // Contêiner para o título e descrição
    textContainer: {
        borderWidth: 1,
        borderColor: '#FAC5AC',  // Borda com a cor desejada
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        marginHorizontal: 20,  // Deixa a borda não colada nas laterais
    },
    title: {
        fontSize: 24,  // Tamanho ajustado para ser proporcional
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
        marginBottom: 10,
    },
    description: {
        fontSize: 14,  // Tamanho reduzido
        textAlign: 'center',
        color: '#555',
        lineHeight: 20,
    },
    price: {
        fontSize: 20,  // Tamanho ajustado
        fontWeight: 'bold',
        color: 'green',
        textAlign: 'center',
        marginBottom: 20,
    },
    // Estilos do botão
    buttonContainer: {
        marginTop: 20,
        marginHorizontal: 40,
        borderRadius: 10,
        overflow: 'hidden',
    },
    buyButton: {
        backgroundColor: '#90EE90',  // Cor verde claro
        paddingVertical: 10,         // Botão menor
        paddingHorizontal: 25,       // Largura mais compacta
        borderRadius: 10,           // Bordas arredondadas
        alignItems: 'center',       // Centralizar texto
    },
    buttonText: {
        color: '#fff',              // Cor do texto do botão
        fontSize: 16,               // Texto do botão menor
        fontWeight: 'bold',         // Negrito
    },
    // Estilos do botão de voltar
    backButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#FAC5AC',  // Cor do botão de voltar
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    backButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});