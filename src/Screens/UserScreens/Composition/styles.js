import { StyleSheet } from "react-native";
import COLORS from "../../../Constants/COLORS";

const styles = StyleSheet.create({
    downArrow: {
        resizeMode: "contain",
        width: 10,
        height: 10,
        // justifyContent: "center"
        alignSelf: "center",
        marginLeft: 5,
        tintColor: COLORS.mehron
    },
    dateText: {
        alignSelf: "center",
        color: COLORS.mehron,
        fontSize: 12
    },
    progressText: {
        fontWeight: "bold",
        alignSelf: "center",
        marginBottom: 5
    },
    progressView: {
        width: "100%",
        marginTop: 5
    },
    dateTouch: {
        marginRight: 10,
        borderWidth: 1,
        height: 25,
        width: 90,
        justifyContent: "center",
        borderRadius: 5,
        backgroundColor: "#cccccc",
        borderColor: "#cccccc",
        flexDirection: "row"
    },
    selectDate: {
        marginLeft: 10
    },
    dateView: {
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 9
        },
        shadowOpacity: 0.5,
        shadowRadius: 12.35,
        elevation: 19,
        width: "100%",
        marginTop: 10,
        height: 40,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    },
    updatedText: {
        color: COLORS.white,
        alignSelf: "center",
        fontSize: 12
    },
    past: {
        width: "50%",
        justifyContent: "center"
    },
    btnView: {
        flexDirection: "row",
        width: "100%",
        height: 40
    },
    nutrition: {
        backgroundColor: COLORS.mehron,
        height: 40,
        justifyContent: "center",
        marginBottom: 10
    },
    container: {
        flex: 1
    }
});

export default styles;