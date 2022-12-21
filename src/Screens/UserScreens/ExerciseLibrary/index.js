import React, { useState } from "react";
import { useEffect } from "react";
import { FlatList, Image, Text, TextInput, View } from "react-native";
import { useSelector } from "react-redux";
import DateView from "../../../Components/DateView";
import ExLibCard from "../../../Components/ExLibCard";
import UserHeader from "../../../Components/UserHeader";
import COLORS from "../../../Constants/COLORS";
import { filter } from "../../../Constants/Images";
import { getExerciseLibrary } from "../../../Store/Actions/UserData";
import styles from "./styles.js";

const ExerciseLibrary = () => {

    const [filterData, setFilterData] = useState('');
    const [exercise, setExercises] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);

    const AuthState = useSelector(state => {
        return state?.AuthReducer;
    });

    let token = AuthState?.TokenId;

    const renderExercise = ({ item }) => {
        return (
            <>
                <ExLibCard item={item} />
            </>
        );
    };

    const searchItems = (e) => {
        setFilterData(e);
        if (filterData !== '') {
            const emp = exercise ? exercise?.filter(item => item?.name?.toLowerCase().includes(filterData.toLowerCase())) : exercise
            setFilteredResults(emp);
        } else {
            setFilteredResults(exercise);
        };
    };

    useEffect(() => {
        getExerciseLibrary(setExercises, token);
    }, []);

    useEffect(() => {
        const emp = exercise ? exercise?.filter(item => item?.name?.toLowerCase().includes(filterData.toLowerCase())) : exercise
        setFilteredResults(emp);
    }, [filterData]);

    return (
        <>
            <View style={styles.container}>
                <UserHeader type={1} />
                <DateView />
                <View style={styles.nutrition}>
                    <Text style={{ color: COLORS.white, alignSelf: "center" }}>
                        EXERCISE LIBRARY
                    </Text>
                </View>
                <View style={styles.filter}>
                    <TextInput
                        placeholder={"Search Exercise"}
                        value={filterData}
                        onChangeText={(e) => searchItems(e)}
                        style={styles.filterText}
                        placeholderTextColor={COLORS.black}
                    />
                    <View style={styles.filterBack}>
                        <Image
                            source={filter}
                            style={styles.filterIcon}
                        />
                    </View>
                </View>
                {
                    filteredResults.length > 0 ? (
                        <FlatList
                            data={filteredResults}
                            renderItem={renderExercise}
                            keyExtractor={(item) => item.id}
                        />
                    ) : (
                        <FlatList
                            data={exercise}
                            renderItem={renderExercise}
                            keyExtractor={(item) => item.id}
                        />
                    )
                }
            </View>
        </>
    );
};

export default ExerciseLibrary;