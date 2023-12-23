import * as api from "../../api";
import {ADD_SNAG_ACTION,GET_SNAG_ACTION } from "../../constants/actionTypes";


export const addSnagAction = (snagActionInfo) => async (dispatch) => {
    try {
        const { data } = await api.addSnagAction(snagActionInfo);
        dispatch({ type: ADD_SNAG_ACTION, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getSnagAction= () => async (dispatch) => {
    try {
      const { data } = await api.getSnagAction();
      dispatch({ type: GET_SNAG_ACTION, payload: data });
    } catch (error) {
      console.log(error);
    }
  };