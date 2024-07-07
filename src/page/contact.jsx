import React from 'react';

const Contact = () => {
    return (<div
            className="xl:mb-14 xs:mb-4 xl:mt-14 xs:mt-2 xs:px-10 container mx-auto h-[80vh] max-w-4xl bg-primary px-6 lg:px-10 flex flex-col md:flex-row md:space-x-8 xs:h-full xs:text-sm">
            <div className="md:w-1/2">
                <h2 className={" text-accent text-3xl xs:text-[25px] sm:text-4xl xl:text-[40px] mb-2 mt-16"}>
                   Let's Talk
                </h2>
                <p className="text-gray-600 mt-2 ">
                    To request a quote or want to meet up for coffee,
                    contact us directly or fill out the form and we will get back to you promptly.
                </p>
                <form className="mt-4 text-xl xs:text-xs">
                    <div className="mb-2">
                        <label className="block " htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full mt-2 p-1 rounded rounded-xl bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/10 "
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block " htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full mt-2 p-1 rounded rounded-xl bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/10"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block " htmlFor="message">Your Message</label>
                        <textarea
                            id="message"
                            className="w-full mt-2 p-1 rounded rounded-xl bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/10 "
                            rows="3"
                        ></textarea>
                    </div>
                    <button
                        className="hover:scale-105 px-2 xs:mb-4 p-2 mt-2 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200  text-primary rounded rounded-xl hover:bg-accent/70 transition duration-300 ">
                        Send Message
                    </button>
                </form>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col items-center justify-center hidden xl:block">
                <div className="flex justify-center mt-8  md:pt-8">
                    <img src="/assets/image/contact1.png" alt="Contact" className="w-64 mt-20"/>
                </div>
                <div className="mt-2 xl:mt-6 text-center  font-poppins">
                    <p>Ruvini Rangathara</p>
                    {/*<p className="mt-2">+94 78 662 8489</p>*/}
                    <p className="mt-2">ruvinisubhasinghe200009@gmail.com</p>
                    <div className="mt-4 flex justify-center space-x-4">
                        <a href="#" className="text-blue-500 hover:text-blue-700"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="text-blue-300 hover:text-blue-500"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-pink-500 hover:text-pink-700"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>);
};

export default Contact;
