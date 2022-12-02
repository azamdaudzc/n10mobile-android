import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
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

const Home = () => {

    const focus = useIsFocused();
    const [asyncVal, setAsyncVal] = useState('');

    const renderItem = ({ item }) => {
        return (
            <>
                <Box value={item?.value} title={item?.title} key={item?.id} />
            </>
        );
    };

    const renderTraining = ({ item }) => {
        return (
            <>
                <Box value={item?.value} title={item?.title} key={item?.id} />
            </>
        );
    };

    const renderWeek = ({ item }) => {
        return (
            <>
                <WeekCard day={item?.day} key={item?.id} />
            </>
        );
    };

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('checkComplete')
            if (value !== null) {
                setAsyncVal(value);
            };
        } catch (e) {
            console.log("getData error", e);
        };
    };

    // console.log("asyncVal", asyncVal);

    useEffect(() => {
        getData();
    }, [focus]);

    return (
        <>
            <View style={styles.container}>
                <View style={{ alignItems: "center", backgroundColor: COLORS.grey }}>
                    <HomeHeader />
                </View>
                <UserHeader type={1} />
                <DateView title={"WEEK OF 24 APRIL 2022 - 07 MAY 2022"} />
                <View style={styles.nutrition}>
                    <Text style={{ color: COLORS.white, alignSelf: "center" }}>
                        NUTRITION STATISTICS
                    </Text>
                </View>
                <FlatList
                    data={NutritionData}
                    style={{ width: "100%" }}
                    contentContainerStyle={{
                        flex: 1,
                        justifyContent: "center"
                    }}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
                <View style={styles.nutrition}>
                    <Text style={{ color: COLORS.white, alignSelf: "center" }}>
                        TRAINING STATISTICS
                    </Text>
                </View>
                <View style={{ width: "100%" }}>
                    <FlatList
                        data={TrainingData}
                        style={{ width: "100%" }}
                        contentContainerStyle={{
                            flex: 1,
                            justifyContent: "center",
                            alignContent: "center"
                        }}
                        renderItem={renderTraining}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View style={styles.nutrition}>
                    <Text style={{ color: COLORS.white, alignSelf: "center" }}>
                        CURRENT WEEK WORKOUTS
                    </Text>
                </View>
                <FlatList
                    data={DayData}
                    style={{ width: "100%" }}
                    renderItem={renderWeek}
                    keyExtractor={(item) => item.id}
                // contentContainerStyle={{
                //     // justifyContent: "center",
                //     // alignItem: "center"
                // }}
                />
            </View>
        </>
    );
};

export default Home;