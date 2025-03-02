import React from 'react';
import { topnavData } from '../constants/topnavData';
import { NavLink } from 'react-router-dom';

const Header:React.FC = () => {
  return (
    <header className='header bg-black py-[20px]'>
      <div className="container mx-auto">
        <ul className='flex gap-[10px]'>
            {topnavData.map((val,index) => (
                <li>
                    <NavLink to={val.pathname} className={({ isActive }) => isActive ? "bg-red-500 font-bold text-white block p-[5px]" : "font-bold text-white block p-[5px]"}>
                        {val.title}
                    </NavLink>
                </li>
            ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
