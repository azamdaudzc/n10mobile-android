import { StyleSheet } from "react-native";
import COLORS from "../../../Constants/COLORS";

const styles = StyleSheet.create({
    eyeView: {
        justifyContent: "center",
        marginRight: 10
    },
    eye: {
        resizeMode: "contain",
        width: 20,
        height: 20
    },
    passInput: {
        color: COLORS.white,
        height: 45,
        padding: 15,
        width: "80%"
    },
    passView: {
        justifyContent: "space-between",
        alignSelf: "center",
        flexDirection: "row",
        width: "90%",
        borderRadius: 30,
        borderWidth: 1,
        height: 45,
        borderColor: COLORS.white,
        marginBottom: 10,
    },
    logText: {
        marginLeft: 5,
        color: COLORS.white,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.white
    },
    account: {
        color: COLORS.white
    },
    login: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 10
    },
    orText: {
        color: COLORS.white,
        marginLeft: 10,
        marginRight: 10
    },
    line: {
        borderTopWidth: 1,
        borderTopColor: COLORS.white,
        width: 80,
        marginTop: 10
    },
    orView: {
        marginTop: 20,
        alignSelf: "center",
        flexDirection: "row"
    },
    signupText: {
        alignSelf: "center",
        color: COLORS.mehron,
        fontWeight: "bold"
    },
    signupBtn: {
        borderWidth: 1,
        width: "90%",
        justifyContent: "center",
        alignSelf: "center",
        height: 40,
        borderColor: COLORS.white,
        borderRadius: 40,
        backgroundColor: COLORS.white,
        marginTop: 20
    },
    container: {
        marginBottom: 50,
        marginTop: 50
    },
    nameInput: {
        borderWidth: 1,
        borderColor: COLORS.white,
        color: COLORS.white,
        height: 45,
        padding: 15,
        width: "100%",
        borderRadius: 30
    },
    firstText: {
        color: COLORS.white,
        alignItems: "center"
    },
    nameView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "center",
        width: "90%",
        marginBottom: 10,
    },
    logo: {
        resizeMode: "contain",
        width: 80,
        height: 80,
        alignSelf: "center",
        marginBottom: 25
    },
    BG: {
        flex: 1,
        justifyContent: "center"
    }
});

export default styles;