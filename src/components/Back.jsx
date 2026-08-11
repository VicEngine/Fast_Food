import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Back = ({ onPress, style, textStyles }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.substep10, style]}>
            <Image source={require('../assets/icons/leftArrow.png')} />
            <Text style={[styles.back, textStyles]}>Back</Text>
        </TouchableOpacity>
    )
}

export default Back

const styles = StyleSheet.create({
     substep10: {
        position: 'absolute',
        left: 0,
        alignItems: 'center',
        zIndex:1
    },
    back: {
        fontSize: 12,
        fontWeight: 'medium',
        fontFamily: 'Inter',
        color: "#040404"
    },
})