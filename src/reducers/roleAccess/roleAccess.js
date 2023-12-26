import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  roleAccess: [],
  state: "idle",
  error: null,
  success: null,
};

export const roleAccessReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ROLE_ACCESS:
      return {
        ...state,
        roleAccess: action.payload.roleAccess,
      };
    case actionTypes.GET_ROLE_ACCESS:
      return {
        ...state,
        roleAccess: action.payload,
      };

    default:
      return state;
  }
};

export default roleAccessReducer;
