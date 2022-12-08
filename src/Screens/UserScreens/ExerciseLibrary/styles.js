import { StyleSheet } from "react-native";
import COLORS from "../../../Constants/COLORS";

const styles = StyleSheet.create({
    bell: {
        resizeMode: "contain",
        width: 40,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        tintColor: COLORS.white,
        backgroundColor: COLORS.mehron
    },
    filter: {
        marginBottom: 10,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
        width: "95%"
    },
    filterText: {
        borderWidth: 1,
        height: 40,
        width: "85%",
        backgroundColor: "#ebebeb",
        color: COLORS.black,
        borderColor: "#dedede",
        borderRadius: 10
    },
    nutrition: {
        backgroundColor: COLORS.mehron,
        height: 40,
        justifyContent: "center"
    },
    container: {
        flex: 1
    }
});

export default styles;