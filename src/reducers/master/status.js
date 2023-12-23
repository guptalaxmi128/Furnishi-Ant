import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  status: [],
  state: "idle",
  error: null,
  success: null,
};

export const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_STATUS:
      return {
        ...state,
        status: action.payload.status,
      };
    case actionTypes.GET_STATUS:
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};

export default statusReducer;
