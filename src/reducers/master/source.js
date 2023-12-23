import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  source: [],
  state: "idle",
  error: null,
  success:null
};

export const sourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SOURCE:
      return {
        ...state,
        source: action.payload.source,
      };
      case actionTypes.GET_SOURCE:
        return {
          ...state,
          source: action.payload,
        };
    //     case actionTypes.DELETE_ASSIGNMENT:
    //       const assignmentIdToDelete = action.payload;
    //       return {
    //         ...state,
    //         assignment: state.assignment.filter((assignment) =>  assignment.id !==  assignmentIdToDelete),
    //       };
      
  
    default:
      return state;
  }
};

export default sourceReducer;
