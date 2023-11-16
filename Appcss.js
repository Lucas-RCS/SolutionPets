import { StyleSheet } from 'react-native';
// #48ff9a

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: '#f8f9fc',
        justifyContent: 'flex-end',
    },
    img:{
        flex: 0,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    content: {
        flex: 0,
        height: 'auto',
        minHeight: 300,
        backgroundColor: '#141415',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 30,
        justifyContent: 'space-evenly',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    input:{
        backgroundColor: '#f8f9fc',
        padding: 10,
        borderRadius: 10,
        color: '#14141577',
        fontSize: 16,
        fontWeight: 'bold',
    },
    form: {
        flex: 0,
        padding: 10,
        paddingTop: 30,
        flexDirection: 'column',
        gap: 20,
        justifyContent: 'space-between',
    },
    btn: {
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#48ff9a',
    },
    btnText: {
        color: '#141415',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },
}
);

export default style;

