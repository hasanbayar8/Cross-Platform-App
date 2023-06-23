import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductListingPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Listing Page</Text>
      <View style={styles.productItem}>
        <Text style={styles.productName}>Product 1</Text>
      </View>
      <View style={styles.productItem}>
        <Text style={styles.productName}>Product 2</Text>
      </View>
      <View style={styles.productItem}>
        <Text style={styles.productName}>Product 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    height: 50,
    backgroundColor: '#f2f2f2',
  },
  productName: {
    fontSize: 16,
    color: '#333',
  },
});

export default ProductListingPage;
