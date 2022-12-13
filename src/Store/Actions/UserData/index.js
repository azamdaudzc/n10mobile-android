import API from "../../../Constants/AxiosAPI";
import { UserDetail } from "../../Reducer/AuthReducer";

const checkInQues = async (setQues, token, setLoad) => {
    API.get(`get/checkin-questions`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }).then((e) => {
        if (e?.status === 200) {
            setQues(e?.data);
            setLoad(false);
        };
    }).catch((err) => {
        console.log("checkInQues error", err.response.data?.message);
    });
};

const ImageUpload = async (imageData, qId, ansId, photoId, token, setLoad, setQues, setAnsId, setHit) => {
    API.post(`user-checkin-image-upload`, imageData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((e) => {
        // console.log("ImageUpload", e?.data);
        let imageData = {
            questionId: photoId,
            questionVal: e?.data
        };
        setAnsId(prev => [...prev, imageData]);
        setHit(true);
        // let formData = new FormData();
        // formData.append('checkin_question_id', qId);
        // formData.append('answer', JSON.stringify(ansId));
        // formData.append('answer', JSON.stringify(imageData));
        //     let formData = new FormData();
        //     formData.append('checkin_question_id', ques?.id);
        //     formData.append('answer', JSON.stringify(ansId));
        //     formData.append("imageLink", JSON.stringify(e?.data));

        // sendAns(formData, token, setLoad, setQues);
    }).catch((err) => {
        console.log("ImageUpload", err);
    });
};

const sendAns = async (formData, token, setLoad, setQues) => {
    API.post(`store/checkin-question-ans`, formData, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
        },
    }).then((e) => {
        // console.log("sendAns", e?.data)
        if (e?.data?.new_data == "available") {
            checkInQues(setQues, token, setLoad);
            // console.log("available  <====");
        }
        // else if (e?.data?.new_data == "not_available") {
        //     setQues("done");
        //     console.log("checkInQues  ====>");
        // };
    }).catch((err) => {
        console.log("sendAns error", err.response.data?.message);
        console.log("sendAns error", err);
        setLoad(false);
    });
};

const getProgramWeek = (setProgramWeek, token) => {
    API.get(`get/user/program/weeks`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then(e => {
        setProgramWeek(e?.data);
    }).catch(err => {
        console.log("getUseProgram error", err.response.data?.message);
    });
};

const getProgramWeekDays = (currId, lastId, setDay, token) => {
    let data = {
        week_id: currId,
        last_week_id: lastId
    };
    API.post(`get/user/program/days`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then(e => {
        setDay(e?.data);
    }).catch((err) => {
        console.log("getProgramWeekDays error", err);
    });
};

const programDayInfo = (date, dayId, lastWeek, setDayEx, token) => {
    let data = {
        last_week_id: lastWeek,
        date: date,
        day_id: dayId
    };
    API.post(`get/user/program/day/info`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then(e => {
        setDayEx(e?.data);
    }).catch((err) => {
        console.log("programDayInfo error", err);
    });
};

const getExerciseSets = (dayId, ExId, lastWeek, setExercise, token) => {
    let data = {
        last_week_id: lastWeek,
        day_id: dayId,
        exercise_id: ExId
    };
    API.post(`get/user/program/day/exercisesets`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then(e => {
        setExercise(e?.data);
    }).catch((err) => {
        console.log("getExerciseSets error", err);
    });
};

const postAnswer = () => {
    //     let data = {
    //         day_id: "",
    //         w_e_[day_exercise_id]_s_[set_no]: "",
    //         r_e_[day_exercise_id]_s_[set_no]: "",
    //         mai_e_[day_exercise_id]_s_[set_no]: ""
    // }
    API.post(`user/program/day/store`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then(e => {
        console.log("postAnswer", e?.data);
    }).catch((err) => {
        console.log("postAnswer error", err);
    });
};

const getNotification = (setNotification, setRead, setLoad, token) => {
    API.get(`get/user/notifications`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then(e => {
        setNotification(e?.data);
        setRead(false);
        setLoad(false);
    }).catch((err) => {
        console.log("getNotification error", err);
    });
};

const markNotification = (setRead, setLoad, token) => {
    API.get(`mark/read/user/notifications`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then(e => {
        setRead(true);
        setLoad(false);
    }).catch((err) => {
        console.log("getNotification error", err);
        setLoad(false);
    });
};

const getExerciseLibrary = (setExercises, token) => {
    API.get(`get/all/exercise/libraries`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then(e => {
        setExercises(e?.data);
    }).catch((err) => {
        console.log("getExerciseLibrary error", err);
    });
};

const updateProfile = (
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
) => {
    let data = {
        avatar: photo,
        first_name: fname,
        last_name: lName,
        email: email,
        password: pass,
        age: age,
        gender: gen,
        height: height,
        athletic_type: type,
        phone: num,
    }
    API.post(`update/client/profile`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then(e => {
        dispatch(UserDetail(e?.data?.user));
        setLoad(false);
        navigation.navigate("ProfileScreen");
    }).catch((err) => {
        console.log("updateProfile error", err.response.data?.message);
    });
};

const warmUpInfo = (id, setWarmInfo, token) => {
    let data = {
        warmup_id: id,
    };
    API.post(`get/warmup/info`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then(e => {
        setWarmInfo(e?.data);
    }).catch((err) => {
        console.log("warmUpInfo error", err);
    });
};

export {
    warmUpInfo,
    updateProfile,
    getExerciseLibrary,
    markNotification,
    getNotification,
    checkInQues,
    sendAns,
    ImageUpload,
    getProgramWeek,
    getProgramWeekDays,
    programDayInfo,
    getExerciseSets,
    postAnswer
};