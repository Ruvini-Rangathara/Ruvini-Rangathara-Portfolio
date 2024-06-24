import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
    return (
        <footer className="bg-primary text-accent py-6 mt-10">
            <hr className="bg-accent/10 mb-6" />
            <div className="container mx-auto text-center">
                <h2 className="text-lg font-semibold mb-4">Ruvini Rangathara</h2>
                <nav className="mb-4">
                    <ul className="flex justify-center flex-wrap space-x-4 text-xl xs:text-xs">
                        <li ><a href="#" className="hover:text-green-400">Home</a></li>
                        <li ><a href="#" className="hover:text-green-400">About</a></li>
                        <li ><a href="#" className="hover:text-green-400">Skill</a></li>
                        <li ><a href="#" className="hover:text-green-400">Work</a></li>
                        <li ><a href="#" className="hover:text-green-400">Testimonial</a></li>
                        <li ><a href="#" className="hover:text-green-400">Contact</a></li>
                    </ul>
                </nav>
                <div className="flex justify-center space-x-4 mb-4">

                    <a href="mailto:youremail@gmail.com" className="text-red-500 hover:text-red-700"><i
                        className="far fa-envelope"></i></a>
                    <a href="tel:+1234567890" className="text-blue-500 hover:text-green-700"><i
                        className="fas fa-phone"></i></a>
                    <a href="https://wa.me/whatsappphonenumber" className="text-green-500 hover:text-green-700"><i
                        className="fab fa-whatsapp"></i></a>
                    <a href="skype:your_skype_username?call" className="text-blue-500 hover:text-blue-700"><i
                        className="fab fa-skype"></i></a>

                </div>
                <p className="text-[12px]">
                    Copyright ©2024 All rights reserved | Developed by <span className="text-indigo-600">Ruvini Rangathara</span>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
