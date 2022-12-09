import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import BottomTabs from "../UserNavigation/BottomNavigation"
import CheckIn from '../../Screens/UserScreens/CheckIn';
import Profile from '../../Screens/UserScreens/Profile';

const UserNavigation = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={'BottomTabs'}
        >
            <Stack.Screen
                name="BottomTabs"
                component={BottomTabs}
            />
            <Stack.Screen
                name="CheckInPage"
                component={CheckIn}
            />
            <Stack.Screen
                name="ProfileScreen"
                component={Profile}
            />
        </Stack.Navigator>
    );
};

export default UserNavigation;