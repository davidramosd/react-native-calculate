import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'black',
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    answer: {
        fontSize: 60,
        color: 'white',
        textAlign: 'right',
        paddingEnd: 20,
    },
    answer_small: {
        color: 'rgba(255,255,255, 0.5)',
        fontSize: 30,
        textAlign: 'right',
        paddingEnd: 20,
    },
    button: {
        height: 80,
        width: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 30,
        padding: 10,
        fontWeight: '300',
        color: 'white',
    },
});
