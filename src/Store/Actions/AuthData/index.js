import API from "../../../Constants/AxiosAPI";
import { TokenId, LoginUser, UserDetail } from "../../Reducer/AuthReducer";

const LoginAPI = async (
    email,
    pass,
    setLoad,
    dispatch
) => {
    await API.post(`auth/login?email=${email}&password=${pass}`)
        .then((e) => {
            let token = e?.data?.data?.token;
            if (e?.data?.status === "Success") {
                // alert("Login Success");
                dispatch(TokenId(token));
                Me(setLoad, token, dispatch);
            } else {
                setLoad(false);
                alert("Invalid password");
            };
        })
        .catch((err) => {
            console.log("LoginAPI", err);
            setLoad(false);
            alert("Something went wrong");
        });
};

const Me = async (setLoad, token, dispatch) => {
    await API.get(`me`, {
        headers: { Authorization: `Bearer ${token}` }
    })
        .then((e) => {
            dispatch(UserDetail(e?.data));
            dispatch(LoginUser(true));
            setLoad(false);
        })
        .catch((err) => {
            console.log("Me error", err);
        });
};

const SignupUser = async (
    fName,
    lName,
    trimEmail,
    pass,
    age,
    height,
    num,
    gen,
    athleticType,
    navigation,
    setLoad
) => {
    let data = {
        first_name: fName,
        email: trimEmail,
        password: pass,
        c_password: pass,
        last_name: lName,
        age: age,
        height: height,
        gender: gen,
        athletic_type: athleticType,
        phone: num
    };
    await API.post(`auth/register`, data)
        .then((e) => {
            if (e?.data?.status === "Success") {
                setLoad(false);
                navigation.navigate("LoginScreen");
                alert("SingUp Successful");
            } else {
                alert("Email is already taken");
            };
        })
        .catch((err) => {
            console.log("SignupUser error", err?.response?.data?.message);
            setLoad(false);
            alert("Something went wrong");
        });
};

const getAthleticType = async (setData) => {
    await API.get(`get/athletic-types`)
        .then((e) => {
            setData(e?.data?.athletic_types);
        })
        .catch((err) => {
            console.log("getAthleticType Error", err);
        });
};

export { LoginAPI, Me, SignupUser, getAthleticType };