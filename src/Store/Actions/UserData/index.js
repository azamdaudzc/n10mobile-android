import API from "../../../Constants/AxiosAPI";

const checkInQues = async (setQues, token, setLoad) => {
    API.get(`get/checkin-questions`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((e) => {
        if (e?.status === 200) {
            setQues(e?.data);
            setLoad(false);
            // console.log("checkInQues  ====>");
        };
    }).catch((err) => {
        console.log("checkInQues error", err.response.data?.message);
    });
};

const ImageUpload = async (imageData, qId, ansId, photoId, token, setLoad, setQues, setAnsId, setHit) => {
    // console.log("imageData, qId, ansId, photoId", imageData, qId, ansId, photoId);
    API.post(`user-checkin-image-upload`, imageData, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }).then((e) => {
        console.log("ImageUpload", e?.data);
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
        }
    }).then((e) => {
        console.log("sendAns", e?.data)
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

export { checkInQues, sendAns, ImageUpload };