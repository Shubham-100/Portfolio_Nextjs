import React from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';

const Navbar = ({darkMode, setDarkMode}) => {
    return (
        <nav className="py-2 mb-0 flex justify-between fixed top-0 w-full z-50 bg-white  dark:bg-gradient-to-r from-[#404040] to-[#181818]">
            <h1 className=" text-2xl font-burtons scroll-smooth dark:text-white"><a href="#">Developed by Shubham</a></h1>
            <ul className="flex items-center mt-0 gap-2 md:gap-6">
              <li className="cursor-pointer text-xl dark:text-white"><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)}/></li>
              <li><a href="https://drive.google.com/file/d/1qU3Nw285S56FDHEE1UC3pyW8iKsqcLzR/view?usp=sharing" target="_blank" className="text-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 mr-8 py-2 rounded-md">Resume</a></li>
            </ul>
          </nav>
    );
}

export default Navbar;