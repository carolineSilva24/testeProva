import { View, Text, StyleSheet } from "react-native";

export default function MovieDetailsPage({route}){

    const {filme} = route.params;
    return (
        <View>
            <Text style= {styles.title}>Detalhes do filme</Text>
            <Text style={styles.subtitle}>{filme.titulo}</Text>
            <Text>{filme.sinopse}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
  });