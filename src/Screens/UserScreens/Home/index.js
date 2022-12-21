import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import Box from "../../../Components/Box";
import DateView from "../../../Components/DateView";
import UserHeader from "../../../Components/UserHeader";
import WeekCard from "../../../Components/WeekCard";
import COLORS from "../../../Constants/COLORS";
import styles from "./styles";
import { first } from "../../../Store/Reducer/AuthReducer";
import { useDispatch, useSelector } from "react-redux";
import { dashboard } from "../../../Store/Actions/UserData";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {

    const AuthState = useSelector(state => {
        return state?.AuthReducer;
    });

    const focus = useIsFocused();
    const dispatch = useDispatch();
    const token = AuthState?.TokenId;
    const [dash, setDash] = useState([]);
    const [newUser, setNewUser] = useState(false);
    const [load, setLoad] = useState(true);


    const saveDate = async (week) => {
        let date = {
            start: week?.start_date,
            end: week?.end_date
        };
        try {
            const jsonValue = JSON.stringify(date);
            await AsyncStorage.setItem('weekDate', jsonValue);
        } catch (e) {
            console.log("save Date Error", e);
        };
    };

    useEffect(() => {
        saveDate(dash?.weeks);
    }, [dash]);

    useEffect(() => {
        dispatch(first(true));
        dashboard(setDash, setLoad, setNewUser, token);
    }, [focus]);

    return (
        <>
            <View style={styles.container}>
                <UserHeader type={1} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        load == true ? (
                            <ActivityIndicator size={"large"} color={COLORS.mehron} />
                        ) : (
                            <>
                                {
                                    newUser == true ? (
                                        <>
                                            <Text style={styles.programText}>No Program is Assigned</Text>
                                        </>
                                    ) : (
                                        <>
                                            <DateView />
                                            <View>
                                                <View style={styles.nutrition}>
                                                    <Text style={{ color: COLORS.white, alignSelf: "center" }}>
                                                        NUTRITION STATISTICS
                                                    </Text>
                                                </View>
                                                <View style={styles.nutritionBox}>
                                                    <Box title={"Nutrition Phase"} value={0} />
                                                    <Box title={"Assign Calories"} value={dash?.weeks?.assigned_calories} />
                                                    <Box title={"Assign Protien"} value={dash?.weeks?.assigned_proteins} />
                                                    <Box title={"Energy Expenditure"} value={0} />
                                                </View>
                                            </View>
                                            <View>
                                                <View style={styles.nutrition}>
                                                    <Text style={{ color: COLORS.white, alignSelf: "center" }}>
                                                        TRAINING STATISTICS
                                                    </Text>
                                                </View>
                                                <View style={styles.nutritionBox}>
                                                    <Box title={"Training Phase"} value={0} />
                                                    <Box title={"Program"} value={0} />
                                                    <Box title={"Block"} value={0} />
                                                    <Box title={"Weeks"} value={0} />
                                                </View>
                                            </View>
                                            <View style={{ marginBottom: 70 }}>
                                                <View style={styles.nutrition}>
                                                    <Text style={{ color: COLORS.white, alignSelf: "center" }}>
                                                        CURRENT WEEK WORKOUTS
                                                    </Text>
                                                </View>
                                                {
                                                    dash?.week_day?.map((v, i) => {
                                                        return (
                                                            <WeekCard day={v?.day_title} key={i} />
                                                        )
                                                    })
                                                }
                                            </View>
                                        </>
                                    )
                                }
                            </>
                        )
                    }
                </ScrollView>
            </View>
        </>
    );
};

export default Home;