import React from "react";

export default function About() {
    return (<>
            <div className="flex justify-start mt-16">
                <img
                    className="xl:w-40 xl:h-40 object-cover rounded-full border-1 border-white xl:ml-8 xs:ml-2 xs:w-32 xs:h-32"
                    src="/assets/image/dp.png"
                    alt="Ruvini Rangathara"
                />
            </div>
            <p className="text-[12px] text-gray-500 xl:mx-0 mb-4 mt-4">
                Trainee Associate Software Engineer
                <br/>
                <span className={''}>@ Kingteza Software Solutions<br/> ( 2024 Apr - Present )</span>
            </p>
        </>)
}