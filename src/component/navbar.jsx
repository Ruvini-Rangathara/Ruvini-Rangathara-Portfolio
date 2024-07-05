// src/components/BottomNavBar.jsx
import React, {useState} from 'react';
import {
    FaComment,
    FaEnvelope,
    FaHome,
    FaFolder,
    FaUser,
    FaBriefcase
} from 'react-icons/fa';
import {FaMessage} from "react-icons/fa6";

const NavBar = () => {
    // const [visible, setVisible] = useState(false);
    //
    // const showNavBar = () => setVisible(true);
    // const hideNavBar = () => setVisible(false);

    return (<div className={'w-full flex items-center justify-center'}>
            <div
                className={'bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 z-10 fixed mx-auto rounded-xl bottom-0 xl:w-[50vw] md:w-[70vw] xs:w-[85vw]    '}
                // ${visible ? 'opacity-50' : 'opacity-0 transition-opacity duration-300'}
                // onMouseEnter={showNavBar}
                // onMouseLeave={hideNavBar}
            >
                <div className="flex justify-center opacity-100 xl:gap-10 gap-4 xs:gap-2 p-1">
                    <a href="#" className="text-white md:text-2xl xl:text-2xl xs:text-xl p-2"><FaHome /></a>
                    <a href="#" className="text-white md:text-2xl xl:text-2xl xs:text-xl p-2"><FaUser /></a>
                    <a href="#" className="text-white md:text-2xl xl:text-2xl xs:text-xl p-2"><FaBriefcase/></a>
                    <a href="#" className="text-white md:text-2xl xl:text-2xl xs:text-xl p-2"><FaFolder/></a>
                    <a href="#" className="text-white md:text-2xl xl:text-2xl xs:text-xl p-2"><FaComment/></a>
                    <a href="#" className="text-white md:text-2xl xl:text-2xl xs:text-xl p-2"><FaEnvelope/></a>
                </div>
            </div>

    </div>);
};

export default NavBar;
