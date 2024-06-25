// icons
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {FreeMode, Pagination} from "swiper/modules";

// data
const projectData = [
    {
    image: '/test.png',
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda autem cupiditate, error expedita id impedit inventore necessitatibus nihil, non nostrum obcaecati officia quam quod'
}, {
    image: '/test.png',
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda autem cupiditate, error expedita id impedit inventore necessitatibus nihil, non nostrum obcaecati officia quam quod'
}, {
    image: '/test.png',
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda autem cupiditate, error expedita id impedit inventore necessitatibus nihil, non nostrum obcaecati officia quam quod'
}, {
    image: '/test.png',
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda autem cupiditate, error expedita id impedit inventore necessitatibus nihil, non nostrum obcaecati officia quam quod'
}, {
    image: '/test.png',
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda autem cupiditate, error expedita id impedit inventore necessitatibus nihil, non nostrum obcaecati officia quam quod'
},];

export const ProjectSection = () => {
    return (<Swiper
            slidesPerView={4}
            spaceBetween={30}
            breakpoints={{
                320: {
                    slidesPerView: 1, spaceBetween: 10,
                }, 640: {
                    slidesPerView: 2, spaceBetween: 20,
                }, 1024: {
                    slidesPerView: 3, spaceBetween: 30,
                }, 1280: {
                    slidesPerView: 4, spaceBetween: 30,
                },
            }}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className={'mx-auto pb-14'}
        >
            {projectData.map((item, index) => {
                return (<SwiperSlide key={index} className="flex justify-center mt-2">
                        <div
                            className={'z-10 w-[260px] shadow-md bg-accent/5 h-full rounded-lg p-4 flex flex-wrap items-center justify-between group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] hover:scale-105 transform transition-transform duration-200 ease-in-out'}>
                            {/* image */}
                            <div className={'mb-4'}>
                                <img
                                    src={item.image}
                                    alt="project"
                                    className={'w-full h-36 object-cover rounded-lg'}
                                />
                            </div>
                            {/* title and description */}
                            <div className={'mb-4 flex-1'}>
                                <div className={'mb-2 text-md'}>{item.title}</div>
                                <p className={'text-justify text-xs line-clamp-6 leading-[18px]'}>{item.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>);
            })}
        </Swiper>);
};

export const Section = () => {
    return (
        <section className="mt-10 relative bg-site bg-cover bg-no-repeat text-white py-20 flex justify-center items-center mb-6 xl:h-[50vh] xs:h-[40vh] xs:px-6">
            <div className="absolute inset-0 bg-indigo-600 bg-opacity-40"></div>
            <div className="relative text-center max-w-2xl leading-[20px]">
                <h1 className="xs:text-3xl text-4xl font-bold mb-4 ">Have any project on mind?</h1>
                <p className="mb-8 xl:text-xl xs:text-xs">
                    <span className={'leading-[20px]'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua nostrud.
                    </span>
                </p>
                <div className="flex justify-center space-x-4">
                    <button
                        className="bg-white text-indigo-600 px-4 py-1 xl:text-xl xs:text-xs rounded-full hover:scale-105 transform transition-transform duration-200 ease-in-out">
                        Download CV
                    </button>
                    <button
                        className="border-2 border-white px-6 py-1  xl:text-xl xs:text-xs rounded-full hover:bg-indigo-600 hover:scale-105 transform transition-transform duration-200 ease-in-out">
                        Hire Me
                    </button>
                </div>
            </div>
        </section>
    );
};


const Project = () => {
    return (
        <>
            <div className={'px-[2rem] mx-auto mt-12'}>
                <div className={'text-center mb-8'}>
                    <h2 className={'text-3xl font-bold text-indigo-600 mb-2'}>Projects</h2>
                    <p className={'text-secondary xl:text-xl xs:text-xs xl:px-44 xs:px-1 xs:leading-[20px] xs:text-justify'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        A assumenda autem cupiditate, error expedita id impedit inventore
                        necessitatibus nihil, non nostrum obcaecati officia quam quod
                        saepe totam vitae voluptates? Asperiores?
                    </p>
                </div>
                <div className={'xl:px-24'}>
                    <ProjectSection/>
                </div>
                <div className="swiper-pagination mt-8 flex justify-center"></div>
            </div>
            <Section/>
        </>);
};

export default Project;
