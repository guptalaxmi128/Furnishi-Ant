import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  salesPerson: [],
  state: "idle",
  error: null,
  success: null,
};

export const salesPersonReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SALES_PERSON:
      return {
        ...state,
        salesPerson: action.payload.salesPerson,
      };
    case actionTypes.GET_SALES_PERSON:
      return {
        ...state,
        salesPerson: action.payload,
      };

    default:
      return state;
  }
};

export default salesPersonReducer;
