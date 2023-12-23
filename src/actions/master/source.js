import * as api from "../../api";
import {ADD_SOURCE,GET_SOURCE } from "../../constants/actionTypes";


export const addSource = (sourceInfo) => async (dispatch) => {
    try {
        const { data } = await api.addSource(sourceInfo);
        dispatch({ type: ADD_SOURCE, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getSource = () => async (dispatch) => {
    try {
      const { data } = await api.getSource();
      dispatch({ type: GET_SOURCE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };