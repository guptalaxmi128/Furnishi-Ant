import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  snagSolution: [],
  state: "idle",
  error: null,
  success: null,
};

export const snagSolutionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SNAG_SOLUTION:
      return {
        ...state,
        snagSolution: action.payload.snagSolution,
      };
    case actionTypes.GET_SNAG_SOLUTION:
      return {
        ...state,
        snagSolution: action.payload,
      };

    default:
      return state;
  }
};

export default snagSolutionReducer;
