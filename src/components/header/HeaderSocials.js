import React from 'react';
import './Header.css';
import {ImLinkedin} from 'react-icons/im';
import {FaDev} from 'react-icons/fa';
import {IoLogoGithub} from 'react-icons/io';

function HeaderSocials() {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/elijah-wandulu-3202141bb/" target="_blank" rel="noreferrer"> <ImLinkedin/> </a>
        <a href="https://github.com/Elijah-A-W" target="_blank" rel="noreferrer"> <IoLogoGithub/> </a>
        <a href="https://dev.to/elijahaw" target="_blank" rel="noreferrer"> <FaDev/> </a>
    </div>
  )
}

export default HeaderSocials
