import { StyleSheet } from "react-native";
import COLORS from "../../../Constants/COLORS";

const styles = StyleSheet.create({
    getText: {
        color: COLORS.white,
        alignSelf: "center",
        fontWeight: "bold"
    },
    getBtn: {
        width: "70%",
        borderWidth: 1,
        alignSelf: "center",
        borderRadius: 20,
        height: 40,
        backgroundColor: COLORS.mehron,
        justifyContent: "center"
    },
    detail: {
        marginBottom: 10,
        marginTop: 10,
        fontSize: 18,
        width: "80%",
        textAlign: "center",
        alignSelf: "center",
        color: COLORS.black
    },
    N10: {
        marginTop: 20,
        color: COLORS.mehron,
        alignSelf: "center",
        fontSize: 25,
        fontWeight: "bold"
    },
    welcomeImg: {
        resizeMode: "contain",
        width: "80%",
        height: "50%",
        alignSelf: "center"
    },
    logo: {
        resizeMode: "contain",
        width: 50,
        height: 50,
        tintColor: COLORS.mehron,
        alignSelf: "center"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
        width: "90%"
    }
});

export default styles;