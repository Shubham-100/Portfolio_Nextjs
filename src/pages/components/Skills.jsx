import React from 'react';

const Skills = () => {
    return (
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
    );
}

export default Skills;