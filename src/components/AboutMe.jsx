import React from "react";
import profilePicture from "../assets/KayleneKilbourn.jpg";

const AboutMe = () => {
  return (
    <div className="about-me">
      <img
        src={profilePicture}
        alt="Kaylene Kilbourn"
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "15px",
          objectFit: "cover",
        }}
      />
      <p>
        Hi, I'm Kaylene Kilbourn. I'm specializing in Full Stack Web Development
        and will be graduating in April 2025. I have a strong passion for
        working with React, Python, and HTML, and I'm excited to apply these
        skills in real-world projects.
        <br />
        <br />
        After graduation, I plan to step into a role as a Full Stack Developer
        at a company that values creative front-end development as much as
        robust back-end solutions. For example, I am drawn to organizations that
        develop educational websites for children—similar to platforms like Khan
        Academy—or art-focused apps that showcase and organize collections,
        reminiscent of Artlogic. This type of role perfectly aligns with my
        desire to work on projects where my creative front-end passions can
        flourish, while also solving complex problems using logical, back-end
        development.
        <br />
        <br />
        Beyond my academic and professional pursuits, I enjoy reading,
        photography, and playing Pokémon GO. Additionally, I love building LEGO
        sets with my girlfriend and teenage son, which not only fuels my
        creativity but also strengthens our bond and teamwork.
      </p>
    </div>
  );
};

export default AboutMe;
