import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, View } from 'react-native';
import COLORS from '../../../Constants/COLORS';
import Home from '../../../Screens/UserScreens/Home';
import { bell, exerciseIcon, folderIcon, square } from '../../../Constants/Images';
import Exercise from '../../../Screens/UserScreens/Exercise';
import Composition from '../../../Screens/UserScreens/Composition';
import ExerciseLibrary from '../../../Screens/UserScreens/ExerciseLibrary';

const BottomNavigation = () => {

    const Tab = createBottomTabNavigator();

    const screenOptions = route => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarActiveTintColor: COLORS.black,
        tabBarInactiveTintColor: COLORS.white,
        tabBarShowLabel: false,
        tabBarIconStyle: {
            paddingBottom: 0
        },
        tabBarStyle: {
            position: 'absolute',
            height: 60,
            elevation: 24,
            borderTopWidth: 0,
            backgroundColor: COLORS.grey
        },
    });

    const ActiveIcon = ({ img }) => (
        <Image style={[styles.ActiveImage]} source={img} resizeMode={'contain'} />
    );

    const UnActiveIcon = ({ img }) => (
        <Image style={styles.UnActiveImage} source={img} resizeMode={'contain'} />
    );

    return (
        <>
            <Tab.Navigator screenOptions={screenOptions} initialRouteName={'HomeScreen'}>
                <Tab.Screen
                    name={'HomeScreen'}
                    component={Home}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <>
                                    {
                                        !focused ?
                                            <View style={styles.View}>
                                                <ActiveIcon img={square} />
                                            </View>
                                            :
                                            <UnActiveIcon img={square} />
                                    }
                                </>
                            );
                        },
                    }}
                />
                <Tab.Screen
                    name={'ExerciseScreen'}
                    component={Exercise}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <>
                                    {
                                        !focused ?
                                            <View style={styles.View}>
                                                <ActiveIcon img={exerciseIcon} />
                                            </View>
                                            :
                                            <UnActiveIcon img={exerciseIcon} />
                                    }
                                </>
                            );
                        },
                    }}
                />
                <Tab.Screen
                    name={'ExerciseLibraryScreen'}
                    component={ExerciseLibrary}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <>
                                    {
                                        !focused ?
                                            <View style={styles.View}>
                                                <ActiveIcon img={folderIcon} />
                                            </View>
                                            :
                                            <UnActiveIcon img={folderIcon} />
                                    }
                                </>
                            );
                        },
                    }}
                />
                <Tab.Screen
                    name={'NotificationScreen'}
                    component={Composition}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <>
                                    {
                                        !focused ?
                                            <View style={styles.View}>
                                                <ActiveIcon img={bell} />
                                            </View>
                                            :
                                            <UnActiveIcon img={bell} />
                                    }
                                </>
                            );
                        },
                    }}
                />
            </Tab.Navigator>
        </>
    );
};

export default BottomNavigation;

const styles = StyleSheet.create({
    ActiveImage: {
        height: 25,
        width: 25,
        tintColor: COLORS.white,
        borderRightWidth: 1,
    },
    UnActiveImage: {
        height: 30,
        width: 30,
        tintColor: COLORS.mehron
    },
    View: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});