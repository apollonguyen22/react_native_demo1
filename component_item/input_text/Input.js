import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = (props) => {
    const {styleContainer} = props;
    return (
        <TextInput style={[styles.input, styleContainer]} {...props}/>
    );
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginHorizontal: 20,
        paddingLeft: 40,
        paddingVertical: 20,
        paddingRight: 20,
    },
});

export default Input;
