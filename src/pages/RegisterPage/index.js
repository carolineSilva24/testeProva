import { Link } from "@react-navigation/native";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function RegisterPage() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar o registro</Text>
            <Text style={styles.texto}>Nome completo: ___________ </Text>
            <Text style={styles.texto}>Email: ______________________ </Text>
            <Text style={styles.texto}>Senha: ______________________ </Text>
            <Text style={styles.texto}>Confirmar senha: ___________ </Text>
            <TouchableOpacity style={styles.log}>
            <Link to={{screen: 'LoginPage'}}><Text style={styles.btnTextRegister}>Registrar</Text></Link>
             </TouchableOpacity> 
            <TouchableOpacity style={styles.button}>
             <Link to={{screen: 'LoginPage'}}><Text style={styles.btnText}>Já possuo um login</Text></Link>
            </TouchableOpacity>
            </View>
    );
}