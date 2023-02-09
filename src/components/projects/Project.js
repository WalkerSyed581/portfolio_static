import React from "react";
import { useState, useEffect } from "react";
import Button from "../Button";
var base64 = require("base-64");

const Project = ({ project }) => {
  const [isActive, setActive] = useState(true);
  const { tags } = project;
  const handleToggle = (e) => {
    e.preventDefault();
    setActive(!isActive);
  };
  console.log(tags);
  let url_button;
  if (project.url != "") {
    url_button = (
      <a
        href={project.url}
        className="font-bold text-xl border-2 border-blue w-36 px-8 py-2 m-auto hover:bg-blue hover:text-white	 transition duration-150"
      >
        View
      </a>
    );
  }

  return (
    <div
      className={
        isActive
          ? project.logo + " bg-cover project transition duration-300"
          : "transition duration-300 bg-white  bg-cover project"
      }
      onMouseEnter={handleToggle}
      onMouseLeave={handleToggle}
    >
      <div
        className={
          isActive
            ? "invisible"
            : "pt-24 p-6 text-black flex flex-col justify-center content-center"
        }
        id="project-info"
      >
        <h2 className="text-blue font-black text-2xl">{project.name}</h2>
        {tags && (
          <p className="mb-12 text-red">
            {tags.map(function (tag, index) {
              return <span className="tag">{tag}</span>;
            })}
          </p>
        )}
        {url_button}
      </div>
    </div>
  );
};

export default Project;
