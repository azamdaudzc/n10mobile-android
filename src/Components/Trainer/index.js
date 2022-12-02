import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Trainer = () => {
    return (
        <>
            <View style={styles.container}>
                <Image
                    source={require("../../Assets/trainerImg.png")}
                    style={styles.workoutImg}
                />
                <Text style={styles.workTitle}>Trainer</Text>
                <Text style={styles.workDetail}>
                    Hire personal trainer to help reach your goals
                </Text>
            </View>
        </>
    );
};

export default Trainer;

const styles = StyleSheet.create({
    workDetail: {
        width: "80%",
        fontSize: 18
    },
    workTitle: {
        fontWeight: "bold",
        color: "#710000",
        fontSize: 30
    },
    workoutImg: {
        resizeMode: "contain",
        width: "100%",
        height: "50%"
    },
    container: {
        flex: 1,
        width: "90%",
        justifyContent: "center",
        alignSelf: "center"
    }
});