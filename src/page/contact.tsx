import React from 'react';

const Contact = () => {
    return (
        // <div className="flex mx-auto justify-center h-[90vh] items-center bg-gradient-to-br from-purple-500 to-indigo-500 p-4">
            <div className="xl:mb-10 mt-10 xs:px-10 container mx-auto border border-green h-[80vh] max-w-4xl bg-primary rounded-lg shadow-lg p-6 lg:p-10 flex flex-col md:flex-row md:space-x-8 xs:h-full xs:text-sm">
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-indigo-700 font-poppins">Let's talk</h2>
                    <p className="text-gray-600 mt-2 font-poppins">
                        To request a quote or want to meet up for coffee,
                        contact us directly or fill out the form and we will get back to you promptly.
                    </p>
                    <form className="mt-4 text-xl xs:text-xs">
                        <div className="mb-2">
                            <label className="block text-secondary font-poppins" htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full mt-2 p-1 rounded rounded-xl bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-poppins"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 font-poppins" htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full mt-2 p-1 rounded rounded-xl bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-poppins"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 font-poppins" htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                className="w-full mt-2 p-1 rounded rounded-xl bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-poppins"
                                rows="3"
                            ></textarea>
                        </div>
                        <button className="w-full p-2 mt-2 bg-indigo-600 text-white rounded rounded-xl hover:bg-indigo-700 transition duration-300 font-poppins">
                            Send Message
                        </button>
                    </form>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col items-center justify-center">
                    <div className="flex justify-center">
                        <img src="public/contact1.png" alt="Contact" className="w-64" />
                    </div>
                    <div className="mt-6 text-center text-gray-600 font-poppins">
                        <p>Ruvini Rangathara</p>
                        <p className="mt-2">+94 78 662 8489</p>
                        <p className="mt-2">ruvinisubhasinghe200009@gmail.com</p>
                        <div className="mt-4 flex justify-center space-x-4">
                            <a href="#" className="text-blue-500 hover:text-blue-700"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-blue-300 hover:text-blue-500"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-pink-500 hover:text-pink-700"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    );
};

export default Contact;
