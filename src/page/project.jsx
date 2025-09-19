import React, {useEffect, useState} from 'react';
import {AiOutlineGithub} from 'react-icons/ai';
import {TfiWorld} from 'react-icons/tfi';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {FreeMode, Pagination} from "swiper/modules";
import { Link as ScrollLink } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CVPath from '/assets/pdf/CV-Resume.pdf';
import project11 from '/assets/ui/1/1.png';
import project12 from '/assets/ui/1/2.png';
import project13 from '/assets/ui/1/3.png';
import project21 from '/assets/ui/2/1.png';
import project22 from '/assets/ui/2/2.png';
import project23 from '/assets/ui/2/3.png';
import project31 from '/assets/ui/3/1.png';
import project32 from '/assets/ui/3/2.png';
import project33 from '/assets/ui/3/3.png';
import project41 from '/assets/ui/4/1.png';
import project42 from '/assets/ui/4/2.png';
import project43 from '/assets/ui/4/3.png';
import project51 from '/assets/ui/5/1.jpeg';
import project61 from '/assets/ui/6/1.jpeg';
import project71 from '/assets/ui/7/1.png';
import project72 from '/assets/ui/7/2.png';

const projectData = [{
    image: project11,
    title: 'Vidathya Higher Education Management System',
    description: 'Vidathya Higher Tuition Class Management System is a standalone JavaFX application designed for streamlined class management, offering efficiency and ease of use.',
    images: [project11, project12, project13],
    githubLink: 'https://github.com/Ruvini-Rangathara/Tution-Class-Management-System-With-Layered.git',
    liveLink: 'https://www.linkedin.com/posts/ruvini-rangathara-747756229_educationmanagement-javaproject-tuitionmanagementsystem-activity-7093253332105904128-ac3y?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk95acB6EycG4HjHpf0I7ypNRSISU3OOew',
},
// {
//     image: project21,
//     title: 'Dream Home Real Estate (Marketplace) Website',
//     description: 'This project is a full-featured real estate marketplace application built using the MERN (MongoDB, Express.js, React, and Node.js) stack. The application allows users to create, manage, and search property listings with a modern and intuitive user interface.',
//     images: [project21, project22, project23],
//     githubLink: 'https://github.com/Ruvini-Rangathara/MERN-Real-Estate-App.git',
//     liveLink: 'https://dream-home-hgdz.onrender.com',
// }, 
{
    image: project31,
    title: 'Burger Delight - Food Ordering Application',
    description: 'A comprehensive solution for managing burger shop orders, implemented using Spring Boot for backend services, and HTML, CSS, and JavaScript for a responsive, user-friendly frontend.',
    images: [project31, project32, project33],
    githubLink: 'https://github.com/Ruvini-Rangathara/Burger-Delight-Web-Frontend.git',
    liveLink: 'https://www.linkedin.com/posts/ruvini-rangathara-747756229_springboot-smtp-burger-activity-7156358143428493312-3V1q?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk95acB6EycG4HjHpf0I7ypNRSISU3OOew',
}, {
    image: project41,
    title: 'Vidathya Higher Education Online Exam System',
    description: 'A comprehensive platform implemented using React, designed for managing exams and users. Students can register, take exams online, and view their marks. Users can update their details, view institute teachers, and access various statistics through an interactive dashboard.',
    images: [project41, project42, project43],
    githubLink: 'https://github.com/Ruvini-Rangathara/Vidathya-Web-Exam-Frontend.git',
    liveLink: 'https://www.linkedin.com/posts/ruvini-rangathara-747756229_springboot-nodejs-expressjs-activity-7166149802169253891-UYWE?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk95acB6EycG4HjHpf0I7ypNRSISU3OOew',
}, {
    image: project51,
    title: 'Furry Care - Pet Care Web Application',
    description: 'A full-featured platform implemented using the MERN stack, providing pet care services and user profiles for a seamless and interactive experience for pet owners.',
    images: [project51],
    githubLink: 'https://github.com/Ruvini-Rangathara/Furry-Care-Web-Frontend.git',
    liveLink: 'https://www.linkedin.com/posts/ruvini-rangathara-747756229_mernstack-petcare-webdevelopment-activity-7156980719620108288-wszo?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk95acB6EycG4HjHpf0I7ypNRSISU3OOew',
}, {
    image: project61,
    title: 'Travel Package Management System',
    description: 'A robust solution implemented using microservices and Spring Boot, designed to efficiently manage travel packages, bookings, and customer details, ensuring a seamless travel planning experience.',
    images: [project61],
    githubLink: 'https://github.com/Ruvini-Rangathara/Spring-Boot-Course-Work-FrontEnd.git',
    liveLink: 'https://www.linkedin.com/posts/ruvini-rangathara-747756229_im-happy-to-share-this-next-travel-travel-activity-7148730538084773889-imVg?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk95acB6EycG4HjHpf0I7ypNRSISU3OOew',
}, {
    image: project71,
    title: 'Calorie Prediction API & Web App (Kaggle S5E5)',
    description: 'A Flask-based RESTful API powered by CatBoost ML model for calorie burn predictions, with a React + Material-UI frontend for real-time results. Includes input validation, error handling, and responsive UI/UX.',
    images: [project71, project72],
    githubLink: 'https://github.com/Ruvini-Rangathara/Calorie-Predictor-Frontend.git',
    liveLink: 'https://www.linkedin.com/posts/ruvini-rangathara-747756229_machinelearning-flask-react-activity-7371838693956845568-LpSe?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk95acB6EycG4HjHpf0I7ypNRSISU3OOew',
},
];


