import { StyleSheet } from "react-native";
import COLORS from "../../../Constants/COLORS";

const styles = StyleSheet.create({
    filterBack: {
        backgroundColor: COLORS.mehron,
        borderWidth: 1,
        borderRadius: 10,
        width: 40,
        height: 40
    },
    filterIcon: {
        resizeMode: "contain",
        width: 30,
        height: 30,
        tintColor: COLORS.white,
        alignSelf: "center",
        marginTop: 4
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