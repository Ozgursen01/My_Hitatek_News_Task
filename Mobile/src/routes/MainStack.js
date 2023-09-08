import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerStack from './DrawerStack';
import HomeScreen from "../Screens/HomeScreen";
import SportsScreen from "../Screens/SportsScreen";
import BusinessScreen from "../Screens/BusinessScreen";
const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Drawer"
        component={DrawerStack}
        options={{ headerShown: false }}
      />
        <Stack.Screen name="Home" component={HomeScreen} options={{title:"Technology"}}/>
        <Stack.Screen name="Sports" component={SportsScreen} options={{title:"Sports"}}/>
        <Stack.Screen name="Business" component={BusinessScreen} options={{title:"Business"}}/>

    </Stack.Navigator>
  );
}

export default MainStack;
