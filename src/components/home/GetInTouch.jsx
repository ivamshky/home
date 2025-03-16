import React from "react";

const GetInTouch = ({ heading, linkedIn, email }) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        Email me @<a className="text-decoration-none" href={`mailto:${email}`}>{email}</a>.
      </p>
      <p className="lead text-center pb-3">
        Reach out to me on LinkedIn @<a className="text-decoration-none" href={"https://www.linkedin.com/in/"+`${linkedIn}`}>{linkedIn}</a>.
      </p>
    </>
  );
};

export default GetInTouch;
