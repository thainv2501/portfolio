import Header from './components/header/Header';
import About from './components/about/About';
import MyProjects from './components/myProjects/MyProjects';
import Skills from './components/skills/Skills';
// import Contact from './components/contact/Contact';
// import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import data from './data'
import React, { useState } from 'react';



export default function App() {
    const [me, setMe] = useState(data);
    const { about, skills } = me;
    return (
        <div>
            <Header me={me} />
            <Nav />
            <About about={about} />
            <Skills skills={skills} />
            <MyProjects />
            {/* <Contact />
            <Footer /> */}
        </div>

    )
}