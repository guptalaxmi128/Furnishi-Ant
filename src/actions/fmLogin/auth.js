// import * as api from "../../api";
// import {UPDATE_FACTORY_MANAGER_LOGIN} from "../../constants/actionTypes";


// export const updateLogin = (factoryManager) => async (dispatch) => {
//     try {
//         const { data } = await api.updateLogin(factoryManager);
//         const { accessToken,refreshToken } = data;
//         // Set the accessToken in localStorage
//         console.log(accessToken)
//         console.log("refresh",refreshToken)
//         localStorage.setItem("accessToken", accessToken);
//         localStorage.setItem("refreshToken", refreshToken);
//         dispatch({ type: UPDATE_FACTORY_MANAGER_LOGIN, payload: data });
//         return data;
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// };


import * as api from "../../api";
import {LOGIN, VERIFY_OTP,SIGNUP} from "../../constants/actionTypes";



export const signup = (userInfo) => async (dispatch) => {
    try {
        const { data } = await api.signup(userInfo);
        // const { accessToken,refreshToken } = data;
        // Set the accessToken in localStorage
        console.log(data)
        // console.log("refresh",refreshToken)
        // localStorage.setItem("accessToken", accessToken);
        // localStorage.setItem("refreshToken", refreshToken);
        dispatch({ type: SIGNUP, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};


export const login = (userInfo) => async (dispatch) => {
    try {
        const { data } = await api.login(userInfo);
        // const { accessToken,refreshToken } = data;
        // Set the accessToken in localStorage
        console.log(data)
        // console.log("refresh",refreshToken)
        // localStorage.setItem("accessToken", accessToken);
        // localStorage.setItem("refreshToken", refreshToken);
        dispatch({ type: LOGIN, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const VerifyOtp = (verifyOtp) => async (dispatch) => {
    try {
        const { data } = await api.VerifyOtp(verifyOtp);
        const { accessToken,refreshToken } = data;
        // Set the accessToken in localStorage
        console.log(accessToken)
        console.log("refresh",refreshToken)
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        dispatch({ type: VERIFY_OTP, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
