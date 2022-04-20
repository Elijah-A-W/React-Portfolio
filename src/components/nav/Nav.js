import React from 'react';
import './Nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { FaBook } from 'react-icons/fa';
import { GrServicePlay } from 'react-icons/gr';
import { MdOutlineContactPhone } from 'react-icons/md';
import {useState} from 'react';


function Nav() {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <AiOutlineHome/> </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <BiUser/> </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <FaBook/> </a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}> <GrServicePlay/> </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <MdOutlineContactPhone/> </a>
    </nav>
  )
}

export default Nav
