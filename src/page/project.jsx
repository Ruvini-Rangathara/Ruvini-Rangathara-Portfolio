import React, {useEffect, useState} from 'react';
import {AiOutlineGithub} from 'react-icons/ai';
import {TfiWorld} from 'react-icons/tfi';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {FreeMode, Pagination} from "swiper/modules";
import { Link as ScrollLink } from 'react-scroll';

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
},];


// ProjectCard Component
const ProjectCard = ({project, onClick}) => (<div
        onClick={() => onClick(project)}
        className="relative overflow-hidden shadow-lg cursor-pointer transition-transform transform hover:scale-105 w-full h-48 md:w-[25vw] md:h-[30vh]"
    >
        <img src={project.image} alt={project.title} className="w-full h-full object-cover"/>
        <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-end p-4">
            <div>
                <h3 className="text-white text-xs">{project.title}</h3>
            </div>
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

    if (!isOpen || !project) return null;

    return (<div onClick={onClose}
                 className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-10">
            <div className="bg-white p-6  shadow-md max-w-lg w-full">
                <img src={mainImage} alt="project" className="w-full h-64 object-cover mb-4"/>
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <hr className={'mb-2'}/>
                <p className="text-xs">{project.description}</p>
                <div className="flex space-x-2 text-secondary justify-end">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <AiOutlineGithub className="text-xl"/>
                    </a>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <TfiWorld className="text-xl"/>
                    </a>
                </div>
            </div>
        </div>);
};

// ProjectSection Component
const ProjectSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (<section className="py-14 px-6 bg-gray-50">
            <div className="container mx-auto px-4">
                {/*<div className="grid grid-cols-1 md:grid-cols-3 gap-6">*/}
                {/*    {projectData.slice(0, 6).map((project, index) => (*/}
                {/*        <ProjectCard key={index} project={project} onClick={setSelectedProject} />*/}
                {/*    ))}*/}
                {/*</div>*/}
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{clickable: true}}
                    modules={[FreeMode, Pagination]}
                    className="pb-14 "
                    breakpoints={{
                        640: {
                            slidesPerView: 1, spaceBetween: 20,
                        }, 768: {
                            slidesPerView: 2, spaceBetween: 40,
                        }, 1024: {
                            slidesPerView: 3, spaceBetween: 50,
                        },
                    }}
                >
                    {Array.from({length: Math.ceil(projectData.length / 2)}, (_, i) => (<SwiperSlide key={i}>
                            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
                                {projectData.slice(i * 2, i * 2 + 2).map((project, index) => (
                                    <ProjectCard key={index} project={project} onClick={setSelectedProject}/>))}
                            </div>
                        </SwiperSlide>))}
                </Swiper>
            </div>
            <ProjectModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}
                          project={selectedProject}/>
        </section>);
};

// Section Component
const Section = () => {
    const downloadCV = () => {
        // Replace with the actual URL to your CV file
        const cvUrl = '/assets/pdf/CV-Resume.pdf';
        window.open(cvUrl, '_blank');
    };

    return (<section
        className="mt-10 relative bg-site bg-cover bg-no-repeat text-white py-20 flex justify-center items-center mb-6 xl:h-[50vh] xs:h-[40vh] xs:px-6">
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
                    onClick={downloadCV}
                    className="bg-white text-accent px-4 py-1 text-xl xs:text-xs rounded-full hover:scale-105 transform transition-transform duration-200 ease-in-out">
                    Download CV
                </button>
                <ScrollLink
                    to="contact_id"
                    smooth={true}
                    duration={500}
                    className="border-2 border-white px-6 py-1 text-xl xs:text-xs rounded-full hover:bg-accent hover:scale-105 transform transition-transform duration-200 ease-in-out cursor-pointer">
                    Hire Me
                </ScrollLink>
            </div>
        </div>
    </section>);
};

// Main Project Component
const Project = () => {
    return (<>
            <div id={'project_id'} className="xl:px-24 xs:px-0 px-24 mx-auto mt-10">

                <div className="text-center">
                    <h2 className="text-accent text-3xl mb-2">Projects</h2>
                    <p className="text-secondary/50 xl:text-xl xs:text-xs">
                        Explore my completed software development projects.
                    </p>
                </div>
                <ProjectSection/>
            </div>
            <Section/>
        </>);
};

export default Project;
