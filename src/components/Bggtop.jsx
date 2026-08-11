import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Bggtop = () => {
    return (
        <Image source={require('../assets/images/bbg3.png')} style={styles.bbg} />

    )
}

export default Bggtop

const styles = StyleSheet.create({
     bbg: {
        position: 'absolute',
        right: 50,
        top: 35,
    },
})