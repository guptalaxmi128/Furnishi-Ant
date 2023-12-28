import * as api from "../../api";
import {ADD_ENQUIRY,GET_ENQUIRY} from "../../constants/actionTypes";


export const addEnquiry = (enquiryInfo) => async (dispatch) => {
    try {
        const { data } = await api.addEnquiry(enquiryInfo);
        dispatch({ type: ADD_ENQUIRY, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getEnquiry= () => async (dispatch) => {
    try {
      const { data } = await api.getEnquiry();
      dispatch({ type: GET_ENQUIRY, payload: data });
    } catch (error) {
      console.log(error);
    }
  };