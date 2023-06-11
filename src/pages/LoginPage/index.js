import { Link } from "@react-navigation/native";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function LoginPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar o Login</Text>
            <Text style={styles.texto}>Usuário: ______________________ </Text>
            <Text style={styles.texto}>Senha: ______________________ </Text>
            <TouchableOpacity style={styles.log}>
             <Link to={{screen: 'MoviesPage'}}><Text style={styles.btnTextLogin}>Logar</Text></Link>
             </TouchableOpacity>
             <TouchableOpacity style={styles.log}>
             <Link to={{screen: 'ForgetPasswordPage'}}><Text style={styles.senha}>Esqueci minha senha</Text></Link>
             </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
             <Link to={{screen: 'RegisterPage'}}><Text style={styles.btnText}>Não tenho um cadastro</Text></Link>
            </TouchableOpacity>
        </View>
    );
}

