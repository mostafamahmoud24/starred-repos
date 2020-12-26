import React from "react";

export default function StarredReposCard(props) {
  return (
    <div className="container bg-danger border rounded bg-light mx-auto mb-1">
      <div className="row">
        <div className="col-lg-2 col-md-3 col-xs-12">
          <img
            src={props.avatar}
            className="rounded-left img-fluid w-100 h-100"
            alt="avatar"
          />
        </div>
        <div className="col-lg-10 col-md-9 col-xs-12 pl-3">
          <div className=" h-25 w-100">
            <h2
              className="col-12"
              style={{ fontStyle: "italic", fontWeight: "600" }}
            >
              {props.name}
            </h2>
          </div>
          <div className="h-50">
            <div className="col-12 pt-3 text-wrap">{props.description}</div>
          </div>
          <div className="d-flex h-25 align-items-center pb-5 pt-3">
            <div className="d-flex col-6">
              <div className="mr-3 border rounded bg-primary text-white p-2">
                stars: {props.stars}
              </div>
              <div className="border rounded bg-primary text-white p-2">
                issues: {props.issues}
              </div>
            </div>
            <div className="col-6" style={{ color: "grey" }}>
              Submitted {props.days} days ago by {props.name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
