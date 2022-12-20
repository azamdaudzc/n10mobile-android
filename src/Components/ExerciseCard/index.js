import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import COLORS from "../../Constants/COLORS";
import { leftArrow } from "../../Constants/Images";

const ExerciseCard = ({ item }) => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.imageView}>
                    <Image source={item?.exercise_library?.avatar} style={styles.image} />
                </View>
                <View style={styles.titleView}>
                    <Text style={styles.title}>{item?.exercise_library?.name}</Text>
                    <Text style={styles.inst}>DESCRIPTION</Text>
                    <Text style={styles.inst}>{item?.exercise_library?.description}</Text>
                </View>
                <TouchableOpacity style={styles.press}>
                    <Image
                        source={leftArrow}
                        style={styles.left}
                    />
                </TouchableOpacity>
            </View>
        </>
    );
};

export default ExerciseCard;

const styles = StyleSheet.create({
    press: {
        alignSelf: "center",
        marginLeft: "35%"
    },
    left: {
        resizeMode: "contain",
        width: 20,
        height: 20,
        tintColor: COLORS.mehron
    },
    reps: {
        fontSize: 10,
        color: COLORS.mehron
    },
    inst: {
        fontWeight: "bold",
        fontSize: 10,
        color: COLORS.mehron
    },
    title: {
        fontWeight: "bold",
        marginBottom: 5,
        color: COLORS.black
    },
    titleView: {
        alignSelf: "center",
        marginLeft: 15
    },
    imageView: {
        alignSelf: "center"
    },
    image: {
        resizeMode: "contain",
        width: 70,
        height: 70,
        marginLeft: 10,
        borderWidth: 1,
        borderRadius: 10
    },
    container: {
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 7
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
        height: 100,
        marginTop: 5,
        marginBottom: 5,
        width: "95%",
        borderRadius: 10,
        flexDirection: "row",
        alignSelf: "center",
        backgroundColor: COLORS.white
    }
});