// ProjectCard Component
const ProjectCard = ({project, onClick}) => (

    <div
        onClick={() => onClick(project)}
        className="rounded-xl relative overflow-hidden shadow-lg cursor-pointer transition-transform transform hover:scale-105 w-full xl:w-full h-48 xl:h-48 xs:h-48 md:w-[25vw] md:h-[30vh]"
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

    useEffect(() => {
        AOS.init({
            once: false, // Whether animation should happen only once - while scrolling down
            mirror: false, // Whether elements should animate out while scrolling past them
        });
    }, []);

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

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-10 p-2 ">
            <div
                data-aos={"zoom-in"}
                data-aos-duration="500"
                className="bg-white p-6 shadow-md max-w-lg w-full rounded-xl">
                <img src={mainImage} alt="project" className="w-full h-64 xl:h-64 xs:h-48 object-cover mb-4 rounded-xl"/>
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
    useEffect(() => {
        AOS.init({
            duration: 3000,
            once: false, // Whether animation should happen only once - while scrolling down
            mirror: false, // Whether elements should animate out while scrolling past them
        });
    }, []);

    const [selectedProject, setSelectedProject] = useState(null);

    return (<section className="py-14 xl:py-14 xs:py-4 ">
        <div className="container mx-auto px-4 xs:px-0 xl:px-8">
            <Swiper
                data-aos="zoom-in"
                data-aos-offset="300"
                // data-aos-easing="ease-in-sine"
                spaceBetween={30}
                slidesPerView={1}
                pagination={{clickable: true}}
                modules={[FreeMode, Pagination]}
                className="pb-14"
                breakpoints={{
                    640: {
                        slidesPerView: 1, spaceBetween: 20,
                    }, 768: {
                        slidesPerView: 2, spaceBetween: 40,
                    }, 1024: {
                        slidesPerView: 3, spaceBetween: 40,
                    },
                }}
            >
                {Array.from({length: Math.ceil(projectData.length / 2)}, (_, i) => (
                    <SwiperSlide
                        key={i}>
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 ">
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
        const cvUrl = CVPath;
        window.open(cvUrl, '_blank');
    };

    useEffect(() => {
        AOS.init({
            duration: 3000,
            once: false, // Whether animation should happen only once - while scrolling down
            mirror: false, // Whether elements should animate out while scrolling past them
        });
    }, []);

    return (<section
        className="mt-10 relative bg-site bg-cover bg-no-repeat text-white py-20 flex justify-center items-center mb-6 xl:h-[50vh] xs:h-[40vh] xs:px-6">
        <div className="absolute inset-0 bg-accent bg-opacity-40"></div>
        <div
            data-aos={'fade-up'}
            className="relative text-center max-w-2xl leading-[20px]">
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

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false, // Whether animation should happen only once - while scrolling down
            mirror: false, // Whether elements should animate out while scrolling past them
        });
    }, []);

    return (<>
        <div id={'project_id'} className="xl:px-24 xs:px-0 px-24 mx-auto mt-10">

            <div
                data-aos="fade-up"
                className="text-center">
                <h2 className="text-accent text-3xl mb-2">Projects</h2>
                <p className="text-secondary/50 text-xl xs:text-xs xs:px-8">
                    Explore my completed software development projects.
                </p>
            </div>
            <ProjectSection/>
        </div>
        <Section/>
    </>);
};

export default Project;