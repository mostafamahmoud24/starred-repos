import { combineReducers } from "redux";
import starredReposReducer from "./starredRepos/starredReposReducer";

const rootReducer = combineReducers({
  starredRepos: starredReposReducer,
});

export default rootReducer;
