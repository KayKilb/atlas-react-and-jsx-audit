import React from "react";
import Greeting from "./Greeting"; // Greeting.jsx
import SocialLinks from "./SocialLinks"; // SocialLinks.jsx

const Header = () => {
    return (
        <nav>
            <Greeting />
            <SocialLinks />
        </nav>
    );
};

export default Header;
