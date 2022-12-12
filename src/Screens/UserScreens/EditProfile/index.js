import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { back, check, eye, profile } from '../../../Constants/Images';
import styles from './styles';
import DropDownPicker from "react-native-dropdown-picker";
import GenderData from '../../../Constants/GenderData';
import COLORS from '../../../Constants/COLORS';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { getAthleticType } from "../../../Store/Actions/AuthData"

const EditProfile = () => {

    const focus = useIsFocused();
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [fname, setFname] = useState("");
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState("");
    const [num, setNum] = useState("");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [gen, setGen] = useState("");
    const [type, setType] = useState("");
    const [pass, setPass] = useState("");
    const [conPass, setConPass] = useState('')
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [secure, setSecure] = useState(true);

    const AuthState = useSelector(state => {
        return state?.AuthReducer?.UserDetail;
    });

    const editApi = () => {
        if (fname, lName, email, age, height, gen, type, pass, conPass) {
            if (pass == conPass) {
                navigation.navigate("ProfileScreen");
                console.log("done");
            } else {
                alert("Password does not match");
            };
        } else {
            alert("Please fill all fields");
        };
    };

    // console.log("data", data);

    useEffect(() => {
        getAthleticType(setData);
    }, [focus]);

    return (
        <>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.head}>
                        <TouchableOpacity
                            style={styles.backBtn}
                            onPress={() => navigation.goBack()}
                        >
                            <Image source={back} style={styles.back} />
                        </TouchableOpacity>
                        <Text style={styles.profileText}>Profile</Text>
                    </View>
                    <View style={styles.names}>
                        <View style={styles.imageView}>
                            {/* <Image source={AuthState?.avatar} style={styles.image} />*/}
                            <Image source={profile} style={styles.image} />
                        </View>
                        <View style={styles.nameInputs}>
                            <View style={styles.nameBorder}>
                                <TextInput
                                    style={styles.nameInput}
                                    value={fname}
                                    onChangeText={setFname}
                                    placeholder={AuthState?.first_name}
                                />
                            </View>
                            <View style={styles.nameBorder}>
                                <TextInput
                                    style={styles.nameInput}
                                    value={lName}
                                    onChangeText={setLName}
                                    placeholder={AuthState?.last_name}
                                />
                            </View>
                        </View>
                        <View style={styles.emailInput}>
                            <TextInput
                                style={styles.nameInput}
                                value={email}
                                onChangeText={setEmail}
                                placeholder={AuthState?.email}
                            />
                        </View>
                        {/* <View style={styles.emailInput}>
                            <TextInput
                                style={styles.nameInput}
                                value={num}
                                onChangeText={setNum}
                                placeholder={"Phone Number"}
                            />
                        </View> */}
                        <View style={styles.nameInputs}>
                            <View style={styles.nameBorder}>
                                <TextInput
                                    style={styles.nameInput}
                                    value={age}
                                    onChangeText={setAge}
                                    placeholder={AuthState?.age}
                                />
                            </View>
                            <View style={styles.nameBorder}>
                                <TextInput
                                    style={styles.nameInput}
                                    value={height}
                                    onChangeText={setHeight}
                                    placeholder={AuthState?.height}
                                />
                            </View>
                        </View>
                        <View style={styles.nameInputs}>
                            <View style={styles.nameBorder}>
                                <DropDownPicker
                                    open={open1}
                                    value={gen}
                                    items={GenderData}
                                    // setItems={setGen}
                                    schema={{
                                        label: "value",
                                        value: "value"
                                    }}
                                    setOpen={setOpen1}
                                    setValue={setGen}
                                    placeholder={AuthState?.gender}
                                    placeholderStyle={{
                                        color: COLORS.mehron,
                                        fontWeight: "bold"
                                    }}
                                    style={{
                                        borderRadius: 50,
                                        borderWidth: 1
                                    }}
                                    dropDownDirection="BOTTOM"
                                    disableBorderRadius={false}
                                    zIndex={2000}
                                    zIndexInverse={1000}
                                />
                            </View>
                            <View style={styles.nameBorder}>
                                <DropDownPicker
                                    open={open2}
                                    value={type}
                                    items={data}
                                    schema={{
                                        label: "name",
                                        value: "id"
                                    }}
                                    setOpen={setOpen2}
                                    setValue={setType}
                                    // setItems={setData}
                                    disableBorderRadius={false}
                                    placeholder={AuthState?.athletic_type}
                                    placeholderStyle={{
                                        color: COLORS.mehron,
                                        fontWeight: "bold",
                                    }}
                                    style={{
                                        borderRadius: 50,
                                        borderWidth: 1
                                    }}
                                    dropDownDirection="BOTTOM"
                                    zIndex={1000}
                                    zIndexInverse={2000}
                                    dropDownContainerStyle={{
                                        backgroundColor: COLORS.white,
                                        opacity: 1
                                    }}
                                />
                            </View>
                        </View>
                        <View style={styles.passInput}>
                            <TextInput
                                style={styles.nameInput}
                                value={pass}
                                onChangeText={setPass}
                                placeholder={"Password"}
                                secureTextEntry={secure}
                            />
                            <TouchableOpacity
                                style={styles.eyeBtn}
                                onPress={() => {
                                    secure === true ? setSecure(false) : setSecure(true);
                                }}
                            >
                                <Image source={eye} style={styles.eye} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.passInput}>
                            <TextInput
                                style={styles.nameInput}
                                value={conPass}
                                onChangeText={setConPass}
                                placeholder={"Confirm Password"}
                                secureTextEntry={secure}
                            />
                            <TouchableOpacity
                                style={styles.eyeBtn}
                                onPress={() => {
                                    secure === true ? setSecure(false) : setSecure(true);
                                }}
                            >
                                <Image source={eye} style={styles.eye} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.doneBtn} onPress={editApi}>
                        <Text style={styles.doneText}>Done</Text>
                        <Image source={check} style={styles.check} />
                    </TouchableOpacity>
                </ScrollView>
            </View >
        </>
    );
};

export default EditProfile;