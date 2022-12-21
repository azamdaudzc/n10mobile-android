import { StyleSheet } from "react-native";
import COLORS from "../../../Constants/COLORS"

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
    pensilView: {
        position: "absolute",
        top: "17%",
        right: "16%"
    },
    pensil: {
        resizeMode: "contain",
        width: 60,
        height: 60,
    },
    logoutText: {
        color: COLORS.white,
        alignSelf: "center",
        fontSize: 15,
        fontWeight: "bold"
    },
    logoutBtn: {
        backgroundColor: COLORS.mehron,
        width: "80%",
        height: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 40,
        marginTop: 40,
        marginBottom: 40
    },
    logout: {
        resizeMode: "contain",
        width: 15,
        height: 15,
        alignSelf: "center",
        marginLeft: 10,
        tintColor: COLORS.white
    },
    passView: {
        flexDirection: "row"
    },
    eye: {
        resizeMode: "contain",
        width: 20,
        height: 20,
        tintColor: COLORS.grey1,
        marginLeft: 10,
    },
    ageView: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 40,
        width: "80%",
        alignSelf: "center",
    },
    clientFields: {
        color: COLORS.black,
        fontSize: 15,
        fontWeight: "bold"
    },
    field: {
        color: COLORS.grey1
    },
    detail: {
        width: "80%",
        alignSelf: "center",
        marginTop: 40
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
    names: {
        marginTop: 60
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