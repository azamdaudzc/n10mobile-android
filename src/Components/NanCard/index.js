import React from "react";
import { StyleSheet, Text, View } from "react-native";
import COLORS from "../../Constants/COLORS";

const NanCard = ({ title, week }) => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.titleView}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.week}>{week}</Text>
                </View>
            </View>
        </>
    );
};

export default NanCard;

const styles = StyleSheet.create({
    week: {
        fontSize: 10,
        color: COLORS.black
    },
    title: {
        fontWeight: "bold",
        color: COLORS.black
    },
    titleView: {
        alignItems: "center",
        marginTop: 15
    },
    container: {
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 7
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        width: 80,
        height: 60,
        elevation: 15,
        backgroundColor: COLORS.white,
        margin: 10,
        borderRadius: 10
    }
});