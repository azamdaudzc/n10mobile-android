import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { View } from 'react-native';
import Login from '../../Screens/AuthScreens/Login';
import Signup from '../../Screens/AuthScreens/Signup';

const AuthNavigation = () => {

    const Stack = createNativeStackNavigator();

    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="LoginScreen"
                    component={Login}
                />
                <Stack.Screen
                    name="SignUpScreen"
                    component={Signup}
                />
            </Stack.Navigator>
        </>
    );
};

export default AuthNavigation;