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
        marginLeft: 12,
    },
    label: {
        marginLeft: 12,
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
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
    edit: {
        marginRight: 5,
        marginTop: 2,
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
        top: 175,
    },
    iconEmail: {
        position: 'absolute',
        left: 32,
        zIndex: 100,
        top: 252,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    addcourse: {
        marginTop: 10,
        backgroundColor: '#1E90FF',
    },
});
