import { Link } from "@react-navigation/native";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const baseUrl = "https://api.otaviolube.com";

const MAX_WIDTH = Dimensions.get('window').width*0.9;
const MAX_HEIGHT = Dimensions.get('window').height*0.8;
export default function CardFilme({ filme }){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source= {{uri: baseUrl + filme.poster.data.attributes.formats.thumbnail.url}}/>
            <Text style={styles.title}>{filme.titulo}</Text>
            <Text style={styles.sinopse}>{filme.sinopse.length > 200 ? filme.sinopse.substring(0,200) + "..." : filme.sinopse}</Text>
            <TouchableOpacity style={styles.detalhes}>
             <Link to={{screen:'MovieDetailsPage', params: {filme: filme}}}><Text style={styles.btnText}>Saiba mais ...</Text></Link>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
             <Link to={{screen: 'ComprarPage', params: {filme: filme}}}><Text style={styles.btnText}>Comprar</Text></Link>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#9370DB',
        margin: 15,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: MAX_HEIGHT,
        width: MAX_WIDTH
    },
    image: {
      height: '200px',
      width: '150px',
      resizeMode: 'cover',
      marginBottom: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    sinopse: {
      marginBottom: 10,
      textAlign: 'justify',
      fontSize: 16,
    },
    button: {
        height: 40,
        width: '50%',
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})