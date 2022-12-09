import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import COLORS from "../../Constants/COLORS";

const SetDataBox = ({ item, num }) => {

    const [weight, setWeight] = useState();

    const setIds = () => {
        let data = {
            dayId: item?.day_id
        };
        console.log("data", data);
    };

    console.log("SetDataBox===>", item);

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
                                placeholder={item?.exercise_sets?.load_text}
                                value={weight}
                                onChangeText={setWeight}
                                onChange={() => setIds()}
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
                                placeholder={item?.exercise_sets?.rep_min_no?.toString()}
                                value={weight}
                                onChangeText={setWeight}
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
                                value={weight}
                                onChangeText={setWeight}
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
        color: "#8d8d8d"
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