import React from "react";
import Project from "./Project";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "Ride-Sharing App",
      description:
        "Ride Sharing App developed in the MERN Stack, primarily using Express.js for the backend part and then EJS for the templating engine.",
      logo: "ride-app-image",
      url: "https://alpine-ltd.herokuapp.com/",
      tags: ["Express.js", "Node", "Sequelize"],
    },
    {
      id: 2,
      name: "Online Store",
      description:
        "Completed a Udemy course on MERN stack and after it, managed to recreate an app mimicking the same functionalities from scratch and through some help at times.",
      logo: "mern-store-image",
      url: "https://github.com/WalkerSyed581/mern_proshop",
      tags: ["React", "Redux", "Express.js", "Mongoose"],
    },
    {
      id: 4,
      name: "Remote Virtual Filesystem",
      description:
        "This project involved usage of core Operating System concepts like Multi-threading, Thread Protection, Socket Programming and Readers-Writers Protection.",
      logo: "filesystem-image",
      url: "",
      tags: ["C++", "Multi-threading", "Socket Programming"],
    },
    {
      id: 3,
      name: "Remote Healthcare Monitoring App",
      description:
        "This was my Final Year Project for the degree and was developed in Flutter with the API in Spring Boot for integration with Flutter App. The App is deployed cross-platform",
      logo: "fyp-image",
      url: "",
      tags: ["Spring Boot", "Flutter", "RaspberryPi"],
    },
    {
      id: 5,
      name: "Healthcare Management System",
      description:
        "Developed in Laravel and in Django for exploration purposes with features for Appointments, Support Groups, Medicines and Tests with thorough support for integration.",
      logo: "hms-image",
      url: "",
      tags: ["Laravel", "Django"],
    },
    {
      id: 6,
      name: "Archive Search Engine",
      description:
        "A project with Django and Boostrap. The Django back-end had thorough implementation of search engine concepts like Forward and Backward Index as well as a basic PageRank implementation.",
      logo: "search-image",
      url: "",
      tags: ["Django", "Bootstrap", "Search Engine"],
    },
  ];
  return (
    <div className=" bg-project bg-cover bg-fixed" id="projects">
      <div className="pt-16 pb-32 text-white">
        <h1>Projects</h1>
      </div>
      <div className="grid grid-cols-3 gap-3 projects p-12 text-white">
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
