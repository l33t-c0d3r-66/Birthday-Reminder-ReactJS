import React from 'react';

import bgLogo from '../../assets/images/logo.png';

import cssClasses from './Logo.module.css';

const logo = (props) => {
    return (
        <div className={cssClasses.Logo}>
            <img src={bgLogo} className={cssClasses.logoImage} alt="Birhday Reminder" />
            <h1 className={cssClasses.logoText}>Birthday Reminder</h1>
        </div>
    );
}

export default logo;