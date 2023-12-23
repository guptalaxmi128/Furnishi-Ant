import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  location: [],
  state: "idle",
  error: null,
  success: null,
};

export const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_LOCATION:
      return {
        ...state,
        location: action.payload.location,
      };
    case actionTypes.GET_LOCATION:
      return {
        ...state,
        location: action.payload,
      };

    default:
      return state;
  }
};

export default locationReducer;
