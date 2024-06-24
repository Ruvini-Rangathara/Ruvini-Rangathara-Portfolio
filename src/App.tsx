import './App.css'
import Header from "./component/header.tsx";
import Home from "./page/home.tsx";
import Skill from "./page/skill.tsx";
import Work from "./page/work.tsx";
import Testimonial from "./page/testimonial.tsx";
import Contact from "./page/contact.tsx";
import Footer from "./component/footer.tsx";

function App() {

    return (
        <>
            <Header/>
            <Home/>
            <Skill/>
            <Work/>
            <Testimonial/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default App