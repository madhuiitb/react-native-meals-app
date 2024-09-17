import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'; 

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverview from './screens/MealsOverview';
import MealDetails from './screens/MealDetails';
import Favourites from './screens/FavouritesScreen';
// import FavouritesContextProvider from './store/context/favourite-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = ()=> {
  return <Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: '#414ea4' },
    headerTintColor: 'white',
    sceneContainerStyle: { backgroundColor: '#d2d3d6' },
    drawerContentStyle: { backgroundColor: '#949fe7' },
    drawerInactiveTintColor: 'white',
    drawerActiveTintColor: '#414ea4',
    drawerActiveBackgroundColor: '#eee7e7',
  }}>
    <Drawer.Screen name='Categories' component={CategoriesScreen} options={{
      title: 'All Categories',
      drawerIcon: ({ color, size }) => (
        <Ionicons name='list' color={color} size={size}/>
      ),
    }}/>
    <Drawer.Screen name='Favourites' component={Favourites}
      options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons name='star' color={color} size={size} />
        ),
      }}
    />
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      {/* <FavouritesContextProvider> */}
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#414ea4' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#d2d3d6' }
        }}>
          <Stack.Screen
            name='MealsCategories'
            component={DrawerNavigator}
            options={{
              headerShown:false
            }} />
          <Stack.Screen
            name='MealsOverview'
            component={MealsOverview}
          />
          <Stack.Screen
            name='MealDetail'
            component={MealDetails}
            options={{
              title: 'About the Meal'
            }}
          />
        </Stack.Navigator>
        </NavigationContainer>
        {/* </FavouritesContextProvider> */}
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
