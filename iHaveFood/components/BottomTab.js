import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FormScreen from '../screens/FormScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default BottomTab = () => {

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