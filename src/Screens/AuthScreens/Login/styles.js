import { StyleSheet } from "react-native";
import COLORS from "../../../Constants/COLORS";

const styles = StyleSheet.create({
    signUpText: {
        color: COLORS.white,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.white
    },
    dont: {
        color: COLORS.white
    },
    signUp: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "25%"
    },
    signText: {
        color: COLORS.white
    },
    signUpView: {
        alignSelf: "center",
        marginTop: 20
    },
    fbView: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 10
    },
    facebook: {
        resizeMode: "contain",
        width: 30,
        height: 30,
        margin: 5
    },
    getText: {
        color: COLORS.mehron,
        alignSelf: "center",
        fontWeight: "bold"
    },
    btnView: {
        marginTop: 20,
        borderWidth: 1,
        width: "80%",
        borderColor: COLORS.white,
        height: 40,
        borderRadius: 30,
        alignSelf: "center",
        backgroundColor: COLORS.white,
        justifyContent: "center"
    },
    text: {
        color: COLORS.smokeWhite,
        marginLeft: 20,
        width: "80%"
    },
    eye: {
        position: "absolute",
        right: 15,
        alignSelf: "center"
    },
    check: {
        resizeMode: "contain",
        width: 20,
        height: 20
    },
    inputField: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 10,
        borderWidth: 1,
        height: 40,
        width: "80%",
        borderColor: COLORS.white,
        borderRadius: 30
    },
    logo: {
        resizeMode: "contain",
        width: 80,
        height: 80,
        alignSelf: "center",
        marginBottom: 15
    },
    container: {
        flex: 1,
        justifyContent: "center"
    }
});

export default styles;