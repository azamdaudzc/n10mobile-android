import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import COLORS from "../../Constants/COLORS";
import { trackImg } from "../../Constants/Images";
import Skip from "../Skip";

const Track = () => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Track</Text>
                <Text style={styles.detail}>Track your workout & diet activity</Text>
                <Image
                    source={trackImg}
                    style={styles.trackImg}
                />
                <Skip />
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
        color: COLORS.mehron,
        fontSize: 30
    },
    container: {
        flex: 1,
        width: "90%",
        justifyContent: "center",
        alignSelf: "center"
    }
});