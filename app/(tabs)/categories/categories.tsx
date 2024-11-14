import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { getAllCategories } from '../../../services/category';
import { CategoryItem } from '../../../components/CategoryItem/categoryItem';

const categoryList = getAllCategories();

export default function Categories() {
    return (
        <View style={styles.container}>
           <FlatList
           data={categoryList}
            //informou a fonte de dados
            renderItem={({item})=><CategoryItem categoryData={item}/>}
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