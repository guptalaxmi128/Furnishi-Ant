import * as api from "../../api";
import {ADD_FACTORY_ENGINEER, GET_FACTORY_ENGINEER} from "../../constants/actionTypes";


export const addFactoryEngineer = (factoryEngineerInfo) => async (dispatch) => {
    try {
        const { data } = await api.addFactoryEngineer(factoryEngineerInfo);
        dispatch({ type: ADD_FACTORY_ENGINEER, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getFactoryEngineer= () => async (dispatch) => {
    try {
      const { data } = await api.getFactoryEngineer();
      dispatch({ type: GET_FACTORY_ENGINEER, payload: data });
    } catch (error) {
      console.log(error);
    }
  };