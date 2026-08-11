import { StyleSheet, Text, View,ImageBackground,Image } from 'react-native'
import React from 'react'

const Bagg2 = () => {
  return (
   <ImageBackground>
      <View style={styles.step1}>
        <Image source={require('../assets/images/Ellipse5.png')} />
      </View>
      <View style={styles.step2}>
        <Image source={require('../assets/images/Ellipse2.png')} />
      </View>
      <View style={styles.step3}>
        <Image source={require('../assets/images/Ellipse4.png')} />
      </View>
    </ImageBackground>
  )
}

export default Bagg2

const styles = StyleSheet.create({
      step1: {
    position: 'relative',
    right: 8
  },
  step2: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: -5,
  },
  step3: {
    position: 'absolute',
    top: 14,
    bottom: 0,
    left: -5,
  },
})