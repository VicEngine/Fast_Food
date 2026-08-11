import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, Pressable } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { BlurView } from 'expo-blur'
import { useNavigation } from '@react-navigation/native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Checkout = () => {
  const [payment, setPayment] = useState(false)
  const navigation = useNavigation()

  const handleContinueShopping = () => {
    setPayment(false)
    navigation.navigate('Product')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}>
          <MaterialIcons name="cancel" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title1}>Checkout</Text>
      </View>
      <View style={styles.step1}>
      </View>
      <Text style={styles.title2}>Delivery Address</Text>
      <View style={styles.step2}>

        <View>
          <Text style={styles.title3}>Home Address</Text>
          <Text style={styles.title4}>982 Lehner junction Apt. 047</Text>
        </View>
        <View>

        </View>
      </View>

      <Text style={styles.title2}>PAYMENT METHOD</Text>

      <TouchableOpacity activeOpacity={0.7} style={styles.step3}>
        <Image source={require('../assets/images/pic14.png')} />
        <Text style={styles.title4}>*** **** **** 5967</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.step3}>
        <Image source={require('../assets/images/pic15.png')} />
        <Text style={styles.title4}>wilson.casper@bernice.info</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.step3}>
        <Image source={require('../assets/images/pic16.png')} />
        <Text style={styles.title4}>*** **** **** 3461</Text>
      </TouchableOpacity>

      <View style={styles.step4Con}>
        <TouchableOpacity onPress={() => setPayment(true)} style={styles.step4}>
          <Text style={styles.title5}>Payment</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={payment} animationType='fade' onRequestClose={() => setPayment(false)} transparent={true}>

        <View onPress={() => setPayment(false)} style={styles.Overlay}>

          <Pressable style={StyleSheet.absoluteFill} onPress={() => setPayment(false)}>
            <BlurView intensity={20} tint='light' style={StyleSheet.absoluteFill} />
          </Pressable>

          <View style={styles.step5}>
            <View style={styles.step6}>
              <Image source={require('../assets/icons/check.png')} style={styles.check} />
            </View>
            <Text style={styles.title6}>Your order is succeccfully.</Text>
            <Text style={styles.title7}>You can track the delivery in the {'\n'} "Orders" section.</Text>

            <TouchableOpacity onPress={handleContinueShopping} style={styles.step7}>
              <Text style={styles.title8} >Continue Shoppong</Text>
            </TouchableOpacity>
            <View style={styles.step8}>
              <Text style={styles.title9}>Go to orders</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Checkout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 25,
  },

  title1: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Inter',
    position: 'absolute',
    left: 50,
    right: 50
  },
  title2: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Inter'
  },
  step1: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    marginTop: 25,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0.3, height: 0.3 }

  },
  step2: {
    width: '100%',
    height: 65,
    backgroundColor: '#e4e1e1',
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#F7931E",
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  step3: {
    width: '100%',
    height: 65,
    backgroundColor: '#e4e1e1',
    marginTop: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18
  },
  title3: {
    fontSize: 15,
    color: '#F7931E',
    fontFamily: 'Inter',
    fontWeight: "bold",
    marginTop: 3
  },
  title4: {
    fontSize: 18,
    color: '#000000',
    fontFamily: 'Inter',
    fontWeight: "medium",
    marginTop: 5
  },
  step4Con: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  step4: {
    width: "100%",
    height: 60,
    backgroundColor: '#F7931E',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  title5: {
    fontSize: 18,
    color: '#000000',
    fontFamily: 'Inter',
    fontWeight: "medium",
    marginTop: 5
  },
  Overlay: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',

  },
  step5: {
    width: '80%',
    height: '50%',
    backgroundColor: "#ffffff",
    elevation: 5,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0.5,
      height: 0.3
    },
    alignItems: "center",
    borderRadius: 25
  },
  step6: {
    borderWidth: 6,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#fff',
    borderColor: "#f1d0aa",
    marginTop: 40,
    elevation: 3,
    shadowOffset: {
      width: 0.2, height: 0.2
    },
    shadowOpacity: 0.2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  check: {
    tintColor: "#F7931E"
  },

  title6: {
    width: 150,
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    marginTop: 20,
    color: '#000000'
  },
  step7: {
    width: '69%',
    height: 50,
    backgroundColor: "#F7931E",
    borderRadius: 20,
    marginTop: 39,
    alignItems: "center",
    justifyContent: 'center',
  },
  title8: {
    fontSize: 18,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    color: '#e1d9d9'
  },
  step8: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  title9: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Inter',
    fontWeight: 'semibold',
    marginTop: 20,
    color: '#beb3b3'
  },

})