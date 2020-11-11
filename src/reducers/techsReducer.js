import {
   ADD_TECH,
   DELETE_TECH,
   GET_TECHS,
   TECHS_ERROR,
} from "../actions/types";

const initialState = {
   techs: null,
   loading: false,
   error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
   switch (action.type) {
      case GET_TECHS:
         return {
            ...state,
            techs: action.payload,
            loading: false,
         };
      case ADD_TECH:
         return {
            ...state,
            techs: [...state.techs, action.payload],
            loading: false,
         };
      case DELETE_TECH:
         return {
            ...state,
            techs: state.techs.map((tech) => tech.id !== action.payload.id),
            loading: false,
         };
      case TECHS_ERROR:
         return {
            ...state,
            error: action.payload,
            loading: false,
         };
      default:
         return {
            ...state,
         };
   }
};
