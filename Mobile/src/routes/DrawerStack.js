import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import HomeScreen from '../Screens/HomeScreen';
import SportsScreen from '../Screens/SportsScreen';
import { AntDesign } from '@expo/vector-icons';
import BusinessScreen from "../Screens/BusinessScreen";
const Drawer = createDrawerNavigator();

const DrawerStack = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: "rgb(57, 116, 158)",
                    height: 120
                },
                headerTintColor: "white",
                headerBackTitle: "Back",
                headerTitleAlign: "center",
                drawerActiveBackgroundColor: 'rgb(57, 116, 158)',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',
                drawerLabelStyle: {
                    fontSize: 15,
                }
            }}
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <AntDesign name="right" size={24} color="black" />
                    ),

                    headerTitle: 'Technology',
                    title: 'Technology',
                }}
            />
            <Drawer.Screen name="Sports" component={SportsScreen} options={{
                drawerIcon: ({ color }) => (
                    <AntDesign name="right" size={24} color="black" />
                ),

                headerTitle: 'Sports',
                title: 'Sports',
            }}
            />
            <Drawer.Screen name="Business" component={BusinessScreen} options={{
                drawerIcon: ({ color }) => (
                    <AntDesign name="right" size={24} color="black" />
                ),

                headerTitle: 'Business',
                title: 'Business',
            }}
            />
        </Drawer.Navigator>
    );
};

export default DrawerStack;
