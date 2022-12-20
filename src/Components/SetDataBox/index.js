import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";
import COLORS from "../../Constants/COLORS";

const SetDataBox = ({ item, num, total, setTotal }) => {

    // console.log("SetDataBox", item?.last_exercise_sets);

    const [weight, setWeight] = useState();
    const [reps, setReps] = useState();
    const [rpes, setRpes] = useState(item?.exercise_sets?.rpe_no);
    const [peak, setPeak] = useState(0);

    const calculateMax = () => {
        let reps1 = parseInt(reps);
        let weight1 = parseInt(weight);
        let rpe1 = parseInt(rpes);
        let a = Math.round((((10 - rpe1) + reps1) * weight1 * 0.0333 + weight1));
        return setPeak(a);
    };

    const onChangeFunc = (weight, reps) => {
        let data = {
            exerciseId: item?.exercise_sets?.id,
            setNo: num + 1,
            weight: weight,
            reps: reps,
            peak: peak,
            rpes: rpes
        };
        let prev = total;
        let isAvailable = total.length > 0 ? prev.find(x => x?.setNo == num + 1) : undefined;
        if (total.length == 0) {
            setTotal(prev => [...prev, data]);
        } else if (weight == undefined && reps !== undefined) {
            if (isAvailable == undefined) {
                setTotal(prev => [...prev, data]);
            } else {
                setTotal(prev => prev.map(e => e.setNo == num + 1 ? { ...e, reps: reps } : e));
                setTotal(prev => prev.map(e => e.weight !== undefined && e.reps !== undefined ? { ...e, peak: Math.round((((10 - e?.rpes) + e?.reps) * e?.weight * 0.0333 + e?.weight)) } : e));
            };
        } else if (reps == undefined && weight !== undefined) {
            if (isAvailable == undefined) {
                setTotal(prev => [...prev, data]);
            } else {
                setTotal(prev => prev.map(e => e.setNo == num + 1 ? { ...e, weight: weight } : e));
                setTotal(prev => prev.map(e => e.weight !== undefined && e.reps !== undefined ? { ...e, peak: Math.round((((10 - e?.rpes) + e?.reps) * e?.weight * 0.0333 + e?.weight)) } : e));
            };
        };
    };

    const peakFunc = () => {
        total.forEach((v, i) => {
            if (i == num) {
                setPeak(v?.peak)
            };
        });
    };

    setInterval(() => {
        peakFunc();
    }, 5000);

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
                                value={weight}
                                onChangeText={(weight) => {
                                    onChangeFunc(weight, reps);
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
                                value={reps}
                                onChangeText={(repsEvent) => {
                                    onChangeFunc(weight, repsEvent);
                                }}
                            />
                        </View>
                    </View>
                    <View style={{ width: "20%" }}>
                        <View style={styles.weightView}>
                            <Text style={styles.weight}>RPES</Text>
                        </View>
                        <View style={styles.textInput}>
                            <Text style={styles.inputText}>{rpes}</Text>
                        </View>
                    </View>
                    <View style={{ width: "20%" }}>
                        <View style={styles.weightView}>
                            <Text style={styles.weight}>Peak Exerted Max</Text>
                        </View>
                        <View style={styles.textInput}>
                            <Text style={styles.inputText}>{peak}</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.previousText}>Previous Data</Text>
                </View>
                <View style={styles.rowData}>
                    <View style={{ width: "20%" }}>
                        <View style={styles.weightView}>
                            <Text style={styles.weight}>weight</Text>
                        </View>
                        <View style={styles.textInput}>
                            <Text style={styles.inputText}>{item?.last_exercise_sets[num]?.weight}</Text>
                        </View>
                    </View>
                    <View style={{ width: "20%" }}>
                        <View style={styles.weightView}>
                            <Text style={styles.weight}>REPS</Text>
                        </View>
                        <View style={styles.textInput}>
                            <Text style={styles.inputText}>{item?.last_exercise_sets[num]?.reps}</Text>
                        </View>
                    </View>
                    <View style={{ width: "20%" }}>
                        <View style={styles.weightView}>
                            <Text style={styles.weight}>RPES</Text>
                        </View>
                        <View style={styles.textInput}>
                            <Text style={styles.inputText}>{item?.last_exercise_sets[num]?.rpe}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
};

export default SetDataBox;

const styles = StyleSheet.create({
    previousText: {
        color: COLORS.black,
        alignSelf: "center"
    },
    inputText: {
        fontSize: 10,
        marginTop: 6,
        marginLeft: 4
    },
    input: {
        fontSize: 10,
        height: 40,
        marginTop: -6
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