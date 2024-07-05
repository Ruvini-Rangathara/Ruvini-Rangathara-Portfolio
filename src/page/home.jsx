import React, { useEffect, useRef, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Howl } from 'howler';

const roles = ["Web Developer", "Backend Developer", "Frontend Developer", "Full Stack Developer", "Software Engineer"];

const Home = () => {
    const typewriterSound = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isSoundMuted, setIsSoundMuted] = useState(false);

    useEffect(() => {
        typewriterSound.current = new Howl({
            src: ['/assets/mp3/typewriter-sound.mp3'],
            volume: isSoundMuted ? 0 : 1.5,
            loop: false,
        });

    }, [isVisible, isSoundMuted]);

    const toggleSound = () => {
        setIsSoundMuted(!isSoundMuted);
        if (!isSoundMuted) {
            typewriterSound.current.stop();
        }
    };

    return (
        <div className="w-[90vw] xs:w-[88vw] mx-auto bg-white rounded-lg overflow-hidden xl:mt-14 xs:mt-6">
            <div
                className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 px-0 xs:px-4 xl:h-[80vh] xs:h-[370px] w-full text-center flex justify-center">
                <div className="my-auto">
                    <span className="text-accent text-xl mb-1">Hello, mate 👋</span>
                    <h1 className="text-accent text-3xl xs:text-[24px] sm:text-4xl xl:text-[40px] mb-4">
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


                    <div className="text-center">
                        <p className="text-[12px] text-secondary text-center px-auto xs:px-4 xs:mb-4 mb-2">
                            I'm a Software Engineer from Sri Lanka, specializing in Web Development, <br/> Full Stack
                            Development, and UX/UI designing.
                        </p>

                        <div className="mt-4 flex items-center justify-center space-x-4">
                            <a href="#" className="text-gray-700"><i className="fab fa-github"></i></a>
                            <a href="#" className="text-blue-400"><i className="fab fa-linkedin"></i></a>
                            <a href="#" className="text-pink-400"><i className="fab fa-behance"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            {/*<div className="flex ">*/}
            {/*    <button onClick={toggleSound} className="text-sm text-gray-400 focus:outline-none">*/}
            {/*        <FontAwesomeIcon icon={isSoundMuted ? faVolumeMute : faVolumeUp}/>*/}
            {/*    </button>*/}
            {/*</div>*/}

        </div>
    );
};

export default Home;
