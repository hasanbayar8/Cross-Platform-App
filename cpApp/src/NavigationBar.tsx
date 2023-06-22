import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.navbarItem}>Products</Text>
      <Text style={styles.navbarItem}>Categories</Text>
      <Text style={styles.navbarItem}>Orders</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#f2f2f2',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navbarItem: {
    marginHorizontal: 10,
    textDecorationLine: 'none',
    color: '#333',
    padding: 5,
  },
});

export default Navbar;
