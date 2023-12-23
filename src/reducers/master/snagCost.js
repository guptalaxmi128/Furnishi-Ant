import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  snagCost: [],
  state: "idle",
  error: null,
  success: null,
};

export const snagCostReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SNAG_COST:
      return {
        ...state,
        snagCost: action.payload.snagCost,
      };
    case actionTypes.GET_SNAG_COST:
      return {
        ...state,
        snagCost: action.payload,
      };

    default:
      return state;
  }
};

export default snagCostReducer;
