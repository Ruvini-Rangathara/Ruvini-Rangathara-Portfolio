import React, {useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {FreeMode, Pagination} from "swiper/modules";
import {FaQuoteLeft} from "react-icons/fa";

const testimonials = [{
    id: 1,
    image: "/assets/image/mrs_raveena.jpeg",
    name: "Tharinda Raveena Serugollage",
    role: "Executive Academic Administration at IJSE",
    content: "I am pleased to write this recommendation for Ruvini Rangathara, who has consistently proven herself as an exceptional student in Institute and Software engineering (IJSE). Ruvini has not only demonstrated a deep understanding of the subject matter but has also consistently achieved outstanding results, showcasing her commitment to academic excellence.\n" + "\n" + "Moreover, beyond her academic achievements, Ruvini possesses excellent communication and interpersonal skills. As a demonstrator, she has shown a remarkable ability to convey complex technical information in an accessible manner, fostering an inclusive learning environment for other students. \n" + "\n" + "In conclusion, I have no doubt that Ruvini Rangathara would excel as a demonstrator in software engineering. Her academic achievements, coupled with her interpersonal skills, make her an ideal candidate to inspire and guide fellow students. I highly recommend Ruvini for any position that requires a combination of technical expertise, communication skills, and a passion for fostering academic excellence."
}, {
    id: 2,
    image: "/assets/image/mr_yasendra.jpeg",
    name: "Yasendra Darshana",
    role: "Senior Manager - Academic Affairs at ISE",
    content: "I had the pleasure of getting to know Ms Ruvini Rangathara during her time as a student at the IJSE. She possesses excellent skills in the field of software engineering and demonstrates a positive attitude towards her work. Ruvini is motivated, friendly and easy to work with. I highly recommend her for any software engineering position"
}, {
    id: 3,
    image: "/assets/image/mr_danuja.jpeg",
    name: "Danuja Greru",
    role: "Software Engineer & Lecturer at IJSE",
    content: "Having known Ruvini for a number of years, I heartily recommend her. She's a skilled and intimate girl. She was the best student in her class during her time with me, carrying responsibility along with a warm and smiley personality. During her IJSE demonstration period, she provided students with significant help. I wish her luck."
}, {
    id: 4,
    image: "/assets/image/miss_sachini.jpeg",
    name: "Sachini Umayangana",
    role: "Software Engineer & Lecturer at IJSE",
    content: "Ruvini is one among the best students I've met. Her keen intellect and proactive approach to learning made her stand out showcasing her strong leadership qualities. This enhanced her own learning experience but also benefited her peers as a demonstrator. I am sure that her combination of technological prowess and academic excellence will position her as a standout individual with a promising future."
}];

const TestimonialCard = ({testimonial, onClick}) => (
    <div onClick={() => onClick(testimonial)}
         className="bg-white border shadow-md p-4 rounded-lg cursor-pointer text-xl">
    <div className="flex items-center mb-4">
        <img src={testimonial.image} alt='/user-profile.jpg' className="w-12 h-12 rounded-full mr-4"/>
        <div>
            <h3 className="text-md font-semibold">{testimonial.name}</h3>
            <p className="text-xs text-gray-500">{testimonial.role}</p>
        </div>
    </div>
    <div className={'mb-2'}>
        <FaQuoteLeft className={'text-lg text-accent/20 mx-auto xs:mx-0'}/>
    </div>
    <p className="xl:line-clamp-2 xs:line-clamp-6 text-xl xs:text-xs text-secondary/80 ">{testimonial.content}</p>
</div>);

const Modal = ({isOpen, onClose, testimonial}) => {
    if (!isOpen) return null;
    return (<div className=" fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center xs:p-6 z-10">
        <div className="bg-white p-6 rounded-md shadow-md max-w-lg w-full">
            <button onClick={onClose}
                    className="bg-white text-[#BEB2BB] px-2 py-1 rounded-md float-right shadow-md hover:bg-[#BEB2BB] hover:text-white transition-colors border border-[#BEB2BB]">Close
            </button>
            <div className="flex items-center mb-4">
                <img src={testimonial.image} alt='/user-profile.jpg' className="w-12 h-12 rounded-full mr-4"/>
                <div>
                    <h3 className="text-md font-semibold">{testimonial.name}</h3>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
            </div>
            <div className={'mb-4'}>
                <FaQuoteLeft className={'text-lg text-accent/20 mx-auto md:mx-0'}/>
            </div>
            <p className={'text-xl xs:text-xs text-secondary/80 '}>{testimonial.content}</p>
        </div>
    </div>);
};

const Testimonial = () => {
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);

    return (
        <div className="xl:px-44 mb-6 xs:mb-0 xs:px-10 mt-6">
        <h2 className={'mt-12 text-center text-accent text-3xl xs:text-[25px] sm:text-4xl xl:text-[40px] mb-2'}>Testimonials</h2>
        <p className={'text-secondary/50 text-center mb-6 text-xl xs:text-xs xl:px-44 xs:px-1 '}>
            What People Are Saying
        </p>
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{clickable: true}}
            modules={[FreeMode, Pagination]}
            className="pb-14"
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
