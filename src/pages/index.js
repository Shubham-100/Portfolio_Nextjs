import Image from 'next/legacy/image';
import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {SiLeetcode, SiGmail} from 'react-icons/si';
import deved from "../../public/dev-ed-wave.png";
import { useState } from 'react';

{/* <img alt="Night Coding" src="https://raw.githubusercontent.com/AVS1508/AVS1508/master/assets/Night-Coding.gif"/> */}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Shubham - Portfolio Website</title>
        <link rel="icon" href="./favicon.ico"/>
      </Head>
      <main className="bg-white px-5  dark:bg-gray-800">
        <section className="min-h-screen w-full">
          <nav className="py-2 mb-0 flex justify-between fixed top-0 w-full z-50 bg-white  dark:bg-gray-800">
            <h1 className=" text-2xl font-burtons scroll-smooth dark:text-white"><a href="#">Developed by Shubham</a></h1>
            <ul className="flex items-center mt-0 gap-2 md:gap-6">
              <li className="cursor-pointer text-xl dark:text-white"><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)}/></li>
              <li><a href="https://drive.google.com/file/d/15TLi3-uss6GC1rAUBF5apNz0kvNS3jZ4/view" target="_blank" className="text-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 mr-8 py-2 rounded-md">Resume</a></li>
            </ul>
          </nav>

          <div className="dark:text-white mx-auto md:shadow-2xl md:rounded-2xl md:max-w-xl">
              <div className="text-center p-5">
                <h2 className="text-6xl pt-14 text-teal-500 font-bold">Shubham</h2>
                <h3 className="text-xl py-2 md:text-2xl">Open Source Developer</h3>
                <p className="text-md py-5 leading-8 md:text-md max-w-xl mx-auto">A Two time Google Summer of Code student, dynamic and skilled software developer with expertise in C++, Python, Javascipt, Java, React, Tailwind and Bootstrap framework. Passionate about open source software and actively engaged in the open source community. Regularly practices problem-solving skills through platforms like LeetCode. Looking for a full time Software Developer role, feel free to contact me.</p>
                <div className="text-5xl flex justify-center gap-6 py-5 text-gray-800 dark:text-white">
                  <a href="https://www.linkedin.com/in/shubham-686615155/" target="_blank" className="hover:text-6xl hover:delay-150"><AiFillLinkedin/></a>
                  <a href="https://twitter.com/AryanJangid20" target="_blank" className="hover:text-6xl hover:delay-150"><AiFillTwitterCircle/></a>
                  <a href="mailto:aryan10jangid@gmail.com" className="hover:text-6xl hover:delay-150"><SiGmail/></a>
                  <a href="https://github.com/Shubham-100" target="_blank" className="hover:text-6xl hover:delay-150"><AiFillGithub/></a>
                  <a href="https://leetcode.com/aryan10jangid/" target="_blank" className="hover:text-6xl hover:delay-150"><SiLeetcode/></a>
                </div>
              </div>
              {/* <div className="relative bg-gradient-to-b from-cyan-500 to-teal-500 rounded-full w-80 h-80 mx-auto overflow-hidden mt-0 md:w-96 md:h-96">
                {
                  darkMode ? <img alt="Night Coding" src="https://raw.githubusercontent.com/AVS1508/AVS1508/master/assets/Night-Coding.gif"/> : <Image src={deved} layout='fill'/>
                }
              </div> */}

              {
                darkMode ? <div className="">
                  <img alt="Night Coding" src="https://raw.githubusercontent.com/AVS1508/AVS1508/master/assets/Night-Coding.gif" className="w-80 h-64 md:w-96 md:h-64"/></div>
                  :
                  <div className="relative bg-gradient-to-b from-cyan-500 to-teal-500 rounded-full w-80 h-80 mx-auto overflow-hidden mt-0 md:w-96 md:h-96">
                    <Image src={deved} layout='fill'/>
                  </div>
              }
          </div>
        </section>

        <section>
          <div className="p-20 m-10 mx-auto md:max-w-xl md:shadow-2xl md:rounded-2xl">
            <h1 className="text-3xl mx-auto md:text-5xl text-center font-semibold text-teal-500 dark:text-white pb-10 justify-center">Skills and Technology</h1>
            <div className="flex flex-row flex-wrap gap-4 md:gap-10 justify-center">
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
          <div className="px-10 py-5 mt-0 mx-auto md:shadow-2xl md:rounded-2xl md:max-w-xl">
            <h1 className="text-3xl md:text-5xl text-center text-teal-500  font-semibold py-0  justify-center">Projects</h1>
            <h5 className="text-2xl font-medium py-5 text-center text-black dark:text-white">YouTubeMate</h5>
            <div className="flex flex-col flex-wrap gap-8  py-2 text-black  dark:text-white">
              <img src="yt.png" className="w-96 h-64 mx-auto border-solid border-black dark:border-white border-4 hover:border-solid md:w-96 md:h-64"/>
              <ul className="flex flex-row items-center justify-center gap-4">
                <li><a href="https://youtubemate1.netlify.app/" target="_blank" className="text-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 mr-4 py-2 rounded-md">Visit Site</a></li>
                <li><a href="https://github.com/Shubham-100/YouTubeMate" target="_blank"><img src="./github.png" width="32" height="32"/></a></li>
              </ul>
              <p className="text-md py-2 leading-8 md:text-md max-w-2xl mx-auto">Developed a Youtube like application using ReactJs and Material UI which is responsive in nature. User can stream videos from variety of content creators and genres. Interface is similar to Youtube.
