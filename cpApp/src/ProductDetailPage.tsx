import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';

type ProductDetailPageProps = {
  route: RouteProp<RootStackParamList, 'ProductDetail'>;
};

type RootStackParamList = {
  ProductDetail: {
    productId: number;
    productName: string;
  };
};

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ route }) => {
  const { productId, productName } = route.params;

  // Replace the following data with your actual product data
  const productData = {
    id: productId,
    name: productName,
    price: '$99.99',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Electronics',
    rating: '4.5/5',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Detail Page</Text>
      <View style={styles.row}>
        <Text style={styles.columnTitle}>Product ID:</Text>
        <Text style={styles.columnData}>{productData.id}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.columnTitle}>Product Name:</Text>
        <Text style={styles.columnData}>{productData.name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.columnTitle}>Price:</Text>
        <Text style={styles.columnData}>{productData.price}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.columnTitle}>Description:</Text>
        <Text style={styles.columnData}>{productData.description}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.columnTitle}>Category:</Text>
        <Text style={styles.columnData}>{productData.category}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.columnTitle}>Rating:</Text>
        <Text style={styles.columnData}>{productData.rating}</Text>
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
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  columnTitle: {
    flex: 1,
    fontWeight: 'bold',
  },
  columnData: {
    flex: 2,
  },
});

export default ProductDetailPage;
