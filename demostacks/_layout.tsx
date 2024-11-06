import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
 
export default function TabLayout() {
  return (
<Tabs screenOptions={{ headerShown: true }}>
<Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />
        }}
      />
<Tabs.Screen name="test1" options={{ title: "Página 1"}} />
<Tabs.Screen name="testdois" options={{ title: "Página 2" }} />
</Tabs>
  );
}