import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Location = ({textStyles}) => {
    return (
        <View style={styles.step3Con}>
            <View style={styles.step3}>
                <Image source={require('../assets/icons/Star1.png')} />
            </View>
            <Text style={[styles.title2,textStyles]}>
                Use current location
            </Text>
        </View>
    )
}

export default Location

const styles = StyleSheet.create({
    step3Con: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
        gap: 15
    },
    step3: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#B72245",
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    title2: {
        fontFamily: 'Inter',
        color: "#b72245",
        fontSize: 14,
        fontWeight: 'medium'
    },
})