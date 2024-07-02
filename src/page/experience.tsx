import React from 'react';

const experiences = [{
    title: 'Trainee Associate Software Engineer',
    date: 'Apr 2024 - Present',
    description: '@ Kingteza Software Solutions',
}, {
    title: 'Demonstrator', date: 'Jan 2023 - Dec 2023', description: 'Institute of Software Engineering',
},];

const edu = [{
    title: 'Institute of Software Engineering',
    date: 'Jan 2022 - Aug 2024',
    description: 'Higher National Diploma in Software Engineering',
}, {
    title: 'Developers Stack Academy',
    date: 'Jan 2023 - Mar 2024',
    description: 'Higher National Diploma in Software Engineering',
},];


const Experience = () => {
    return (<></>
        // <div className={'flex xl:flex-row xs:flex-col px-32'}>
        //     <div className="max-w-4xl mx-auto">
        //         <div className={'flex'}>
        //             <div className={'text-xl'}>
        //                 <i className="fa-solid fa-briefcase"></i>
        //             </div>
        //             <h2 className="ml-2 text-xl font-bold mb-8">Experience</h2>
        //         </div>
        //         <div className="relative border-l-2 border-gray-400">
        //             {experiences.map((experience, index) => (
        //                 <div key={index} className="mb-8 ml-4">
        //                     <div
        //                         className="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white"></div>
        //                     <p className="text-xl text-secondary">{experience.date}</p>
        //                     <h3 className="text-xl font-semibold">{experience.title}</h3>
        //                     <p className="text-xl text-secondary">{experience.description}</p>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        //
        //     <div className="max-w-4xl mx-auto">
        //         <div className={'flex'}>
        //             <div className={'text-xl'}>
        //                 <i className="fa-solid fa-graduation-cap"></i>
        //             </div>
        //             <h2 className="ml-2 text-xl font-bold mb-8">Education</h2>
        //         </div>
        //         <div className="relative border-l-2 border-gray-400">
        //             {edu.map((experience, index) => (
        //                 <div key={index} className="mb-8 ml-4">
        //                     <div
        //                         className="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white"></div>
        //                     <p className="text-xl text-secondary">{experience.date}</p>
        //                     <h3 className="text-xl font-semibold">{experience.title}</h3>
        //                     <p className="text-xl text-secondary">{experience.description}</p>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </div>

    );
};

export default Experience;



