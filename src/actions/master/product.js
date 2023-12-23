import * as api from "../../api";
import {ADD_PRODUCT,GET_PRODUCT } from "../../constants/actionTypes";


export const addProduct = (productInfo) => async (dispatch) => {
    try {
        const { data } = await api.addProduct(productInfo);
        dispatch({ type: ADD_PRODUCT, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getProduct = () => async (dispatch) => {
    try {
      const { data } = await api.getProduct();
      dispatch({ type: GET_PRODUCT, payload: data });
    } catch (error) {
      console.log(error);
    }
  };