import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';

// Define the type for the route parameter
type ProductListingRouteProp = RouteProp<Record<string, object | undefined>, string>;

type Props = {
  route: ProductListingRouteProp;
};

const ProductListingPage: React.FC<Props> = ({ route }) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ]);

  const deleteProduct = (productId: number) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Listing Page</Text>
      {products.map((product) => (
        <View key={product.id} style={styles.productItem}>
          <Text style={styles.productName}>{product.name}</Text>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => deleteProduct(product.id)}
          >
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
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
    alignItems: 'center',
    marginBottom: 10,
  },
  productName: {
    flex: 1,
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
  },
});

export default ProductListingPage;
