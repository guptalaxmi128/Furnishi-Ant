import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  orderCount: [],
  enquiryCount:[],
  state: "idle",
  error: null,
  success:null
};

export const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
  
      case actionTypes.GET_ORDER_COUNT:
        return {
          ...state,
          orderCount: action.payload,
        };
        case actionTypes.GET_ENQUIRY_COUNT:
          return {
            ...state,
            enquiryCount: action.payload,
          };
    
  
    default:
      return state;
  }
};

export default dashboardReducer;
