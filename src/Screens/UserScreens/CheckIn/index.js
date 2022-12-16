import React, {
    useEffect,
    useState,
    useCallback
} from "react";
import {
    ActivityIndicator,
    Button,
    Image,
    ScrollView,
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
import { launchImageLibrary } from "react-native-image-picker";
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
        // console.log("type", type);
        let data = {
            questionId: qid,
            questionVal: qVal
        };
        // if (ansId.length == 0) {
        //     setAnsId(prev => [...prev, data]);
        // } else {
        // ansId.map((val) => {
        //     if (qid == val?.questionId) {
        // setAnsId(prev => prev.map(e => e.questionId === qid ? { ...e, questionVal: qVal } : e));
        //     } else {
        //         setAnsId(prev => [...prev, data]);
        //     };
        // });
        // const newArr = ansId.map((v, i) => {
        //     if (qid == v?.questionId) {
        //         return setAnsId(prev => [...prev, { questionId: v?.questionId, questionVal: qVal }]);
        //     } else {
        //         return setAnsId(prev => [...prev, data]);
        //     }
        //     // return console.log("aaaaaaaaaaa", v?.questionId);
        // });
        if (type == "multi_select") {
            let data = {
                questionId: qid,
                questionVal: [qVal]
            };
            if (ansId.length == 0) {
                setAnsId(prev => [...prev, data]);
            } else {
                const newState = ansId[0]?.questionVal?.map((obj) => {
                    // return console.log("obj", obj);
                    return [...obj, qVal]
                });
                let data = {
                    questionId: qid,
                    questionVal: newState
                };
                // setAnsId(newState);
                console.log("data", data);
            };
        };
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
        if (type == "select") {
            if (ansId.length == 0) {
                setAnsId(prev => [...prev, data]);
            } else {
                ansId.map((val) => {
                    if (qid == val?.questionId) {
                        setAnsId(prev => prev.map(e => e.questionId === qid ? { ...e, questionVal: qVal } : e));
                    };
                });
            };
        };
        if (type == "number") {
            let prev = ansId;
            let isAvailable = ansId.length > 0 ? prev.find(x => x?.questionId == qid) : undefined;
            if (isAvailable == undefined) {
                setAnsId(prev => [...prev, data]);
            } else {
                ansId.map((val) => {
                    setAnsId(prev => prev.map(e => e.questionId === qid ? { ...e, questionVal: qVal } : e));
                });
            };
        };
        // if (type == "image") {

        // };
    };

    const send = () => {
        setLoad(true);
        setPage(page + 1);
        if (photo.length > 0) {
            photo.map((v, i) => {
                let img = {
                    uri: v?.abc?.uri,
                    name: v?.abc?.fileName,
                    type: v?.abc?.type
                };
                // console.log("a============?>", img, i);
                let imageData = new FormData();
                // imageData.append('checkin_question_id', ques?.id);
                // imageData.append('answer', JSON.stringify(ansId));
                // imageData.append("imageId", JSON.stringify(photo[0]?.id));
                imageData.append("image", img, imageData);
                if (hit == true) {
                    let formData = new FormData();
                    formData.append('checkin_question_id', ques?.id);
                    formData.append('answer', JSON.stringify(ansId));
                    sendAns(formData, token, setLoad, setQues);
                    setHit(false);
                } else {
                    ImageUpload(imageData, ques?.id, ansId, photo[0]?.id, token, setLoad, setQues, setAnsId, setHit);
                };
            });
            // setHit(true);
        } else {
            let formData = new FormData();
            formData.append('checkin_question_id', ques?.id);
            formData.append('answer', JSON.stringify(ansId));
            sendAns(formData, token, setLoad, setQues);
            setAnsId('');
        };
    };

    const handleChoosePhoto = (id) => {
        launchImageLibrary({ noData: true }, (response) => {
            if (response?.didCancel == undefined) {
                let abc = response?.assets[0];
                let prev = photo;
                let isAvailable = photo.length > 0 ? prev.find(x => x?.id == id) : undefined;
                if (isAvailable == undefined) {
                    setPhoto(prev1 => [...prev1, { abc, id }]);
                } else {
                    ansId.map((val) => {
                        setAnsId(prev => prev.map(e => e.id === id ? { ...e, fileName: abc?.fileName, uri: abc?.uri, type: abc?.type } : e));
                    });
                };
            };
        });
    };

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

    // useEffect(() => {
    //     if (hit == true) {
    //         send();
    //     };
    // }, [hit]);

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
                                        <ScrollView showsVerticalScrollIndicator={false}>
                                            <View style={styles.quesView}>
                                                <Text style={styles.quesHead}>Question: {page}</Text>
                                                <Text style={styles.quesQuestion}>{ques?.question}</Text>
                                            </View>
                                            {
                                                ques?.checkin_question_inputs?.map((val, ind) => {
                                                    let opt = val?.options != null ? JSON.parse(val?.options) : null;
                                                    let type = val?.input_type;
                                                    let place = val?.placeholder;
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
                                                                type === "select" ? (
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
                                                                            {
                                                                                photo?.length == 0 ? (
                                                                                    <Image source={upload} style={[styles.upload, { tintColor: COLORS.offWhite }]} />
                                                                                ) : (
                                                                                    // <>
                                                                                    //     {
                                                                                    //         photo.map((v, i) => {
                                                                                    //             return (
                                                                                                    <Image source={{ uri: photo[ind]?.abc?.uri }} style={styles.upload} />
                                                                                    //             )
                                                                                    //         })
                                                                                    //     }
                                                                                    // </>
                                                                                )
                                                                            }
                                                                        </TouchableOpacity>
                                                                    </>
                                                                ) : (
                                                                    null
                                                                )
                                                            }
                                                            {
                                                                type === "number" ? (
                                                                    <>
                                                                        <View style={styles.inputStyle}>
                                                                            <TextInput
                                                                                style={styles.inputField}
                                                                                value={ansId}
                                                                                onChangeText={(v) => setingVar(val?.id, v, type)}
                                                                                placeholder={place}
                                                                            />
                                                                        </View>
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
                                        </ScrollView>
                                    </>
                                )
                            }
                        </>
                    )
                }
            </View>
        </>
    );
};

export default CheckIn;