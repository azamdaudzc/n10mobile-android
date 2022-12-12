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
    getExerciseSets,
    getProgramWeek,
    getProgramWeekDays,
    programDayInfo
} from "../../../Store/Actions/UserData";
import DayCard from "../../../Components/DayCard";
import WarmUpCard from "../../../Components/WarmUpCard";
import WarmUpData from "../../../Constants/WarmUpData";
import { useIsFocused } from "@react-navigation/native";

const Exercise = () => {

    const focus = useIsFocused();
    const [ques, setQues] = useState(0);
    const [programWeek, setProgramWeek] = useState('');
    const [day, setDay] = useState('');
    const [week, setWeek] = useState();
    const [dayNo, setDayNo] = useState();
    const [dayEx, setDayEx] = useState('');
    const [lastWeek, setLastWeek] = useState("");
    const [exercise, setExercise] = useState('');
    const [exNum, setExNum] = useState([]);

    const AuthState = useSelector(state => {
        return state?.AuthReducer;
    });

    let token = AuthState?.TokenId;

    const getDay = (currId, index) => {
        let lastId = programWeek?.program_weeks[index - 1]?.id == undefined ? 0 : programWeek?.program_weeks[index - 1]?.id;
        setLastWeek(lastId)
        setQues(1);
        getProgramWeekDays(currId, lastId, setDay, token);
    };

    const getDayEx = (date, dayId, title) => {
        setDayNo(title.toUpperCase());
        setQues(2);
        if (dayId !== null) {
            programDayInfo(date, dayId, lastWeek, setDayEx, token);
        };
    };

    const getExercise = (dayId, ExId) => {
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

    const renderWeek = ({ item, index }) => {
        return (
            <>
                <TouchableOpacity
                    onPress={() => {
                        getDay(item?.id, index);
                        setWeek(item?.week_no);
                    }}
                >
                    <WeekCard day={"Week " + item?.week_no} />
                </TouchableOpacity>
            </>
        );
    };

    const renderDay = ({ item, key }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    getDayEx(item?.date, item?.day_id, item?.day_title);
                }}
                key={key}
            >
                <DayCard day={item} />
            </TouchableOpacity>
        );
    };

    const renderExercise = ({ item }) => {
        return (
            <>
                <TouchableOpacity onPress={() => getExercise(item?.id, item?.exercise_library?.id)}>
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

    // const renderSetData = ({ item }) => {
    //     return (
    //         <>
    //             <SetDataBox item={item} />
    //         </>
    //     );
    // };

    const renderWarmUp = ({ item }) => {
        return (
            <>
                <WarmUpCard item={item} />
            </>
        );
    };

    useEffect(() => {
        getProgramWeek(setProgramWeek, token);
        // setQues(0);
    }, []);

    useEffect(() => {
        mapNo();
    }, [exercise, focus]);

    // console.log("exNum", exNum);

    return (
        <>
            <View style={styles.container}>
                {/* <View style={{ alignItems: "center", backgroundColor: COLORS.grey }}>
                    <HomeHeader />
                </View> */}
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
                            <DateView title={`WEEK ${week} DAYS`} type={1} setQues={setQues} />
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
                                title={`WORKOUTS: WEEK ${week}-DAY ${dayNo}`}
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
                                <UserHeader type={0} comp={1} />
                                <DateView title={`WEEK ${week} - DAY ${dayNo}`} type={1} setQues={setQues} />
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
                                {/* <FlatList
                                    data={SetData}
                                    renderItem={renderSetData}
                                    keyExtractor={(item) => item.id}
                                /> */}
                                <ScrollView>
                                    {
                                        exNum?.map((v, i) => {
                                            return (
                                                <>
                                                    <SetDataBox item={exercise} key={i} num={v} />
                                                </>
                                            );
                                        })
                                    }
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