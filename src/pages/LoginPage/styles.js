import { StyleSheet } from "react-native"

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
        fontSize: 18,
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    btnTextLogin: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#FA8072'
    },
    button: {
        backgroundColor: '#FFE4B5',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    log: {
        backgroundColor: '#F0FFF0',
        fontSize: 18,
        marginTop: 10
    },
    senha: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default styles;