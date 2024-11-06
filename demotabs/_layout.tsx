import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome6'

export default function RootLayout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor:'red', tabBarActiveBackgroundColor:'#000'}}>
        <Tabs.Screen name='index' options={{title:'Home', tabBarIcon: ({ color }) => <FontAwesome size={28} name="house" color='#fff'/>}}

        />

        <Tabs.Screen name='test1' options={{title:'Página 01',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="pagelines" color={color}/>}}

        />
        <Tabs.Screen name='testdois' 
        options={{title:'Página 02', tabBarIcon: ({ color }) => <FontAwesome size={28} name="pager" color={color}/>}}

        />



    </Tabs>
  )
}