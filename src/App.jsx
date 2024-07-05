import './App.css'
import Navbar from "./component/navbar.jsx";
import Home from "./page/home.jsx";
import Services from "./page/services.jsx";
import Project from "./page/project.jsx";
import Testimonial from "./page/testimonial.jsx";
import Contact from "./page/contact.jsx";
import Footer from "./component/footer.jsx";
import React from 'react';
import About from "./page/about.jsx";

const App = () => {
    return (<>
        <Navbar/>
        <Home/>
        <About/>
        <Services/>
        <Project/>
        <Testimonial/>
        <Contact/>
        <Footer/>
    </>);
};

export default App;

