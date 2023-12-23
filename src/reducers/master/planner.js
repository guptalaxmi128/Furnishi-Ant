import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  planner: [],
  state: "idle",
  error: null,
  success: null,
};

export const plannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PLANNER:
      return {
        ...state,
        planner: action.payload.planner,
      };
    case actionTypes.GET_PLANNER:
      return {
        ...state,
        planner: action.payload,
      };

    default:
      return state;
  }
};

export default plannerReducer;
