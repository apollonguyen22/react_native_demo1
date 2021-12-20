import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    input: {
        color: '#000',
        marginTop: 10,
    },
    title: {
        color: 'black',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20,
        fontSize: 25,
    },
    button: {
        marginTop: 20,
        margin: 10,
    },
    error: {
        color: 'red',
        marginLeft: 25,
    },
    iconId: {
        position: 'absolute',
        top: 97,
        left: 32,
        zIndex: 100,
    },
    iconName: {
        position: 'absolute',
        left: 32,
        zIndex: 100,
        top: 38,
    },
    iconEmail: {
        position: 'absolute',
        left: 32,
        zIndex: 100,
        top: 35,
    },
});
