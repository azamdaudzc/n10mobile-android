import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../Screens/AuthScreens/Login';
import Signup from '../../Screens/AuthScreens/Signup';
import Tutorial from '../../Screens/AuthScreens/Tutorial';
import Welcome from '../../Screens/AuthScreens/Welcome';
import { useSelector } from 'react-redux';

const AuthNavigation = () => {

    const Stack = createNativeStackNavigator();

    const AuthState = useSelector(state => {
        return state?.AuthReducer?.first;
    });

    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {
                    AuthState == false ?
                        <Stack.Screen
                            name="TutorialScreen"
                            component={Tutorial}
                        />
                        :
                        null
                }
                <Stack.Screen
                    name="LoginScreen"
                    component={Login}
                />
                <Stack.Screen
                    name="SignUpScreen"
                    component={Signup}
                />
                <Stack.Screen
                    name='WelcomeScreen'
                    component={Welcome}
                />
            </Stack.Navigator>
        </>
    );
};

export default AuthNavigation;