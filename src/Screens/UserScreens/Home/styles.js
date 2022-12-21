import { StyleSheet } from "react-native";
import COLORS from "../../../Constants/COLORS";

const styles = StyleSheet.create({
    programText: {
        color: COLORS.black,
        alignSelf: "center",
        marginTop: "50%",
        fontSize: 20
    },
    nutritionBox: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 10
    },
    nutrition: {
        backgroundColor: COLORS.mehron,
        height: 40,
        justifyContent: "center"
    },
    container: {
        flex: 1,
        width: "100%",
    },
});

export default styles;