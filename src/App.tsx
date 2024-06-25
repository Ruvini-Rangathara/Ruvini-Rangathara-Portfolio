import './App.css'
import Header from "./component/header.tsx";
import Home from "./page/home.tsx";
import Skill from "./page/skill.tsx";
import Project from "./page/Project.tsx";
import Testimonial from "./page/testimonial.tsx";
import Contact from "./page/contact.tsx";
import Footer from "./component/footer.tsx";
import Experience from "./page/Experience.tsx";

function App() {

    return (
        <>
            <Header/>
            <Home/>
            <Experience/>
            <Skill/>
            <Project/>
            <Testimonial/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default App