import React from 'react';
import { Stack } from 'expo-router';

export default function CategoriesLayout() {
  return (
    <Stack>

      <Stack.Screen name="categories" 
        options={{title:"Lista de Categorias"}}
      />
    {/* Lista de Produtos por categorias - Rota Dinâmica /categories/{idCategory} */}

    </Stack>
    
  );
}