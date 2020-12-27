import axios from "axios";
import {
  FETCH_REPO_REQUEST,
  FETCH_REPO_SECCESS,
  FETCH_REPO_FAILURE,
} from "./starredReposTypes";

//Defining the starredRepos Actions
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

//Call the github API using yesterdays date and the current page with a maximum output per page of 15
//Note: the github API allows for only 10 requests per minute if you're not authenticated
export const fetchRepos = (page) => {
  let date = new Date();
  date.setDate(date.getDate() - 1);
  const currentDate = date.toISOString().slice(0, 10);
  return (dispatch) => {
    dispatch(fetchRepoRequest());
    axios
      .get(
        `https://api.github.com/search/repositories?q=created:>${currentDate}&sort=stars&order=desc&page=${page}&per_page=15`
      )
      .then((res) => {
        const repos = res.data.items;
        dispatch(fetchRepoSucess(repos));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(fetchRepoFailure(errorMsg));
      });
  };
};
