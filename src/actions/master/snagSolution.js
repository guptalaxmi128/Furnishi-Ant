import * as api from "../../api";
import {ADD_SNAG_SOLUTION,GET_SNAG_SOLUTION } from "../../constants/actionTypes";


export const addSnagSolution = (snagSolutionInfo) => async (dispatch) => {
    try {
        const { data } = await api.addSnagSolution(snagSolutionInfo);
        dispatch({ type: ADD_SNAG_SOLUTION, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getSnagSolution= () => async (dispatch) => {
    try {
      const { data } = await api.getSnagSolution();
      dispatch({ type: GET_SNAG_SOLUTION, payload: data });
    } catch (error) {
      console.log(error);
    }
  };