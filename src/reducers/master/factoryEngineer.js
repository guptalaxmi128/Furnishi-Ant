import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  factoryEngineer: [],
  state: "idle",
  error: null,
  success: null,
};

export const factoryEngineerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_FACTORY_ENGINEER:
      return {
        ...state,
        factoryEngineer: action.payload.factoryEngineer,
      };
    case actionTypes.GET_FACTORY_ENGINEER:
      return {
        ...state,
        factoryEngineer: action.payload,
      };

    default:
      return state;
  }
};

export default factoryEngineerReducer;
