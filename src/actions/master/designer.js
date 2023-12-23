import * as api from "../../api";
import {ADD_DESIGNER,GET_DESIGNER } from "../../constants/actionTypes";


export const addDesigner = (designerInfo) => async (dispatch) => {
    try {
        const { data } = await api.addDesigner(designerInfo);
        dispatch({ type: ADD_DESIGNER, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getDesigner= () => async (dispatch) => {
    try {
      const { data } = await api.getDesigner();
      dispatch({ type: GET_DESIGNER, payload: data });
    } catch (error) {
      console.log(error);
    }
  };