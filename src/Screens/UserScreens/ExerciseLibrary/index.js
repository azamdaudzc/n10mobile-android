import React, { useState } from "react";
import { FlatList, Image, Text, TextInput, View } from "react-native";
import DateView from "../../../Components/DateView";
import ExLibCard from "../../../Components/ExLibCard";
import HomeHeader from "../../../Components/HomeHeader";
import UserHeader from "../../../Components/UserHeader";
import COLORS from "../../../Constants/COLORS";
import ExerciseData from "../../../Constants/ExerciseData";
import { bell } from "../../../Constants/Images";
import styles from "./styles.js";

const ExerciseLibrary = () => {
    const [filter, setFilter] = useState();

    const renderExercise = ({ item }) => {
        return (
            <>
                <ExLibCard image={item?.image} title={item?.title} />
            </>
        );
    };

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
                        value={filter}
                        onChangeText={setFilter}
                        style={styles.filterText}
                    />
                    <Image
                        source={bell}
                        style={styles.bell}
                    />
                </View>
                <FlatList
                    data={ExerciseData}
                    renderItem={renderExercise}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </>
    );
};

export default ExerciseLibrary;