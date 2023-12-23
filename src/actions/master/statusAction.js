import * as api from "../../api";
import {ADD_STATUS_ACTION,GET_STATUS_ACTION } from "../../constants/actionTypes";


export const addStatusAction = (statusActionInfo) => async (dispatch) => {
    try {
        const { data } = await api.addStatusAction(statusActionInfo);
        dispatch({ type: ADD_STATUS_ACTION, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getStatusAction= () => async (dispatch) => {
    try {
      const { data } = await api.getStatusAction();
      dispatch({ type: GET_STATUS_ACTION, payload: data });
    } catch (error) {
      console.log(error);
    }
  };