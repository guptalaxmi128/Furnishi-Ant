import * as api from "../../api";
import {ADD_SNAG_ISSUE,GET_SNAG_ISSUE } from "../../constants/actionTypes";


export const addSnagIssue = (snagIssueInfo) => async (dispatch) => {
    try {
        const { data } = await api.addSnagIssue(snagIssueInfo);
        dispatch({ type: ADD_SNAG_ISSUE, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getSnagIssue= () => async (dispatch) => {
    try {
      const { data } = await api.getSnagIssue();
      dispatch({ type: GET_SNAG_ISSUE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };