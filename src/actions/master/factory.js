import * as api from "../../api";
import {ADD_FACTORY,GET_FACTORY } from "../../constants/actionTypes";


export const addFactory = (factoryInfo) => async (dispatch) => {
    try {
        const { data } = await api.addFactory(factoryInfo);
        dispatch({ type: ADD_FACTORY, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getFactory = () => async (dispatch) => {
    try {
      const { data } = await api.getFactory();
      dispatch({ type: GET_FACTORY, payload: data });
    } catch (error) {
      console.log(error);
    }
  };