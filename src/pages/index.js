import Image from 'next/legacy/image';
import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {SiLeetcode, SiGmail} from 'react-icons/si';
import deved from "../../public/dev-ed-wave.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shubham - Portfolio Website</title>
        <link rel="icon" href="./favicon.ico"/>
      </Head>
      <main className="bg-white px-5">
        <section className="min-h-screen">
          <nav className="py-5 mb-0 flex justify-between">
            <h1 className="text-2xl font-burtons"><a href="#">Developed by Shubham</a></h1>
            <ul className="flex items-center gap-5">
              <li className="cursor-pointer text-xl"><BsFillMoonStarsFill/></li>
              <li><a href="https://drive.google.com/file/d/15TLi3-uss6GC1rAUBF5apNz0kvNS3jZ4/view" target="_blank" className="text-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-lg">Resume</a></li>
            </ul>
          </nav>

          <div className="text-center p-5">
            <h2 className="text-6xl py-0 text-teal-500 font-bold">Shubham</h2>
            <h3 className="text-xl py-2">Open Source Developer</h3>
            <p className="text-mg py-5 leading-relaxed">Dynamic and skilled software developer with expertise in C++, Python, Java, React, Bootstrap, and the Qt framework. Passionate about open source contributions and actively engaged in the open source community. Regularly practices problem-solving skills through platforms like LeetCode. Looking for a full time Software Developer role, feel free to contact me.</p>
            
            <div className="text-5xl flex justify-center gap-12 py-5 text-gray-800">
              <a href="https://www.linkedin.com/in/shubham-686615155/" target="_blank" className="hover:text-6xl hover:delay-150"><AiFillLinkedin/></a>
              <a href="https://twitter.com/AryanJangid20" target="_blank" className="hover:text-6xl hover:delay-150"><AiFillTwitterCircle/></a>
              <a href="mailto:aryan10jangid@gmail.com" className="hover:text-6xl hover:delay-150"><SiGmail/></a>
              <a href="https://github.com/Shubham-100" target="_blank" className="hover:text-6xl hover:delay-150"><AiFillGithub/></a>
              <a href="https://leetcode.com/aryan10jangid/" target="_blank" className="hover:text-6xl hover:delay-150"><SiLeetcode/></a>
            </div>
          </div>

          <div className="relative bg-gradient-to-b from-cyan-500 to-teal-500 rounded-full w-96 h-96 mx-auto overflow-hidden mt-0">
            <Image src={deved} layout='fill'/>
          </div>
        </section>

        <section>
          <h1>Projects</h1>
        </section>


      </main>
    </div>
  )
}
