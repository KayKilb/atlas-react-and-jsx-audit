import React from 'react';
import linkedinIcon from '/src/assets/linkedin.svg';  // Importing LinkedIn icon
import githubIcon from '/src/assets/github.svg';      // Importing GitHub icon

const SocialLinks = () => {
    return (
        <div className="social-links">
            <a href="https://www.linkedin.com/in/kaylenekilbourn/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://github.com/KayKilb/atlas-react-and-jsx" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" />
            </a>
        </div>
    );
};

export default SocialLinks;