import React from "react";
import { View, Text, StyleSheet } from "react-native";
import COLORS from "../../Constants/COLORS";

const Box = ({ value, title }) => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <Text style={styles.value}>{value}</Text>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>
        </>
    );
};

export default Box;

const styles = StyleSheet.create({
    title: {
        fontSize: 10,
        color: COLORS.black,
        textAlign: "center"
    },
    value: {
        fontWeight: "bold",
        color: COLORS.black,
        textAlign: "center"
    },
    innerContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        width: 70,
        padding: 5,
        backgroundColor: COLORS.white,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 7
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
        borderRadius: 5,
        width: 75
    },
    container: {
        height: 80,
        marginTop: 10,
        marginLeft: 5,
    }
});