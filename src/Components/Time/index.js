import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Time = () => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.timeText}>Time</Text>
                <Text style={styles.timeDetail}>
                    Don't waste your time & start your journey
                </Text>
                <Image
                    source={require("../../Assets/timeImg.png")}
                    style={styles.timeImg}
                />
            </View>
        </>
    );
};

export default Time;

const styles = StyleSheet.create({
    timeDetail: {
        // textAlign:"center"
        width: "80%",
        fontSize: 18
    },
    timeText: {
        color: "#710000",
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