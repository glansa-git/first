
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { color } from '../colors/theme';

export const TextRegular = ({ children, style, ...rest }) => {
    return (
        <Text style={[styles.TextRegular, style]} {...rest}>
            {children}
        </Text>
    );
};
export const TextLight = ({ children, style, ...rest }) => {
    return (
        <Text style={[styles.TextLight, style]} {...rest}>
            {children}
        </Text>
    );
};
export const TextMedium = ({ children, style, ...rest }) => {
    return (
        <Text style={[styles.TextMedium, style]} {...rest}>
            {children}
        </Text>
    );
};
export const TextBold = ({ children, style, ...rest }) => {
    return (
        <Text style={[styles.TextBold, style]} {...rest}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    TextRegular: {
        fontFamily: "RobotoRegular",
        color: color.fontcolor
    },
    TextLight: {
        fontFamily: "RobotoLight",
        color: color.fontcolor
    },
    TextMedium: {
        fontFamily: "RobotoMedium",
        color: color.fontcolor
    },
    TextBold: {
        fontFamily: "RobotoMedium",
        color: color.fontcolor
    },
});