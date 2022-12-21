import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
    ActivityIndicator,
    Image,
    ImageBackground,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { useDispatch } from "react-redux";
import COLORS from "../../../Constants/COLORS";
import {
    check,
    eye,
    facebook,
    google,
    loginBg,
    N10logo,
    twitter
} from "../../../Constants/Images";
import { LoginAPI } from "../../../Store/Actions/AuthData";
import styles from "./styles";

const Login = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [secure, setSecure] = useState(true);
    const [load, setLoad] = useState(false);

    const loginPage = () => {
        navigation.navigate("SignUpScreen");
    };

    const handleLogin = () => {
        setLoad(true);
        if (email && pass) {
            let trimEmail = email.trim();
            let emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (emailRegex.test(trimEmail)) {
                LoginAPI(
                    email,
                    pass,
                    setLoad,
                    dispatch
                );
            } else {
                alert("Please enter a valid email address");
                setLoad(false);
            };
        } else {
            setLoad(false);
            alert("Please enter all fields");
        };
    };

    return (
        <>
            <ImageBackground
                style={styles.container}
                source={loginBg}
            >
                {
                    load === true ? (
                        <>
                            <ActivityIndicator size={"large"} color={COLORS.white} />
                        </>
                    ) : (
                        <>
                            <Image
                                source={N10logo}
                                style={styles.logo}
                            />
                            <View style={styles.inputField}>
                                <TextInput
                                    placeholder={"Email Address"}
                                    style={styles.text}
                                    value={email}
                                    onChangeText={setEmail}
                                />
                                <TouchableOpacity style={styles.eye}>
                                    <Image
                                        source={check}
                                        style={styles.check}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.inputField}>
                                <TextInput
                                    placeholder={"Password"}
                                    style={styles.text}
                                    value={pass}
                                    onChangeText={setPass}
                                    secureTextEntry={secure}
                                />
                                <TouchableOpacity
                                    style={styles.eye}
                                    onPress={() => {
                                        secure === true ? setSecure(false) : setSecure(true);
                                    }}
                                >
                                    <Image
                                        source={eye}
                                        style={styles.check}
                                    />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.btnView} onPress={handleLogin}>
                                <Text style={styles.getText}>GET STARTED</Text>
                            </TouchableOpacity>
                            <View style={styles.signUpView}>
                                <Text style={styles.signText}>Or Sign Up with</Text>
                                <View style={styles.fbView}>
                                    <TouchableOpacity>
                                        <Image
                                            source={facebook}
                                            style={styles.facebook}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image
                                            source={google}
                                            style={styles.facebook}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image
                                            source={twitter}
                                            style={styles.facebook}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.signUp}>
                                <Text style={styles.dont}>Don't have an Account? </Text>
                                <TouchableOpacity onPress={loginPage}>
                                    <Text style={styles.signUpText}>Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    )
                }
            </ImageBackground>
        </>
    );
};

export default Login;