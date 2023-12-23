import * as api from "../../api";
import {ADD_CARCASS, GET_CARCASS} from "../../constants/actionTypes";


export const addCarcass = (carcassInfo) => async (dispatch) => {
    try {
        const { data } = await api.addCarcass(carcassInfo);
        dispatch({ type: ADD_CARCASS, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getCarcass= () => async (dispatch) => {
    try {
      const { data } = await api.getCarcass();
      dispatch({ type: GET_CARCASS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };