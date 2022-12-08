import React, {
    useEffect,
    useState
} from "react";
import {
    ActivityIndicator,
    Button,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import DateView from "../../../Components/DateView";
import HomeHeader from "../../../Components/HomeHeader";
import UserHeader from "../../../Components/UserHeader";
import {
    checkInQues,
    ImageUpload,
    sendAns
} from "../../../Store/Actions/UserData";
import styles from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import COLORS from "../../../Constants/COLORS";
import { useSelector } from "react-redux";
import {
    launchCamera,
    launchImageLibrary
} from "react-native-image-picker";
import MultiSteps from "react-native-multi-steps";
import StepFormData from "../../../Constants/StepFormData";
import CompCheck from "../../../Components/CompCheck";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { upload } from "../../../Constants/Images";

const CheckIn = () => {

    const [page, setPage] = useState(1);
    const [ques, setQues] = useState([]);
    const [ans1, setAns1] = useState();
    const [photo, setPhoto] = useState([]);
    const [load, setLoad] = useState(true);
    const [ansId, setAnsId] = useState([]);
    const [ids, setIds] = useState([]);
    const [hit, setHit] = useState(false);

    const AuthState = useSelector(state => {
        return state?.AuthReducer;
    });

    let token = AuthState?.TokenId;

    const setingVar = (qid, qVal, type) => {
        let data = {
            questionId: qid,
            questionVal: qVal
        };
        // if (ansId.length == 0) {
        //     setAnsId(prev => [...prev, data]);
        // } else {
        // if (type == "multi_select") {
        //     let data = {
        //         questionId: qid,
        //         questionVal: [qVal]
        //     };
        //     if (ansId.length == 0) {
        setAnsId(prev => [...prev, data]);
        //     } else {
        //         const newState = ansId[0]?.questionVal?.map((obj) => {
        //             // return console.log("obj", obj);
        //             return [...obj, qVal]
        //         });
        //         let data = {
        //             questionId: qid,
        //             questionVal: newState
        //         };
        //         // setAnsId(newState);
        //         console.log("data", data);
        //     };
        // };
        // };
        // if (qVal == undefined) {
        //     console.log("photo<=====", photo);
        //     let data = {
        //         questionId: qid,
        //         questionVal: {
        //             uri: photo[0]?.uri,
        //             name: photo[0]?.fileName,
        //             type: photo[0]?.type
        //         }
        //     };
        //     setAnsId(prev => [...prev, data]);
        // } else {
        //     let data = {
        //         questionId: qid,
        //         questionVal: qVal
        //     };
        //     setAnsId(prev => [...prev, data]);
        // };
    };

    const send = () => {
        setLoad(true);
        setPage(page + 1);
        if (photo.length > 0) {
            let img = {
                uri: photo[0]?.abc?.uri,
                name: photo[0]?.abc?.fileName,
                type: photo[0]?.abc?.type
            };
            let imageData = new FormData();
            // imageData.append('checkin_question_id', ques?.id);
            // imageData.append('answer', JSON.stringify(ansId));
            // imageData.append("imageId", JSON.stringify(photo[0]?.id));
            imageData.append("image", img);
            console.log("imageData", imageData);
            if (hit == true) {
                let formData = new FormData();
                formData.append('checkin_question_id', ques?.id);
                formData.append('answer', JSON.stringify(ansId));
                sendAns(formData, token, setLoad, setQues);
                setHit(false);
            } else {
                ImageUpload(imageData, ques?.id, ansId, photo[0]?.id, token, setLoad, setQues, setAnsId, setHit);
            };
        };
    };

    const handleChoosePhoto = (id) => {
        launchImageLibrary({ noData: true }, (response) => {
            // console.log("response", response?.assets[0], id);
            if (response?.didCancel == undefined) {
                let abc = response?.assets[0];
                // photo.push(response?.assets[0])
                setPhoto(prev1 => [...prev1, { abc, id }]);
                // setingVar(id);
            };
        });
    };

    console.log("photo", photo);
    console.log("ansId", ansId);

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('checkComplete', jsonValue)
        } catch (e) {
            console.log("StoreData err", e);
        };
    };

    useEffect(() => {
        checkInQues(setQues, token, setLoad);
    }, []);

    useEffect(() => {
        if (hit == true) {
            // sendAns(imageData, token, setLoad, setQues);
            send();
        };
    }, [hit]);

    useEffect(() => {
        ques?.checkin_question_inputs?.forEach(element => {
            if (!ids.includes(element?.id)) {
                ids.push(element?.id)
            };
        });
        if (ques?.done == "done") {
            storeData(1);
        };
    }, [ques]);

    return (
        <>
            <View style={styles.container}>
                {/* <View style={{ alignItems: "center", backgroundColor: COLORS.grey }}>
                    <HomeHeader />
                </View> */}
                <UserHeader type={0} />
                {
                    load == true ? (
                        <ActivityIndicator
                            size={"large"}
                            style={{
                                flex: 1,
                                justifyContent: "center"
                            }}
                        />
                    ) : (
                        <>
                            <DateView title={"WEEK OF 24 APRIL 2022 - 07 MAY 2022"} />
                            {
                                ques?.done == "done" ? (
                                    <>
                                        <CompCheck />
                                    </>
                                ) : (
                                    <>
                                        <View style={styles.quesView}>
                                            <Text style={styles.quesHead}>Question: {page}</Text>
                                            <Text style={styles.quesQuestion}>{ques?.question}</Text>
                                        </View>
                                        {
                                            ques?.checkin_question_inputs?.map((val, ind) => {
                                                let opt = val?.options != null ? JSON.parse(val?.options) : null;
                                                let type = val?.input_type;
                                                let place = val?.placeholder;
                                                // console.log("map array", val?.id, type);
                                                return (
                                                    <View key={ind}>
                                                        {
                                                            type === "multi_select" ? (
                                                                <>
                                                                    {
                                                                        opt.map((v, i) => {
                                                                            return (
                                                                                <View
                                                                                    key={i}
                                                                                    style={{ width: "80%", alignSelf: "center" }}
                                                                                >
                                                                                    <BouncyCheckbox
                                                                                        size={20}
                                                                                        fillColor={COLORS.mehron}
                                                                                        unfillColor={COLORS.white}
                                                                                        // disableBuiltInState
                                                                                        // isChecked={isItemIsSelected(val?.id, v?.question_value)}
                                                                                        text={v?.question_label}
                                                                                        style={{
                                                                                            marginTop: 10,
                                                                                            width: "100%"
                                                                                        }}
                                                                                        innerIconStyle={{ borderWidth: 2 }}
                                                                                        onPress={() => {
                                                                                            setingVar(
                                                                                                val?.id,
                                                                                                v?.question_value,
                                                                                                type
                                                                                            );
                                                                                        }}
                                                                                        textStyle={{
                                                                                            textDecorationLine: "none"
                                                                                        }}
                                                                                    />
                                                                                </View>
                                                                            );
                                                                        })
                                                                    }
                                                                </>
                                                            ) : (
                                                                null
                                                            )
                                                        }
                                                        {
                                                            type === "radio" ? (
                                                                <>
                                                                    {
                                                                        opt.map((v, i) => {
                                                                            return (
                                                                                <View
                                                                                    key={i}
                                                                                    style={{ width: "80%", alignSelf: "center" }}
                                                                                >
                                                                                    <BouncyCheckbox
                                                                                        size={20}
                                                                                        fillColor={COLORS.mehron}
                                                                                        unfillColor={COLORS.white}
                                                                                        // disableBuiltInState
                                                                                        // isChecked={isItemIsSelected(val?.id, v?.question_value)}
                                                                                        text={v?.question_label}
                                                                                        style={{
                                                                                            marginTop: 10,
                                                                                            width: "100%"
                                                                                        }}
                                                                                        innerIconStyle={{ borderWidth: 2 }}
                                                                                        onPress={() => {
                                                                                            setingVar(
                                                                                                val?.id,
                                                                                                v?.question_value,
                                                                                                type
                                                                                            );
                                                                                        }}
                                                                                        textStyle={{
                                                                                            textDecorationLine: "none"
                                                                                        }}
                                                                                    />
                                                                                </View>
                                                                            );
                                                                        })
                                                                    }
                                                                </>
                                                            ) : (
                                                                null
                                                            )
                                                        }
                                                        {
                                                            type === "image" ? (
                                                                <>
                                                                    <TouchableOpacity
                                                                        style={styles.imageUpload}
                                                                        onPress={() => handleChoosePhoto(val?.id)}
                                                                    >
                                                                        <Image
                                                                            source={upload}
                                                                            style={styles.upload}
                                                                        />
                                                                    </TouchableOpacity>
                                                                </>
                                                            ) : (
                                                                null
                                                            )
                                                        }
                                                    </View>
                                                );
                                            })
                                        }
                                        <TouchableOpacity style={styles.sendAns} onPress={send}>
                                            <Text style={{ alignSelf: "center" }}>Send</Text>
                                        </TouchableOpacity>
                                    </>
                                )
                            }
                        </>
                    )
                }
                {/* <TouchableOpacity style={styles.yesBtn}>
                        <Text style={styles.yesText}>Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.yesBtn}>
                        <Text style={styles.yesText}>No</Text>
                    </TouchableOpacity> */}
            </View>
        </>
    );
};

export default CheckIn;