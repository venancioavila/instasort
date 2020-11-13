import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../pages/Home'

const Stack = createStackNavigator()

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#2c3e50',
              borderWidth: 0,
              shadowColor: 'transparent',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              alignSelf: 'center',
            },
          }}
          name="INSTASORT"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
