import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    title: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 15,
    },

    textTitle: {
        fontSize: 35,
        fontWeight: 'bold',
    },

    inputView: {
        display: 'flex',
    },

    inputUserName: {
        marginTop: 60,
    },

    inputEmail: {
        marginTop: 20,
    },

    iconInputUser: {
        marginLeft: 30,
        position: 'absolute',
        bottom: 22,
        left: 5,
        zIndex: 100,
    },

    iconPass: {
        position: 'absolute',
        right: 0,
        top: 40,
        marginRight: 32,
    },

    signup: {
        backgroundColor: '#8e6aff',
        marginTop: 65,
    },

    textSignin: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
    },

    footer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'center',
    },

    textFooterr: {
        fontSize: 15,
        fontWeight: 'bold',
    },

    error: {
        color: 'red',
        marginLeft: 25,
        position: 'absolute',
        top: 83,
        zIndex: 100,
    },

    error1: {
        color: 'red',
        marginLeft: 25,
        position: 'absolute',
        top: 120,
        zIndex: 100,
    },

});
