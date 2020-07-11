import 'react-native-gesture-handler';

import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import DetailedScreen from './Screens/DetailedScreen';
import MainScreen from './Screens/MainScreen';
import Recipe from './components/RecipeList/Recipe';
const Stack = createStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Feed" component={MainScreen} />
        <Stack.Screen name="DetailedRecipe" component={DetailedScreen} />
        <Stack.Screen name="Recipe" component={Recipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
