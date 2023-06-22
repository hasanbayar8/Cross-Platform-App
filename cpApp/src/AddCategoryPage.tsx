import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddCategoryPage = () => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryDetail, setCategoryDetail] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic, such as sending data to a service
    console.log('Category Name:', categoryName);
    console.log('Category Detail:', categoryDetail);
    // Reset form fields
    setCategoryName('');
    setCategoryDetail('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Category</Text>
      <TextInput
        style={styles.input}
        placeholder="Category Name"
        value={categoryName}
        onChangeText={(text) => setCategoryName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Category Detail"
        value={categoryDetail}
        onChangeText={(text) => setCategoryDetail(text)}
      />
      <Button title="Submit" onPress={handleSubmit} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AddCategoryPage;
