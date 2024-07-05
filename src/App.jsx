import './App.css'
import Header from "./component/header.jsx";
import Home from "./page/home.jsx";
import Skill from "./page/experience.jsx";
import Project from "./page/project.jsx";
import Testimonial from "./page/testimonial.jsx";
import Contact from "./page/contact.jsx";
import Footer from "./component/footer.jsx";
import React from 'react';

const App = () => {
    return (<>
            {/*<Header/>*/}
            <Home/>
            <Skill/>
            <Project/>
            <Testimonial/>
            <Contact/>
            <Footer/>
        </>);
};

export default App;

