import * as api from "../../api";
import {UPDATE_FACTORY_MANAGER_LOGIN} from "../../constants/actionTypes";


export const updateLogin = (factoryManager) => async (dispatch) => {
    try {
        const { data } = await api.updateLogin(factoryManager);
        const { accessToken,refreshToken } = data;
        // Set the accessToken in localStorage
        console.log(accessToken)
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        dispatch({ type: UPDATE_FACTORY_MANAGER_LOGIN, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};