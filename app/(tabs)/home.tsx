import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { getAllProducts } from '../../services/product';
import { ProductItem } from '../../components/ProductItem/productItem';

export default function home() {
    const productList = getAllProducts();
    return (
        <View style={styles.container}>
           <FlatList
           data={productList}
            //informou a fonte de dados
            renderItem={({item})=><ProductItem productData={item}/>}
            //função responsavel por renderizar cada item
            keyExtractor={item=>item.id.toString()}
           />
           
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal:8
    }
});