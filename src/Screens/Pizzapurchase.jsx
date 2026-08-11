import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Bggtop from '../components/Bggtop'
import { useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Pizzapurchase = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const { image, title, price } = route.params || {}

    const [quantity, setQuantity] = useState(1);
    const [selectedId, setSelectedId] = useState('1');

    const Pizza = [
        {
            id: '1',
            image: require('../assets/images/Pizza5.jpg'),
            title: 'Margherita'
        },
        {
            id: '2',
            image: require('../assets/images/Pizza6.jpg'),
            title: 'Pepperoni'
        },
        {
            id: '3',
            image: require('../assets/images/Pizza7.jpg'),
            title: 'Quattro Stagioni'
        },
    ]
    const burg = ({ item }) => (
        <View style={styles.Burgcon}>
            <View style={styles.Burg}>
                <Image source={item.image} style={styles.pic} />
            </View>
            <Text style={styles.Burgtitle}>{item.title}</Text>
        </View>
    )

    return (
        <View style={styles.container}>

            <TouchableOpacity
                onPress={() => {
                    if (navigation.canGoBack()) {
                        navigation.goBack()
                    }
                }}
                style={styles.cut}
            >
                <MaterialIcons name="cancel" size={24} color="black" />
            </TouchableOpacity>

            <Bggtop />
            <View style={styles.step1}>
                <Text style={styles.title}>{title || 'Double Cheese'}{title ? '' : '\nBurger'}</Text>
                <Text style={styles.title1}>Burger King | Deliver - {price || '#2500'}</Text>
                
                    {image ? <Image source={image} style={styles.foodImage} /> : null}
                
            </View>


            <View style={styles.Card1}>

                <Text style={styles.heading}>Description</Text>
                <Text style={styles.description}>
                    Enjoy our Signature Hand-Tossed Pizza: a crisp, golden-baked crust topped with rich, slow-simmered tomato sauce and loaded with melted mozzarella cheese. Finished with your favorite premium toppings and a touch of fresh herbs, every slice delivers a hot, cheesy, and deliciously satisfying experience
                </Text>

                <View>
                    <FlatList
                        data={Pizza}
                        renderItem={burg}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                <View style={styles.Quantitycon}>

                    <View style={styles.actionRow}>
                        {/* Quantity Selector */}
                        <View style={styles.quantityPill}>
                            <TouchableOpacity
                                style={styles.counterBtn}
                                onPress={() => setQuantity(Math.max(1, quantity - 1))}
                            >
                                <Text style={styles.counterBtnText}>-</Text>
                            </TouchableOpacity>

                            <Text style={styles.quantityText}>{quantity}</Text>

                            <TouchableOpacity
                                style={styles.counterBtn}
                                onPress={() => setQuantity(quantity + 1)}
                            >
                                <Text style={styles.counterBtnText}>+</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Buy Now Button */}
                        <TouchableOpacity onPress={() => navigation.navigate('Checkout')} style={styles.buyBtn} activeOpacity={0.85}>
                            <Text style={styles.buyBtnText}>Buy Now</Text>
                        </TouchableOpacity>

                    </View>


                </View>

            </View>
        </View>
    )
}

export default Pizzapurchase

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B72245'
    },
    cut: {
        position: 'absolute',
        left: 20,
        top: 40,
        zIndex: 10,
        elevation: 10,
    },
    step1: {
        padding: 20,
        transform: [{ translateY: 40 }],
    },
    title: {
        marginTop: 35,
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'
    },
    title1: {
        marginTop: 15,
        fontSize: 15,
        fontWeight: 'regular',
        color: '#fff'
    },
//     foodCon: {
// backgroundColor:'#FFFF',
//         height:200,height:200,
//         shadowOpacity: 0.9,
//         shadowOffset: { width: 0.9, height: 0.9 }
//     },
    foodImage: {
         borderRadius:20,
        marginTop: 10,
        width: 227,
        height: 245,

    },
    Card1: {
        height: "50%",
        width: '100%',
        backgroundColor: "#FFF",
        marginTop: 50,
        flex: 1,
        paddingBottom: 24,
        padding: 15,
        borderTopLeftRadius: 36,
        borderTopRightRadius: 36,
    },

    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000000',
    },
    description: {
        fontSize: 13,
        color: '#000000',
        lineHeight: 18,
        fontWeight: 'regular',
        marginTop: 8
    },
    Burgcon: {
        marginTop: 22,
        paddingHorizontal: 20,

    },
    Burg: {
        width: 100,
        height: 100,
        borderRadius: 20,
        backgroundColor: '#B72245',
        justifyContent: 'center',
        alignItems: "center",
        elevation: 2,
        shadowOpacity: 0.9,
        shadowOffset: { width: 0.9, height: 0.9 },
    },
    Burgtitle: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Inter',
        marginTop: 5,
    },
    pic: {

        width: 90,
        height: 90,
        borderRadius: 20,

    },
    Quantitycon: {
        flex: 1,
        justifyContent: 'flex-end',

    },
    actionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30,
    },
    quantityPill: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fde0e7',
        borderRadius: 25,
        paddingHorizontal: 8,
        paddingVertical: 6,
        width: '32%',
        justifyContent: 'space-between',
    },
    counterBtn: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#f39223',
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterBtnText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: -2,
    },
    quantityText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
    },
    buyBtn: {
        backgroundColor: '#f8931f',
        borderRadius: 15,
        paddingVertical: 8,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',


    },
    buyBtnText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    },
})