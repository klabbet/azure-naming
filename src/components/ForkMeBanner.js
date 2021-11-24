import React from "react";
import forkMeOnGithub from "../assets/images/fork-me.png";

function ForkMeBanner() {
  return (
    <a
      className="position-absolute d-block w-25 top-0"
      href="https://github.com/klabbet/azure-naming"
      title="Azure Resource Naming repository on Github"
      style={{ zIndex: 10, right: "0", maxWidth: "250px" }}
    >
      <img className="w-100" src={forkMeOnGithub} alt="Fork me on Github" />
    </a>
  );
}

export default ForkMeBanner;