Users can search for content of their preference based on genre</p>
            </div>


            <h5 className="text-2xl font-medium py-5 text-center dark:text-white text-teal-500">Movies Recommendation App</h5>
            <div className="flex flex-col flex-wrap gap-8  py-0 text-black  dark:text-white">
              <img src="net.png" className="w-96 h-64 mx-auto border-solid border-black dark:border-white border-4 hover:border-solid md:w-96 md:h-64" />
              <ul className="flex flex-row items-center justify-center gap-4">
                <li><a href="https://startling-pothos-879818.netlify.app/" target="_blank" className="text-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 mr-4 py-2 rounded-md">Visit Site</a></li>
                <li><a href="https://github.com/Shubham-100/Movies-TV-shows" target="_blank"><img src="./github.png" width="32" height="32"/></a></li>
              </ul>
              <p className="text-md py-5 leading-8 md:text-md max-w-2xl mx-auto">Developed an application similar to Watch Pedia where you can see the rating and launch dates of movies and web series
User can see the Trending Movies, Shows, Web series on the internet. Trailer and information about the Movies and Web series also available</p>
            </div>
          </div>
        </section>

        <section>
          <div className="px-10 py-20 mt-0 mx-auto md:max-w-xl md:shadow-2xl md:rounded-2xl">
            <h1 className="text-3xl mx-auto md:text-5xl text-center font-semibold text-teal-500  pb-10 justify-center">Achievements</h1>
            <div className="flex flex-row flex-wrap gap-4 md:gap-10 justify-center text-black  dark:text-white">
              <ul className="list-disc leading-8">
                <li>
                  <h3 className="mb-5">I have been a 2 time Google Summer of Code student in the year <a href="https://github.com/Shubham-100/GSoC19" target="_blank" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">2019</a> and <a href="https://github.com/Shubham-100/GSoC20" target="_blank" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">2020</a>, wherein I wrote code for an open source organization called KDE over a 3-month long period. All the code I wrote was reviewed by my mentors
                  and actually shipped into production.</h3>
                </li>
                <li>
                <h3>I have solved 400+ algorithmic problems over <a href="https://leetcode.com/aryan10jangid/" target="_blank" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Leetcode</a> platform which shows my data structures and algorithmic understanding. I also regularly take part in weekly contests so that I always keep in touch with data structures.</h3>
                </li>
              </ul>
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
