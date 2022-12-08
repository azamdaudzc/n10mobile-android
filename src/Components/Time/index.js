import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import COLORS from "../../Constants/COLORS";
import { timeImg } from "../../Constants/Images";
import Skip from "../Skip";

const Time = () => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.timeText}>Time</Text>
                <Text style={styles.timeDetail}>
                    Don't waste your time & start your journey
                </Text>
                <Image
                    source={timeImg}
                    style={styles.timeImg}
                />
                <Skip />
            </View>
        </>
    );
};

export default Time;

const styles = StyleSheet.create({
    timeDetail: {
        width: "80%",
        fontSize: 18
    },
    timeText: {
        color: COLORS.mehron,
        fontWeight: "bold",
        fontSize: 30
    },
    timeImg: {
        resizeMode: "contain",
        width: "90%",
        height: "50%"
    },
    container: {
        flex: 1,
        width: "90%",
        justifyContent: "center",
        alignSelf: "center"
    }
});