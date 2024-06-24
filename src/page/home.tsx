import React from 'react';
import ProjectsBtn from "../component/ProjectsBtn.tsx";

const Home = () => {
    return (
        <div className="bg-white h-full flex items-center justify-center flex-row py-10 ">
            <div>
                <h1
                    className={'text-indigo-600 text-4xl font-bold xs:text-2xl sm:text-4xl xl:text-5xl mb-4 xl:leading-[50px]'}
                >Transforming Ideas <br/> Into {' '}
                    <span className={'text-[#9F9F9F]'}>Digital Reality</span>
                </h1>
                {/*Subtitle*/}
                <p
                    className={'xs:text-xs text-xl max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-6 xl:mb-6 '}
                >
                    Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                    Accusantium amet error est nostrum quae repellendus.
                    Aperiam commodi error fugiat incidunt ipsum porro
                    reiciendis saepe sequi similique soluta ullam,
                    vero voluptates!
                </p>
                {/*    btn*/}
                <div className={'flex justify-start relative'}>
                    <ProjectsBtn/>
                </div>
            </div>
            <div className={'xl:flex hidden'}>
                <img
                    src="portfolio.png"
                    alt="Logo"
                    className={'w-[25vw] h-[55vh]'}/>
            </div>

        </div>
    );
};

export default Home;
