import * as api from "../../api";
import {ADD_ORDER,GET_ORDER} from "../../constants/actionTypes";


export const addOrder = (formData) => async (dispatch) => {
    try {
        const { data } = await api.addOrder(formData);
        dispatch({ type: ADD_ORDER, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getOrder= (orderStatus) => async (dispatch) => {
    try {
      const { data } = await api.getOrder(orderStatus);
      dispatch({ type: GET_ORDER, payload: data });
    } catch (error) {
      console.log(error);
    }
  };