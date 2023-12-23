import * as api from "../../api";
import {UPDATE_FACTORY_MANAGER_LOGIN} from "../../constants/actionTypes";


export const updateLogin = (factoryManager) => async (dispatch) => {
    try {
        const { data } = await api.updateLogin(factoryManager);
        dispatch({ type: UPDATE_FACTORY_MANAGER_LOGIN, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};