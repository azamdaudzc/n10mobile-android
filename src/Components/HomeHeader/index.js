import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import COLORS from "../../Constants/COLORS";
import { bell, downArray } from "../../Constants/Images/index";
import { LoginUser, LogOut, TokenId, UserDetail } from "../../Store/Reducer/AuthReducer";

const HomeHeader = () => {

    const dispatch = useDispatch();

    const logout = () => {
        dispatch(LogOut([]))
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.N10}>
                    <Image
                        source={bell}
                        style={styles.notification}
                    />
                    <Text style={styles.N10Text}>N10FIT</Text>
                    <TouchableOpacity onPress={logout} >
                        <Image
                            source={downArray}
                            style={styles.drop}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

export default HomeHeader;

const styles = StyleSheet.create({
    N10Text: {
        fontSize: 30,
        color: COLORS.black
    },
    drop: {
        resizeMode: "contain",
        width: 30,
        height: 30,
        tintColor: COLORS.white
    },
    N10: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 50,
        marginTop: 10
    },
    notification: {
        resizeMode: "contain",
        width: 30,
        height: 30,
        tintColor: COLORS.white
    },
    container: {
        width: "95%"
    }
});