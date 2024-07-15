import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {Autoplay, Pagination} from "swiper/modules";
import CountUp from "react-countup";
import {useInView} from "react-intersection-observer";
import SwiperCore from "swiper";

SwiperCore.use([Pagination]);

const Services = () => {

    const [startCounting, setStartCounting] = useState(false);

    const {ref: sectionRef, inView: sectionInView} = useInView({
        triggerOnce: false, threshold: 0,
    });

    const {ref: counterRef, inView: counterInView} = useInView({
        triggerOnce: false, threshold: 0.1,
    });

    useEffect(() => {
        if (sectionInView) {
            console.log('sectionInView : ', sectionInView);
            setStartCounting(true);
        } else {
            setStartCounting(false);
        }
    }, [sectionInView]);

    return (<>

        <div className="text-center mt-16">
            <h2 className="text-center text-accent text-3xl xs:text-[25px] sm:text-4xl xl:text-[40px] mb-2">
                My Services
            </h2>
            <p className="text-secondary/50 text-center mb-4 text-xl xs:text-xs xl:px-44 ">
                Crafting Applications with Modern Tech Stack.
            </p>
        </div>
        <section id={'service_id'} ref={sectionRef}
                 className=" pb-14 pt-4 pb-10 flex flex-col justify-center items-center">
            <div className=" text-center">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{clickable: true}}
                    autoplay={{
                        delay: 3000, disableOnInteraction: false,
                    }}
                    speed={800}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        640: {slidesPerView: 1, spaceBetween: 0}, // xs size
                        768: {slidesPerView: 2, spaceBetween: 0}, // sm size
                        1024: {slidesPerView: 3, spaceBetween: 20}, // md size
                        1280: {slidesPerView: 3, spaceBetween: 20}, // xl size
                    }}
                    className={"pb-14 xs:w-[90vw] xl:w-[81vw] mx-auto"}
                >
                    <SwiperSlide className={'px-2 bg-purple-50 border border-gray p-4 rounded-2xl'}>
                        <div className="flex flex-col items-center">
                            <div className="mb-2">
                                <img
                                    src="/assets/image/backend-database.png"
                                    alt="Backend Development"
                                    className="w-12 h-12"
                                />
                            </div>
                            <h3 className="text-xs">Backend Development</h3>
                            <p className="text-secondary/80 xl:text-xxs xs:text-xxs px-4 mt-2">
                                Develop robust and scalable backend systems using modern
                                frameworks and technologies to ensure high performance and security.
                            </p>
                            <div className="mt-4 flex flex-wrap items-center justify-center space-x-2 px-24 gap-2">
                                <img src="https://cdn.simpleicons.org/node.js/339933" alt="Node.js Icon" width="16"
                                     height="16"/>
                                <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png"
                                     alt="Java Icon" width="16"
                                     height="16"/>
                                <img src="https://cdn.simpleicons.org/spring/6DB33F" alt="Spring Icon" width="16"
                                     height="16"/>
                                <img src="https://cdn.simpleicons.org/springboot/6DB33F" alt="Spring Boot Icon"
                                     width="16"
                                     height="16"/>
                                <img src="https://cdn.simpleicons.org/python/3776AB" alt="Python Icon" width="16"
                                     height="16"/>
                                <img src="https://cdn.simpleicons.org/mongodb/47A248" alt="MongoDB Icon" width="16"
                                     height="16"/>
                                <img src="https://cdn.simpleicons.org/postgresql/336791" alt="PostgreSQL Icon"
                                     width="16"
                                     height="16"/>
                                <img src="https://cdn.simpleicons.org/mysql/4479A1" alt="MySQL Icon" width="16"
                                     height="16"/>

                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className={'px-2 bg-purple-50 border border-gray p-4 rounded-2xl'}>
                        <div className="flex flex-col items-center">
                            <div className="mb-2">
                                <img
                                    src="/assets/image/frontend.png"
                                    alt="Frontend Development"
                                    className="w-12 h-12"
                                />
                            </div>
                            <h3 className="text-xs">Frontend Development</h3>
                            <p className="text-secondary/80 xl:text-xxs xs:text-xxs px-4 mt-2">
                                Create dynamic and responsive user interfaces with cutting-edge
                                frontend technologies to provide an exceptional user experience.
                            </p>
                            <div className="flex-wrap mt-4 flex items-center justify-center space-x-2 px-24 gap-2 ">
                                <img src="https://cdn.simpleicons.org/html5/E34F26" alt="HTML5 Icon" width="16"
                                     height="16"/>
                                <img src="https://cdn.simpleicons.org/css3/1572B6" alt="CSS3 Icon" width="16"
                                     height="16"/>
                                <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript Icon"
                                     width="16"
                                     height="16"/>
                                <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React Icon" width="16"
                                     height="16"/>
                                <img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript Icon"
                                     width="16"
                                     height="16"/>
                                <img src="https://cdn.simpleicons.org/redux/764ABC" alt="Redux Icon" width="16"
                                     height="16"/>
                                <img src="https://cdn.simpleicons.org/bootstrap/7952B3" alt="Bootstrap Icon"
                                     width="16"
                                     height="16"/>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Other Technologies */}
                    <SwiperSlide className={'px-2 bg-purple-50 border border-gray p-4 rounded-2xl'}>
                        <div className="flex flex-col items-center">
                            <div className="mb-2">
                                <img
                                    src="/assets/image/other-tech.png"
                                    alt="Other Technologies"
                                    className="w-12 h-12"
                                />
                            </div>
                            <h3 className="text-xs">Other Technologies</h3>
                            <p className="text-secondary/80 xl:text-xxs xs:text-xxs px-4 mt-2">
                                Leverage a wide range of tools & platforms to deliver comprehensive
                                solutions, including version control, cloud services & continuous integration.
                            </p>
                            <div className="flex-wrap mt-4 flex items-center justify-center space-x-2 px-24 gap-2">
                                <img src="https://cdn.simpleicons.org/git/F05032" alt="Git Icon" width="16"
                                     height="16"/>
                                <img src="https://cdn.simpleicons.org/github/181717" alt="GitHub Icon" width="16"
                                     height="16"/>
                                <img src="https://cdn.simpleicons.org/docker/2496ED" alt="Docker Icon" width="16"
                                     height="16"/>
                                <img src="https://img.icons8.com/color/48/000000/amazon-web-services.png"
                                     alt="AWS Icon"
                                     width="16"
                                     height="16"/>
                                <img src="https://cdn.simpleicons.org/googlecloud/4285F4" alt="Google Cloud Icon"
                                     width="16"
                                     height="16"/>
                                <img src="https://cdn.simpleicons.org/linux/000000" alt="Linux Icon" width="16"
                                     height="16"/>
                                <img src="https://img.icons8.com/color/48/000000/windows-10.png" alt="Windows Icon"
                                     width="16"
                                     height="16"/>
                                <img src="https://cdn.simpleicons.org/firebase/FFCA28" alt="Firebase Icon"
                                     width="16"
                                     height="16"/>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>


            <div ref={counterRef}
                 className={'flex gap-2 justify-around xl:w-[50vw] xs:w-[80vw] mx-auto xl:mt-2 mt-6 xs:mt-8'}>
                {/*  experience*/}
                <div
                    className={'flex justify-center items-center flex-col'}>
                    <div className={'text-[22px] xl:text-3xl text-accent mb-2'}>
                        {startCounting && <CountUp start={0} end={10} duration={4}/>} +
                    </div>
                    <div
                        className={'text-center px-1 text-secondary xl:text-xs text-xs xs:text-[12px] uppercase tracking-[1px] max-w-[100px]'}>Years
                        of experience
                    </div>
                </div>
                {/*awards & certificates*/}
                <div
                    className={'flex justify-center items-center flex-col'}>
                    <div className={'text-[22px] xl:text-3xl text-accent mb-2'}>
                        {startCounting && <CountUp start={0} end={10} duration={4}/>}+
                    </div>
                    <div
                        className={'text-center px-1 text-secondary xl:text-xs text-xs  xs:text-[12px] uppercase tracking-[1px] max-w-[100px]'}>Awards
                        & Certificates
                    </div>
                </div>
                {/*projects*/}
                <div
                    className={'flex justify-center items-center flex-col'}>
                    <div className={'text-[22px] xl:text-3xl text-accent mb-2'}>
                        {startCounting && <CountUp start={0} end={50} duration={4}/>} +
                    </div>
                    <div
                        className={'text-center px-1 text-secondary xl:text-xs text-xs  xs:text-[12px] uppercase tracking-[1px] max-w-[100px]'}>Finished
                        projects
                    </div>
                </div>
            </div>

        </section>

    </>);
};

export default Services;
