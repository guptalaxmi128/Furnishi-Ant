import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  snagAction: [],
  state: "idle",
  error: null,
  success: null,
};

export const snagActionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SNAG_ACTION:
      return {
        ...state,
        snagAction: action.payload.snagAction,
      };
    case actionTypes.GET_SNAG_ACTION:
      return {
        ...state,
        snagAction: action.payload,
      };

    default:
      return state;
  }
};

export default snagActionReducer;
