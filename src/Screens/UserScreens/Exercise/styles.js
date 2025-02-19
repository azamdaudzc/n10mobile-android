import { StyleSheet } from "react-native";
import COLORS from "../../../Constants/COLORS";

const styles = StyleSheet.create({
    program: {
        color: COLORS.black,
        alignSelf: "center",
        fontSize: 20,
        marginTop: "70%"
    },
    loader: {
        marginTop: "75%"
    },
    sendText: {
        alignSelf: "center",
        color: COLORS.white,
        fontWeight: "bold",
        marginTop: 8
    },
    sendBtn: {
        borderWidth: 1,
        width: "80%",
        alignSelf: "center",
        height: 40,
        borderColor: COLORS.mehron,
        backgroundColor: COLORS.mehron,
        marginBottom: 10,
        borderRadius: 40
    },
    warmCard: {
        backgroundColor: "red",
        width: "100%"
    },
    changeBtn: {
        position: "absolute",
        bottom: 5,
        right: 10
    },
    change: {
        fontSize: 10,
        color: COLORS.mehron
    },
    primary: {
        fontSize: 8,
        color: COLORS.mehron
    },
    backText: {
        fontWeight: "bold",
        fontSize: 12,
        color: COLORS.black
    },
    ExText: {
        marginTop: 10,
        marginLeft: 10,
        width: 70
    },
    backImg: {
        resizeMode: "contain",
        width: 80,
        height: 80,
        marginLeft: 10,
        marginTop: 10,
        borderWidth: 1
    },
    card: {
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 7
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 10,
        width: "90%",
        height: 100,
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 10,
        flexDirection: "row",
        backgroundColor: COLORS.white
    },
    nutrition: {
        backgroundColor: COLORS.mehron,
        height: 40,
        justifyContent: "center"
    },
    container: {
        marginBottom: 100,
        // height: "100%"
    }
});

export default styles;