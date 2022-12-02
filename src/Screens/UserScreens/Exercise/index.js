import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import DateView from "../../../Components/DateView";
import HomeHeader from "../../../Components/HomeHeader";
import UserHeader from "../../../Components/UserHeader";
import WeekCard from "../../../Components/WeekCard";
import ExerciseCard from "../../../Components/ExerciseCard";
import NanCard from "../../../Components/NanCard";
import SetDataBox from "../../../Components/SetDataBox";
import WeekData from "../../../Constants/WeekData";
import DayData from "../../../Constants/DayData";
import ExerciseData from "../../../Constants/ExerciseData";
import PreviousData from "../../../Constants/PreviousData";
import SetData from "../../../Constants/SetData";
import styles from "./styles";
import COLORS from "../../../Constants/COLORS";
import { backExercise } from "../../../Constants/Images";

const Exercise = () => {
    const [ques, setQues] = useState(0);

    const update = () => {
        setQues((prev) => prev + 1);
    };

    const renderWeek = ({ item }) => {
        return (
            <>
                <TouchableOpacity onPress={update}>
                    <WeekCard day={item?.week} />
                </TouchableOpacity>
            </>
        );
    };

    const renderDay = ({ item }) => {
        return (
            <>
                <TouchableOpacity onPress={update}>
                    <WeekCard day={item?.day} />
                </TouchableOpacity>
            </>
        );
    };

    const renderExercise = ({ item }) => {
        return (
            <>
                <TouchableOpacity onPress={update}>
                    <ExerciseCard
                        image={item?.image}
                        title={item?.title}
                        instructions={item?.instructions}
                        rest={item?.rest}
                    />
                </TouchableOpacity>
            </>
        );
    };

    const renderPrevious = ({ item }) => {
        return (
            <>
                <NanCard title={item?.title} week={item?.week} />
            </>
        );
    };

    const renderSetData = ({ item }) => {
        return (
            <>
                <SetDataBox
                    title={item?.title}
                    weight={item?.weight}
                    reps={item?.reps}
                    rpes={item?.rpes}
                />
            </>
        );
    };

    return (
        <>
            <View style={styles.container}>
                <View style={{ alignItems: "center", backgroundColor: COLORS.grey }}>
                    <HomeHeader />
                </View>
                {
                    ques === 0 ? (
                        <>
                            <UserHeader type={1} comp={0} />
                            <DateView title={"ALL WEEKS WORKOUTS"} type={0} />
                            <FlatList
                                data={WeekData}
                                renderItem={renderWeek}
                                keyExtractor={(item) => item.id}
                                inverted={true}
                                showsVerticalScrollIndicator={false}
                                initialScrollIndex={0}
                            />
                        </>
                    ) : null
                }
                {
                    ques === 1 ? (
                        <>
                            <UserHeader type={0} comp={0} />
                            <DateView title={"WEEK 10  EXERCISE"} type={1} setQues={setQues} />
                            <FlatList
                                data={DayData}
                                renderItem={renderDay}
                                keyExtractor={(item) => item.id}
                                showsVerticalScrollIndicator={false}
                            />
                        </>
                    ) : null}
                {ques === 2 ? (
                    <>
                        <UserHeader type={0} comp={0} />
                        <DateView
                            title={"WORKOUTS: WEEK 10-DAY 1"}
                            type={0}
                            setQues={setQues}
                        />
                        <View style={styles.nutrition}>
                            <Text style={{ color: COLORS.white, alignSelf: "center" }}>
                                EXERCISES
                            </Text>
                        </View>
                        <FlatList
                            data={ExerciseData}
                            renderItem={renderExercise}
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={false}
                        />
                    </>
                ) : null
                }
                {
                    ques === 3 ? (
                        <>
                            <View style={{ width: "100%" }}>
                                <UserHeader type={0} comp={1} />
                                <DateView title={"WEEK 10 - DAY 1"} type={1} setQues={setQues} />
                                <View style={styles.nutrition}>
                                    <Text style={{ color: COLORS.white, alignSelf: "center" }}>
                                        EXERCISE : BACK
                                    </Text>
                                </View>
                                <View style={styles.card}>
                                    <View>
                                        <Image
                                            source={backExercise}
                                            style={styles.backImg}
                                        />
                                    </View>
                                    <View style={styles.ExText}>
                                        <Text style={styles.backText}>Back</Text>
                                        <Text style={styles.primary}>Primary Muscle Group</Text>
                                        <Text style={styles.primary}>Secondary Muscle Group</Text>
                                    </View>
                                    <View style={styles.ExText}>
                                        <Text style={styles.backText}>Instructions</Text>
                                        <Text style={styles.primary}>Sets X Reps, RPE</Text>
                                        <Text style={styles.primary}>REST TIME: 5.00</Text>
                                    </View>
                                    <TouchableOpacity style={styles.changeBtn}>
                                        <Text style={styles.change}>Change Exercise</Text>
                                    </TouchableOpacity>
                                </View>
                                <DateView title={"PREVIOUS ENTRIES"} type={0} />
                                <FlatList
                                    data={PreviousData}
                                    renderItem={renderPrevious}
                                    keyExtractor={(item) => item.id}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal={true}
                                    contentContainerStyle={{
                                        flex: 1,
                                        justifyContent: "space-between"
                                    }}
                                />
                                <FlatList
                                    data={SetData}
                                    renderItem={renderSetData}
                                    keyExtractor={(item) => item.id}
                                />
                            </View>
                        </>
                    ) : null
                }
            </View>
        </>
    );
};

export default Exercise;