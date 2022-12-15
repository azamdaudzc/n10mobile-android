import { StyleSheet } from "react-native";
import COLORS from "../../../Constants/COLORS";

const styles = StyleSheet.create({
    inputField: {
        marginLeft: 10,
    },
    inputStyle: {
        borderWidth: 1,
        marginTop: 15,
        width: "80%",
        alignSelf: "center",
        borderRadius: 40
    },
    sendAns: {
        marginTop: 30,
        alignSelf: "center",
        borderWidth: 1,
        height: 30,
        width: 50,
        marginBottom: 50,
    },
    quesQuestion: {
        color: COLORS.mehron,
        fontSize: 15,
        alignSelf: "center"
    },
    yesText: {
        alignSelf: "center",
        color: COLORS.mehron,
        fontWeight: "bold"
    },
    yesBtn: {
        marginTop: 10,
        width: "80%",
        backgroundColor: "#fff5f5",
        borderWidth: 1,
        borderColor: COLORS.mehron3,
        justifyContent: "center",
        height: 40,
        borderRadius: 40,
        alignSelf: "center"
    },
    imageUpload: {
        marginTop: 10,
        borderWidth: 1,
        width: 50,
        height: 50,
        justifyContent: "center",
        borderRadius: 8,
        backgroundColor: COLORS.white1,
        borderColor: COLORS.grey1,
        alignSelf: "center"
    },
    upload: {
        resizeMode: "contain",
        width: 30,
        height: 30,
        alignSelf: "center",
        // tintColor: COLORS.offWhite
    },
    ansInput: {
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
        height: 40,
        width: "80%",
        padding: 10,
        backgroundColor: COLORS.white1,
        borderWidth: 1,
        borderColor: COLORS.grey1,
        borderRadius: 5,
        alignSelf: "center",
        marginTop: 20
    },
    ansView: {
        alignSelf: "center",
        width: "100%"
    },
    quesText: {
        marginTop: 20
    },
    quesHead: {
        color: COLORS.mehron,
        fontWeight: "bold",
        fontSize: 18,
        alignSelf: "center"
    },
    quesView: {
        alignSelf: "center",
        marginTop: 25,
        width: "90%"
    },
    container: {
        flex: 1,
    }
});

export default styles;