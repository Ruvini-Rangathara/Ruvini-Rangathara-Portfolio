import './App.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from "./page/home.tsx";
import Contact from "./page/contact.tsx";
import Header from "./component/header.tsx";
import Footer from "./component/footer.tsx";
import Skill from "./page/skill.tsx";
import Work from "./page/work.tsx";
import Testimonial from "./page/testimonial.tsx";

function App() {

  return (
      <BrowserRouter>
          {/*<Header/>*/}
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skill" element={<Skill />} />
              <Route path="/work" element={<Work />} />
              <Route path="/testimonial" element={<Testimonial />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
          {/*<Footer/>*/}
      </BrowserRouter>
  )
}

export default App
