import * as api from "../../api";
import {ADD_PLANNER,GET_PLANNER } from "../../constants/actionTypes";


export const addPlanner = (plannerInfo) => async (dispatch) => {
    try {
        const { data } = await api.addPlanner(plannerInfo);
        dispatch({ type: ADD_PLANNER, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getPlanner= () => async (dispatch) => {
    try {
      const { data } = await api.getPlanner();
      dispatch({ type: GET_PLANNER, payload: data });
    } catch (error) {
      console.log(error);
    }
  };