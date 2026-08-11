import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, } from 'react-native'
import React, { useEffect, useState } from 'react'
import Bgg from '../components/Bgg'
import { useNavigation } from '@react-navigation/native'
import Location from '../components/Location'
import Back from '../components/Back'

const Signup = () => {
    const navigation = useNavigation()
    const [phoneNumber, setPhoneNumber] = useState('')

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            setPhoneNumber('')
        })

        return unsubscribe
    }, [navigation])

    const isPhoneValid = phoneNumber.replace(/\D/g, '').length === 10

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Bgg />
                <Image source={require('../assets/images/bbg3.png')} style={styles.step1} />
                <View style={styles.step2}>
                    <View style={styles.step2Sub}>
                    </View>
                    <View style={styles.step2Sub1} />
                    <Text style={styles.title}>whats your address?</Text>
                </View>

                <Location />
                <View style={styles.step4}>
                    <View style={styles.step5Con}>
                        <View style={styles.step5}>
                            <Text style={styles.title3}>
                                Welcome
                            </Text>

                            <View style={styles.step6Con}>
                                <Text>
                                    Account Already
                                </Text>
                                <View style={styles.step6Line} />
                                <Text>
                                    Login
                                </Text>
                            </View>
                        </View>

                        <View style={styles.step7Con}>
                            <TouchableOpacity style={styles.step7}>

                                <Image source={require('../assets/icons/nig.png')} />
                                <Text>
                                    +234
                                </Text>
                                <Image source={require('../assets/icons/downArrow.png')} />
                            </TouchableOpacity>
                            <View style={styles.step7Hold}>
                                <TextInput
                                    value={phoneNumber}
                                    onChangeText={setPhoneNumber}
                                    placeholder='Phone Number'
                                    placeholderTextColor={'#000000'}
                                    style={styles.placeHold}
                                    keyboardType='number-pad'
                                    maxLength={10}
                                />
                            </View>
                        </View>

                        <TouchableOpacity
                            onPress={() => {
                                if (isPhoneValid) {
                                    navigation.navigate('Product')
                                }
                            }}
                            activeOpacity={0.6}
                            style={[styles.step8, !isPhoneValid && styles.step8Disabled]}
                            disabled={!isPhoneValid}
                        >
                            <Text style={styles.title4}>
                                Continue
                            </Text>
                        </TouchableOpacity>

                        <View style={styles.Conline}>
                            <View style={styles.line} />
                            <Text style={styles.linetitle}>or with</Text>
                            <View style={styles.line} />
                        </View>

                        <TouchableOpacity activeOpacity={0.6} style={styles.step9}>
                            <Image source={require('../assets/icons/google.png')} style={styles.googleIcon} />
                            <Text style={styles.title5}>
                                Google
                            </Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.step10}>
                        <Back onPress={() => navigation.goBack()} />
                        <Text style={styles.title6}>Other methods</Text>
                    </View>
                    <View style={styles.step11}>
                        <Text style={styles.title7}>
                            By creating account, you automatically accept our {'\n'}Terms of service,privacy Polocy Cookies Policy
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    step1: {
        alignSelf: 'center',
        transform: [{
            translateY: -45
        }]
    },
    step2: {
        width: '80%',
        height: 60,
        borderWidth: 2,
        borderColor: '#B72245',
        alignSelf: 'center',
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        gap: 30
    },
    step2Sub: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#F7931E"
    },
    step2Sub1: {
        height: 30,
        borderWidth: 1,
        borderColor: "#F7931E",
        flexDirection: 'column-reverse'
    },
    title: {
        fontFamily: 'Inter',
        fontWeight: 'medium',
        fontSize: 14,
        color: '#555252'
    },

    step4: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        marginTop: 20,
        // borderRightWidth: 2,
        // borderLeftWidth:2,
        borderStartWidth: 1,
        borderEndWidth: 1,
        borderTopWidth: 1,
        borderColor: '#CAC5C5'
    },
    step5Con: {
        padding: 25
    },
    step5: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    title3: {
        fontSize: 25,
        fontFamily: 'Inter',
        fontWeight: 'bold',
        color: "#000000"
    },
    step6Con: {
        flexDirection: 'row',
        gap: 10
    },
    step6Line: {
        height: 20,
        borderWidth: 0.5,
        borderColor: '#000000'
    },
    step7Con: {
        width: '100%',
        height: 60,
        backgroundColor: '#FFFAFA',
        elevation: 3,
        shadowOpacity: 0.3,
        marginTop: 30,
        borderRadius: 20,
        alignSelf: "center",
        shadowOffset: 0.5,
        gap: 50,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    step7: {
        flexDirection: "row",
        alignItems: 'center',
        gap: 5
    },
    step7Hold: {
        flex: 1,
    },
    placeHold: {
        fontSize: 15,
        fontWeight: 'medium',
        fontFamily: 'Inter'
    },
    step8: {
        width: '100%',
        height: 60,
        backgroundColor: "#B72245",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 30,
        shadowColor: '#3a3939',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 6,

    },
    step8Disabled: {
        backgroundColor: '#C79DA9',
        elevation: 0,
    },
    title4: {
        fontSize: 15,
        fontFamily: 'Inter',
        fontWeight: 'bold',
        color: '#FFFDFD',
    },
    Conline: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30
    },
    line: {
        backgroundColor: '#B8B2B2',
        width: '50%',
        height: 1,
        marginHorizontal: 10,
    },
    linetitle: {
        fontWeight: 'light',
        fontSize: 15,
        fontFamily: 'Inter',
        color: '#000000'
    },

    step9: {
        width: '100%',
        height: 60,
        backgroundColor: '#FFFDFD',
        borderRadius: 20,
        marginTop: 30,
        shadowColor: '#B8B2B2',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    googleIcon: {
        marginRight: 10,
        position: 'absolute',
        left: 20,
    },
    title5: {
        fontSize: 15,
        fontFamily: 'Inter',
        fontWeight: 'bold',
        color: '#000000',
    },
    step10: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 20
    },

    title6: {
        fontSize: 13,
        fontFamily: 'Inter',
        fontWeight: 'bold',
        color: '#B72245'
    },
    title7: {
        textAlign: 'center',
        fontSize: 12,
        fontFamily: 'Inter',
        fontWeight: 'semibold',
        color: '#000000',
        marginTop: 30
    },
    step11: {
        flex: 1,
        justifyContent: 'flex-end',
    },
})





