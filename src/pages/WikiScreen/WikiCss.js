import { StyleSheet } from 'react-native';
// #48ff9a

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f8f9fc',
        padding: '5%',
        flexGrow: 1,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: 10,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        zIndex: 999,
    },
    icons: {
        marginLeft: '2%',
    },
});

export default style;

