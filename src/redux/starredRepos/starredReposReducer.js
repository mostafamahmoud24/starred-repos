import {
  FETCH_REPO_REQUEST,
  FETCH_REPO_SECCESS,
  FETCH_REPO_FAILURE,
} from "./starredReposTypes";

const initialState = {
  isLoading: true,
  repos: "",
  error: "",
};

const starredReposReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_REPO_SECCESS:
      return {
        ...state,
        isLoading: false,
        repos: action.payload,
        error: "",
      };

    case FETCH_REPO_FAILURE:
      return {
        ...state,
        isLoading: false,
        repos: [...state.repos],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default starredReposReducer;
