import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import COLORS from '../../Constants/COLORS';
import { legExercise, rightArrow } from '../../Constants/Images';

const WarmUpCard = ({ item }) => {

    return (
        <>
            <View style={styles.container}>
                <View style={styles.row}>
                    <Image source={legExercise} style={styles.image} />
                    <View style={styles.text}>
                        <Text style={styles.title}>{item?.warmup_builder?.name}</Text>
                        <Text style={styles.description}>{item?.warmup_builder?.description}</Text>
                        <TouchableOpacity style={styles.learn}>
                            <Text style={styles.learnText}>Learn More</Text>
                            <Image source={rightArrow} style={styles.rightArrow} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
};

export default WarmUpCard;

const styles = StyleSheet.create({
    learnText: {
        color: COLORS.mehron,
        fontSize: 12,
    },
    learn: {
        flexDirection: "row"
    },
    rightArrow: {
        resizeMode: "contain",
        alignSelf: "center",
        width: 15,
        height: 10,
        marginTop: 3,
        marginLeft: 5
    },
    description: {
        fontSize: 10,
        color: COLORS.grey2,
        width: "90%"
    },
    text: {
        marginLeft: 8
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        color: COLORS.mehron
    },
    row: {
        flexDirection: "row",
    },
    image: {
        resizeMode: "contain",
        width: 50,
        height: 50,
        barderRadius: 10
    },
    container: {
        borderWidth: 1,
        color: COLORS.grey1,
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        borderColor: COLORS.grey1,
        width: "48%"
    },
});