import * as api from "../../api";
import {ADD_ROLE_ACCESS,GET_ROLE_ACCESS} from "../../constants/actionTypes";


export const addRoleAccess = (roleAccessInfo) => async (dispatch) => {
    try {
        const { data } = await api.addRoleAccess(roleAccessInfo);
        dispatch({ type: ADD_ROLE_ACCESS, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getRoleAccess= () => async (dispatch) => {
    try {
      const { data } = await api.getRoleAccess();
      dispatch({ type: GET_ROLE_ACCESS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };