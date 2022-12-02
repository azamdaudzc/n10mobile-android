import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CompCard = ({ title, value }) => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.val}>{value}</Text>
            </View>
        </>
    );
};

export default CompCard;

const styles = StyleSheet.create({
    val: {
        alignSelf: "center",
        fontSize: 10,
        marginBottom: 15,
        marginTop: 10
    },
    title: {
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 12
    },
    container: {
        flex: 1,
        alignSelf: "center",
        borderBottomWidth: 1,
        borderColor: "#f0f0f0",
        marginTop: 15
    }
});