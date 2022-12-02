import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Track = () => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Track</Text>
                <Text style={styles.detail}>Track your workout & diet activity</Text>
                <Image
                    source={require("../../Assets/trackImg.png")}
                    style={styles.trackImg}
                />
            </View>
        </>
    );
};

export default Track;

const styles = StyleSheet.create({
    trackImg: {
        resizeMode: "contain",
        width: "100%",
        height: "50%"
    },
    detail: {
        width: "80%",
        fontSize: 18
    },
    title: {
        fontWeight: "bold",
        color: "#710000",
        fontSize: 30
    },
    container: {
        flex: 1,
        width: "90%",
        justifyContent: "center",
        alignSelf: "center"
    }
});