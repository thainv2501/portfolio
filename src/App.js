import Header from './components/header/Header';
import About from './components/about/About';
import MyProjects from './components/myProjects/MyProjects';
// import Contact from './components/contact/Contact';
// import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';

export default function App() {

    return (
        <div>
            <Header />
            <Nav />
            <About />
            <MyProjects />
            {/* <Contact />
            <Footer /> */}
        </div>

    )
}