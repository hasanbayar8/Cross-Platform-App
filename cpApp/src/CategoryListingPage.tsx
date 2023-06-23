import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoryListingPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category Listing Page</Text>
      <View style={styles.categoryItem}>
        <Text style={styles.categoryName}>Category 1</Text>
      </View>
      <View style={styles.categoryItem}>
        <Text style={styles.categoryName}>Category 2</Text>
      </View>
      <View style={styles.categoryItem}>
        <Text style={styles.categoryName}>Category 3</Text>
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
  categoryItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    height: 50,
    backgroundColor: '#f2f2f2',
  },
  categoryName: {
    fontSize: 16,
    color: '#333',
  },
});

export default CategoryListingPage;
