import 'react-native-gesture-handler';

import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import DetailedScreen from './Screens/DetailedScreen';
import MainScreen from './Screens/MainScreen';
import Recipe from './components/RecipeList/Recipe';
import RandomButton from './components/RandomButton';
const Stack = createStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Feed"
          component={MainScreen}
          options={{
            headerStyle: {
              backgroundColor: '#B1FF92',
            },
            headerTitleStyle: {
              alignSelf: 'center',
              fontSize: 24,
            },
          }}
        />
        <Stack.Screen
          name="DetailedRecipe"
          component={DetailedScreen}
          options={{
            headerStyle: {
              backgroundColor: '#B1FF92',
            },
            headerTitleStyle: {
              fontSize: 24,
            },
          }}
        />
        <Stack.Screen name="Recipe" component={Recipe} />
        <Stack.Screen name="RandomButton" component={RandomButton} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
