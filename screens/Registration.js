import React, { useEffect, useRef, useState } from 'react'
import { Alert, Image, Pressable, StyleSheet, TextInput, View } from "react-native";
import { TextBold, TextRegular } from '../assets/fonts/CustomText'
import { color } from '../assets/colors/theme';
import { MaterialIcons, AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons';

export default function Registration() {
    const [seconds, setSeconds] = useState(180);
    const inputRefs = Array(5)
        .fill()
        .map((_, i) => useRef());

    const handleKeyPress = (index, event) => {
        if (event.nativeEvent.key >= '0' && event.nativeEvent.key <= '9') {
            if (index < inputRefs.length - 1) {
                inputRefs[index + 1].current.focus();
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => {
                if (prevSeconds > 0) {
                    return prevSeconds - 1;
                } else {
                    clearInterval(interval);
                    handleTimeout();
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleTimeout = () => {
        Alert.alert(
            'Sorry',
            'The OTP has expired.',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                    onPress: () => {
                    },
                },
                {
                    text: 'Resend',
                    onPress: () => {
                    },
                },
            ]
        );
    };


    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    function emailSubmit() {

    }
    return (

        <View style={[styles.containertop]}>
            <View style={[styles.flexrow, styles.mb20, styles.bottomline]}>
                <AntDesign style={[styles.mr10, styles.arrowback]} name="arrowleft" size={24} />
                <TextBold style={[styles.back]}>Step 1 of 2</TextBold>
            </View>
            {/* <View style={[styles.flexrow, styles.mb20, styles.bottomline2]}>
                <AntDesign style={[styles.mr10, styles.arrowback]} name="arrowleft" size={24} />
                <TextBold style={[styles.back]}>Step 2 of 2</TextBold>
            </View> */}
            <View style={[styles.container]}>

                <TextBold style={[styles.Headingtext]}>Enter your mail</TextBold>
                <TextRegular style={[styles.subtext]}>To get started, create an account with Kids Connect below,</TextRegular>
                <View style={[styles.image]}>

                    <Image style={[styles.emailimage]} source={require('../assets/images/Email-icon.jpeg')} />
                </View>


                {/* <TextBold style={[styles.Headingtextinput]}>Email Address</TextBold>
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
                    terms & Pocilices and recieve notifications.</TextRegular> */}


                <TextBold style={[styles.Headingtextinput]}>Email Address</TextBold>
                <View style={[styles.flexrow, styles.alinecenter, styles.mb8]}>
                    <TextInput style={styles.inputBox} placeholderTextColor={styles.textinputcolor} placeholder="username@email.com" />
                    <FontAwesome5 style={[styles.editemail]} name="edit" size={18} />
                </View>
                <View style={[styles.flexrow, styles.justiffsb, styles.mb4]}>
                    <TextBold style={[styles.Headingtextinput]}>Enter Your Verification Code</TextBold>
                    <TextRegular style={styles.time}>{`${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds} sec`}</TextRegular>
                </View>
                <View style={[styles.flexrow, styles.justiffsb]}>
                    {inputRefs.map((inputRef, index) => (
                        <TextInput
                            ref={inputRef}
                            key={index}
                            style={styles.inputBoxes}
                            keyboardType="numeric"
                            maxLength={1}
                            onKeyPress={(event) => handleKeyPress(index, event)}
                        />
                    ))}


                </View>

                <View style={[styles.Buttoncard, styles.Buttoncardwidth,]}>
                    <Pressable
                        onPress={emailSubmit}
                        style={[styles.flexrow]}>
                        <TextBold style={[styles.btnPrimaryTextsize]}>Verify</TextBold>
                        <MaterialIcons style={[styles.arrow]} name="arrow-forward-ios" size={16} color="black" />
                    </Pressable>
                </View>

            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    alinecenter: {
        alignItems: 'center'
    },

    time: {
        color: color.accent[500]
    },
    inputBoxes: {
        paddingHorizontal: 16,
        paddingVertical: 14,
        backgroundColor: color.accent[50],
        borderColor: color.accent[200],
        borderWidth: 1,
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 8,
        fontSize: 18,
        marginBottom: 16
    },
    justiffsb: {
        justifyContent: 'space-between'
    },
    mb20: {
        marginBottom: 20
    },
    mb4: {
        marginBottom: 4
    },
    mb8: {
        marginBottom: 8
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
    editemail: {
        color: color.accent[500],
        marginLeft: -40,
        marginBottom: 10
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
    bottomline2: {
        borderBottomColor: color.accent[500],
        borderBottomWidth: 3,
        paddingBottom: 10,
        width: '95%'
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
    // inputBox: {
    //     padding: 10,
    //     borderColor: color.neutral[500],
    //     borderWidth: 1,
    //     borderRadius: 8,
    //     marginTop: 8,
    //     marginBottom: 16
    // },
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