import React, { useState } from "react";
import {
    Modal,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput
} from "react-native";

const WeightModal = ({ weight, setWeight }) => {
    const [text, setText] = useState();
    return (
        <>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={weight}
                    onRequestClose={() => {
                        setWeight(!weight);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>ADD TODAY'S WEIGHT</Text>
                            <View style={styles.border}>
                                <TextInput
                                    value={text}
                                    onChangeText={setText}
                                    placeholder={"Enter your weight"}
                                    style={{ textAlign: "center" }}
                                    keyboardType="numeric"
                                />
                            </View>
                            <TouchableOpacity
                                style={styles.btnBorder}
                                onPress={() => {
                                    setWeight(!weight);
                                }}
                            >
                                <Text style={{ color: "#FFF" }}>SAVE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </>
    );
};

export default WeightModal;

const styles = StyleSheet.create({
    btnBorder: {
        marginTop: 20,
        borderWidth: 1,
        width: 160,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#710000",
        borderRadius: 10
    },
    border: {
        borderWidth: 1,
        height: 40,
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 5,
        backgroundColor: "#f2f1f1"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontWeight: "bold",
        color: "#710000"
    }
});