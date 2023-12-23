import * as api from "../../api";
import {ADD_SALES_PERSON,GET_SALES_PERSON } from "../../constants/actionTypes";


export const addSalesPerson = (salesPersonInfo) => async (dispatch) => {
    try {
        const { data } = await api.addSalesPerson(salesPersonInfo);
        dispatch({ type: ADD_SALES_PERSON, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getSalesPerson= () => async (dispatch) => {
    try {
      const { data } = await api.getSalesPerson();
      dispatch({ type: GET_SALES_PERSON, payload: data });
    } catch (error) {
      console.log(error);
    }
  };