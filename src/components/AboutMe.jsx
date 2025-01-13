import React from 'react';
import profilePicture from '../assets/KayleneKilbourn.jpg';

const AboutMe = () => {
    return (
        <div className="about-me">
            <img
                src={profilePicture}
                alt="Kaylene Kilbourn"
                style={{ width: '200px', height: '200px', borderRadius: '15px', objectFit: 'cover' }}
            />
            <p>
                Hi, I'm Kaylene Kilbourn. I'm specializing in Full Stack Web Development and currently in my 5th and final trimester. I love working with React, Python, and HTML. After school, I plan to work in an industry that fulfills both my creative and logical sides. Outside of work and school, I enjoy reading, photography, and Pokémon GO.
            </p>
        </div>
    );
};

export default AboutMe;
