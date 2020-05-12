import React from "react";
import NavBar from "../NavBar";
import ProgressLine from "../ProgressLine";
import "./style.css";

const SKILLS_LIST = [
  {
    label: "HTML5/CSS3",
    percentage: "100%",
  },
  {
    label: "JavaScript(ES6)",
    percentage: "90%",
  },
  {
    label: "React",
    percentage: "90%",
  },
  {
    label: "NodeJS/ExpressJS",
    percentage: "90%",
  },
  {
    label: "MongoDB",
    percentage: "80%",
  },
  {
    label: "PostgresSQL",
    percentage: "80%",
  },
  {
    label: "Material-Ui",
    percentage: "90%",
  },
  {
    label: "Bootstrap",
    percentage: "90%",
  },
  {
    label: "GitHub",
    percentage: "100%",
  },
  {
    label: "Heroku",
    percentage: "100%",
  },
];

export default function Skills() {
  return (
    <>
    <NavBar/>
    <div>
      <section className="container">
        <p>Skills</p>
        <div className="row">
        </div>
        <div className="row">
          <div>
            {SKILLS_LIST.map((
              skill,
              index 
            ) => (
              <ProgressLine
                key={index}
                barHeight="15"
                barBg="wheat"
                progressBg="tomato"
                label={skill.label}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
