import { StyleSheet, Text, View, Button } from "react-native";
import { router } from "expo-router";
 
export default function Index(){
   function handleClick(){
    router.navigate("/test1");
   }
 
   return(
    <View style={styles.container}>
        <Text style={styles.titulo}>Página Index</Text>
        <Button title="Me levar para a página 01" onPress={handleClick}></Button>
    </View>
   );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1,
        gap: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 24,
        color: '#FFFFF',
    }
});
 