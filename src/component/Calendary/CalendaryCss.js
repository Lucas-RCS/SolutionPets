import { StyleSheet } from 'react-native';
// #48ff9a

const style = StyleSheet.create({
    container: {
        flex: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#f8f9fc',
        alignItems: 'center',
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
    saveBtn:{
        width: 70,
        height: 70,
        backgroundColor: '#48ff9a',
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#141415',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        position: 'absolute',
        elevation: 5,
        bottom: 0,
        right: 0,
    },
});
export default style;