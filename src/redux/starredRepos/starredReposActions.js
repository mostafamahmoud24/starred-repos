import axios from "axios";
import {
  FETCH_REPO_REQUEST,
  FETCH_REPO_SECCESS,
  FETCH_REPO_FAILURE,
} from "./starredReposReducer";

export const fetchRepoRequest = () => {
  return {
    type: FETCH_REPO_REQUEST,
  };
};

export const fetchRepoSucess = (repos) => {
  return {
    type: FETCH_REPO_SECCESS,
    payload: repos,
  };
};

export const fetchRepoFailure = (error) => {
  return {
    type: FETCH_REPO_FAILURE,
    payload: error,
  };
};

export const fetchRepos = (page) => {
  const currentDate = new Date().toISOString().slice(0, 10);
  return (dispatch) => {
    dispatch(fetchRepoRequest);
    axios
      .get(
        `https://api.github.com/search/repositories?q=created:>${currentDate}&sort=stars&order=desc&page=${page}`
      )
      .then((res) => {
        const repos = res.data;
        dispatch(fetchRepoSucess(repos));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(fetchRepoFailure(errorMsg));
      });
  };
};
