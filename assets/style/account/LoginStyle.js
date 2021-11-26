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
        // backgroundColor: '#fff',
        // borderRadius: 10,
        // marginHorizontal: 20,
        // paddingLeft: 40,
        // paddingVertical: 20,
        // paddingRight: 20,
        marginTop: 60,
    },

    inputPassword: {
        // backgroundColor: '#fff',
        // borderRadius: 10,
        // marginHorizontal: 20,
        // paddingLeft: 40,
        // paddingVertical: 20,
        // paddingRight: 20,
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

    forgot: {
        marginTop: 10,
        fontSize: 15,
        display: 'flex',
        alignSelf: 'flex-end',
        marginRight: 20,
    },

    signin: {
        backgroundColor: '#8e6aff',
        marginTop: 29,
    },

    textSignin: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
    },

    textSignup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        fontSize: 20,
    },

    facebook: {
        backgroundColor: '#3b5998',
        marginTop: 45,
    },

    google: {
        backgroundColor: '#fff',
        marginTop: 10,
    },

    iconFB: {
        marginLeft: 30,
        position: 'absolute',
        bottom: 14,
        left: 25,
        zIndex: 100,
    },

    error: {
        color: 'red',
        marginLeft: 25,
        position: 'absolute',
        bottom: -20,
        zIndex: 100,
    },
});
