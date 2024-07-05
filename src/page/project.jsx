import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {FreeMode, Pagination} from "swiper/modules";
import {TfiWorld} from "react-icons/tfi";
import {AiOutlineGithub} from "react-icons/ai";

// Sample data
const projectData = [{
    image: '/assets/ui/1/1.png',
    title: 'Vidathya Higher Education Management System',
    description: 'Vidathya Higher Tuition Class Management System is a standalone JavaFX application designed for streamlined class management, offering efficiency and ease of use.',
    images: ['/assets/ui/1/1.png', '/assets/ui/1/2.png', '/assets/ui/1/2.png'],
    githubLink: 'https://github.com/Ruvini-Rangathara/Tution-Class-Management-System-With-Layered.git',
    liveLink: 'https://example.com/project1',
}, {
    image: '/assets/ui/2/1.png',
    title: 'Dream Home Real Estate (Marketplace) Website',
    description: 'This project is a full-featured real estate marketplace application built using the MERN (MongoDB, Express.js, React, and Node.js) stack. The application allows users to create, manage, and search property listings with a modern and intuitive user interface.',
    images: ['/assets/ui/2/1.png', '/assets/ui/2/2.png', '/assets/ui/2/2.png'],
    githubLink: 'https://github.com/Ruvini-Rangathara/MERN-Real-Estate-App.git',
    liveLink: 'https://dream-home-hgdz.onrender.com',
}, {
    image: '/assets/ui/3/1.png',
    title: 'Burger Delight - Food Ordering Application',
    description: 'A comprehensive solution for managing burger shop orders, implemented using Spring Boot for backend services, and HTML, CSS, and JavaScript for a responsive, user-friendly frontend.',
    images: ['/assets/ui/3/1.png', '/assets/ui/3/2.png', '/assets/ui/3/2.png'],
    githubLink: 'https://github.com/Ruvini-Rangathara/Burger-Delight-Web-Frontend.git',
    liveLink: 'https://example.com/project1',
}, {
    image: '/assets/ui/4/1.png',
    title: 'Vidathya Higher Education Online Exam System',
    description: 'A comprehensive platform implemented using React, designed for managing exams and users. Students can register, take exams online, and view their marks. Users can update their details, view institute teachers, and access various statistics through an interactive dashboard.',
    images: ['/assets/ui/4/1.png', '/assets/ui/4/2.png', '/assets/ui/4/3.png'],
    githubLink: 'https://github.com/Ruvini-Rangathara/Vidathya-Web-Exam-Frontend.git',
    liveLink: 'https://example.com/project1',
}, {
    image: '/assets/ui/5/1.jpeg',
    title: 'Furry Care - Pet Care Web Application',
    description: 'A full-featured platform implemented using the MERN stack, providing pet care services and user profiles for a seamless and interactive experience for pet owners.',
    images: ['/assets/ui/5/1.jpeg'],
    githubLink: 'https://github.com/Ruvini-Rangathara/Furry-Care-Web-Frontend.git',
    liveLink: 'https://example.com/project1',
}, {
    image: '/assets/ui/6/1.jpeg',
    title: 'Travel Package Management System',
    description: 'A robust solution implemented using microservices and Spring Boot, designed to efficiently manage travel packages, bookings, and customer details, ensuring a seamless travel planning experience.',
    images: ['/assets/ui/6/1.jpeg'],
    githubLink: 'https://github.com/Ruvini-Rangathara/Spring-Boot-Course-Work-FrontEnd.git',
    liveLink: 'https://example.com/project1',
},

];

// ProjectCard Component
const ProjectCard = ({project, onClick}) => (
    <div onClick={() => onClick(project)}
         className="bg-white border shadow-md p-4 rounded-lg cursor-pointer w-[290px] h-[320px] mx-auto">
    <div className={'mb-4'}>
        <img
            src={project.image}
            alt="project"
            className={'w-[290px] h-[150px] object-cover rounded-lg'}
        />
    </div>
    <div className={'mb-4 flex-1'}>
        <div className={'mb-2 text-xs font-medium'}>{project.title}</div>
        <p className={' text-secondary/80 text-xs line-clamp-4'}>{project.description}</p>
    </div>
</div>);

