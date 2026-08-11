import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Bagg2 from '../components/Bagg2'
import Bggtop from '../components/Bggtop'
import Location from '../components/Location'
import Addressbot from '../components/Addressbot'
import Back from '../components/Back'
import { useNavigation } from '@react-navigation/native'

const KFC = () => {
const navigation =useNavigation()
    const KFC = [
        {
            id: '1',
            image: require('../assets/images/KFC.jpg'),
            title: 'Ketucky Fried\nChicken',
            price: '#6,000'
        },
        {
            id: '2',
            image: require('../assets/images/KFC1.jpg'),
            title: 'Crispy Fry\nChicken',
            price: '#8,000'
        },
        {
            id: '3',
            image: require('../assets/images/KFC2.jpg'),
            title: 'Southern\nFried Chicken',
            price: '#4,000'
        },
        {
            id: '4',
            image: require('../assets/images/KFC3.jpg'),
            title: 'Dynamic Fried\nChicken Wings',
            price: '#5,000'
        },
        {
            id: '5',
            image: require('../assets/images/KFC4.jpg'),
            title: 'Tasty Chicken Recipe\nKaleyaCooks',
            price: '#5,000'
        },


    ]

    const food = ({ item }) => (
        <View style={{ justifyContent: 'center', flex: 1 }}>
            <View style={styles.step3}>
                <Text style={styles.title2}>{item.title}</Text>
                <Image source={item.image} style={styles.pngwing} />
                <Text style={styles.title3}>{item.price}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('KFCpurchase', { image: item.image, title: item.title, price: item.price })} activeOpacity={0.7} style={styles.step4}>
                    <Image source={require('../assets/images/cross.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
    return (
        <View style={styles.container}>
            <View style={styles.step1}>
                <Bagg2 />
                <Bggtop />
                <Text style={styles.title}>Bringing Food to Your Doorstep</Text>
                <Addressbot />
                <Location textStyles={{ color: '#fff' }} />
            </View>

            <Back onPress={() => navigation.goBack()} style={{ position: 'absolute', bottom: 20 }} />

            <FlatList
                data={KFC}
                renderItem={food}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />

        </View>
    )
}

export default KFC

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    step1: {
        width: '100%',
        height: 420,
        backgroundColor: '#B72245',
        borderBottomRightRadius: '48%',
        borderBottomLeftRadius: '48%',
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
        fontFamily: 'Inter',
        color: "#FFFDFD",
        textAlign: "center",
        marginTop: 20,
    },
    step2: {
        marginTop: 15,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    title1: {
        fontSize: 12,
        color: '#000000',
        fontWeight: 'medium',
        fontFamily: 'Inter',
        marginTop: 5
    },
    step3: {
        backgroundColor: '#B72245',
        width: 210,
        height: 280,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 15,
        marginLeft: 55
    },
    title2: {

        padding: 20,
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: "Inter"
    },
    pngwing: {
        position: 'absolute',
        left: -40,
        bottom: 35,
        width: 178,
        height: 178,
        borderRadius: 50,
    },
    title3: {
        position: 'absolute',
        bottom: 10,
        left: 35,
        color: '#FFF',
        fontWeight: 'bold',
        fontFamily: 'Inter',
        fontSize: 14
    },
    step4: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 10,
        right: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },

})