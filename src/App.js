import Header from './components/header/Header';
import About from './components/about/About';
import MyProjects from './components/myProjects/MyProjects';
// import Contact from './components/contact/Contact';
// import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import data from './data'
import React, { useState, useEffect } from 'react';



export default function App() {
    const [me, setMe] = useState(data);
    const { name: { first, middle, last }, experiment } = me;
    return (
        <div>
            <Header me={me} />
            <Nav />
            <About />
            <MyProjects experiment={experiment} />
            {/* <Contact />
            <Footer /> */}
        </div>

    )
}