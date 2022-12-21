import React, { useState } from 'react';
import {
    ActivityIndicator,
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { back, check, eye } from '../../../Constants/Images';
import styles from './styles';
import DropDownPicker from "react-native-dropdown-picker";
import GenderData from '../../../Constants/GenderData';
import COLORS from '../../../Constants/COLORS';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { getAthleticType } from "../../../Store/Actions/AuthData"
import { launchImageLibrary } from 'react-native-image-picker';
import { updateProfile } from '../../../Store/Actions/UserData';

const EditProfile = () => {

    const AuthState = useSelector(state => {
        return state?.AuthReducer;
    });

    const dispatch = useDispatch();
    const focus = useIsFocused();
    const navigation = useNavigation();
    let image = JSON.parse(AuthState?.UserDetail?.avatar);
    const [data, setData] = useState([]);
    const [photo, setPhoto] = useState(image);
    const [fname, setFname] = useState(AuthState?.UserDetail?.first_name);
    const [lName, setLName] = useState(AuthState?.UserDetail?.last_name);
    const [email, setEmail] = useState(AuthState?.UserDetail?.email);
    const [num, setNum] = useState(AuthState?.UserDetail?.phone);
    const [age, setAge] = useState(AuthState?.UserDetail?.age);
    const [height, setHeight] = useState(AuthState?.UserDetail?.height);
    const [gen, setGen] = useState(AuthState?.UserDetail?.gender);
    const [type, setType] = useState(AuthState?.UserDetail?.athletic_type);
    const [pass, setPass] = useState("");
    const [conPass, setConPass] = useState('')
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [secure, setSecure] = useState(true);
    const [load, setLoad] = useState(false);
    let token = AuthState?.TokenId;

    const handleChoosePhoto = () => {
        launchImageLibrary({ noData: true }, (response) => {
            if (response?.didCancel == undefined) {
                let abc = response?.assets[0];
                let data = {
                    name: abc?.fileName,
                    type: abc?.type,
                    uri: abc?.uri
                };
                setPhoto(data);
            };
        });
    };

    const editApi = () => {
        setLoad(true);
        if (fname, lName, email, age, height, gen, type, pass, conPass) {
            if (pass == conPass) {
                updateProfile(
                    photo,
                    fname,
                    lName,
                    email,
                    age,
                    height,
                    gen,
                    type,
                    pass,
                    num,
                    token,
                    navigation,
                    dispatch,
                    setLoad
                );
            } else {
                alert("Password does not match");
                setLoad(false);
            };
        } else {
            alert("Please fill all fields");
            setLoad(false);
        };
    };

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
                    {
                        load == true ? (
                            <ActivityIndicator size={"large"} color={COLORS.mehron} />
                        ) : (
                            <>

                                <View style={styles.names}>
                                    <TouchableOpacity style={styles.imageView} onPress={() => handleChoosePhoto()}>
                                        {
                                            photo?.length == 0 ? (
                                                <Image source={photo} style={styles.image} />
                                            ) : (
                                                <Image source={{ uri: photo?.uri }} style={styles.image} />
                                            )
                                        }
                                    </TouchableOpacity>
                                    <View style={styles.nameInputs}>
                                        <View style={styles.nameBorder}>
                                            <TextInput
                                                style={styles.nameInput}
                                                value={fname}
                                                onChangeText={setFname}
                                                placeholderTextColor={COLORS.black}
                                            />
                                        </View>
                                        <View style={styles.nameBorder}>
                                            <TextInput
                                                style={styles.nameInput}
                                                value={lName}
                                                onChangeText={setLName}
                                                placeholderTextColor={COLORS.black}
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.emailInput}>
                                        <TextInput
                                            style={styles.nameInput}
                                            value={email}
                                            onChangeText={setEmail}
                                            placeholderTextColor={COLORS.black}
                                        />
                                    </View>
                                    <View style={styles.emailInput}>
                                        <TextInput
                                            style={styles.nameInput}
                                            value={num}
                                            onChangeText={setNum}
                                            placeholder={AuthState?.UserDetail?.phone?.toString()}
                                            placeholderTextColor={COLORS.black}
                                        />
                                    </View>
                                    <View style={styles.nameInputs}>
                                        <View style={styles.nameBorder}>
                                            <TextInput
                                                style={styles.nameInput}
                                                value={age}
                                                onChangeText={setAge}
                                                placeholder={AuthState?.UserDetail?.age?.toString()}
                                                placeholderTextColor={COLORS.black}
                                            />
                                        </View>
                                        <View style={styles.nameBorder}>
                                            <TextInput
                                                style={styles.nameInput}
                                                value={height}
                                                onChangeText={setHeight}
                                                placeholder={AuthState?.UserDetail?.height?.toString()}
                                                placeholderTextColor={COLORS.black}
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.nameInputs}>
                                        <View style={styles.nameBorder}>
                                            <DropDownPicker
                                                open={open1}
                                                value={gen}
                                                items={GenderData}
                                                schema={{
                                                    label: "value",
                                                    value: "value"
                                                }}
                                                setOpen={setOpen1}
                                                setValue={setGen}
                                                placeholder={AuthState?.UserDetail?.gender}
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
                                                disableBorderRadius={false}
                                                placeholder={AuthState?.UserDetail?.athletic_type}
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
                                            placeholderTextColor={COLORS.black}
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
                                            placeholderTextColor={COLORS.black}
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
                            </>
                        )
                    }
                </ScrollView>
            </View >
        </>
    );
};

export default EditProfile;