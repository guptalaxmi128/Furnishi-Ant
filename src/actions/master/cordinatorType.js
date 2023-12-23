import * as api from "../../api";
import {ADD_CORDINATOR_TYPE,GET_CORDINATOR_TYPE} from "../../constants/actionTypes";


export const addCordinatorType = (cordinatorType) => async (dispatch) => {
    try {
        const { data } = await api.addCordinatorType(cordinatorType);
        dispatch({ type: ADD_CORDINATOR_TYPE, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getCordinatorType = () => async (dispatch) => {
    try {
      const { data } = await api.getCordinatorType();
      dispatch({ type: GET_CORDINATOR_TYPE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };