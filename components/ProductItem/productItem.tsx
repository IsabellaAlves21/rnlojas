import React from 'react';
import { Image, Pressable, View, Text } from 'react-native';
import { styles } from './productItemStyle';
import { Link } from 'expo-router';
type Props = {
    productData:Product
}

//id
//title
//price

export function ProductItem({productData}:Props) {
  return (
    <Link href={`/product/${productData.id}`} style={styles.container} asChild>
        {/* imagem, titulo, descrição e preço */}
   <Pressable>
    <Image
    style={styles.image}
    source={{uri:productData.image}}
    resizeMode='cover'
    />
    <View style={styles.textContainer}>
        <Text style={styles.destaque}>{productData.title}</Text>
        <Text style={styles.destaque}>{productData.description}</Text>
        <Text style={styles.destaque}>{productData.price}</Text>
    </View>

   </Pressable>

    </Link>
  );
}