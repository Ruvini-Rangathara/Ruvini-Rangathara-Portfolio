import React from "react";

export default function About() {
    return ( <div id={'about_id'}>
        <h2 className={"hidden xl:block text-center text-accent text-3xl xs:text-[25px] sm:text-4xl xl:text-[40px] mb-2 mt-16"}>
            About Me
        </h2>
        <div className="flex justify-between xs:justify-center xs:items-center mt-16 xs:mt-4 mx-auto xl:px-48 xs:px-10 xl:flex-row xs:flex-col-reverse">
            <div className={'px-20 xs:px-0'}>
                <p className={'px-4 xl:text-xs text-xs xs:text-xxs mt-2 xs:leading-relaxed leading-relaxed '}>
                    Hi, I'm Ruvini Rangathara, a dedicated and passionate Full
                    Stack Software Engineer currently working as a Trainee Associate
                    Software Engineer at Kingteza Software Solutions. With a keen
                    interest in developing efficient and scalable software solutions,
                    I am always eager to take on new challenges and expand my technical expertise.
                </p>
                <p className="px-4  text-[12px] text-gray-500 xl:mx-0 mb-2 mt-4">
                    Trainee Associate Software Engineer
                    <br/>
                    <span className={''}>@ Kingteza Software Solutions<br/> ( 2024 Apr - Present )</span>
                </p>
                <div className="mt-2 flex justify-start space-x-4 px-4 ">
                    <a href="#" className="text-pink-500 hover:text-pink-700"><i className="fa-regular fa-envelope"></i></a>
                    <a href="#" className="text-blue-300 hover:text-blue-500"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="text-green-500 hover:text-green-700"><i className="fab fa-whatsapp"></i></a>
                </div>

                <button className={'mx-4 px-4 py-2 mt-4 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 text-primary text-xs rounded-lg hover:scale-105 '}>
                    Download CV
                </button>
            </div>

            <img
                className="xl:w-[350px] xl:h-[350px] object-cover xl:ml-8 xs:ml-2 xs:w-[240px] xs:h-[240px]"
                src="/assets/image/dp2.png"
                alt="Ruvini Rangathara"
            />
        </div>
    </div>)
}