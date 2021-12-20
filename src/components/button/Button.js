import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
    const {styleContainer} = props;
    return (
        <TouchableOpacity style={[styles1.button, styleContainer]} {...props}>
            <Text style={[styles1.text, {color: `${props.textColor}`}]}>{props.name}</Text>
        </TouchableOpacity>
    );
};

export const styles1 = StyleSheet.create({
    button: {
        padding: 15,
        marginHorizontal: 20,
        borderRadius: 27,
    },

    text: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
    },
});

export default Button;
