import { StyleSheet, Text, View,TouchableOpacity, } from 'react-native'
import React from 'react'

const Addressbot = ({onPress}) => {
  return (
   <TouchableOpacity onPress={onPress} style={styles.step2}>
                      <View style={styles.step2Sub} />
                      <View style={styles.step2Sub1} />
                      <Text style={styles.title1}>whats your address?</Text>
                  </TouchableOpacity>
  )
}

export default Addressbot

const styles = StyleSheet.create({
     step2: {
        width: '80%',
        height: 60,
        borderWidth: 2,
        borderColor: '#F7931E',
        alignSelf: 'center',
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        gap: 30,
        backgroundColor: "#FFFDFD",
        marginTop: 30,
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
    title1: {
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: 14,
        color: '#555252'
    },
})