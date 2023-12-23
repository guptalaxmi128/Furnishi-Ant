import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  cordinatorType: [],
  state: "idle",
  error: null,
  success:null
};

export const cordinatorTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CORDINATOR_TYPE:
      return {
        ...state,
        cordinatorType: action.payload.cordinatorType,
      };
      case actionTypes.GET_CORDINATOR_TYPE:
        return {
          ...state,
          cordinatorType: action.payload,
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

export default cordinatorTypeReducer;
