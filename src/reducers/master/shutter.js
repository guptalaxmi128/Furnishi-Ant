import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  shutter: [],
  state: "idle",
  error: null,
  success: null,
};

export const shutterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SHUTTER:
      return {
        ...state,
        shutter: action.payload.shutter,
      };
    case actionTypes.GET_SHUTTER:
      return {
        ...state,
        shutter: action.payload,
      };

    default:
      return state;
  }
};

export default shutterReducer;
