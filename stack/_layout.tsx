import { Stack } from "expo-router";

export default function RootLayout(){
    return(
        <Stack screenOptions={{headerShown:true}}>
        <Stack.Screen name="index" />
        <Stack.Screen name="test1" />
        <Stack.Screen name="testdois" />    
            
        </Stack>
    )
}