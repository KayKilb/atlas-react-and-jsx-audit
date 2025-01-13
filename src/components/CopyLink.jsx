import React from 'react';
import copyIcon from '../assets/copy.svg'; // Adjust path as needed

const CopyLink = ({ link }) => {
    const handleClick = () => {
        navigator.clipboard.writeText(link);
    };

    return (
        <img
            src={copyIcon}
            alt="Copy Link"
            className="copy"
            style={{ cursor: 'pointer' }}
            onClick={handleClick}
        />
    );
};

export default CopyLink;
