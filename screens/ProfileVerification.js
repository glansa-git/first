import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { TextBold, TextLight, TextRegular } from '../assets/fonts/CustomText'
import { AntDesign, } from '@expo/vector-icons';
import { color } from '../assets/colors/theme';

export default function ProfileVerification() {
    return (
        <View style={[styles.containertop]}>
            <View style={[styles.flexrow, styles.mb10,]}>
                <AntDesign style={[styles.mr10, styles.arrowback]} name="arrowleft" size={24} />
                <TextBold style={[styles.back]}>Profile Verification</TextBold>
            </View>
            <View style={[styles.ml50]}>
                <TextRegular>Admin will verify your profile, and approves</TextRegular>
                <TextLight>Generally it takes around a 1-2 day</TextLight>
            </View>
            <View style={[styles.container]}>
                <TextBold style={[styles.Headingtextinput]}>Email Address</TextBold>
                <TextInput style={styles.inputBox} placeholderTextColor={styles.textinputcolor} placeholder="Enter your mail" />

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 15,
        justifyContent: 'center'
    },
    inputBox: {
        padding: 10,
        borderColor: color.neutral[500],
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 8,
        width: '100%',
        marginBottom: 16
    },
    back: {
        fontSize: 18,
        color: color.primary[500]
    },
    ml50: {
        marginLeft: 50,
    },
    mr10: {
        marginRight: 10,
    },
    arrowback: {
        color: color.primary[500],
        marginLeft: 15
    },

    justiffsb: {
        justifyContent: 'space-between'
    },
    mb10: {
        marginBottom: 10
    },
    flexrow: {
        flexDirection: 'row',
    },
    container: {
        padding: 15,
        justifyContent: 'center'
    },
    containertop: {
        marginTop: 60,
        justifyContent: 'center'
    },
})