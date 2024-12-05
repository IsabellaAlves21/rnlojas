import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { FlatList,StyleSheet, View } from 'react-native';
import { Stack } from 'expo-router';
import { ProductItem } from '../../../components/ProductItem/productItem';
import { getProductsByCategory } from '../../../services/product';
import { getCategoryById } from '../../../services/category';
import { router } from 'expo-router';

export default function category() {

    // resgatar o id da categoria enviado na rota dinâmica
    const { id } = useLocalSearchParams();
    const idCategory = parseInt(id as string); //Casting
    
    const category = getCategoryById(idCategory);
    if (!category) return router.back();

    const products = getProductsByCategory (idCategory);

    return (
        <View style={styles.container}>
        <Stack.Screen options={{title:category.title}} />
          <FlatList
        data={products}
        // informou a fonte de dados
        renderItem={({item})=><ProductItem productData={item}/>}
         // função responsável por renderizar cada item
         keyExtractor={item=>item.id.toString()}
        /> 

     </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginHorizontal:8
    }
});