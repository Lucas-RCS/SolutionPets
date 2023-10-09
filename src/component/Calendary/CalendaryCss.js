import { StyleSheet } from 'react-native';
// #48ff9a

const style = StyleSheet.create({
    container: {
        flex: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#f8f9fc',
    },
    buttonContainer: {
        width: '100%',
        height: 50,
        backgroundColor: '#48ff9a',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    buttonText:{
        color: '#141415',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    dateList:{
        flex: 1,
        width: '100%',
        marginTop: 20,
        borderTopWidth: 1,
        borderColor: '#9e9e9e',
        padding: 10,
    },
    dateCard:{
        width: '100%',
        height: 50,
        backgroundColor: '#141415',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    txtDateTime:{
        color: '#f8f9fc',
        fontSize: 16,
        fontWeight: 'bold',
        alignItems: 'center',
    },    
});
export default style;