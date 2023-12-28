import * as api from "../../api";
import {GET_ORDER_COUNT,GET_ENQUIRY_COUNT} from "../../constants/actionTypes";




export const getOrderCount= (orderStatus) => async (dispatch) => {
    try {
      const { data } = await api.getOrderCount(orderStatus);
      dispatch({ type: GET_ORDER_COUNT, payload: data });
    } catch (error) {
      console.log(error);
    }
  };


  export const getEnquiryCount= (orderStatus) => async (dispatch) => {
    try {
      const { data } = await api.getEnquiryCount(orderStatus);
      dispatch({ type: GET_ENQUIRY_COUNT, payload: data });
    } catch (error) {
      console.log(error);
    }
  };