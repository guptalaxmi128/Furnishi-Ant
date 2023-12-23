import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  factory: [],
  state: "idle",
  error: null,
  success: null,
};

export const factoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_FACTORY:
      return {
        ...state,
        factory: action.payload.factory,
      };
    case actionTypes.GET_FACTORY:
      return {
        ...state,
        factory: action.payload,
      };

    default:
      return state;
  }
};

export default factoryReducer;
