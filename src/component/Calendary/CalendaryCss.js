import { StyleSheet } from 'react-native';
// #48ff9a

const style = StyleSheet.create({
    container: {
        flex: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#f8f9fc',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#141415AA',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: '#141415',
        borderRadius: 20,
        width: '90%',
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    openBtn: {
        width: '100%',
        backgroundColor: '#48ff9a',
        borderRadius: 12,
        padding: 10,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    textBtn: {
        color: '#141414',
        fontSize: 18,
        fontWeight: '700',
    },
    closeBtn: {
        width: 300,
        height: 60,
        backgroundColor: '#48ff9a',
        borderRadius: 12,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },

});
export default style;