import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  statusAction: [],
  state: "idle",
  error: null,
  success: null,
};

export const statusActionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_STATUS_ACTION:
      return {
        ...state,
        statusAction: action.payload.statusAction,
      };
    case actionTypes.GET_STATUS_ACTION:
      return {
        ...state,
        statusAction: action.payload,
      };

    default:
      return state;
  }
};

export default statusActionReducer;
