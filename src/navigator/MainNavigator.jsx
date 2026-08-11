import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Landingpage from '../Screens/Landingpage';
import Signup from '../Screens/Signup';
import Product from '../Screens/Product';
import Deliveryaddress from '../Screens/Deliveryaddress';
import Checkout from '../Screens/Checkout';
import Bugerking from '../Screens/Bugerking';
import Doublecheese from '../Screens/Doublecheese';
import Chaitang from '../Screens/Chaitang';
import Dominospizza from '../Screens/Dominospizza';
import KFC from '../Screens/KFC';
import Chaipurchase from '../Screens/Chaipurchase';
import Pizzapurchase from '../Screens/Pizzapurchase';
import KFCpurchase from '../Screens/KFCpurchase';
const MainNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Landingpage' component={Landingpage} />
            <Stack.Screen name='Signup' component={Signup} />
            <Stack.Screen name='Product' component={Product} />
            <Stack.Screen name='Deliveryaddress' component={Deliveryaddress} />
            <Stack.Screen name='Checkout' component={Checkout} />
            <Stack.Screen name='Bugerking' component={Bugerking} />
            <Stack.Screen name='Doublecheese' component={Doublecheese} />
            <Stack.Screen name='Chaitang' component={Chaitang} />
            <Stack.Screen name='Dominospizza' component={Dominospizza} />
            <Stack.Screen name='KFC' component={KFC} />
            <Stack.Screen name='Chaipurchase' component={Chaipurchase} />
            <Stack.Screen name='Pizzapurchase' component={Pizzapurchase} />
            <Stack.Screen name='KFCpurchase' component={KFCpurchase} />
        </Stack.Navigator>
    )
}

export default MainNavigator