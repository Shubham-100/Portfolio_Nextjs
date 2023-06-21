import React from 'react';
import Image from 'next/legacy/image';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {SiLeetcode, SiGmail} from 'react-icons/si';
import deved from "../../../public/dev-ed-wave.png";

const Intro = ({darkMode}) => {
    return (
        <div className="dark:text-white mx-auto md:shadow-2xl md:rounded-2xl md:max-w-xl">
              <div className="text-center p-5">
                <h2 className="text-6xl pt-14 text-teal-500 font-bold">Shubham</h2>
                <h3 className="text-lg py-2 md:text-xl">Open Source Developer</h3>
                <p className="text-md py-5 leading-8 md:text-md max-w-xl mx-auto">A Two time Google Summer of Code student, dynamic and skilled software developer with expertise in C++, Python, Javascipt, Java, React, Tailwind and Bootstrap framework. Passionate about open source software and actively engaged in the open source community. Regularly practices problem-solving skills through platforms like LeetCode. Looking for a full time Software Developer role, feel free to contact me.</p>
                <div className="text-3xl md:text-4xl flex justify-center gap-6 py-5 text-gray-800 dark:text-white">
                  <a href="https://www.linkedin.com/in/shubham-686615155/" target="_blank" className="hover:text-5xl hover:delay-150"><AiFillLinkedin/></a>
                  <a href="https://twitter.com/AryanJangid20" target="_blank" className="hover:text-5xl hover:delay-150"><AiFillTwitterCircle/></a>
                  <a href="mailto:aryan10jangid@gmail.com" className="hover:text-5xl hover:delay-150"><SiGmail/></a>
                  <a href="https://github.com/Shubham-100" target="_blank" className="hover:text-5xl hover:delay-150"><AiFillGithub/></a>
                  <a href="https://leetcode.com/aryan10jangid/" target="_blank" className="hover:text-5xl hover:delay-150"><SiLeetcode/></a>
                </div>
              </div>

              {
                darkMode ? <div>
                  <img alt="Night Coding" src="https://raw.githubusercontent.com/AVS1508/AVS1508/master/assets/Night-Coding.gif" className="mx-auto pb-5 w-80 h-64 md:w-96 md:h-64"/></div>
                  :
                  <div className="relative bg-gradient-to-b from-cyan-500 to-teal-500 rounded-full w-80 h-80 mx-auto overflow-hidden mt-0 md:w-96 md:h-96">
                    <Image src={deved} layout='fill'/>
                  </div>
              }
          </div>
    );
}

export default Intro;