// ProjectModal Component
const ProjectModal = ({isOpen, onClose, project}) => {
    const [mainImage, setMainImage] = useState('');

    useEffect(() => {
        if (project) {
            setMainImage(project.image);
        }
    }, [project]);

    useEffect(() => {
        if (project) {
            const images = project.images;
            let currentIndex = images.indexOf(project.image);
            const intervalId = setInterval(() => {
                currentIndex = (currentIndex + 1) % images.length;
                setMainImage(images[currentIndex]);
            }, 2000);
            return () => clearInterval(intervalId);
        }
    }, [project]);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen || !project) return null;
    return (<div onClick={handleOverlayClick}
                 className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center xs:p-6 z-10">
        <div className="bg-white p-6 rounded-md shadow-md max-w-lg w-full">
            <div className={'mb-2'}>
                <img
                    src={mainImage}
                    alt="project"
                    className={'w-full h-64 object-cover rounded-lg'}
                />
            </div>
            <div className={'mb-2 flex-1'}>
                <div className={'mb-2 text-xs font-medium'}>{project.title}</div>
                <p className={'text-justify text-secondary/80 text-xs'}>{project.description}</p>
            </div>
            <div className="flex space-x-2 mt-2 justify-end">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <AiOutlineGithub className="text-xl text-accent hover:text-gray-900"/>
                </a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <TfiWorld className="text-xl text-accent hover:text-gray-900"/>
                </a>
            </div>
        </div>
    </div>);
};

// ProjectSection Component
const ProjectSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (<div className="xl:mx-12 xs:mx-auto mb-10 mt-6 ">
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{clickable: true}}
            modules={[FreeMode, Pagination]}
            className="pb-14 mx-auto"
            breakpoints={{
                320: {
                    slidesPerView: 1, spaceBetween: 10,
                }, 640: {
                    slidesPerView: 2, spaceBetween: 10,
                }, 1024: {
                    slidesPerView: 2, spaceBetween: 10,
                }, 1280: {
                    slidesPerView: 3, spaceBetween: 10,
                },
            }}
        >
            {projectData.map((project, index) => (<SwiperSlide key={index}>
                <ProjectCard project={project} onClick={setSelectedProject}/>
            </SwiperSlide>))}
        </Swiper>
        <ProjectModal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            project={selectedProject}
        />
    </div>);
};

// Section Component
const Section = () => {
    return (<section
        className="mt-20 relative bg-site bg-cover bg-no-repeat text-white py-20 flex justify-center items-center mb-6 xl:h-[50vh] xs:h-[40vh] xs:px-6">
        <div className="absolute inset-0 bg-accent bg-opacity-40"></div>
        <div className="relative text-center max-w-2xl leading-[20px]">
            <h1 className="xs:text-3xl text-4xl font-bold mb-4 ">Have any project on mind?</h1>
            <p className="mb-8 text-xl xs:text-xs">
                    <span className={'leading-[20px]'}>
                    Download my CV for a detailed look at my skills and experience.
                        Interested in collaboration? Contact me to explore how we can work together.
                    </span>
            </p>
            <div className="flex justify-center space-x-4">
                <button
                    className="bg-white text-accent px-4 py-1 text-xl xs:text-xs rounded-full hover:scale-105 transform transition-transform duration-200 ease-in-out">
                    Download CV
                </button>
                <button
                    className="border-2 border-white px-6 py-1 text-xl xs:text-xs rounded-full hover:bg-accent hover:scale-105 transform transition-transform duration-200 ease-in-out">
                    Hire Me
                </button>
            </div>
        </div>
    </section>);
};

// Main Project Component
const Project = () => {
    return (<>
        <div className={'px-[2rem] mx-auto mt-24'}>
            <div className={'text-center mb-8'}>
                <h2 className={' text-accent text-3xl xs:text-[25px] sm:text-4xl xl:text-[40px] mb-2'}>Projects</h2>
                <p className={'text-secondary/50  text-xl xs:text-xs xl:px-44 xs:px-1 '}>
                    Explore my completed software development projects.
                </p>
            </div>
            <div className={'xl:px-24'}>
                <ProjectSection/>
            </div>
            <div className="swiper-pagination mt-8 flex justify-center"></div>
        </div>
        <Section/>
    </>);
};

export default Project;
