import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome6";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "goldenrod", headerShown: true }}>
      {/* Tela Início - Tab visível */}
      <Tabs.Screen
        name="home"
        options={{
          title: "Início",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="house" color={color} />,
        }}
      />

      {/* Tela Categorias - Tab visível */}
      <Tabs.Screen
        name="categories"
        options={{
          title: "Categorias",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="folder" color={color} />,
        }}
      />

      {/* Tela Quem Somos - Tab oculta */}
      <Tabs.Screen
        name="aboutus"
        options={{
          title: "Quem Somos",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
          tabBarStyle: { display: 'none' },  // Esconde a Tab Bar nesta tela
        }}
      />

      {/* Tela Filial RJ - Tab oculta */}
      <Tabs.Screen
        name="filialrj"
        options={{
          title: "Filial RJ",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="building" color={color} />,
          tabBarStyle: { display: 'none' },  // Esconde a Tab Bar nesta tela
        }}
      />

      {/* Tela Filial SP - Tab oculta */}
      <Tabs.Screen
        name="filialsp"
        options={{
          title: "Filial SP",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="building" color={color} />,
          tabBarStyle: { display: 'none' },  // Esconde a Tab Bar nesta tela
        }}
      />
    </Tabs>
  );
}