import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    input: {
        color: '#000',
        marginTop: 10,
    },
    title: {
        color: 'black',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 30,
        fontSize: 25,
    },
    button: {
        marginTop: 20,
        margin: 10,
    },
    error: {
        color: 'red',
        marginLeft: 12,
    },
    listItem: {
        fontSize: 20,
        color: 'black',
        padding: 10,
    },

    list: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 10,
        marginBottom: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
    },

    listIcon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 10,
        marginTop: 10,
    },
    iconId: {
        position: 'absolute',
        top: 118,
        left: 32,
        zIndex: 100,
    },
    iconName: {
        position: 'absolute',
        left: 32,
        zIndex: 100,
        top: 195,
    },
    iconAuthor: {
        position: 'absolute',
        left: 32,
        zIndex: 100,
        top: 272,
    },
    edit: {
        marginRight: 5,
        marginTop: 2,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        // paddingLeft: 10,
        // paddingRight: 10,
    },
});
