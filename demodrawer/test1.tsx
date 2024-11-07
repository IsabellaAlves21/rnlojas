import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Test() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Página Teste 1</Text>
            <Link href="/testdois" style={styles.texto}>Clique para ir a tela testdois</Link>
        </View> 
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:"#00FF00",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo:{
        fontSize:24,
        fontWeight:'bold',
    },
    texto:{
        fontSize:24,
        fontWeight:'bold',
    }

});