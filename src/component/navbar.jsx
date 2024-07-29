// src/components/BottomNavBar.jsx
import React from 'react';
import {
    FaComment,
    FaEnvelope,
    FaHome,
    FaFolder,
    FaUser,
    FaBriefcase
} from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {
    // const [visible, setVisible] = useState(false);
    //
    // const showNavBar = () => setVisible(true);
    // const hideNavBar = () => setVisible(false);

    return (<div className={'w-full flex items-center justify-center'}>
            <div
                className={'bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 z-10 fixed mx-auto rounded-xl bottom-0 xl:w-[48vw] md:w-[70vw] xs:w-[85vw]    '}
                // ${visible ? 'opacity-50' : 'opacity-0 transition-opacity duration-300'}
                // onMouseEnter={showNavBar}
                // onMouseLeave={hideNavBar}
            >
                <div className="flex justify-center opacity-100 xl:gap-10 gap-4 xs:gap-3 p-1">
                    <Link to="home_id" smooth={true} duration={300} className="text-white md:text-2xl xl:text-2xl xs:text-vl p-2 hover:scale-105 cursor-pointer">
                        <FaHome />
                    </Link>
                    <Link to="about_id" smooth={true} duration={300} className="text-white md:text-2xl xl:text-2xl xs:text-vl p-2 hover:scale-105 cursor-pointer">
                        <FaUser />
                    </Link>
                    <Link to="service_id" smooth={true} duration={300} className="text-white md:text-2xl xl:text-2xl xs:text-vl p-2 hover:scale-105 cursor-pointer">
                        <FaBriefcase />
                    </Link>
                    <Link to="project_id" smooth={true} duration={300} className="text-white md:text-2xl xl:text-2xl xs:text-vl p-2 hover:scale-105 cursor-pointer">
                        <FaFolder />
                    </Link>
                    <Link to="testimonial_id" smooth={true} duration={300} className="text-white md:text-2xl xl:text-2xl xs:text-vl p-2 hover:scale-105 cursor-pointer">
                        <FaComment />
                    </Link>
                    <Link to="contact_id" smooth={true} duration={300} className="text-white md:text-2xl xl:text-2xl xs:text-vl p-2 hover:scale-105 cursor-pointer">
                        <FaEnvelope />
                    </Link>
                </div>
            </div>

    </div>);
};

export default NavBar;
