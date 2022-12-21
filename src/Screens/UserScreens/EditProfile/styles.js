import { StyleSheet } from "react-native";
import COLORS from "../../../Constants/COLORS";

const styles = StyleSheet.create({
    backBtn: {
        position: "absolute",
        bototm: 0,
        left: 15
    },
    back: {
        resizeMode: "contain",
        width: 20,
        height: 20,
        tintColor: COLORS.white
    },
    eyeBtn: {
        alignSelf: "flex-end",
        position: "absolute",
        bottom: 15,
        right: 10
    },
    eye: {
        resizeMode: "contain",
        width: 20,
        height: 20,
        tintColor: COLORS.grey1,
    },
    doneText: {
        color: COLORS.white,
        fontSize: 15,
        fontWeight: "bold",
        alignSelf: "center",
    },
    doneBtn: {
        flexDirection: "row",
        backgroundColor: COLORS.mehron,
        width: "90%",
        alignSelf: "center",
        marginTop: 20,
        height: 40,
        justifyContent: "center",
        borderRadius: 50,
        marginBottom: 50
    },
    check: {
        resizeMode: "contain",
        width: 15,
        height: 15,
        alignSelf: "center",
        marginLeft: 10
    },
    passInput: {
        width: "90%",
        alignSelf: "center",
        marginTop: 20,
        borderWidth: 1,
        width: "90%",
        borderRadius: 40,
        height: 50
    },
    emailInput: {
        width: "90%",
        alignSelf: "center",
        marginTop: 20,
        borderWidth: 1,
        width: "90%",
        borderRadius: 40,
        height: 50
    },
    nameInputs: {
        flexDirection: "row",
        width: "90%",
        justifyContent: "space-between",
        alignSelf: "center",
        marginTop: 20
    },
    nameInput: {
        marginLeft: 10,
        color: COLORS.black
    },
    nameBorder: {
        borderWidth: 1,
        width: "48%",
        borderRadius: 40,
        height: 50
    },
    names: {
        marginTop: 60
    },
    image: {
        resizeMode: "contain",
        width: 90,
        height: 90,
    },
    imageView: {
        borderWidth: 2,
        borderColor: COLORS.mehron,
        padding: 6,
        borderRadius: 5,
        alignSelf: "center",
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
        width: "100%"
    },
});

export default styles;