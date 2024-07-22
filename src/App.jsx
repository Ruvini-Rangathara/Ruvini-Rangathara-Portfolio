import './App.css';
import React, {useEffect, useState} from 'react';
import Navbar from "./component/navbar";
import Home from "./page/home";
import Services from "./page/services";
import Project from "./page/project";
import Testimonial from "./page/testimonial";
import Contact from "./page/contact";
import Footer from "./component/footer";
import About from "./page/about";
import Preloader from "./component/preloader";

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setLoading(false);
        };

        // console.log("Setting up event listener for window load");
        window.addEventListener("load", handleLoad);

        // Fallback to ensure loading state changes after a timeout
        const loadTimeout = setTimeout(() => {
            setLoading(false);
        }, 3000);

        // Clean up the event listener
        return () => {
            window.removeEventListener("load", handleLoad);
            clearTimeout(loadTimeout);
        };
    }, []);

    useEffect(() => {
    }, [loading]);

    return (<div>
        {loading && <Preloader/>}
        {!loading && (<div className="main-content">
            <Body/>
        </div>)}
    </div>);
};

export default App;

const Body = () => {
    return (<div>
        <Navbar/>
        <Home/>
        <About/>
        <Services/>
        <Project/>
        <Testimonial/>
        <Contact/>
        <Footer/>
    </div>);
};