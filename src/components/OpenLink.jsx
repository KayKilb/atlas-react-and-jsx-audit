import React from 'react';
import openIcon from '../assets/open.svg'; // Adjust path as needed

const OpenLink = ({ link }) => {
    const handleClick = () => {
        window.open(link, '_blank');
    };

    return (
        <img
            src={openIcon}
            alt="Open Link"
            style={{ cursor: 'pointer' }}
            onClick={handleClick}
        />
    );
};

export default OpenLink;
