import React, { useState } from "react";
import { useEffect } from "react";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import DateView from "../../../Components/DateView";
import DetailModal from "../../../Components/DetailModal";
import ExLibCard from "../../../Components/ExLibCard";
import HomeHeader from "../../../Components/HomeHeader";
import UserHeader from "../../../Components/UserHeader";
import COLORS from "../../../Constants/COLORS";
import ExerciseData from "../../../Constants/ExerciseData";
import { filter } from "../../../Constants/Images";
import { getExerciseLibrary } from "../../../Store/Actions/UserData";
import styles from "./styles.js";

const ExerciseLibrary = () => {

    const [filterData, setFilterData] = useState();
    const [exercise, setExercises] = useState([]);
    const [open, setOpen] = useState(false);

    const AuthState = useSelector(state => {
        return state?.AuthReducer;
    });

    let token = AuthState?.TokenId;

    const renderExercise = ({ item }) => {
        // console.log("renderExercise", item);
        return (
            <>
                <ExLibCard item={item} />
            </>
        );
    };

    useEffect(() => {
        getExerciseLibrary(setExercises, token);
    }, []);

    return (
        <>
            <View style={styles.container}>
                {/* <View style={{ alignItems: "center", backgroundColor: COLORS.grey }}>
                    <HomeHeader />
                </View> */}
                <UserHeader type={1} />
                <DateView title={"WEEK OF 24 APRIL 2022 - 07 MAY 2022"} />
                <View style={styles.nutrition}>
                    <Text style={{ color: COLORS.white, alignSelf: "center" }}>
                        EXERCISE LIBRARY
                    </Text>
                </View>
                <View style={styles.filter}>
                    <TextInput
                        placeholder={"Search Exercise"}
                        value={filterData}
                        onChangeText={setFilterData}
                        style={styles.filterText}
                    />
                    <View style={styles.filterBack}>
                        <Image
                            source={filter}
                            style={styles.filterIcon}
                        />
                    </View>
                </View>
                <FlatList
                    data={exercise}
                    renderItem={renderExercise}
                    keyExtractor={(item) => item.id}
                />
            </View>
            {/* <DetailModal open={open} setOpen={setOpen} title={exercise?.name} /> */}
        </>
    );
};

export default ExerciseLibrary;