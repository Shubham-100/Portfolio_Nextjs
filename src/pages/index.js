import Head from 'next/head';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Achievements from './components/Achievements';

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
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
          <Intro darkMode={darkMode}/>
        </section>

        <section>
          <Skills/>
        </section>

        <section>
          <Projects/>
        </section>

        <section>
          <Achievements/>
        </section>
        <Footer/>

      </main>
    </div>
  )
}
