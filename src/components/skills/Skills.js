import React from "react";
import Skill from "./Skill";

const Skills = () => {
  const skills = [
    {
      id: 1,
      name: "Full-Stack Development",
      level: "EXP",
      description:
        "I have a diverse reportoire of technologies in which I have done Web Development. These technologies and framework cover all the bases of switching to others and the current paradigms in use. I have developed Full-Stack projects in MERN, Django, Laravel, Flutter and Spring Boot. All of these require thorough knowledge of the base language.",
      logo: "logos/database-storage.png",
    },
    {
      id: 2,
      name: "Data Engineering",
      level: "INT",
      description:
        "Having worked as a Research Intern at one of the most prestigious R&D Lab for Artifical Intelligence in Pakistan, it is safe to say that my level of expertise is really good. Over this internship, I honed my skills and worked on a project for Slum Segmentation in Islamabad.",
      logo: "logos/deep-learning.png",
    },
    {
      id: 3,
      name: "Mobile App Development",
      level: "BEG",
      description:
        "The main technology I have worked on is Flutter as it is the emerging one right now. I have taken an entire course on this and know all the ins and outs as well as developing a full-fledged app for my Final Year Project.",
      logo: "logos/algorithm.png",
    },
  ];
  return (
    <div
      className='bg-[url("/public/techs.jpg")] bg-fixed bg-cover'
      id="skills"
    >
      <div className="pt-16 pb-32 text-blue">
        <h1>Skills</h1>
      </div>
      {skills.map((skill) => (
        <Skill skill={skill} />
      ))}
    </div>
  );
};

export default Skills;
