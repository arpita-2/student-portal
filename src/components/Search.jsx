import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHippo } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search Here" />
      <faHippo className="search-icon" />
    </div>
  );
}
