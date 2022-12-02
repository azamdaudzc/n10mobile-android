import React, { useEffect, useState } from "react";
import {
    Image,
    ImageBackground,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import styles from "./styles";
import DropDownPicker from "react-native-dropdown-picker";
import GenderData from "../../../Constants/GenderData";
import { getAthleticType, SignupUser } from "../../../Store/Actions/AuthData";
import { eye, loginBg, N10logo } from "../../../Constants/Images";
import COLORS from "../../../Constants/COLORS";
import { useIsFocused, useNavigation } from "@react-navigation/native";

const Signup = () => {

    const focus = useIsFocused();
    const navigation = useNavigation();
    const [fName, setFName] = useState();
    const [lName, setLName] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [confirmpass, setConfirmPass] = useState();
    const [age, setAge] = useState();
    const [height, setHeight] = useState();
    const [gen, setGen] = useState();
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [athleticType, setAthleticType] = useState();
    const [data, setData] = useState([]);
    const [secure, setSecure] = useState(true);

    const loginPage = () => {
        navigation.navigate("LoginScreen");
    };

    const register = () => {
        if (
            fName &&
            lName &&
            email &&
            pass &&
            age &&
            height &&
            gen &&
            athleticType
        ) {
            if (pass === confirmpass) {
                let trimEmail = email.trim();
                let emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if (emailRegex.test(trimEmail)) {
                    SignupUser(
                        fName,
                        lName,
                        trimEmail,
                        pass,
                        age,
                        height,
                        gen,
                        athleticType,
                        navigation
                    );
                } else {
                    alert("please enter valid email address");
                };
            } else {
                alert("Password does not match");
            };
        } else {
            alert("Please fill out all fields");
        };
    };

    useEffect(() => {
        getAthleticType(setData);
    }, [focus]);

    return (
        <>
            <ImageBackground
                source={loginBg}
                style={styles.BG}
            >
                <View style={styles.container}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Image
                            source={N10logo}
                            style={styles.logo}
                        />
                        <View style={styles.nameView}>
                            <TextInput
                                style={styles.nameInput}
                                value={fName}
                                onChangeText={setFName}
                                placeholder={"First Name"}
                            />
                        </View>
                        <View style={styles.nameView}>
                            <TextInput
                                style={styles.nameInput}
                                value={lName}
                                onChangeText={setLName}
                                placeholder={"Last Name"}
                            />
                        </View>
                        <View style={styles.nameView}>
                            <TextInput
                                style={styles.nameInput}
                                value={email}
                                onChangeText={setEmail}
                                placeholder={"Email Address"}
                            />
                        </View>
                        <View style={styles.passView}>
                            <TextInput
                                style={styles.passInput}
                                value={pass}
                                onChangeText={setPass}
                                placeholder={"Password"}
                                secureTextEntry={secure}
                            />
                            <TouchableOpacity
                                style={styles.eyeView}
                                onPress={() => {
                                    secure === true ? setSecure(false) : setSecure(true);
                                }}
                            >
                                <Image
                                    source={eye}
                                    style={styles.eye}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.passView}>
                            <TextInput
                                style={styles.passInput}
                                value={confirmpass}
                                onChangeText={setConfirmPass}
                                placeholder={"Confirm Passsword"}
                                secureTextEntry={secure}
                            />
                            <TouchableOpacity
                                style={styles.eyeView}
                                onPress={() => {
                                    secure === true ? setSecure(false) : setSecure(true);
                                }}
                            >
                                <Image
                                    source={eye}
                                    style={styles.eye}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.nameView}>
                            <TextInput
                                style={styles.nameInput}
                                value={age}
                                onChangeText={setAge}
                                placeholder={"Age"}
                            />
                        </View>
                        <View style={styles.nameView}>
                            <TextInput
                                style={styles.nameInput}
                                value={height}
                                onChangeText={setHeight}
                                placeholder={"Height"}
                            />
                        </View>
                        <View style={styles.nameView}>
                            <DropDownPicker
                                // listMode="MODAL"
                                open={open1}
                                value={gen}
                                items={GenderData}
                                schema={{
                                    label: "value",
                                    value: "value"
                                }}
                                setOpen={setOpen1}
                                setValue={setGen}
                                placeholder="Select Gender"
                                placeholderStyle={{
                                    color: COLORS.mehron,
                                    fontWeight: "bold"
                                }}
                                zIndex={2000}
                                zIndexInverse={1000}
                                dropDownDirection="TOP"
                            />
                        </View>
                        <View style={styles.nameView}>
                            <DropDownPicker
                                open={open}
                                value={athleticType}
                                items={data}
                                schema={{
                                    label: "name",
                                    value: "id"
                                }}
                                setOpen={setOpen}
                                setValue={setAthleticType}
                                setItems={setData}
                                disableBorderRadius={true}
                                placeholder="Athletic Type"
                                placeholderStyle={{
                                    color: COLORS.mehron,
                                    fontWeight: "bold"
                                }}
                                zIndex={1000}
                                zIndexInverse={2000}
                            />
                        </View>
                        <TouchableOpacity style={styles.signupBtn} onPress={register}>
                            <Text style={styles.signupText}>Signup</Text>
                        </TouchableOpacity>
                        <View style={styles.orView}>
                            <View style={styles.line} />
                            <Text style={styles.orText}>Or</Text>
                            <View style={styles.line} />
                        </View>
                        <View style={styles.login}>
                            <Text style={styles.account}>Already have an account?</Text>
                            <TouchableOpacity onPress={loginPage}>
                                <Text style={styles.logText}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
        </>
    );
};

export default Signup;