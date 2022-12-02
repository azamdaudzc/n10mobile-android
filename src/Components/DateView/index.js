import React from "react";
// import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import COLORS from "../../Constants/COLORS";

const DateView = ({ title, type, setQues }) => {
    // const navigation = useNavigation();

    const back = () => {
        setQues((prev) => prev - 1);
    };

    return (
        <>
            <View style={styles.container}>
                <View style={{ alignSelf: "center" }}>
                    {type === 1 ? (
                        <TouchableOpacity style={styles.backTouch} onPress={back}>
                            <Text style={styles.back1}>BACK</Text>
                        </TouchableOpacity>
                    ) : null}
                </View>
                <View style={{ alignSelf: "center" }}>
                    <Text style={styles.week}>{title}</Text>
                </View>
                <View />
            </View>
        </>
    );
};

export default DateView;

const styles = StyleSheet.create({
    backTouch: {
        // alignSelf: "center"
        // justifyContent: "flex-start"
    },
    back1: {
        color: COLORS.white,
        alignSelf: "center",
        marginLeft: 10
    },
    week: {
        color: COLORS.white,
        alignSelf: "center",
        // justifyContent: "center",
        marginLeft: -25
    },
    container: {
        width: "100%",
        height: 40,
        backgroundColor: COLORS.grey,
        justifyContent: "space-between",
        flexDirection: "row"
    }
});