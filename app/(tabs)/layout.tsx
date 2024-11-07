import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome6"
 
export default function RootLayout() {
  return(
    <Tabs screenOptions={{tabBarActiveTintColor:"#E67A31"}}>
        <Tabs.Screen
        name="home"
        options={{
            title: "Início",
            tabBarIcon: ({ color }) =>
                <FontAwesome
                size={28}
                name="house"
                color={color} />
        }}
        />
 
        <Tabs.Screen
        name="categories"
        options={{
            title: "Início",
            tabBarIcon: ({ color }) =>
                <FontAwesome
                size={28}
                name="house"
                color={color} />
        }}
        />
    </Tabs>
  )
}
 