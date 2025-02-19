import API from "../../../Constants/AxiosAPI";
import { UserDetail } from "../../Reducer/AuthReducer";

const checkInQues = async (setQues, token, setLoad, setNewUser) => {
    await API.get(`get/checkin-questions`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }).then((e) => {
        if (e?.status === 200) {
            setQues(e?.data);
            setLoad(false);
        };
        if (e?.data?.error == "No Program Assigned") {
            setLoad(false);
            setNewUser(1);
        };
    }).catch((err) => {
        console.log("checkInQues error", err);
    });
};

const ImageUpload = async (imageData, qId, ansId, photoId, token, setLoad, setQues, setAnsId, setHit) => {
    await API.post(`upload-file`, imageData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((e) => {
        let imageData = {
            questionId: photoId,
            questionVal: e?.data
        };
        setAnsId(prev => [...prev, imageData]);
    }).catch((err) => {
        console.log("ImageUpload", err);
        setLoad(false);
    });
};

const sendAns = async (formData, token, setLoad, setQues) => {
    await API.post(`store/checkin-question-ans`, formData, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
        },
    }).then((e) => {
        if (e?.data?.new_data == "available") {
            checkInQues(setQues, token, setLoad);
        };
    }).catch((err) => {
        console.log("sendAns error", err);
        setLoad(false);
    });
};

const getProgramWeek = async (setProgramWeek, setQues, token) => {
    await API.get(`get/user/program/weeks`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then(e => {
        setProgramWeek(e?.data);
        if (e?.data?.msg == "user has no programs") {
            setQues(4);
        };
    }).catch(err => {
        console.log("getUseProgram error", err);
    });
};

const getProgramWeekDays = async (currId, lastId, setDay, token) => {
    let data = {
        week_id: currId,
        last_week_id: lastId
    };
    await API.post(`get/user/program/days`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then(e => {
        setDay(e?.data);
    }).catch((err) => {
        console.log("getProgramWeekDays error", err);
    });
};

const programDayInfo = async (date, dayId, lastWeek, setDayEx, token) => {
    let data = {
        last_week_id: lastWeek,
        date: date,
        day_id: dayId
    };
    await API.post(`get/user/program/day/info`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then(e => {
        setDayEx(e?.data);
    }).catch((err) => {
        console.log("programDayInfo error", err);
    });
};

const getExerciseSets = async (dayId, ExId, libId, lastWeek, setExercise, token) => {
    let data = {
        last_week_id: lastWeek,
        day_id: dayId,
        exercise_id: ExId,
        exercise_library_id: libId,
    };
    await API.post(`get/user/program/day/exercisesets`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then(e => {
        setExercise(e?.data);
    }).catch((err) => {
        console.log("getExerciseSets error", err?.response);
    });
};

const postAnswer = async (total, setQues, token) => {
    await API.post(`user/program/day/store`, total, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then(e => {
        if (e?.data?.success == true) {
            setQues(1);
        };
    }).catch((err) => {
        console.log("postAnswer error", err?.response?.data?.message);
        console.log("postAnswer error", err);
    });
};

const getNotification = async (setNotification, setRead, setLoad, token) => {
    await API.get(`get/user/notifications`, {
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

const markNotification = async (setRead, setLoad, token) => {
    await API.get(`mark/read/user/notifications`, {
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

const getExerciseLibrary = async (setExercises, token) => {
    await API.get(`get/all/exercise/libraries`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then(e => {
        setExercises(e?.data);
    }).catch((err) => {
        console.log("getExerciseLibrary error", err);
    });
};

const updateProfile = async (
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
    await API.post(`update/client/profile`, data, {
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

const warmUpInfo = async (id, setWarmInfo, token) => {
    let data = {
        warmup_id: id,
    };
    await API.post(`get/warmup/info`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then(e => {
        setWarmInfo(e?.data);
    }).catch((err) => {
        console.log("warmUpInfo error", err);
    });
};

const dashboard = async (setDash, setLoad, setNewUser, token) => {
    await API.get(`fetch/dashboard`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then(e => {
        setLoad(false);
        setDash(e?.data);
        if (e?.data?.error == "no program assigned") {
            setNewUser(true);
        };
    }).catch((err) => {
        console.log("dashboard error", err);
    });
};

export {
    dashboard,
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