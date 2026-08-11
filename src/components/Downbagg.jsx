import { StyleSheet, Text, View,Image,ImageBackground } from 'react-native'
import React from 'react'

const Downbagg = () => {
  return (
   <ImageBackground style={styles.step}>
           <View style={styles.step1}>
             <Image source={require('../assets/images/Ellipse3.png')} />
           </View>
           <View style={styles.step2}>
             <Image source={require('../assets/images/Ellipse2.png')} />
           </View>
           <View style={styles.step3}>
             <Image source={require('../assets/images/Ellipse1.png')} />
           </View>
         </ImageBackground>
  )
}

export default Downbagg

const styles = StyleSheet.create({
     step:{
    transform: [{ rotate: '180deg' }],
    position:'absolute',
    bottom:0,
    right:0
  },
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