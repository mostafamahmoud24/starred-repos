import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StarredReposCard from "./StarredReposCard";
import { fetchRepos } from "../redux/starredRepos/starredReposActions";

export default function ReposContainer() {
  const { repos, isLoading, page } = useSelector((state) => state.starredRepos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRepos(page));
    console.log(repos);
  }, []);

  return (
    <div>
      <h1
        className="text-center mt-2 mb-5"
        style={{ fontStyle: "italic", fontWeight: "700" }}
      >
        Top starred repos as of this month
      </h1>
      {isLoading && <div className="text-center">Loading</div>}
      {isLoading == false &&
        repos.map((repo) => (
          <StarredReposCard
            key={repo.id}
            avatar={repo.owner.avatar_url}
            name={repo.name}
            description={repo.description}
            issues={repo.open_issues_count}
            stars={repo.stargazers_count}
          />
        ))}
    </div>
  );
}
