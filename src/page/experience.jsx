import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';

const experiences = [
    {
        id: 1,
        title: "Associate Software Engineer",
        company: "Kingteza Software Solutions - (Hybrid)",
        duration: "Nov 2024 - Present",
        description:
            "Currently working as an Associate Software Engineer at Kingteza Software Solutions, focusing on building scalable and efficient full-stack applications to solve complex technical challenges.",
    },
    {
        id: 2,
        title: "Trainee Associate Software Engineer",
        company: "BIZ Software Solutions",
        duration: "Apr 2024 - Oct 2024",
        description:
            "Successfully contributed to developing high-quality software solutions during a seven-month internship, gaining hands-on experience in agile development processes and problem-solving skills.",
    },
    {
        id: 3,
        title: "Academic Demonstrator",
        company: "Institute of Software Engineering (IJSE)",
        duration: "Jan 2023 - Dec 2023",
        description:
            "Assist in conducting practical sessions, tutorials, and workshops related to software engineering under the guidance of course instructors. Provide guidance and support to students in understanding module concepts and practical applications.",
    },
];

const ExperienceCard = ({ experience, onClick }) => (
    <div
        onClick={() => onClick(experience)}
        className="bg-white border shadow-md p-8 rounded-lg cursor-pointer hover:scale-105 transition-transform text-xl"
    >
        <h3 className="text-xl font-semibold text-blue-600 mb-2">{experience.title}</h3>
        <p className="text-sm text-gray-500 mb-2">
            {experience.company}
            <br />
            <span className="text-gray-400">{experience.duration}</span>
        </p>
        <p className="text-gray-700 text-sm leading-relaxed xl:line-clamp-4 xs:line-clamp-4 text-justify">
            {experience.description}
        </p>
    </div>
);

const Modal = ({ isOpen, onClose, experience }) => {
    useEffect(() => {
        AOS.init({
            once: false,
            mirror: false,
        });
    }, []);

    if (!isOpen) return null;

    const handleClickOutside = (event) => {
        if (event.target.classList.contains('modal-background')) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center xs:p-6 z-10 modal-background"
            onClick={handleClickOutside}
        >
            <div
                data-aos="zoom-in"
                className="bg-white p-6 rounded-md shadow-md max-w-lg w-full"
            >
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                    {experience.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                    {experience.company}
                    <br />
                    <span className="text-gray-400">{experience.duration}</span>
                </p>
                <p className="text-gray-700 text-sm leading-relaxed text-justify">
                    {experience.description}
                </p>
            </div>
        </div>
    );
};

const Experience = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false,
            mirror: false,
        });
    }, []);

    const [selectedExperience, setSelectedExperience] = useState(null);

    return (
        <div id="experience_id" className="xl:px-44 mb-6 xs:mb-0 xs:px-10 xs:mt-10">
            <h2
                data-aos="fade-up"
                className="mt-8 text-accent text-3xl text-center mb-2"
            >
                Experience
            </h2>
            <p
                data-aos="fade-up"
                className="text-secondary/50 text-center mb-6 xl:mb-8 text-xl xs:text-xs xl:px-44 xs:px-1"
            >
                My Professional Journey
            </p>
            <Swiper
                data-aos="fade-up"
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                modules={[FreeMode, Pagination]}
                className="pb-10"
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {experiences.map((experience) => (
                    <SwiperSlide key={experience.id}>
                        <ExperienceCard
                            experience={experience}
                            onClick={setSelectedExperience}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Modal
                isOpen={!!selectedExperience}
                onClose={() => setSelectedExperience(null)}
                experience={selectedExperience}
            />
        </div>
    );
};

export default Experience;
