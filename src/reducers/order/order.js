import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  order: [],
  state: "idle",
  error: null,
  success: null,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ORDER:
      return {
        ...state,
        order: action.payload.order,
      };
    case actionTypes.GET_ORDER:
      return {
        ...state,
        order: action.payload,
      };

    default:
      return state;
  }
};

export default orderReducer;
