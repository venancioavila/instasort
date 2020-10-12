import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../pages/Home"

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="INSTASORT" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes