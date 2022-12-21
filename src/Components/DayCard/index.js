import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import COLORS from '../../Constants/COLORS';

const DayCard = ({ day }) => {
    return (
        <>
            <View style={styles.shadow}>
                <View style={styles.row}>
                    <View style={styles.row1}>
                        <View style={styles.box}>
                            <Text style={styles.n10}>N10</Text>
                        </View>
                        <View>
                            <Text style={styles.dayText}>{day?.day_title}</Text>
                            <Text style={styles.dateText}>{day?.date}</Text>
                            <Text style={styles.dateText}>{day?.status}</Text>
                        </View>
                    </View>
                    {
                        day?.status !== "Rest Day" ? (
                            <>
                                <Text style={styles.viewText}>{day?.status == `start` ? "Start" : "View"}</Text>
                            </>
                        ) : null
                    }
                </View>
            </View>
        </>
    );
};

export default DayCard;

const styles = StyleSheet.create({
    viewText: {
        color: COLORS.mehron,
        marginRight: 15
    },
    dateText: {
        fontSize: 10,
        marginLeft: 10,
        color: COLORS.black
    },
    dayText: {
        fontWeight: "bold",
        marginLeft: 10,
        color: COLORS.black
    },
    row1: {
        flexDirection: "row",
        alignItems: "center"
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    leftArrow: {
        resizeMode: "contain",
        width: 20,
        height: 20,
        marginRight: 10,
        tintColor: COLORS.mehron
    },
    box: {
        borderWidth: 1,
        borderRadius: 5,
        height: 50,
        marginLeft: 10,
        width: 50,
        marginTop: 10
    },
    n10: {
        marginTop: 12,
        alignSelf: "center",
        color: COLORS.black
    },
    shadow: {
        alignSelf: "center",
        marginTop: 10,
        width: "95%",
        height: 70,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
        backgroundColor: COLORS.white,
        borderRadius: 5
    }
});