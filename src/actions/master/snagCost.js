import * as api from "../../api";
import {ADD_SNAG_COST,GET_SNAG_COST } from "../../constants/actionTypes";


export const addSnagCost = (snagCostInfo) => async (dispatch) => {
    try {
        const { data } = await api.addSnagCost(snagCostInfo);
        dispatch({ type: ADD_SNAG_COST, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getSnagCost= () => async (dispatch) => {
    try {
      const { data } = await api.getSnagCost();
      dispatch({ type: GET_SNAG_COST, payload: data });
    } catch (error) {
      console.log(error);
    }
  };