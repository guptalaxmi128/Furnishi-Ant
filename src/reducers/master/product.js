import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  product: [],
  state: "idle",
  error: null,
  success:null
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      return {
        ...state,
        product: action.payload.product,
      };
      case actionTypes.GET_PRODUCT:
        return {
          ...state,
          product: action.payload,
        };
   
  
    default:
      return state;
  }
};

export default productReducer;
