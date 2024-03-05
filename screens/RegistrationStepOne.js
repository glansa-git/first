import React from 'react'
import { Image, Pressable, StyleSheet, TextInput, View } from "react-native";
import { TextBold, TextRegular } from '../assets/fonts/CustomText'
import { color } from '../assets/colors/theme';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
export default function RegistrationStepOne() {
    function emailSubmit() {

    }
    return (

        <View style={[styles.containertop]}>
            <View style={[styles.flexrow, styles.mb20, styles.bottomline]}>
                <AntDesign style={[styles.mr10, styles.arrowback]} name="arrowleft" size={24} />
                <TextBold style={[styles.back]}>Step 1 of 2</TextBold>

            </View>
            <View style={[styles.container]}>

                <TextBold style={[styles.Headingtext]}>Enter your mail</TextBold>
                <TextRegular style={[styles.subtext]}>To get started, create an account with Kids Connect below,</TextRegular>
                <View style={[styles.image]}>

                    <Image style={[styles.emailimage]} source={require('../assets/images/Email-icon.jpeg')} />
                </View>
                <TextBold style={[styles.Headingtextinput]}>Email Address</TextBold>
                <TextInput style={styles.inputBox} placeholderTextColor={styles.textinputcolor} placeholder="Enter your mail" />
                <View style={[styles.Buttoncard, styles.Buttoncardwidth,]}>
                    <Pressable
                        onPress={emailSubmit}
                        style={[styles.flexrow]}>
                        <TextBold style={[styles.btnPrimaryTextsize]}>Send verification code</TextBold>
                        <MaterialIcons style={[styles.arrow]} name="arrow-forward-ios" size={16} color="black" />
                    </Pressable>
                </View>
                <TextRegular style={[styles.subtext2]}>By clicking on this verification code you obey all
                    terms & Pocilices and recieve notifications.</TextRegular>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    mb20: {
        marginBottom: 20
    },
    mr10: {
        marginRight: 10,
    },
    arrowback: {
        color: color.primary[500],
        marginLeft: 15
    },
    back: {
        fontSize: 18,
        color: color.fontcolor
    },
    textinputcolor: {
        color: color.fontcolor
    },
    image: {
        justifyContent: 'center',
        marginVertical: 20,
        alignItems: 'center',
    },
    emailimage: {
        width: 250,
        height: 250,
    },
    arrow: {
        marginLeft: 10,
        marginTop: 5
    },
    flexrow: {
        flexDirection: 'row',
    },
    btnPrimaryTextsize: {
        fontSize: 18,
        color: color.fontcolor
    },
    Buttoncard: {
        borderRadius: 8,
        alignSelf: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: color.primary[500],
        paddingVertical: 16,
        marginVertical: 16,
    },
    Buttoncardwidth: {
        width: '100%'
    },
    bottomline: {
        borderBottomColor: color.accent[500],
        borderBottomWidth: 3,
        paddingBottom: 10,
        width: '50%'
    },
    inputBox: {
        padding: 10,
        borderColor: color.neutral[500],
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 8,
        marginBottom: 16
    },
    Headingtextinput: {
        fontSize: 16,
        color: color.fontcolor

    },
    subtext: {
        fontSize: 16,
        color: color.fontcolor
    },
    subtext2: {
        fontSize: 12,
        color: color.fontcolor
    },
    container: {
        padding: 15,
        justifyContent: 'center'
    },
    containertop: {
        marginTop: 60,
        justifyContent: 'center'
    },
    Headingtext: {
        fontSize: 24,
        marginVertical: 5,
        color: color.primary[500]
    }
})