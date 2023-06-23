import React from 'react';

const Achievements = () => {
    return (
        <div className="px-10 pt-10 pb-5 mt-0 mx-auto md:max-w-xl md:shadow-2xl md:rounded-2xl">
            <h1 className="text-3xl mx-auto md:text-5xl text-center font-semibold text-teal-500 pb-5 justify-center">Achievements</h1>
            <div className="flex flex-row flex-wrap gap-4 md:gap-10 justify-center text-black  dark:text-white">
              <ul className="list-disc leading-8">
                <li>
                  <h3 className="mb-5">I have been a 2 time Google Summer of Code student in the year <a href="https://github.com/Shubham-100/GSoC19" target="_blank" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">2019</a> and <a href="https://github.com/Shubham-100/GSoC20" target="_blank" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">2020</a>, wherein I wrote code for an open source organization called KDE over a 3-month long period. All the code I wrote was reviewed by my mentors
                  and actually shipped into production.</h3>
                </li>
                <li>
                  <h3 className="mb-5">I am an open source enthusiast who contributes code to the FOSS organization KDE in my leisure time. I have successully merged over 150+ PRs in <a href="https://kde.org" target="_blank" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">KDE</a> organization.</h3>
                </li>
                <li>
                <h3>I have solved 400+ algorithmic problems over <a href="https://leetcode.com/aryan10jangid/" target="_blank" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Leetcode</a> platform which shows my data structures and algorithmic understanding. I also regularly take part in weekly contests so that I always keep in touch with data structures.</h3>
                </li>
              </ul>
            </div>
          </div>
    );
}

export default Achievements;