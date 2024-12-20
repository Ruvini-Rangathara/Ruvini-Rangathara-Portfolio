import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {FreeMode, Pagination} from "swiper/modules";
import {FaQuoteLeft} from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [{
    id: 1,
    image: "bg-profileYasendra",
    name: "Yasendra Darshana",
    role: "Senior Manager - Academic Affairs at IJSE",
    content: "I had the pleasure of getting to know Ms Ruvini Rangathara during her time as a student at the IJSE. She possesses excellent skills in the field of software engineering and demonstrates a positive attitude towards her work. Ruvini is motivated, friendly and easy to work with. I highly recommend her for any software engineering position"

}, {
    id: 2,
    image: 'bg-profileRaveena',
    name: "Tharinda Raveena Serugollage",
    role: "Executive Academic Administration at IJSE",
    content: "I am pleased to write this recommendation for Ruvini Rangathara, who has consistently proven herself as an exceptional student in Institute and Software engineering (IJSE). Ruvini has not only demonstrated a deep understanding of the subject matter but has also consistently achieved outstanding results, showcasing her commitment to academic excellence.\n" + "\n" + "Moreover, beyond her academic achievements, Ruvini possesses excellent communication and interpersonal skills. " + "\n" + " As a demonstrator, she has shown a remarkable ability to convey complex technical information in an accessible manner, fostering an inclusive learning environment for other students. \n" + "\n" + "In conclusion, I have no doubt that Ruvini Rangathara would excel as a demonstrator in software engineering. Her academic achievements, coupled with her interpersonal skills, make her an ideal candidate to inspire and guide fellow students. I highly recommend Ruvini for any position that requires a combination of technical expertise, communication skills, and a passion for fostering academic excellence."
}, {
    id: 3,
    image: "bg-profileDanuja",
    name: "Danuja Greru",
    role: "Software Engineer & Lecturer at IJSE",
    content: "Having known Ruvini for a number of years, I heartily recommend her. She's a skilled and intimate girl. She was the best student in her class during her time with me, carrying responsibility along with a warm and smiley personality. During her IJSE demonstration period, she provided students with significant help. I wish her luck."
}, {
    id: 4,
    image: "bg-profileSachini",
    name: "Sachini Umayangana",
    role: "Software Engineer & Lecturer at IJSE",
    content: "Ruvini is one among the best students I've met. Her keen intellect and proactive approach to learning made her stand out showcasing her strong leadership qualities. This enhanced her own learning experience but also benefited her peers as a demonstrator. I am sure that her combination of technological prowess and academic excellence will position her as a standout individual with a promising future."
}];

const TestimonialCard = ({testimonial, onClick}) => (<div onClick={() => onClick(testimonial)}
                                                          className="bg-white border shadow-md p-4 rounded-lg cursor-pointer text-xl">
    <div className="flex items-center mb-4">
        <div className={`${testimonial.image} bg-cover bg-no-repeat w-12 h-12 rounded-full mr-4`}></div>
        <div>
            <h3 className="text-md font-semibold">{testimonial.name}</h3>
            <p className="text-xxs text-gray-500">{testimonial.role}</p>
        </div>
    </div>
    <div className={'mb-2'}>
        <FaQuoteLeft className={'text-lg text-accent/20 mx-auto xs:mx-0'}/>
    </div>
    <p className="xl:line-clamp-4 xs:line-clamp-6 text-xl xs:text-xs text-secondary/80 ">{testimonial.content}</p>
</div>);

const Modal = ({isOpen, onClose, testimonial}) => {

    useEffect(() => {
        AOS.init({
            once: false, // Whether animation should happen only once - while scrolling down
            mirror: false, // Whether elements should animate out while scrolling past them
        });
    }, []);

    if (!isOpen) return null;

    // Handle click outside of the modal content
    const handleClickOutside = (event) => {
        if (event.target.classList.contains('modal-background')) {
            onClose();
        }
    };

    return (<div
        className=" fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center xs:p-6 z-10 modal-background"
        onClick={handleClickOutside}
    >
        <div
            data-aos={"zoom-in"}
            data-aos-duration="500"
            className="bg-white p-6 rounded-md shadow-md max-w-lg w-full">

            <div className="flex items-center mb-4">
                <div className={`${testimonial.image} bg-cover bg-no-repeat w-12 h-12 rounded-full mr-4`}></div>
                <div>
                    <h3 className="text-md font-semibold">{testimonial.name}</h3>
                    <p className="text-xxs text-gray-500">{testimonial.role}</p>
                </div>
            </div>
            <div className={'mb-4'}>
                <FaQuoteLeft className={'text-lg text-accent/20 mx-auto md:mx-0 ml-0'}/>
            </div>
            <p className={'text-xl xs:text-xs text-secondary/80 '}>{testimonial.content}</p>
        </div>
    </div>);
};

const Testimonial = () => {

    useEffect(() => {
        AOS.init({
            duration: 3000, once: false, // Whether animation should happen only once - while scrolling down
            mirror: false, // Whether elements should animate out while scrolling past them
        });
    }, []);

    const [selectedTestimonial, setSelectedTestimonial] = useState(null);

    return (<div id={'testimonial_id'} className="xl:px-44 mb-6 xs:mb-0 xs:px-10  xs:mt-10">
        <h2
            data-aos="fade-up"
            className={'mt-8 text-accent text-3xl text-center mb-2'}>Recommendations</h2>
        <p
            data-aos="fade-up"
            className={'text-secondary/50 text-center mb-6 xl:mb-8 text-xl xs:text-xs xl:px-44 xs:px-1 '}>
            What People Are Saying
        </p>
        <Swiper
            data-aos="fade-up"
            spaceBetween={20}
            slidesPerView={1}
            pagination={{clickable: true}}
            modules={[FreeMode, Pagination]}
            className="pb-10"
            breakpoints={{
                640: {
                    slidesPerView: 1,
                }, 768: {
                    slidesPerView: 2,
                }, 1024: {
                    slidesPerView: 2,
                },
            }}
        >
            {testimonials.map(testimonial => (<SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} onClick={setSelectedTestimonial}/>
            </SwiperSlide>))}
        </Swiper>
        <Modal
            isOpen={!!selectedTestimonial}
            onClose={() => setSelectedTestimonial(null)}
            testimonial={selectedTestimonial}
        />
    </div>);
}

export default Testimonial;
