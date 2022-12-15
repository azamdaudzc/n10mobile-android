import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { View, Text, FlatList, ScrollView } from "react-native";
import Box from "../../../Components/Box";
import DateView from "../../../Components/DateView";
import HomeHeader from "../../../Components/HomeHeader";
import UserHeader from "../../../Components/UserHeader";
import WeekCard from "../../../Components/WeekCard";
import COLORS from "../../../Constants/COLORS";
import DayData from "../../../Constants/DayData";
import NutritionData from "../../../Constants/NutritionData";
import TrainingData from "../../../Constants/TrainingData";
import styles from "./styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { first } from "../../../Store/Reducer/AuthReducer";
import { useDispatch, useSelector } from "react-redux";
import { dashboard } from "../../../Store/Actions/UserData";

const Home = () => {

    const focus = useIsFocused();
    const dispatch = useDispatch();
    const [dash, setDash] = useState([]);
    // const [asyncVal, setAsyncVal] = useState('');

    const AuthState = useSelector(state => {
        return state?.AuthReducer;
    });

    let token = AuthState?.TokenId;

    // const getData = async () => {
    //     try {
    //         const value = await AsyncStorage.getItem('checkComplete')
    //         if (value !== null) {
    //             setAsyncVal(value);
    //         };
    //     } catch (e) {
    //         console.log("getData error", e);
    //     };
    // };

    useEffect(() => {
        // getData();
        dispatch(first(true));
        dashboard(setDash, token);
    }, [focus]);

    // console.log("dash", dash);

    return (
        <>
            <View style={styles.container}>
                <UserHeader type={1} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <DateView title={"WEEK OF 24 APRIL 2022 - 07 MAY 2022"} />
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
                </ScrollView>
            </View>
        </>
    );
};

export default Home;