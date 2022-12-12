import { StyleSheet } from "react-native";
import COLORS from "../../../Constants/COLORS";

const styles = StyleSheet.create({
    tick: {
        resizeMode: "contain",
        width: 20,
        height: 20,
        tintColor: COLORS.mehron
    },
    readText: {
        color: COLORS.mehron
    },
    readView: {
        alignSelf: "flex-end",
        marginRight: 15,
        flexDirection: "row"
    },
    available: {
        alignSelf: "center",
        color: COLORS.black,
        fontSize: 20,
        marginTop: 10
    },
    profileText: {
        color: COLORS.white,
        fontSize: 25,
        fontWeight: "bold"
    },
    head: {
        backgroundColor: COLORS.mehron,
        width: "100%",
        height: 80,
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        justifyContent: "center",
        alignSelf: "center",
        width: "100%",
    },
});

export default styles;