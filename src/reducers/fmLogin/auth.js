import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

// const authReducer = (state = initialState, action) => {
//   switch (action.type) {

//     case actionTypes.UPDATE_FACTORY_MANAGER_LOGIN:
//       return {
//         ...state,
//         user: action.payload,
//         loading: false,
//         error: null,
//       };

//     // case LOGOUT:
//     //   return {
//     //     ...state,
//     //     user: null,
//     //     loading: false,
//     //     error: null,
//     //   };
//     default:
//       return state;
//   }
// };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.LOGIN:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };
      case actionTypes.VERIFY_OTP:
        return {
          ...state,
          user: action.payload,
          loading: false,
          error: null,
        };

    default:
      return state;
  }
};

export default authReducer;
