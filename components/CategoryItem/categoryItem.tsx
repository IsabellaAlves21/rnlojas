import React from 'react';
import { Pressable, Image, View, Text} from 'react-native';
import { styles } from  './categoryItemStyle';
import { router } from 'expo-router';

type Props = {
    categoryData: Category
}

//imagem
//texto

export function CategoryItem({categoryData}:Props) {
 function handlePress(){
    router.navigate(`/categories/${categoryData.id}`);
 }
 
    return (
    <Pressable onPress={handlePress}>
        <Image style={styles.ImageLayer}
        source={{uri: categoryData.cover}}
        resizeMode='cover'
        />
        <View style={styles.blackColorLayer}></View>
        <View style={styles.textLayer}>
        <Text style={styles.text}>{categoryData.title}</Text>
        </View>
    </Pressable>

  );
}