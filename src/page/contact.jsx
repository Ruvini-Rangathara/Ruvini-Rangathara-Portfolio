import React, { useRef, useState } from 'react';
import * as emailjs from "emailjs-com";
import contactImg from '/assets/image/contact1.png';

const Contact = () => {
    const initialFormState = {
        from_name: '',
        from_email: '',
        message: ''
    };

    const [formState, setFormState] = useState(initialFormState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const { from_name, from_email, message } = formState;

        if (!from_name || !from_email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        emailjs.sendForm(import.meta.env.VITE_REACT_APP_EMAIL_SERVICE_ID, import.meta.env.VITE_REACT_APP_EMAIL_TEMPLATE_ID, form.current, import.meta.env.VITE_REACT_APP_EMAIL_USER_ID)
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
                setFormState(initialFormState);  // Reset form after successful submission
            }, (error) => {
                console.log(error.text);
                alert("Failed to send the message, please try again.");
            });
    };

    return (
        <div id={'contact_id'}
             className="xl:mb-14 xs:mb-4 xl:mt-14 xs:mt-2 xs:px-10 container mx-auto h-[80vh] max-w-4xl bg-primary px-6 lg:px-10 flex flex-col md:flex-row md:space-x-8 xs:h-full xs:text-sm">
            <div className="md:w-1/2">
                <h2 className={"text-accent text-3xl mb-2 mt-16 xl:mt-16 xs:mt-24"}>
                    Let's Talk
                </h2>
                <p className="text-gray-600 mt-2 ">
                    To request a quote or want to meet up for coffee,
                    contact us directly or fill out the form and we will get back to you promptly.
                </p>
                <form ref={form} onSubmit={sendEmail} className="mt-4 text-xl xs:text-xs">
                    <div className="mb-2">
                        <label className="block " htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name={'from_name'}
                            value={formState.from_name}
                            onChange={handleChange}
                            className="w-full mt-2 p-1 rounded rounded-xl bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/10 "
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block " htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name={'from_email'}
                            value={formState.from_email}
                            onChange={handleChange}
                            className="w-full mt-2 p-1 rounded rounded-xl bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/10"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block " htmlFor="message">Your Message</label>
                        <textarea
                            id="message"
                            name={'message'}
                            onChange={handleChange}
                            value={formState.message}
                            className="w-full mt-2 p-1 rounded rounded-xl bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/10 "
                            rows="3"
                        ></textarea>
                    </div>
                    <button
                        className="hover:scale-105 px-2 xs:mb-8 p-2 mt-2 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200  text-primary rounded rounded-xl hover:bg-accent/70 transition duration-300 mb-0 xl:mb-0 xs:mb-12">
                        Send Message
                    </button>
                </form>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col items-center justify-center hidden xl:block">
                <div className="flex justify-center mt-8 md:pt-8 ">
                    <div className={'xl:pt-20 pt-0'}>
                        <img src={contactImg} alt="Contact" className="w-64"/>
                    </div>
                </div>
                <div className="mt-2 xl:mt-6 text-center  font-poppins">
                    <p>Ruvini Rangathara</p>
                    <p className="mt-2">ruvinisubhasinghe200009@gmail.com</p>
                    <div className="mt-4 flex justify-center space-x-4">
                        <a
                            href="https://web.facebook.com/ruvini.rangathara.96"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-blue-500 hover:text-blue-700"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://x.com/Ruvini489"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-blue-300 hover:text-blue-500"
                        >
                            <i className="fab fa-twitter"></i></a>
                        <a
                            href="https://www.instagram.com/ruvinirangathara/"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-pink-500 hover:text-pink-700"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
