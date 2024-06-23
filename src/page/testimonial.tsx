import React, { useState } from 'react';

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
    <div onClick={() => onClick(testimonial)} className="bg-white shadow-md p-4 rounded-md cursor-pointer text-[13px]">
        <div className="flex items-center mb-4">
            <img src="user-profile.jpg" alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
            <div>
                <h3 className="text-md font-semibold">{testimonial.name}</h3>
                <p className="text-[12px] text-gray-500">{testimonial.role}</p>
            </div>
        </div>
        <p className="line-clamp-2">{testimonial.content}</p>
    </div>
);

const Modal = ({ isOpen, onClose, testimonial }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-md shadow-md max-w-lg w-full">
                <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded-md float-right">Close</button>
                <div className="flex items-center mb-4">
                    <img src="user-profile.jpg" alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                        <h3 className="text-md font-semibold">{testimonial.name}</h3>
                        <p className="text-[12px] text-gray-500">{testimonial.role}</p>
                    </div>
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
        <div className="p-6">
            <div className="flex flex-wrap -mx-2">
                {visibleTestimonials.map(testimonial => (
                    <div key={testimonial.id} className="w-full md:w-1/2 px-2 mb-4">
                        <TestimonialCard testimonial={testimonial} onClick={setSelectedTestimonial} />
                    </div>
                ))}
            </div>
            <div className="text-center mt-4">
                <button
                    onClick={() => setShowMore(!showMore)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
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
