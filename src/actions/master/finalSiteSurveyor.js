import * as api from "../../api";
import {ADD_FINAL_SITE_SURVEYOR,GET_FINAL_SITE_SURVEYOR } from "../../constants/actionTypes";


export const addFinalSiteSurveyor = (statusInfo) => async (dispatch) => {
    try {
        const { data } = await api.addFinalSiteSurveyor(statusInfo);
        dispatch({ type: ADD_FINAL_SITE_SURVEYOR, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getFinalSiteSurveyor= () => async (dispatch) => {
    try {
      const { data } = await api.getFinalSiteSurveyor();
      dispatch({ type: GET_FINAL_SITE_SURVEYOR, payload: data });
    } catch (error) {
      console.log(error);
    }
  };