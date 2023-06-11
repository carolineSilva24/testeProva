import { Link } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ComprarPage({route}){

    const {filme} = route.params;
    return (
        <View>
            <Text style={styles.title}>{filme.titulo}</Text>
            <Text style={styles.sinopse}>{filme.sinopse}</Text>
          <View style={styles.sessao}>
            <Text style={styles.subtitle}>Horário das sessões</Text>
            <TouchableOpacity>
             <Text style={styles.btnText}>14:30</Text>
             </TouchableOpacity>
             <TouchableOpacity>
             <Text style={styles.btnText}>17:00</Text>
             </TouchableOpacity>
             <TouchableOpacity>
             <Text style={styles.btnText}>19:30</Text>
             </TouchableOpacity>
             <TouchableOpacity>
             <Text style={styles.btnText}>22:00</Text>
            </TouchableOpacity>
          </View>
            <Text style={styles.subtitle}>Preço do ingressos </Text>
           <View style={styles.precos}>
            <Text>  Cinema 2D
             2ª,3ª,4ª: R$ 24,00 o dia todo;
             5ª: R$ 34,00 o dia todo;
             6ª,Sáb,Dom,Emendas e Feriados: R$ 36,00 o dia todo.</Text>
            <Text>  Cinema 3D
             2ª,3ª,4ª: R$ 30,00 o dia todo;
             5ª: R$ 41,00 o dia todo;
             6ª,Sáb,Dom,Emendas e Feriados: R$ 43,00 o dia todo.</Text>
             <Text>Para ingressos meia so dividir o valor por 2.</Text>
             </View>
          <View style={styles.cadastro}>
            <TouchableOpacity style={styles.buttonLog}>
             <Link to={{screen: 'LoginPage'}}><Text style={styles.btnText}>Logar</Text></Link>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonReg}>
             <Link to={{screen: 'RegisterPage'}}><Text style={styles.btnText}>Registrar</Text></Link>
            </TouchableOpacity>
            </View>
          </View>
    )
}

const styles = StyleSheet.create({
    sessao: {
        margin: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E6E6FA'
    },
    cadastro: {
        alignItems: 'center',
        justifyContent: 'center',  

    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#D8BFD8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10
    },
    sinopse: {
      marginBottom: 10,
      textAlign: 'justify',
      fontSize: 16,
      backgroundColor: '#F0FFF0'
    },
    precos: {
        backgroundColor: '#F0FFF0',
        margin: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    subtitle: {
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 10
    },
    buttonLog: {
        alignItems: 'flex-start',
        marginTop: 20
    },
    buttonReg: {
        alignItems: 'flex-end',
        marginTop: 20
    },
})