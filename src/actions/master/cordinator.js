import * as api from "../../api";
import {ADD_CORDINATOR,GET_CORDINATOR, GET_CORDINATOR_BY_ID} from "../../constants/actionTypes";


export const addCordinator = (cordinator) => async (dispatch) => {
    try {
        const { data } = await api.addCordinator(cordinator);
        dispatch({ type: ADD_CORDINATOR, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getCordinator = () => async (dispatch) => {
    try {
      const { data } = await api.getCordinator();
      dispatch({ type: GET_CORDINATOR, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const getCordinatorById = (cordinatorTypeId) => async (dispatch) => {
    try {
      const { data } = await api.getCordinator(cordinatorTypeId);
      dispatch({ type: GET_CORDINATOR_BY_ID, payload: data });
    } catch (error) {
      console.log(error);
    }
  };