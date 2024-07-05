import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiRectangleGroup,
    HiChatBubbleBottomCenterText,
    HiEnvelope,
} from 'react-icons/hi2';

const navData = [
    { name: 'home', path: '/', icon: <HiHome className="w-20px h-[20px]" /> },
    { name: 'about', path: '/about', icon: <HiUser className="w-20px h-[20px]" /> },
    { name: 'services', path: '/services', icon: <HiRectangleGroup className="w-20px h-[20px]" /> },
    { name: 'work', path: '/work', icon: <HiViewColumns className="w-20px h-[20px]" /> },
    { name: 'testimonials', path: '/testimonials', icon: <HiChatBubbleBottomCenterText className="w-20px h-[20px]" /> },
    { name: 'contact', path: '/contact', icon: <HiEnvelope className="w-20px h-[20px]" /> },
];

const Header = () => {
    const location = useLocation();

    return (
        <nav className="flex flex-col items-center xl:justify-center gap-y-2 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
            <div className="h-[40px] flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-48 xl:px-0 bg-secondary/10 xl:h-max py-8 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
                {navData.map((link, index) => (
                    <Link key={index} to={link.path} className={`relative flex items-center group hover:text-accent transition-all duration-300 ${location.pathname === link.path ? 'text-white' : ''}`}>
                        {/* Tooltip */}
                        <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                            <div className="bg-[#00001A] relative flex text-primary items-center p-[6px] rounded-[3px]">
                                <div className="text-[12px] leading-none font-semibold capitalize">{link.name}</div>
                                {/* Triangle */}
                                <div className="border-solid border-l-[#00001A] border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                            </div>
                        </div>
                        {/* Icon */}
                        <div>{link.icon}</div>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Header;
