import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    getText: {
        color: "#FFF",
        alignSelf: "center",
        fontWeight: "bold"
    },
    getBtn: {
        width: "70%",
        borderWidth: 1,
        alignSelf: "center",
        borderRadius: 20,
        height: 40,
        backgroundColor: "#710000",
        justifyContent: "center"
    },
    detail: {
        marginBottom: 10,
        marginTop: 10,
        fontSize: 18,
        width: "80%",
        textAlign: "center",
        alignSelf: "center"
    },
    N10: {
        marginTop: 20,
        color: "#710000",
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
        tintColor: "#710000",
        alignSelf: "center"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center"
    }
});

export default styles;