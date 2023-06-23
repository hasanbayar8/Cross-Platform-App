import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

interface Category {
  id: number;
  name: string;
  description: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
}

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type CategoriesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Categories'>;
type ProductsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Products'>;

type RootStackParamList = {
  Home: undefined;
  Categories: undefined;
  Products: undefined;
};

type CategoriesScreenRouteProp = RouteProp<RootStackParamList, 'Categories'>;
type ProductsScreenRouteProp = RouteProp<RootStackParamList, 'Products'>;

const Stack = createStackNavigator<RootStackParamList>();

const HomeScreen = ({ navigation }: { navigation: HomeScreenNavigationProp }) => (
  <View>
    <Text>Home Screen</Text>
    <Button title="Categories" onPress={() => navigation.navigate('Categories')} />
    <Button title="Products" onPress={() => navigation.navigate('Products')} />
  </View>
);

const CategoriesScreen = ({
  navigation,
  route,
}: {
  navigation: CategoriesScreenNavigationProp;
  route: CategoriesScreenRouteProp;
}) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch('https://northwind.vercel.app/api/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
      <Text>Categories Screen</Text>
      {categories.map((category) => (
        <Text key={category.id}>
          {category.name} - {category.description}
        </Text>
      ))}
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const ProductsScreen = ({
  navigation,
  route,
}: {
  navigation: ProductsScreenNavigationProp;
  route: ProductsScreenRouteProp;
}) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://northwind.vercel.app/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
      <Text>Products Screen</Text>
      {products.map((product) => (
        <Text key={product.id}>
          {product.name} - {product.description}
        </Text>
      ))}
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const MyComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyComponent;
