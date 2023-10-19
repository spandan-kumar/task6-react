import React from "react";

const App = () => {
  const portfolioData = {
    name: "Spandan Kumar",
    reg: "21BCE0301",
    place: "Meerut , UP | India",
    skills: [
      "Proficient in Java & C++",
      "Novice in Web Development(Mern)",
      "Intermediate in Database(mySQL & MongoDB)",
    ],
    projects: [
      {
        title: "Spandan | Portfolio Website",
        description:
          "Explore my portfolio website, a dynamic showcase of my work powered by HTML, CSS, and JavaScript with the flexibility of Flexbox.",
      },
    ],
  };

  return (
    <div className="portfolio">
      <div className="frame">
        <div className="header">
          <h1>{portfolioData.name}</h1>
          <h2>
            <u>Registration no:</u> {portfolioData.reg}
          </h2>
          <h2>
            <u>Postal Location:</u> {portfolioData.place}
          </h2>
        </div>
        <div className="body">
          <div className="about">
            <h3>
              <u>Description about me:</u>
            </h3>
            <p>
              Hey! I am Spandan, 20 Years of age and currently pursuing my B.Tech
              Degree from VIT-Vellore in IT.
            </p>
          </div>
          <div className="skills">
            <h3>
              <u>Skills:</u>
            </h3>
            <ul>
              {portfolioData.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="projects">
            <h3>
              <u>Some Personal Projects: </u>
            </h3>
            {portfolioData.projects.map((project) => (
              <ul>
                <div className="project" key={project.title}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
