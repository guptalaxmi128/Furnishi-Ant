import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  enquiry: [],
  state: "idle",
  error: null,
  success: null,
};

export const enquiryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ENQUIRY:
      return {
        ...state,
        enquiry: action.payload.enquiry,
      };
    case actionTypes.GET_ENQUIRY:
      return {
        ...state,
        enquiry: action.payload,
      };

    default:
      return state;
  }
};

export default enquiryReducer;
