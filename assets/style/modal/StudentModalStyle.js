import { Dimensions, StyleSheet } from 'react-native';

const WIDTH = Dimensions.get('window').width;
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        width: WIDTH - 80,
        height: 150,
        paddingTop: 10,
        backgroundColor: '#f6f7fb',
        borderRadius: 10,
        opacity: 0.5,
    },
    textView: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        margin: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    buttonView: {
        width: '100%',
        flexDirection: 'row',
    },
    touchOpa: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
    },
});
