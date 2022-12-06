import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import UserModal from "./UserModal";
import { list, person } from "../../Constants/Images";
import COLORS from "../../Constants/COLORS";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const UserHeader = ({ type, comp }) => {

    const navigation = useNavigation();
    const [show, setShow] = useState(false);

    const modalView = () => {
        setShow(true);
    };

    const check = () => {
        navigation.navigate("CheckInPage");
    };

    const AuthState = useSelector(state => {
        return state?.AuthReducer?.UserDetail;
    });

    return (
        <>
            <View style={styles.contaier}>
                <View style={styles.row}>
                    <View style={{ flexDirection: "row" }}>
                        {/* <TouchableOpacity onPress={modalView}>
                            <Image
                                source={list}
                                style={styles.menu}
                            />
                        </TouchableOpacity> */}
                        <View style={styles.personView}>
                            <Image
                                source={person}
                                style={styles.person}
                            />
                        </View>
                        <View style={styles.nameView}>
                            <Text style={styles.welcome}>Welcome</Text>
                            <Text style={styles.name}>{AuthState?.first_name} {AuthState?.last_name}</Text>
                            <Text style={styles.welcome}>Client</Text>
                        </View>
                    </View>
                    {
                        type === 1 ? (
                            <>
                                <TouchableOpacity style={styles.check} onPress={check}>
                                    <Text style={styles.checkBtn}>
                                        Check In
                                    </Text>
                                </TouchableOpacity>
                            </>
                        ) : null

                    }
                    {
                        comp === 1 ? (
                            <>
                                <TouchableOpacity style={styles.complete}>
                                    <Text style={styles.comp}>COMPLETE</Text>
                                </TouchableOpacity>
                            </>
                        ) : null

                    }
                </View>
                <UserModal setShow={setShow} show={show} />
            </View>
        </>
    );
};

export default UserHeader;

const styles = StyleSheet.create({
    checkBtn: {
        alignSelf: "center",
        color: COLORS.white
    },
    nameView: {
        justifyContent: "center"
    },
    name: {
        color: COLORS.white
    },
    welcome: {
        color: COLORS.white,
        fontSize: 10
    },
    comp: {
        alignSelf: "center",
        marginTop: 11,
        fontSize: 10,
        color: COLORS.mehron
    },
    complete: {
        backgroundColor: COLORS.white,
        alignSelf: "center",
        borderRadius: 50,
        width: 85,
        height: 40
    },
    check: {
        borderWidth: 1,
        borderColor: COLORS.white,
        borderRadius: 20,
        height: 45,
        width: 100,
        justifyContent: "center"
    },
    personView: {
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        borderColor: COLORS.white,
        borderRadius: 10,
        height: 50,
        width: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    row: {
        flexDirection: "row",
        alignContent: "center",
        marginTop: 10,
        justifyContent: "space-between",
        alignSelf: "center",
        width: "95%"
    },
    person: {
        resizeMode: "contain",
        width: 40,
        height: 40
    },
    menu: {
        resizeMode: "contain",
        width: 30,
        height: 30,
        marginTop: 10
    },
    contaier: {
        backgroundColor: COLORS.mehron,
        height: 80,
        width: "100%",
        alignSelf: "center"
    }
});