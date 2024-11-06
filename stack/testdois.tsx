import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Test() {
    return(
        <View>
            <Text>Página Teste 2</Text>
            <Link href="/">Clique para ir a tela index</Link>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:"#0000FF",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});