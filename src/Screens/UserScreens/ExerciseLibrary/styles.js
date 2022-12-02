import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bell: {
        resizeMode: "contain",
        width: 40,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        tintColor: "#FFF",
        backgroundColor: "#710000"
    },
    filter: {
        marginBottom: 10,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    filterText: {
        borderWidth: 1,
        height: 40,
        width: "85%",
        backgroundColor: "#ebebeb",
        color: "#c0c0c0",
        borderColor: "#dedede",
        borderRadius: 10
    },
    nutrition: {
        backgroundColor: "#710000",
        height: 40,
        justifyContent: "center"
    },
    container: {
        flex: 1
    }
});

export default styles;