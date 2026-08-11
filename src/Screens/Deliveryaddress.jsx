import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native'
import * as Location from 'expo-location'
import Back from '../components/Back'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Deliveryaddress = () => {
    const navigation = useNavigation();
    const [addressText, setAddressText] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleUseCurrentLocation = async () => {
        setLoading(true);
        setErrorMsg('');

        try {
            const { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                setErrorMsg('Location permission denied');
                setLoading(false);
                return;
            }

            const currentLocation = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.High,
            });

            const geocodedAddress = await Location.reverseGeocodeAsync({
                latitude: currentLocation.coords.latitude,
                longitude: currentLocation.coords.longitude,
            });

            if (geocodedAddress[0]) {
                const place = geocodedAddress[0];
                const fullAddress = `${place.street || place.name || ''}, ${place.city || ''}, ${place.region || ''}, ${place.country || ''}`.replace(/, +/g, ', ').replace(/^, |, $/g, '');
                setAddressText(fullAddress);
            } else {
                setAddressText('Unable to find address');
            }
        } catch (error) {
            console.log(error);
            setErrorMsg('Unable to get your current location');
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.cut}>
                   <MaterialIcons name="cancel" size={24} color="black" />
                </TouchableOpacity>

                <Text style={styles.title}>
                    Add a delivery address
                </Text>
                <View style={styles.step1}>
                    <SimpleLineIcons name="flag" size={24} color="black" />
                    <TextInput
                        value={addressText}
                        onChangeText={setAddressText}
                        placeholder='Search for streets, cities, districts.'
                        placeholderTextColor={'#555252'}
                    />
                </View>

                <TouchableOpacity onPress={handleUseCurrentLocation} style={styles.step2}>
                    <View style={styles.step2Sub}>
                        <Image source={require('../assets/icons/Star1.png')} style={styles.Star1} />
                    </View>
                    <Text style={styles.title1}>
                        Use current location
                    </Text>
                </TouchableOpacity>

                {loading ? (
                    <View style={styles.loaderContainer}>
                        <ActivityIndicator size="small" color="#045a31" />
                        <Text style={styles.loadingText}>Getting your location...</Text>
                    </View>
                ) : null}

                {errorMsg ? <Text style={styles.errorText}>{errorMsg}</Text> : null}

                <View style={styles.step3Con}>
                    <View style={styles.step3}>
                        <Back onPress={() => navigation.goBack()} />
                        <Text style={styles.title2}> or set your location on the map</Text>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Deliveryaddress

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        padding: 20
    },
    cut: {
        position: 'absolute',
        right: 20,
        top: 40,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Inter',
        color: "#000000",
        textAlign: "center",
        marginTop: 20,
    },
    step1: {
        borderBottomWidth: 2,
        borderBottomColor: '#c6c1c1',
        flexDirection: 'row',
        width: '100%',
        height: 40,
        alignItems: 'center',
        marginTop: 20,
        gap: 10,
        elevation: 2,
        shadowOpacity: 0.25,
    },
    step2: {
        marginTop: 30,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
    },
    step2Sub: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#baf4d9"
    },
    title1: {
        fontSize: 16,
        fontWeight: 'medium',
        fontFamily: 'Inter',
        color: '#045a31'
    },
    Star1: {
        tintColor: '#045a31',
    },
    loaderContainer: {
        marginTop: 16,
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 6,
        color: '#045a31',
    },
    errorText: {
        marginTop: 12,
        color: '#b00020',
        textAlign: 'center',
    },
    step3Con: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    step3: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title2: {
        marginLeft: 58,
        color: '#045a31',
        fontSize: 16,
        fontWeight: 'medium',
        fontFamily: 'Inter',
    },
})