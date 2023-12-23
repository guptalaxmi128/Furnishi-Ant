import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  designer: [],
  state: "idle",
  error: null,
  success: null,
};

export const designerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_DESIGNER:
      return {
        ...state,
        designer: action.payload.designer,
      };
    case actionTypes.GET_DESIGNER:
      return {
        ...state,
        designer: action.payload,
      };

    default:
      return state;
  }
};

export default designerReducer;
