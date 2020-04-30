import React from "react";
import NavBar from "../NavBar";
import ProgressLine from "../ProgressLine";
import "./style.css";

const SKILLS_LIST = [
  {
    label: "HTML5/CSS3 - 90%",
    percentage: "90%",
  },
  {
    label: "ES6 - 85%",
    percentage: "85%",
  },
  {
    label: "React - 85%",
    percentage: "85%",
  },
  {
    label: "NodeJS/ExpressJS - 80%",
    percentage: "80%",
  },
  {
    label: "MongoDB - 80%",
    percentage: "80%",
  },
  {
    label: "PostgresSQL - 80%",
    percentage: "80%",
  },
  {
    label: "Material-Ui - 80%",
    percentage: "80%",
  },
  {
    label: "Bootstrap- 80%",
    percentage: "80%",
  },
  {
    label: "GitHub - 90%",
    percentage: "90%",
  },
  {
    label: "Heroku - 70%",
    percentage: "70%",
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
