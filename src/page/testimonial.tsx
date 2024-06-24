import React, { useState } from 'react';
import {FaQuoteLeft} from "react-icons/fa";

const testimonials = [
    { id: 1, name: "Anne Smith", role: "Customer", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!" },
    { id: 2, name: "John Doe", role: "Customer", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!" },
    { id: 3, name: "Jane Roe", role: "Customer", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!" },
    { id: 4, name: "Richard Roe", role: "Customer", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!" },
    { id: 5, name: "Jane Smith", role: "Customer", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!" },
    { id: 6, name: "John Smith", role: "Customer", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!" },
    { id: 7, name: "Anne Doe", role: "Customer", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!" },
    { id: 8, name: "Richard Smith", role: "Customer", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!" },
    { id: 9, name: "John Roe", role: "Customer", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!" },
    { id: 10, name: "Jane Smith", role: "Customer", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!" },
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
            <FaQuoteLeft className={'text-lg text-accent/20 mx-auto md:mx-0'}/>
        </div>
        <p className="line-clamp-2">{testimonial.content}</p>
    </div>
);

const Modal = ({isOpen, onClose, testimonial}) => {
    if (!isOpen) return null;
    return (
        <div className="text-xl fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center xs:p-6">
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
    const [showMore, setShowMore] = useState(false);
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);
    const visibleTestimonials = showMore ? testimonials : testimonials.slice(0, 4);

    return (
        <div className="xl:p-20 xs:p-2">
            <div className="flex flex-wrap -mx-2">
                {visibleTestimonials.map(testimonial => (
                    <div key={testimonial.id} className="w-full md:w-1/2 px-2 mb-4">
                        <TestimonialCard testimonial={testimonial} onClick={setSelectedTestimonial} />
                    </div>
                ))}
            </div>
            <div className="text-center mt-2">
                <button
                    onClick={() => setShowMore(!showMore)}
                    className="bg-white text-xl text-indigo-600 px-2 py-1 rounded-md shadow-md hover:bg-indigo-600 hover:text-white transition-colors border border-indigo-600 mb-6"
                >
                    {showMore ? 'See Less' : 'See More'}
                </button>
            </div>
            <Modal
                isOpen={!!selectedTestimonial}
                onClose={() => setSelectedTestimonial(null)}
                testimonial={selectedTestimonial}
            />
        </div>
    );
}

export default Testimonial;
