import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FormScreen from '../screens/FormScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default BottomTab = (props) => {

    console.log("BottomTab Component Loaded!!!");

    return(    
        <Tab.Navigator
        activeColor="blue"
        barStyle={{ backgroundColor: 'white', height: 70, labelColor: 'red', paddingTop:10}}
        >

            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={28} />
                    ),
                }}

                listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        /*When the Home is clicked, use it as a reset function. Here we are not using Tab "navigation". This is the App.js "navigation"
                        We are forcing the whole bottom tab component to re-render. I know this is not the correct solution but somehow the navigation
                        Tab Navigator component does not respond in the current version
                        */
                        props.navigation.replace("BottomTab");
                    },
                })}
            />


            <Tab.Screen 
                name="Form" 
                component={FormScreen}
                options={{
                    tabBarLabel: 'Add Listing',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="plus" color={color} size={28} />
                    ),
                }}
            />

        </Tab.Navigator>
        
    );
};