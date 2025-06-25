import React from 'react';

const NavButton = ({ title, icon, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="nav-button">
            <button type="button" data-title={title}>
                {icon}
            </button>
        </a>
    );
};

export default NavButton; 