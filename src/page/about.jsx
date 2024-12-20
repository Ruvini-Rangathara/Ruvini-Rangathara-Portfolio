import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CVPath from '/assets/pdf/CV-Resume.pdf';

export default function About() {

    useEffect(() => {
        AOS.init({
            duration: 3000,
            once: false, // Whether animation should happen only once - while scrolling down
            mirror: false, // Whether elements should animate out while scrolling past them
        });
    }, []);

    const downloadCV = () => {
        // Replace with the actual URL to your CV file
        const cvUrl = CVPath;
        window.open(cvUrl, '_blank');
    };

    return (
        <div id={'about_id'}>
        <h2
            data-aos="fade-up"
            className={"hidden xl:block text-accent text-3xl mb-2 text-center mt-16"}>
            About Me
        </h2>
        <div className="flex justify-between xs:justify-center xs:items-center mt-16 xs:mt-4 mx-auto xl:px-48 xs:px-10 xl:flex-row xs:flex-col-reverse">
            <div className={'px-20 xs:px-0 '}>
                <p
                    data-aos="zoom-in"
                    className={'px-4 xl:text-xs text-xs xs:text-xxs mt-2 xs:leading-relaxed xl:leading-relaxed '}>
                    Hi, I'm Ruvini Rangathara, a dedicated and passionate Full
                    Stack Software Engineer currently working as an Associate
                    Software Engineer at Kingteza Software Solutions. With a keen
                    interest in developing efficient and scalable software solutions,
                    I am always eager to take on new challenges and expand my technical expertise.
                </p>
                <div data-aos={'fade-up'}>
                    <p
                        className="px-4  text-[12px] text-gray-500 xl:mx-0 mb-2 mt-4">
                        Associate Software Engineer
                        <br/>
                        <span className={''}>@ Kingteza Software Solutions<br/> ( 2024 Nov - Present )</span>
                    </p>
                    <div
                        className="mt-2 flex justify-start space-x-4 px-4 ">
                        <a href="mailto:ruvinisubhasinghe200009@gmail.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-pink-500 hover:text-pink-700"
                        >
                            <i className="fa-regular fa-envelope"></i></a>
                        <a  href="https://x.com/Ruvini489"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-300 hover:text-blue-500"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href="https://wa.me/+94786628489"
                            target="_blank"
                            rel="noopener noreferrer"
                           className="text-green-500 hover:text-green-700"
                        >
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>

                    <button
                        onClick={downloadCV}
                        className={'mx-4 px-4 py-2 mt-4 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 text-primary text-xs rounded-lg hover:scale-105 '}>
                        Download CV
                    </button>
                </div>

            </div>

            <section>
                <div
                    data-aos="zoom-in"
                    className="bg-about bg-cover bg-no-repeat  xl:w-[330px] xl:h-[330px] object-cover xl:ml-8 xs:ml-2 xs:w-[260px] xs:h-[260px]"
                ></div>
            </section>

        </div>
        </div>)
}