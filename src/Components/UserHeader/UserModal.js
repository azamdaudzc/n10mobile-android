import React, { useState } from "react";
import {
    Modal,
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from "react-native";
import WeightModal from "./WeightModal";
import { cancel, person } from "../../Constants/Images";
import COLORS from "../../Constants/COLORS";
import { useSelector } from "react-redux";

const UserModal = ({ setShow, show }) => {

    const [weight, setWeight] = useState(false);

    const weightMod = () => {
        setShow(false);
        setWeight(true);
    };

    const AuthState = useSelector(state => {
        return state?.AuthReducer?.UserDetail;
    });

    return (
        <>
            <View
                onPress={() => {
                    setShow(false);
                }}
                style={styles.centeredView}
            >
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={show}
                    onRequestClose={() => {
                        setShow(false);
                    }}
                >
                    <View style={styles.centeredView1}>
                        <View style={styles.upperView}>
                            <TouchableOpacity
                                style={styles.canceltouch}
                                onPress={() => {
                                    setShow(false);
                                }}
                            >
                                <Image
                                    source={cancel}
                                    style={styles.cancel}
                                />
                            </TouchableOpacity>
                            <Image
                                source={person}
                                style={styles.person}
                            />
                            <Text style={styles.name}>{AuthState?.first_name} {AuthState?.last_name}</Text>
                            <Text style={styles.client}>Client</Text>
                            <Text style={styles.comp}>Current Composition</Text>
                            <View style={styles.avg}>
                                <Text style={{ fontSize: 10, color: COLORS.white }}>
                                    Av. Body Weight: 12
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 10,
                                        marginLeft: 10,
                                        color: COLORS.white,
                                        marginRight: 10
                                    }}
                                >
                                    |
                                </Text>
                                <Text style={{ fontSize: 10, color: COLORS.white }}>
                                    Extimated BF%: 1122
                                </Text>
                            </View>
                        </View>
                        <View style={styles.lowerView}>
                            <TouchableOpacity style={styles.btn} onPress={weightMod}>
                                <View style={styles.btnView}>
                                    <Text style={styles.textColor}>Add Today's Body Weight</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn}>
                                <View style={styles.btnView}>
                                    <Text style={styles.textColor}>Edit Current Week Weight</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn}>
                                <View style={styles.btnView}>
                                    <Text style={styles.textColor}>
                                        Edit Current Week Calories
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
            <View>
                <WeightModal weight={weight} setWeight={setWeight} />
            </View>
        </>
    );
};

export default UserModal;

const styles = StyleSheet.create({
    canceltouch: {
        position: "absolute",
        right: 15,
        top: 15
    },
    cancel: {
        resizeMode: "contain",
        width: 15,
        height: 15,
        tintColor: COLORS.white
    },
    textColor: {
        color: COLORS.white
    },
    btnView: {
        borderWidth: 1,
        borderColor: COLORS.grey,
        borderRadius: 5,
        marginTop: 10,
        height: 40,
        width: 180,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.grey
    },
    btn: {
        justifyContent: "center",
        alignSelf: "center"
    },
    lowerView: {
        backgroundColor: COLORS.white,
        width: "70%",
        height: "30%",
        borderColor: COLORS.white,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderBottomRightRadius: 30
    },
    avg: {
        flexDirection: "row",
        marginBottom: 10
    },
    comp: {
        color: COLORS.mehron2,
        marginTop: 15
    },
    client: {
        color: COLORS.mehron2
    },
    name: {
        color: COLORS.white,
        marginTop: 10,
        fontWeight: "bold"
    },
    upperView: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.mehron,
        width: "70%",
        marginTop: "-25%",
        borderColor: COLORS.white,
        borderTopRightRadius: 30,
        borderTopWidth: 1,
        borderRightWidth: 1
    },
    person: {
        resizeMode: "contain",
        width: 40,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 15
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        padding: 35,
        alignItems: "center",
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    centeredView1: {
        justifyContent: "center",
        alignItems: "center",
        height: "80%",
        width: "85%",
        position: "absolute",
        left: -55
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
    }
});
