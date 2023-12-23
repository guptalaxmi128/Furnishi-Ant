import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  snagIssue: [],
  state: "idle",
  error: null,
  success: null,
};

export const snagIssueReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SNAG_ISSUE:
      return {
        ...state,
        snagIssue: action.payload.snagIssue,
      };
    case actionTypes.GET_SNAG_ISSUE:
      return {
        ...state,
        snagIssue: action.payload,
      };

    default:
      return state;
  }
};

export default snagIssueReducer;
