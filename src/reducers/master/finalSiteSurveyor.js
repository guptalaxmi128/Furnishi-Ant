import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  finalSiteSurveyor: [],
  state: "idle",
  error: null,
  success: null,
};

export const  finalSiteSurveyorReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_FINAL_SITE_SURVEYOR:
      return {
        ...state,
        finalSiteSurveyor: action.payload.finalSiteSurveyor,
      };
    case actionTypes.GET_FINAL_SITE_SURVEYOR:
      return {
        ...state,
        finalSiteSurveyor: action.payload,
      };

    default:
      return state;
  }
};

export default  finalSiteSurveyorReducer;
