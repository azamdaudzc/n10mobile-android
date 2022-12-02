import React from "react";
import { Image, StyleSheet } from "react-native";

const ProgressPic = ({ picture }) => {
    return (
        <>
            <Image source={picture} style={styles.container} />
        </>
    );
};

export default ProgressPic;

const styles = StyleSheet.create({
    container: {
        resizeMode: "contain",
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        margin: 6
        // justifyContent: "center",
        // alignSelf: "space-between"
    }
});