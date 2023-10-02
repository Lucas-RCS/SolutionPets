import { StyleSheet } from 'react-native';
// #48ff9a

const style = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 12,
        height: '100%',
    },
    header: {
        flex: 0,
        height: 300,
        backgroundColor: 'transparent',
    },
    containerDash: {
        flex: 1,
        paddingTop: 80,
        paddingLeft: 20,
    },
    welcome: {
        color: '#f8f9fc',
        fontSize: 25,
        fontWeight: 'bold',
    },
    titleDash: {
        color: '#f8f9fc',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    imgLogo: {
        width: '15%',
        height: '100%',
        marginLeft: 10,
    },
    logo: {
        flex: 0,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    content: {
        flex: 1,
        width: '100%',
        backgroundColor: '#f8f9fc',
    },
});

export default style;

