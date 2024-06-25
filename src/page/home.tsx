import React from 'react';

const Home = () => {
    return (
        <div className="px-10 xs:-px-10 bg-white h-full flex items-center justify-center xl:flex-row xs:flex-col py-10 ">
            <div className={''}>
                <h1
                    className={'text-indigo-600 text-4xl font-bold xs:text-[29px] sm:text-4xl xl:text-5xl mb-4 xl:leading-[50px]'}
                >Transforming Ideas <br/> Into {' '}
                    <span className={'text-[#9F9F9F]'}>Digital Reality</span>
                </h1>
                {/*Subtitle*/}
                <p
                    className={'xs:text-xs pr-6 text-xl max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-6 xs:leading-[20px] xs:text-justify'}
                >
                    Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                    Accusantium amet error est nostrum quae repellendus.
                    Aperiam commodi error fugiat incidunt ipsum porro
                    reiciendis saepe sequi similique soluta ullam,
                    vero voluptates!
                </p>

                <p
                    className={'text-[12px] mx-auto xl:mx-0 mb-6 xs:leading-[20px]'}
                >
                    Trainee Associate Software Engineer
                    <br/>
                    <span>
                        @ Kingteza Software Solutions ( 2024 Apr - Present )
                    </span>
                </p>


                {/*    position*/}

            </div>
            <div className={'flex xl:ml-6 mt-20'}>
                <img
                    src="Profile-Picture4.png"
                    alt="Logo"
                    className={'w-[250px] mx-auto'}/>
            </div>

        </div>
    );
};

export default Home;
