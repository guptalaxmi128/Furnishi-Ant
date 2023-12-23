import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  carcass: [],
  state: "idle",
  error: null,
  success: null,
};

export const carcassReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CARCASS:
      return {
        ...state,
        carcass: action.payload.carcass,
      };
    case actionTypes.GET_CARCASS:
      return {
        ...state,
        carcass: action.payload,
      };

    default:
      return state;
  }
};

export default carcassReducer;
