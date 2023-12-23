import * as api from "../../api";
import {ADD_LOCATION,GET_LOCATION } from "../../constants/actionTypes";


export const addLocation = (locationInfo) => async (dispatch) => {
    try {
        const { data } = await api.addLocation(locationInfo);
        dispatch({ type: ADD_LOCATION, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getLocation= () => async (dispatch) => {
    try {
      const { data } = await api.getLocation();
      dispatch({ type: GET_LOCATION, payload: data });
    } catch (error) {
      console.log(error);
    }
  };