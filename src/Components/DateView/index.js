import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import COLORS from "../../Constants/COLORS";
import AsyncStorage from '@react-native-async-storage/async-storage';

const DateView = ({ title, type, setQues }) => {

    const [startDate, setStartDate] = useState();

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('weekDate');
            return setStartDate(jsonValue != null ? JSON.parse(jsonValue) : null);
        } catch (e) {
            console.log("get Date error", e);
        };
    };

    const back = () => {
        setQues((prev) => prev - 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            getData();
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <View style={styles.container}>
                <View style={{ alignSelf: "center" }}>
                    {
                        type === 1 ? (
                            <TouchableOpacity onPress={back}>
                                <Text style={styles.back1}>BACK</Text>
                            </TouchableOpacity>
                        ) : null
                    }
                </View>
                {
                    title !== undefined ? (
                        <View style={{ alignSelf: "center" }}>
                            <Text style={styles.week}>{title}</Text>
                        </View>
                    ) : (
                        <View style={{ alignSelf: "center" }}>
                            <Text style={styles.week}>WEEK OF {startDate?.start} - {startDate?.end}</Text>
                        </View>
                    )
                }
                <View />
            </View>
        </>
    );
};

export default DateView;

const styles = StyleSheet.create({
    back1: {
        color: COLORS.white,
        alignSelf: "center",
        marginLeft: 10
    },
    week: {
        color: COLORS.white,
        alignSelf: "center",
        marginLeft: -25
    },
    container: {
        width: "100%",
        height: 40,
        backgroundColor: COLORS.grey,
        justifyContent: "space-between",
        flexDirection: "row"
    }
});