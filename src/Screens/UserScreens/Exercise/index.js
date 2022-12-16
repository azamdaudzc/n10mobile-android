import React, { useEffect, useState } from "react";
import {
    FlatList,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
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
import { useSelector } from "react-redux";
import {
    getProgramWeek,
    getProgramWeekDays,
    programDayInfo,
    getExerciseSets,
    postAnswer,
} from "../../../Store/Actions/UserData";
import DayCard from "../../../Components/DayCard";
import WarmUpCard from "../../../Components/WarmUpCard";
import WarmUpData from "../../../Constants/WarmUpData";
import { useIsFocused } from "@react-navigation/native";

const Exercise = () => {

    const form = new FormData();
    const focus = useIsFocused();
    const [ques, setQues] = useState(0);
    const [programWeek, setProgramWeek] = useState([]);
    const [currWeek, setCurrWeek] = useState();
    const [lastWeek, setLastWeek] = useState();
    const [day, setDay] = useState([]);
    const [dayId, setDayId] = useState();
    const [dayNo, setDayNo] = useState();
    const [dayEx, setDayEx] = useState([]);
    const [exercise, setExercise] = useState([]);
    const [exNum, setExNum] = useState([]);
    const [weight, setWeight] = useState([]);
    const [reps, setReps] = useState([]);
    const [rpes, setRpes] = useState(exercise?.exercise_sets?.rpe_no);
    const [peak, setPeak] = useState([]);
    const [total, setTotal] = useState([]);

    const AuthState = useSelector(state => {
        return state?.AuthReducer;
    });

    let token = AuthState?.TokenId;

    const listDay = (weekId, weekNum) => {
        setQues(1);
        setCurrWeek(weekNum);
        let last = weekNum > 1 ? weekNum - 1 : weekNum;
        setLastWeek(last);
        getProgramWeekDays(weekId, last, setDay, token);
    };

    const getDayEx = (date, title, Id) => {
        setDayId(Id);
        setDayNo(title.toUpperCase());
        setQues(2);
        programDayInfo(date, Id, lastWeek, setDayEx, token);
    };

    const getExercise = (ExId) => {
        getExerciseSets(dayId, ExId, lastWeek, setExercise, token);
        setQues(3);
    };

    const mapNo = () => {
        if (exNum.length < exercise?.exercise_sets?.set_no) {
            for (let i = 0; i <= exercise?.exercise_sets?.set_no - 1; i++) {
                exNum.push(i);
            };
        };
    };

    // const calculate = (i) => {
    //     console.log("calculate", i, weight);
    //     let data = {
    //         exerciseId: exercise?.exercise_sets?.id,
    //         setNo: i + 1,
    //         weight: weight,
    //         reps: reps,
    //         peak: peak
    //     };
    //     if (weight?.length == 0 && reps.length == 0) {
    //         console.log("here");
    //         // setTotal
    //     };
    // };

    const send = () => {

        // form.append('day_id', exercise?.day_id)
        // form.append('w_e_' + exercise?.exercise_sets?.id + '_s_' + num, weight);
        // form.append('r_e_' + exercise?.exercise_sets?.id + '_s_' + num, reps);
        // form.append('mai_e_' + exercise?.exercise_sets?.id + '_s_' + num, peak);
        postAnswer(form, num, token);
    };

    const renderWeek = ({ item, index }) => {
        return (
            <>
                <TouchableOpacity
                    onPress={() => listDay(item?.id, item?.week_no)}
                    key={index}
                >
                    <WeekCard day={"Week " + item?.week_no} />
                </TouchableOpacity>
            </>
        );
    };

    const renderDay = ({ item, key }) => {
        return (
            <TouchableOpacity
                onPress={() => item?.status != "Rest Day" ? getDayEx(item?.date, item?.day_title, item?.day_id) : null}
                key={key}
            >
                <DayCard day={item} />
            </TouchableOpacity>
        );
    };

    const renderWarmUp = ({ item }) => {
        return (
            <>
                <WarmUpCard item={item} />
            </>
        );
    };

    const renderExercise = ({ item }) => {
        return (
            <>
                <TouchableOpacity onPress={() => getExercise(item?.id)}>
                    <ExerciseCard item={item} />
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

    useEffect(() => {
        getProgramWeek(setProgramWeek, token);
        // setQues(0);
    }, [focus]);

    useEffect(() => {
        mapNo();
    }, [exercise, focus]);

    return (
        <>
            <View style={styles.container}>
                {
                    ques === 0 ? (
                        <>
                            <UserHeader type={1} comp={0} />
                            <DateView title={"ALL WEEKS WORKOUTS"} type={0} />
                            <FlatList
                                data={programWeek?.program_weeks}
                                renderItem={(item, index) => renderWeek(item, index)}
                                keyExtractor={(item) => item.id}
                                // inverted={true}
                                showsVerticalScrollIndicator={false}
                            // initialScrollIndex={0}
                            />
                        </>
                    ) : null
                }
                {
                    ques === 1 ? (
                        <>
                            <UserHeader type={0} comp={0} />
                            <DateView title={`WEEK ${currWeek} DAYS`} type={1} setQues={setQues} />
                            <FlatList
                                data={day?.calculated_days}
                                renderItem={(item, key) => renderDay(item, key)}
                                keyExtractor={(item) => item.id}
                                showsVerticalScrollIndicator={false}
                            />
                        </>
                    ) : null
                }
                {
                    ques === 2 ? (
                        <>
                            <UserHeader type={0} comp={0} />
                            <DateView
                                title={`WORKOUTS: WEEK ${currWeek}-DAY ${dayNo}`}
                                type={1}
                                setQues={setQues}
                            />
                            <View style={styles.nutrition}>
                                <Text style={{ color: COLORS.white, alignSelf: "center" }}>
                                    WARM UP
                                </Text>
                            </View>
                            <FlatList
                                data={dayEx?.warmups}
                                renderItem={(item) => renderWarmUp(item)}
                                keyExtractor={(item) => item.id}
                                showsVerticalScrollIndicator={false}
                                numColumns={2}
                                columnWrapperStyle={{
                                    flex: 1,
                                    width: "90%",
                                    justifyContent: "space-between",
                                    alignSelf: "center"
                                }}
                                horizontal={false}
                            />
                            <View style={styles.nutrition}>
                                <Text style={{ color: COLORS.white, alignSelf: "center" }}>
                                    EXERCISES
                                </Text>
                            </View>
                            <FlatList
                                data={dayEx?.exercises}
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
                                <UserHeader type={0} comp={0} />
                                <DateView title={`WEEK ${currWeek} - DAY ${dayNo}`} type={1} setQues={setQues} />
                                <ScrollView style={{ marginBottom: 200 }} showsVerticalScrollIndicator={false}>
                                    <View style={styles.nutrition}>
                                        <Text style={{ color: COLORS.white, alignSelf: "center" }}>
                                            EXERCISE : {exercise?.exercises?.exercise_library?.exercise_category?.name}
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
                                            <Text style={styles.backText}>{exercise?.exercises?.exercise_library?.name}</Text>
                                            <Text style={styles.primary}>{exercise?.exercises?.exercise_library?.description}</Text>
                                        </View>
                                        <View style={styles.ExText}>
                                            <Text style={styles.backText}>Instructions</Text>
                                            <Text style={styles.primary}>Sets X Reps, RPE</Text>
                                            <Text style={styles.primary}>REST TIME: {exercise?.exercise_sets?.rest_time}</Text>
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
                                    {
                                        exNum?.map((v, i) => {
                                            return (
                                                <>
                                                    <SetDataBox
                                                        item={exercise}
                                                        key={i}
                                                        num={v}
                                                        total={total}
                                                        setTotal={setTotal}
                                                    // weight={weight}
                                                    // setWeight={setWeight}
                                                    // reps={reps}
                                                    // setReps={setReps}
                                                    // rpes={rpes}
                                                    // setRpes={setReps}
                                                    // peak={peak}
                                                    // setPeak={setPeak}
                                                    // onChange={() => calculate(i)}
                                                    />
                                                </>
                                            );
                                        })
                                    }
                                    <TouchableOpacity style={styles.sendBtn} onPress={send}>
                                        <Text style={styles.sendText}>Send</Text>
                                    </TouchableOpacity>
                                </ScrollView>
                            </View>
                        </>
                    ) : null
                }
            </View>
        </>
    );
};

export default Exercise;