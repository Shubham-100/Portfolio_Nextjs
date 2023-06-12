import Image from 'next/legacy/image';
import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {SiLeetcode, SiGmail} from 'react-icons/si';
import deved from "../../public/dev-ed-wave.png";
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Shubham - Portfolio Website</title>
        <link rel="icon" href="./port.jpg"/>
      </Head>
      <main className="bg-white px-5 dark:bg-gray-800">
        <section className="min-h-screen w-full">
          <nav className="py-5 mb-0 flex justify-between fixed top-0 w-full z-50 bg-white dark:bg-gray-800">
            <h1 className="text-2xl font-burtons scroll-smooth dark:text-white"><a href="#">Developed by Shubham</a></h1>
            <ul className="flex items-center gap-2">
              <li className="cursor-pointer text-xl dark:text-white"><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)}/></li>
              <li><a href="https://drive.google.com/file/d/15TLi3-uss6GC1rAUBF5apNz0kvNS3jZ4/view" target="_blank" className="text-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 mr-8 py-2 rounded-md">Resume</a></li>
            </ul>
          </nav>

          <div className="dark:text-white">
              <div className="text-center p-5">
                <h2 className="text-6xl pt-14 text-teal-500 font-bold">Shubham</h2>
                <h3 className="text-xl py-2">Open Source Developer</h3>
                <p className="text-mg py-5 leading-8">Dynamic and skilled software developer with expertise in C++, Python, Java, React, Bootstrap, and the Qt framework. Passionate about open source contributions and actively engaged in the open source community. Regularly practices problem-solving skills through platforms like LeetCode. Looking for a full time Software Developer role, feel free to contact me.</p>
                <div className="text-5xl flex justify-center gap-8 py-5 text-gray-800 dark:text-white">
                  <a href="https://www.linkedin.com/in/shubham-686615155/" target="_blank" className="hover:text-6xl hover:delay-150"><AiFillLinkedin/></a>
                  <a href="https://twitter.com/AryanJangid20" target="_blank" className="hover:text-6xl hover:delay-150"><AiFillTwitterCircle/></a>
                  <a href="mailto:aryan10jangid@gmail.com" className="hover:text-6xl hover:delay-150"><SiGmail/></a>
                  <a href="https://github.com/Shubham-100" target="_blank" className="hover:text-6xl hover:delay-150"><AiFillGithub/></a>
                  <a href="https://leetcode.com/aryan10jangid/" target="_blank" className="hover:text-6xl hover:delay-150"><SiLeetcode/></a>
                </div>
              </div>
              <div className="relative bg-gradient-to-b from-cyan-500 to-teal-500 rounded-full w-80 h-80 mx-auto overflow-hidden mt-0">
                <Image src={deved} layout='fill'/>
              </div>
          </div>
        </section>

        <section>
          <div className="px-20 py-20 shadow-2xl rounded-xl">
            <h1 className="text-3xl text-center font-semibold text-teal-500 dark:text-white pb-10 justify-center">Skills and Technology</h1>
            <div className="flex flex-row flex-wrap gap-8">
              <img src="./c-.png" width="80" height="80"/>
              <img src="./ds.png" width="80" height="80"/>
              <img src="./javascript.png" width="80" height="80"/>
              <img src="./html-5.png" width="80" height="80"/>
              <img src="./react.png" width="80" height="80"/>
              <img src="./sql.png" width="80" height="80"/>
              <img src="./css.png" width="80" height="80"/>
              <img src="./bootstrap.png" width="80" height="80"/>
              <img src="./nodejs.png" width="80" height="80"/>
              <img src="./material-ui.png" width="80" height="80"/>
            </div>
          </div>
        </section>


        <section>
          <div className="px-20 py-20 shadow-2xl rounded-xl mt-0">
            <h1 className="text-4xl text-center text-teal-500  dark:text-white font-semibold py-5  justify-center">Projects</h1>
            <h3>YouTubeMate</h3>
        
            <div className="flex flex-col flex-wrap gap-8 text-black  dark:text-white">
              <img src="./tubemate.png" width="480" height="480"/>
              <ul className="flex flex-row items-center justify-center gap-4">
                <li><a href="https://youtubemate1.netlify.app/" target="_blank" className="text-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 mr-8 py-2 rounded-md">Visit Site</a></li>
                <li><a href="https://github.com/Shubham-100/YouTubeMate" target="_blank"><img src="./github.png" width="32" height="32"/></a></li>
              </ul>
              <p>Developed a Youtube like application using ReactJs and Material UI which is responsive in nature. User can stream videos from variety of content creators and genres. Interface is similar to Youtube.
Users can search for content of their preference based on genre</p>
            </div>
          </div>
        </section>
        <footer className="p-2  mx-14">
                <p className="dark:text-white  text-center p-2">Copyright© 2023 | Designed by Shubham</p>
        </footer>


      </main>
    </div>
  )
}
