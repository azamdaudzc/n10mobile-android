import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import COLORS from "../../Constants/COLORS";
import { tick } from "../../Constants/Images";

const CompCheck = () => {

    const navigation = useNavigation();

    const home = () => {
        navigation.navigate("HomeScreen");
    };

    return (
        <>
            <View style={styles.container}>
                <Image source={tick} style={styles.tick} />
                <Text style={styles.checkText}>YOUR CHECK IN IS COMPLETE</Text>
                <TouchableOpacity style={styles.backBtn} onPress={home}>
                    <Text style={styles.backText}>Back to Home</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default CompCheck;

const styles = StyleSheet.create({
    backText: {
        color: COLORS.mehron,
        fontWeight: "bold",
        alignSelf: "center"
    },
    backBtn: {
        marginTop: "45%",
        alignSelf: "center",
        borderWidth: 1,
        height: 40,
        width: "70%",
        borderColor: COLORS.mehron,
        borderRadius: 30,
        justifyContent: "center",
        backgroundColor: "#fff5f5"
    },
    checkText: {
        alignSelf: "center",
        marginTop: 40,
        color: COLORS.mehron,
        fontWeight: "bold"
    },
    tick: {
        resizeMode: "contain",
        width: 50,
        height: 50,
        tintColor: COLORS.mehron,
        alignSelf: "center"
    },
    container: {
        flex: 1,
        justifyContent: "center"
    }
});