import React, { useEffect } from "react";
import { View } from "react-native";
import styles from "./styles";
import HomeHeader from "../../../Components/HomeHeader";
import UserHeader from "../../../Components/UserHeader";
import COLORS from "../../../Constants/COLORS";
import { getNotification } from "../../../Store/Actions/UserData";
import { useSelector } from "react-redux";

const Composition = () => {

    const AuthState = useSelector(state => {
        return state?.AuthReducer;
    });

    let token = AuthState?.TokenId;

    useEffect(() => {
        getNotification(token);
    }, []);

    return (
        <>
            <View style={styles.container}>
                {/* <View style={{ alignItems: "center", backgroundColor: COLORS.grey }}>
                    <HomeHeader />
                </View> */}
                <UserHeader type={1} />
            </View>
        </>
    );
};

export default Composition;
