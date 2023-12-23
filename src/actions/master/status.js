import * as api from "../../api";
import {ADD_STATUS,GET_STATUS } from "../../constants/actionTypes";


export const addStatus = (statusInfo) => async (dispatch) => {
    try {
        const { data } = await api.addStatus(statusInfo);
        dispatch({ type: ADD_STATUS, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getStatus= () => async (dispatch) => {
    try {
      const { data } = await api.getStatus();
      dispatch({ type: GET_STATUS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };