import { StyleSheet } from "react-native";
import COLORS from "../../../Constants/COLORS";

const styles = StyleSheet.create({
    site: {
        color: COLORS.white,
        alignSelf: "center",
        marginTop: 10,
        fontSize: 18
    },
    logo: {
        resizeMode: "contain",
        width: 80,
        height: 80,
        alignSelf: "center"
    },
    container: {
        flex: 1,
        justifyContent: "center"
    }
});

export default styles;