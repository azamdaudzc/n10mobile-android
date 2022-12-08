import API from "../../../Constants/AxiosAPI";

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
    // console.log("token", token);
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
        // console.log("getProgramWeekDays", e?.data);
        setDay(e?.data);
    }).catch((err) => {
        console.log("getProgramWeekDays error", err);
        // console.log("getProgramWeekDays error", err.response.data?.message);
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
        // console.log("programDayInfo error", err.response.data?.message);
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
        console.log("getExerciseSets error", err.response.data?.message);
    });
};

const postAnswer = () => {

}

export {
    checkInQues,
    sendAns,
    ImageUpload,
    getProgramWeek,
    getProgramWeekDays,
    programDayInfo,
    getExerciseSets,
    postAnswer
};