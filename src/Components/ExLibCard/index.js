import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ExLibCard = ({ image, title }) => {
    return (
        <>
            <View style={styles.container}>
                <Image source={image} style={styles.image} />
                <Text style={styles.title}>{title}</Text>
            </View>
        </>
    );
};

export default ExLibCard;

const styles = StyleSheet.create({
    title: {
        color: "#710000",
        fontWeight: "bold",
        marginLeft: 10,
        fontSize: 18
    },
    image: {
        resizeMode: "contain",
        width: 50,
        height: 50,
        borderWidth: 1,
        marginLeft: 10,
        borderRadius: 10
    },
    container: {
        // flex: 1,
        borderWidth: 1,
        marginBottom: 8,
        height: 70,
        width: "95%",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 10
    }
});