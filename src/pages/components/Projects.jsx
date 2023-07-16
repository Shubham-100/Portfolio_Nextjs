import React from 'react';
import Image from 'next/image';

const Projects = () => {
    return (
        <div className="px-10 py-5 mt-0 mx-auto md:shadow-2xl md:rounded-2xl md:max-w-xl">
          <h1 className="text-3xl md:text-5xl text-center text-teal-500  font-semibold py-0  pb-5 justify-center">Projects</h1>
          <h5 className="text-2xl font-medium py-5 text-center text-black dark:text-white ">Movies Recommendation App</h5>
            <div className="flex flex-col flex-wrap gap-8  py-0 text-black  dark:text-white">
              <Image src="/flix.jpg" alt="project" width={600} height={250} className="object-cover mx-auto border-solid border-black dark:border-white border-4 hover:border-solid overflow-hidden mt-0 md:w-96 md:h-64"/>
              <ul className="flex flex-row items-center justify-center gap-4">
                <li><a href="https://enter10ment.vercel.app/" target="_blank" className="text-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 mr-4 py-2 rounded-md">Visit Site</a></li>
                <li><a href="https://github.com/Shubham-100/Netflix" target="_blank"><img src="./github.png" width="32" height="32"/></a></li>
              </ul>
              <p className="text-md pt-0 leading-8 md:text-md max-w-2xl mx-auto">Developed a Netflix like clone Enter10ment which is full responsive and shows the trending content over the internet. User can also see the movie information such as relesed date, 
              votes it got from crtitics and its popularity percent. All this is full responsive starting from smartphones till large screens as that of computer</p>
            </div>
          

            
            <h5 className="text-2xl font-medium py-5 text-center text-black dark:text-white">YouTubeMate</h5>
            <div className="flex flex-col flex-wrap gap-8  py-0 text-black  dark:text-white">
              <Image src="/ytm.jpg" alt="project" width={600} height={250} className="object-cover mx-auto border-solid border-black dark:border-white border-4 hover:border-solid overflow-hidden mt-0 md:w-96 md:h-64"/>
              <ul className="flex flex-row items-center justify-center gap-4">
                <li><a href="https://youtubemate1.netlify.app/" target="_blank" className="text-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 mr-4 py-2 rounded-md">Visit Site</a></li>
                <li><a href="https://github.com/Shubham-100/YouTubeMate" target="_blank"><img src="./github.png" width="32" height="32"/></a></li>
              </ul>
              <p className="text-md pt-0 my-0 leading-8 md:text-md max-w-2xl mx-auto">Developed a Youtube like application using ReactJs and Material UI which is responsive in nature. User can stream videos from variety of content creators and genres. Interface is similar to Youtube.
Users can search for content of their preference based on genre</p>
            </div>
        </div>
    );
}

export default Projects;