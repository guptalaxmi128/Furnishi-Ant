import * as api from "../../api";
import {ADD_ASSISTANT_USER, GET_ASSISTANT_USER} from "../../constants/actionTypes";


export const addAssistantUser = (carcassInfo) => async (dispatch) => {
    try {
        const { data } = await api.addAssistantUser(carcassInfo);
        dispatch({ type: ADD_ASSISTANT_USER, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getAssistantUser= () => async (dispatch) => {
    try {
      const { data } = await api.getAssistantUser();
      dispatch({ type: GET_ASSISTANT_USER, payload: data });
    } catch (error) {
      console.log(error);
    }
  };