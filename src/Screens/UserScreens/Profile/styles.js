import { StyleSheet } from "react-native";
import COLORS from "../../../Constants/COLORS"

const styles = StyleSheet.create({
    image: {
        resizeMode: "contain"
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
        // flex: 1,
        justifyContent: "center",
        alignSelf: "center",
        width: "100%"
    },
});

export default styles;