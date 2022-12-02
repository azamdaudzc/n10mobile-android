import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import AuthNavigation from "./AuthNavigation";
import UserNavigation from "./UserNavigation";

const Navigation = () => {

    const [routeName, setRouteName] = useState();
    // const navigationRef = createNavigationContainerRef();

    const AuthState = useSelector(state => {
        return state?.AuthReducer;
    });

    return (
        <>
            <NavigationContainer>
                {AuthState?.LoginUser ? (
                    <UserNavigation routeName={routeName} />
                ) : (
                    <AuthNavigation routeName={routeName} />
                )}
            </NavigationContainer>
        </>
    );
};

export default Navigation;