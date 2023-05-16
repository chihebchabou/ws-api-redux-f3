import { IS_ERROR, IS_LOADING, IS_SUCCESS } from '../actions/types';

const initialState = {
  posts: null,
  isLoading: false,
  error: '',
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case IS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        error: '',
        isLoading: false,
      };
    case IS_ERROR:
      return {
        ...state,
        error: action.payload,
        posts: null,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default postReducer;
