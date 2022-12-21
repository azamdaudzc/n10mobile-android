import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import COLORS from "../../Constants/COLORS";
import { workImg } from "../../Constants/Images";
import Skip from "../Skip";

const Workout = () => {
    return (
        <>
            <View style={styles.container}>
                <Image
                    source={workImg}
                    style={styles.workoutImg}
                />
                <Text style={styles.workTitle}>Workout</Text>
                <Text style={styles.workDetail}>
                    Create your workout & diet plan to stay fit
                </Text>
                <Skip />
            </View>
        </>
    );
};

export default Workout;

const styles = StyleSheet.create({
    workDetail: {
        width: "80%",
        fontSize: 18,
        color: COLORS.black
    },
    workTitle: {
        fontWeight: "bold",
        color: COLORS.mehron,
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