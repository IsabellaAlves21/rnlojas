import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ProductItem, FlatList, StyleSheet, View } from 'react-native';
import { getCategoryById} from '../../../services/category';
import { getProductsByCategory } from '../../../components/ProductItem/productItem';


export default function category() {
    // resgatar o id da categoria enviado na rota dinamica
  const { id } = useLocalSearchParams();
  const idCategory = parseInt(id as string); //Casting
  
  const category = getCategoryById(idCategory);
  if (!category) return router.back();
  
  const products = getProductsByCategory(idCategory);
  const category = getCategoryById(idCategory);

    return (
    <View style={styles.container}>
        <FlatList
        data={products}
        //informou a fonte de dados
        renderItem={({item})=><ProductItem productData={item}/>}
        //função responsável por renderizar cada item
        keyExtractor={item=>item.id.toString()}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal: 8
    }
});