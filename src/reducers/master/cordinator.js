import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  cordinator: [],
  state: "idle",
  error: null,
  success:null
};

export const cordinatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CORDINATOR:
      return {
        ...state,
        cordinator: action.payload.cordinator,
      };
      case actionTypes.GET_CORDINATOR:
        return {
          ...state,
          cordinator: action.payload,
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

export default cordinatorReducer;
