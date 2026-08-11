import React from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/hot.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Foodie</Text>
      <Text style={styles.subtitle}>Loading your next meal</Text>
      <ActivityIndicator size="large" color="#f97316" style={styles.loader} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff7ed',
    paddingHorizontal: 24,
  },
  image: {
    borderRadius:25,
    width: 180,
    height: 180,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 24,
  },
  loader: {
    marginTop: 8,
  },
});
