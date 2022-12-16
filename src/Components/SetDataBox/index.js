import { useIsFocused } from "@react-navigation/native";
import React, { useState } from "react";
import { useEffect } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { useSelector } from "react-redux";
import COLORS from "../../Constants/COLORS";
import { postAnswer } from "../../Store/Actions/UserData";

// const SetDataBox = ({ item, num, weight, setWeight, reps, setReps, rpes, setRpes, peak, setPeak, onChange }) => {
const SetDataBox = ({ item, num, total, setTotal }) => {

    const focus = useIsFocused();
    const [weight, setWeight] = useState();
    const [reps, setReps] = useState();
    const [rpes, setRpes] = useState(item?.exercise_sets?.rpe_no);
    const [peak, setPeak] = useState();

    const calculateMax = () => {
        let reps1 = parseInt(reps);
        let weight1 = parseInt(weight);
        let rpe1 = parseInt(rpes);
        console.log(reps1, weight1, rpe1);
        let a = Math.round((((10 - rpe1) + reps1) * weight1 * 0.0333 + weight1));
        setPeak(a);

    };

    console.log("total.length", total.length);

    const onChangeFunc = (weight, reps) => {
        console.log("onChangeFunc", weight);
        let data = {
            exerciseId: item?.exercise_sets?.id,
            setNo: num + 1,
            weight: weight,
            reps: reps,
            peak: peak
        };
        console.log("item,", data);
        // let prev = ansId;
        // let isAvailable = ansId.length > 0 ? prev.find(x => x?.questionId == qid) : undefined;
        // if (isAvailable == undefined) {
        //     setAnsId(prev => [...prev, data]);
        // } else {
        //     ansId.map((val) => {
        //         setAnsId(prev => prev.map(e => e.questionId === qid ? { ...e, questionVal: qVal } : e));
        //     });
        // };
    }

    const send = () => {
        const form = FormData();
        form.append('day_id', item?.day_id)
        form.append('w_e_' + item?.exercise_sets?.id + '_s_' + num, weight);
        form.append('r_e_' + item?.exercise_sets?.id + '_s_' + num, reps);
        form.append('mai_e_' + item?.exercise_sets?.id + '_s_' + num, peak);
        // for (let i = 0; i == num; i++) {
        postAnswer(num, token);
        // };
    };

    useEffect(() => {
        calculateMax();
    }, [weight, reps, rpes, focus]);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>SET {num + 1}</Text>
                </View>
                <View style={styles.rowData}>
                    <View style={{ width: "20%" }}>
                        <View style={styles.weightView}>
                            <Text style={styles.weight}>weight</Text>
                        </View>
                        <View style={styles.textInput}>
                            <TextInput
                                style={styles.input}
                                // placeholder={item?.exercise_sets?.load_text}
                                value={weight}
                                onChangeText={(weight) => {
                                    onChangeFunc(weight, reps);
                                    // setWeight
                                }}
                            />
                        </View>
                    </View>
                    <View style={{ width: "20%" }}>
                        <View style={styles.weightView}>
                            <Text style={styles.weight}>REPS</Text>
                        </View>
                        <View style={styles.textInput}>
                            <TextInput
                                style={styles.input}
                                // placeholder={item?.exercise_sets?.rep_min_no?.toString()}
                                value={reps}
                                onChangeText={(reps) => {
                                    onChangeFunc(weight, reps);
                                    // setReps
                                }}
                            />
                        </View>
                    </View>
                    <View style={{ width: "20%" }}>
                        <View style={styles.weightView}>
                            <Text style={styles.weight}>RPES</Text>
                        </View>
                        <View style={styles.textInput}>
                            <TextInput
                                style={styles.input}
                                placeholder={item?.exercise_sets?.rpe_no?.toString()}
                                value={rpes}
                            // onChangeText={setRpes}
                            />
                        </View>
                    </View>
                    <View style={{ width: "20%" }}>
                        <View style={styles.weightView}>
                            <Text style={styles.weight}>Peak Exerted Max</Text>
                        </View>
                        <View style={styles.textInput}>
                            <TextInput
                                style={styles.input}
                                placeholder={peak?.toString()}
                            // value={peak}
                            // onChangeText={setPeak}
                            />
                        </View>
                    </View>
                </View>
                {/* <TouchableOpacity style={styles.upload}>
                    <Text style={styles.uploadText}>Upload Video</Text>
                </TouchableOpacity> */}
            </View>
        </>
    );
};

export default SetDataBox;

const styles = StyleSheet.create({
    input: {
        fontSize: 10,
        height: 40,
        marginTop: -6
        // backgroundColor: "red"
    },
    uploadText: {
        fontSize: 12,
        color: COLORS.white,
        alignSelf: "center"
    },
    upload: {
        backgroundColor: COLORS.mehron,
        height: 25,
        width: "30%",
        justifyContent: "center",
        alignSelf: "center",
        marginBottom: 10,
        marginTop: 10
    },
    weightView: {
        width: "100%",
        borderWidth: 1,
        borderColor: COLORS.grey1,
        borderRadius: 10,
        backgroundColor: COLORS.white1,
        height: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    weight: {
        fontSize: 10,
        color: "#8d8d8d",
        alignSelf: "center"
    },
    textInput: {
        width: "100%",
        borderColor: "#c69999",
        borderRadius: 10,
        borderWidth: 1,
        height: 30,
        marginTop: 10,
        marginBottom: 10
    },
    rowData: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 10
    },
    titleText: {
        color: COLORS.white
    },
    title: {
        backgroundColor: COLORS.mehron,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    container: {
        width: "100%",
        alignSelf: "center"
    }
});