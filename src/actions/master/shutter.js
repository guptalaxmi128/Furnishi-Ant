import * as api from "../../api";
import {ADD_SHUTTER, GET_SHUTTER} from "../../constants/actionTypes";


export const addShutter = (shutterInfo) => async (dispatch) => {
    try {
        const { data } = await api.addShutter(shutterInfo);
        dispatch({ type: ADD_SHUTTER, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getShutter= () => async (dispatch) => {
    try {
      const { data } = await api.getShutter();
      dispatch({ type: GET_SHUTTER, payload: data });
    } catch (error) {
      console.log(error);
    }
  };