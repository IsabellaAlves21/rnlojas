import React from 'react';
import { Stack } from 'expo-router';

export default function CategoriesLayout() {
  return (
    <Stack>

      <Stack.Screen name="categoriesscreen" 
        options={{title:"Lista de Categorias"}}
      />
    {/* Lista de Produtos por categorias - Rota Dinâmica /categories/{idCategory} */}

    <Stack.Screen name="[id]" />
    {/* Lista de Produtos por categoria - Rota dinâmica /categories/{} */}

    </Stack>
    
  );
}