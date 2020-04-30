import React from 'react'
import CopyRight from "../../components/CopyRight";
import './style.css'

export default function About() {

  return (
    <>
      <div id="about" className={'mainContainer flow-text'}>
        <blockquote>
          <h2>
          Mission-driven full stack developer with a 
          passion for thoughtful UI design, 
          teamwork, and programming.
          </h2>
        </blockquote>
            <p>
                I've always sought out opportunities and challenges that are meaningful to me. 
                Although my professional path has taken many twists and turns - from Volunteering at a young age, to leaving everything behind after graduation at the age of 17 to live abroad and study in the United States for 5 years,
                to studying at Haifa Industrial Engineering, to eventually finding my true calling in programming -
                I've never stopped engaging my passion to help others and solve problems.
            </p>
            <p>
                As a Full Stack Developer, i enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world.
                That's why I'm excited to make a big impact at a high growth company.
            </p>
            <CopyRight/>
      </div>
    </>
  );
}

