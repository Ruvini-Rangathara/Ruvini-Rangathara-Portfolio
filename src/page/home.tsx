import React from 'react';
import {Typewriter} from 'react-simple-typewriter';

const roles = ["Web Developer", "Backend Developer", "Frontend Developer", "Full Stack Developer", "Software Engineer"];

const Home = () => {
    return (<>
        <div className="w-[90vw] mx-auto bg-white shadow-sm rounded-lg overflow-hidden mt-8">
            <div
                className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 h-[300px] xs:h-[220px] w-full text-center flex justify-center items-cenetr">

                <div className={'my-auto'}>
                    <span className={'text-accent text-xl'}>Hello, mate 👋</span>
                    <h1
                        className={'text-accent text-3xl xs:text-[25px] sm:text-4xl xl:text-[40px] mb-4'}
                    >I'm Ruvini Rangathara <br/> a {' '}
                        <span className={'text-secondary animated-text'}>
                     <Typewriter
                         words={roles}
                         loop={true}
                         cursor
                         cursorStyle="_"
                         typeSpeed={60}
                         deleteSpeed={40}
                         delaySpeed={1000}
                     />
                    </span>
                    </h1>
                </div>


            </div>
            <div className="flex justify-start -mt-16">
                <img
                    className="xl:w-40 xl:h-40 object-cover rounded-full border-4 border-white xl:ml-12 xs:ml-2 xs:w-32 xs:h-32"
                    src="Profile-Picture.png"
                    alt="Ruvini Rangathara"
                />
            </div>
            <div className="text-center ">
                <p
                    className={'xs:text-xs text-xl  mx-auto xl:mx-0 mb-6 px-20 xs:px-6 mt-4'}>
                    I'm a Software Engineer from Sri Lanka, specializing in Web Development, Full Stack Development,
                    and UX/UI designing.
                </p>

                <p className={'text-[12px] mx-auto xl:mx-0 mb-4  mb-10'}>
                    Trainee Associate Software Engineer
                    <br/>
                    <span>@ Kingteza Software Solutions ( 2024 Apr - Present )</span>
                </p>

            </div>

        </div>

    </>);
};

export default Home;

