import { Link } from "@react-navigation/native";
import { Text, View, TouchableOpacity} from "react-native";
import { StyleSheet } from "react-native"

export default function ForgetPasswordPage(){
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Página para recuperar a senha</Text>
        <Text>Para recuperar sua senha, informe seu endereço de email que nós enviaremos um link para a alteração da sua senha.</Text>
        <Text style={styles.texto}>Email: ______________________ </Text>
        <TouchableOpacity style={styles.senha}>
             <Link to={{screen: 'LoginPage'}}><Text style={styles.btnTextLogin}>Redefinir senha</Text></Link>
             </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FFFA'
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    texto: {
        marginBottom: 10,
        margintop: 8,
        textAlign: 'justify',
        fontSize: 18
    },
    btnTextLogin: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#FA8072'
    },
    senha: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})