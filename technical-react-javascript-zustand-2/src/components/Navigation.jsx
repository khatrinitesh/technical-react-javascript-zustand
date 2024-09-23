import React from 'react'
import useStore from '../store'
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {

    const setCurrentPage = useStore((state) => state.setCurrentPage);
  
  return (
    <>
     <nav>
      <ul>
        <li>
          <NavLink  to="/" activeclassname="active" onClick={() => setCurrentPage('home')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink  to="/about" activeclassname="active" onClick={() => setCurrentPage('about')}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeclassname="active" onClick={() => setCurrentPage('contact')}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Navigation