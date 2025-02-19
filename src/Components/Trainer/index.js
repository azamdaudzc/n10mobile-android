import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import COLORS from "../../Constants/COLORS";
import { trainerImg } from "../../Constants/Images";
import Skip from "../Skip";

const Trainer = () => {
    return (
        <>
            <View style={styles.container}>
                <Image
                    source={trainerImg}
                    style={styles.workoutImg}
                />
                <Text style={styles.workTitle}>Trainer</Text>
                <Text style={styles.workDetail}>
                    Hire personal trainer to help reach your goals
                </Text>
                <Skip />
            </View>
        </>
    );
};

export default Trainer;

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