import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
    return (<
        footer className="bg-primary text-secondary mt-6 xs:mt-0 mb-20">
            <hr className="bg-accent/10 mb-4 xs:mt-12 xl:mt-0"/>
            <div className="container mx-auto text-center">
                {/*<h2 className="text-lg font-semibold mb-4">Ruvini Rangathara</h2>*/}
                {/*<nav className="mb-4">*/}
                {/*    <ul className="flex justify-center flex-wrap space-x-4 text-xl xs:text-xs">*/}
                {/*        <li><a href="#" className="hover:text-accent">Home</a></li>*/}
                {/*        <li><a href="#" className="hover:text-accent">About</a></li>*/}
                {/*        <li><a href="#" className="hover:text-accent">Skill</a></li>*/}
                {/*        <li><a href="#" className="hover:text-accent">Work</a></li>*/}
                {/*        <li><a href="#" className="hover:text-accent">Testimonial</a></li>*/}
                {/*        <li><a href="#" className="hover:text-accent">Contact</a></li>*/}
                {/*    </ul>*/}
                {/*</nav>*/}
                {/*<div className="flex justify-center space-x-4 mb-4">*/}

                {/*    <a href="mailto:youremail@gmail.com" className="text-xl text-secondary ">*/}
                {/*        <ImMail/>*/}
                {/*    </a>*/}
                {/*    <a href="https://www.linkedin.com/in/ruvini-rangathara-747756229/"*/}
                {/*       className="text-xl text-secondary ">*/}
                {/*        <IoLogoLinkedin/>*/}
                {/*    </a>*/}
                {/*    <a href="https://github.com/Ruvini-Rangathara" className="text-xl text-secondary ">*/}
                {/*        <FaGithubSquare/>*/}
                {/*    </a>*/}
                {/*</div>*/}

                <p className="text-[12px]">
                    Copyright ©2024 All rights reserved | Developed by <span
                    className="text-accent">Ruvini Rangathara</span>
                </p>
            </div>
        </footer>);
}

export default Footer;
