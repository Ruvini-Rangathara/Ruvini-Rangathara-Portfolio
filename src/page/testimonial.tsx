import React, { useState } from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {FreeMode, Pagination} from "swiper/modules";
import {FaQuoteLeft} from "react-icons/fa";

const testimonials = [
    { id: 1, name: "Anne Smith", role: "Customer", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!" },
    { id: 2, name: "John Doe", role: "Customer", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!" },
    { id: 3, name: "Jane Roe", role: "Customer", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!" },
    { id: 4, name: "Richard Roe", role: "Customer", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!" },
    { id: 5, name: "Jane Smith", role: "Customer", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!" },
    { id: 6, name: "John Smith", role: "Customer", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!" },
   ];

const TestimonialCard = ({ testimonial, onClick }) => (
    <div onClick={() => onClick(testimonial)} className="bg-white shadow-md p-4 rounded-md cursor-pointer text-xl">
        <div className="flex items-center mb-4">
            <img src="user-profile.jpg" alt={testimonial.name} className="w-12 h-12 rounded-full mr-4"/>
            <div>
                <h3 className="text-md font-semibold">{testimonial.name}</h3>
                <p className="text-xs text-gray-500">{testimonial.role}</p>
            </div>
        </div>
        <div className={'mb-2'}>
            <FaQuoteLeft className={'text-lg text-accent/20 mx-auto xs:mx-0'}/>
        </div>
        <p className="xl:line-clamp-2 xs:line-clamp-6 leading-[20px]">{testimonial.content}</p>
    </div>
);

const Modal = ({isOpen, onClose, testimonial}) => {
    if (!isOpen) return null;
    return (
        <div className="text-xl fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center xs:p-6 z-10">
            <div className="bg-white p-6 rounded-md shadow-md max-w-lg w-full">
                <button onClick={onClose} className="bg-white text-[#BEB2BB] px-2 py-1 rounded-md float-right shadow-md hover:bg-[#BEB2BB] hover:text-white transition-colors border border-[#BEB2BB]">Close
                </button>
                <div className="flex items-center mb-4">
                    <img src="user-profile.jpg" alt={testimonial.name} className="w-12 h-12 rounded-full mr-4"/>
                    <div>
                        <h3 className="text-md font-semibold">{testimonial.name}</h3>
                        <p className="text-xs text-gray-500">{testimonial.role}</p>
                    </div>
                </div>
                <div className={'mb-4'}>
                    <FaQuoteLeft className={'text-lg text-accent/20 mx-auto md:mx-0'}/>
                </div>
                <p>{testimonial.content}</p>
            </div>
        </div>
    );
};

const Testimonial = () => {
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);

    return (
        <div className="xl:px-44 mb-6 xs:px-10">
            <h2 className={'mt-12 text-3xl text-center font-bold text-indigo-600 mb-6'}>Testimonials</h2>
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                navigation
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
                        slidesPerView: 2,
                    },
                }}
            >
                {testimonials.map(testimonial => (
                    <SwiperSlide key={testimonial.id}>
                        <TestimonialCard testimonial={testimonial} onClick={setSelectedTestimonial} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Modal
                isOpen={!!selectedTestimonial}
                onClose={() => setSelectedTestimonial(null)}
                testimonial={selectedTestimonial}
            />
        </div>
    );
}

export default Testimonial;
