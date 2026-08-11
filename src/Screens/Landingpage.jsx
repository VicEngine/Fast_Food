import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Bgg from '../components/Bgg'
import Downbagg from '../components/Downbagg'
import { useNavigation } from '@react-navigation/native'

const Landingpage = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Bgg />
      <View style={styles.step1}>
        <Image source={require('../assets/images/bbg1.png')} />
      </View>
      <View style={styles.step2}>
        <Text style={styles.title}>
          Your Food, Lightning Fast
        </Text>
        <Image source={require('../assets/images/bbg2.png')} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={styles.step3}>
        <View style={styles.Substep3}>
        </View>
        <Text style={styles.title1}>Get Started</Text>
      </TouchableOpacity>

      <Downbagg />

    </View>
  )
}

export default Landingpage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },

  step1: {
    transform: [{
      translateY: 30,
    }],
    alignItems: 'center'
  },
  step2: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'OpenSans',
    fontSize: 24,
    fontWeight: '600',
    color: '#B72245',
    paddingLeft: 20,
  },
  step3: {
    width: "80%",
    height: 70,
    borderWidth: 2,
    borderColor: "#B72245",
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    gap: 30
  },
  Substep3: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#F7931E"
  },
  title1: {
    fontFamily: 'Open Sans',
    fontSize: 20,
    fontWeight: 'bold',
    color: "#000000"
  },

})