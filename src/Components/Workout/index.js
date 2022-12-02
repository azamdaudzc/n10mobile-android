import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Workout = () => {
    return (
        <>
            <View style={styles.container}>
                <Image
                    source={require("../../Assets/workoutImg.png")}
                    style={styles.workoutImg}
                />
                <Text style={styles.workTitle}>Workout</Text>
                <Text style={styles.workDetail}>
                    Create your workout & diet plan to stay fit
                </Text>
            </View>
        </>
    );
};

export default Workout;

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