import React, { useEffect, useRef, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Howl } from 'howler';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVolumeMute, faVolumeUp} from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';
import soundMP3 from '/assets/mp3/typewriter-sound.mp3';

const roles = ["Web Developer", "Backend Developer", "Frontend Developer", "Full Stack Developer", "Software Engineer"];

const Home = () => {
    const typewriterSound = useRef(null);
    const [isSoundMuted, setIsSoundMuted] = useState(true);

    useEffect(() => {
        typewriterSound.current = new Howl({
            src: soundMP3,
            volume: isSoundMuted ? 0 : 2.0,
            loop: false,
        });

        if(!isSoundMuted) {
            typewriterSound.current.play();
        }else {
            typewriterSound.current.stop();
        }

    }, [isSoundMuted]);

    const toggleSound = () => {
        setIsSoundMuted(prevState => {
            const newState = !prevState;
            typewriterSound.current.volume(newState ? 0 : 2.0);
            return newState;
        });
    };

    useEffect(() => {
        AOS.init({
            duration: 3000,
            once: false, // Whether animation should happen only once - while scrolling down
            mirror: false, // Whether elements should animate out while scrolling past them
        });
    }, []);

    return (
        <div id={'home_id'}
             className="w-[90vw] xs:w-[88vw] mx-auto bg-white rounded-lg overflow-hidden xl:mt-14 xs:mt-6">
            <div
                className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 px-0 xs:px-4 xl:h-[80vh] xs:h-[88vh] w-full text-center flex justify-center">
                <div className="my-auto">
                    <span className="text-accent text-xl mb-1 xl:mb-2 xs:mb-4">Hello, mate 👋</span>
                    <h1
                        className="text-accent text-3xl xs:text-[24px] sm:text-4xl xl:text-[40px] mb-4">
                        I'm Ruvini Rangathara <br/> a {' '}
                        <span className="text-secondary animated-text">
                            <Typewriter
                                words={roles}
                                loop={true}
                                cursor
                                cursorStyle="_"
                                typeSpeed={60}
                                deleteSpeed={40}
                                delaySpeed={1000}
                                onType={(char, type) => {
                                    if (type === 'type' && isVisible && !isSoundMuted) {
                                        typewriterSound.current.play();
                                    }
                                }}
                            />
                        </span>
                    </h1>


                    <div
                        data-aos={'zoom-in'}
                        className="text-center">
                        <p className="text-[12px] text-secondary text-center px-auto xs:px-4 ">
                            I'm a Software Engineer from Sri Lanka, specializing in Web Development, <br/> Full Stack
                            Development, and UX/UI designing.
                        </p>

                        <div className="flex justify-center items-center">
                            <p className={'text-xxs text-gray-400 mr-2'}>( Tap to sound on</p>
                            <button onClick={toggleSound} className="text-sm text-gray-400 focus:outline-none">
                                <FontAwesomeIcon icon={isSoundMuted ? faVolumeMute : faVolumeUp}/>
                            </button>
                            <p className="text-xxs text-gray-400"> &nbsp;)</p>
                        </div>


                        <div className="mt-4 xl:mt-4 xs:mt-6 flex items-center justify-center space-x-4">
                            <a href="#" className="text-gray-700"><i className="fab fa-github"></i></a>
                            <a href="#" className="text-blue-400"><i className="fab fa-linkedin"></i></a>
                            <a href="#" className="text-pink-400"><i className="fab fa-behance"></i></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
