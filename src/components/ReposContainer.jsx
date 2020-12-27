import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StarredReposCard from "./StarredReposCard";
import { fetchRepos } from "../redux/starredRepos/starredReposActions";
import Loading from "./Loading";

export default function ReposContainer() {
  //getting the starredRepos state from redux
  const { repos, isLoading, page, error } = useSelector(
    (state) => state.starredRepos
  );

  // The handleScroll function is trigerred on scroll and calls the github API when calculating that you have reached the end of the page
  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight && !isLoading) {
      dispatch(fetchRepos(page + 1));
    }
  };

  //calling page 1 of the github API
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRepos(page));
  }, []);

  return (
    <div onScroll={handleScroll} style={{ height: "100vh", overflow: "auto" }}>
      <h1
        className="text-center mt-2 mb-5"
        style={{ fontStyle: "italic", fontWeight: "700" }}
      >
        Top starred repos as of this month
      </h1>
      {error && (
        <h2 className="text-center text-danger">
          Oops...{" "}
          {error == "Request failed with status code 403"
            ? "Maximum calls per minute reached, please try again later"
            : error}
        </h2>
      )}
      {repos !== [] &&
        !error &&
        repos.map((repo, index) => (
          <StarredReposCard
            key={index}
            avatar={repo.owner.avatar_url}
            name={repo.name}
            created_at={repo.created_at}
            owner_name={repo.owner.login}
            description={repo.description}
            issues={repo.open_issues_count}
            stars={repo.stargazers_count}
          />
        ))}
      {isLoading && (
        <div className="mt-4">
          <Loading size="100px" />
        </div>
      )}
    </div>
  );
}
