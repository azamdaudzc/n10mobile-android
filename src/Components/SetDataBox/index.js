import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

const SetDataBox = ({ title, weight, reps, rpes }) => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>{title}</Text>
                </View>
                <View style={styles.rowData}>
                    <View style={{ width: "20%" }}>
                        <View style={styles.weightView}>
                            <Text style={styles.weight}>{weight}</Text>
                        </View>
                        <View style={styles.textInput}>
                            <TextInput style={styles.input} />
                        </View>
                    </View>
                    <View style={{ width: "20%" }}>
                        <View style={styles.weightView}>
                            <Text style={styles.weight}>{reps}</Text>
                        </View>
                        <View style={styles.textInput}>
                            <TextInput style={styles.input} />
                        </View>
                    </View>
                    <View style={{ width: "20%" }}>
                        <View style={styles.weightView}>
                            <Text style={styles.weight}>{rpes}</Text>
                        </View>
                        <View style={styles.textInput}>
                            <TextInput style={styles.input} />
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
    uploadText: {
        fontSize: 12,
        color: "#FFF",
        alignSelf: "center"
    },
    upload: {
        backgroundColor: "#710000",
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
        borderColor: "#707070",
        borderRadius: 10,
        backgroundColor: "#f2f1f1",
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
        color: "#FFF"
    },
    title: {
        backgroundColor: "#710000",
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