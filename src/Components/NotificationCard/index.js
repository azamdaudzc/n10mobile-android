import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import COLORS from '../../Constants/COLORS';
import { running } from '../../Constants/Images';

const NotificationCard = ({ item }) => {
    return (
        <>
            <View style={styles.container}>
                <Image source={running} style={styles.icon} />
                <View style={styles.textView}>
                    <Text style={styles.title}>{item?.name}</Text>
                    <Text style={styles.detail}>{item?.message}</Text>
                </View>
            </View>
        </>
    );
};

export default NotificationCard;

const styles = StyleSheet.create({
    textView: {
        marginLeft: 10,
        alignSelf: "center"
    },
    icon: {
        resizeMode: "contain",
        width: 50,
        height: 50,
        alignSelf: "center",
        marginLeft: 10
    },
    detail: {
        color: COLORS.black,
        fontSize: 12,
    },
    title: {
        color: COLORS.black,
        fontSize: 15,
        fontWeight: "bold"
    },
    container: {
        flexDirection: "row",
        backgroundColor: COLORS.white,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        height: 80,
        width: "90%",
        alignSelf: "center",
        marginTop: 7,
        borderRadius: 8,
        marginBottom: 8
    },
});