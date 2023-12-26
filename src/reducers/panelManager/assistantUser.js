import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  assistantUser: [],
  state: "idle",
  error: null,
  success: null,
};

export const assistantUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ASSISTANT_USER:
      return {
        ...state,
        assistantUser: action.payload.assistantUser,
      };
    case actionTypes.GET_ASSISTANT_USER:
      return {
        ...state,
        assistantUser: action.payload,
      };

    default:
      return state;
  }
};

export default assistantUserReducer;
