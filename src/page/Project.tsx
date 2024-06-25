// icons
import {
    RxCrop,
    RxPencil2,
    RxDesktop,
    RxReader,
    RxRocket, RxArrowTopRight,
} from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from "swiper/modules";

// data
const projectData = [
    {
        image: '/test.png',
        title: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda autem cupiditate, error expedita id impedit inventore necessitatibus nihil, non nostrum obcaecati officia quam quod'
    },
    {
        image: '/test.png',
        title: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda autem cupiditate, error expedita id impedit inventore necessitatibus nihil, non nostrum obcaecati officia quam quod'
    },
    {
        image: '/test.png',
        title: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda autem cupiditate, error expedita id impedit inventore necessitatibus nihil, non nostrum obcaecati officia quam quod'
    },
    {
        image: '/test.png',
        title: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda autem cupiditate, error expedita id impedit inventore necessitatibus nihil, non nostrum obcaecati officia quam quod'
    },
    {
        image: '/test.png',
        title: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda autem cupiditate, error expedita id impedit inventore necessitatibus nihil, non nostrum obcaecati officia quam quod'
    },
];

export const ProjectSection = () => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            }}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className={'mx-auto pb-10'}
        >
            {projectData.map((item, index) => {
                return (
                    <SwiperSlide key={index} className="flex justify-center h-[340px]">
                        <div className={'w-[260px] shadow-md bg-indigo-50 h-full rounded-lg p-4 flex flex-wrap items-center justify-between group cursor-pointer hover:bg-[rgba(89,65,169,0.15)]'}>
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
                                <p className={'text-justify text-xs line-clamp-6'}>{item.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

const Project = () => {
    return (
        <div className={'mx-auto xl:p-16 xs:px-0 mt-12'}>
            <div className={'text-center mb-8'}>
                <h2 className={'text-3xl font-bold text-indigo-600 mb-2'}>Projects</h2>
                <p className={'text-accent xl:text-xl xs:text-xs xl:px-20 xs:px-0'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    A assumenda autem cupiditate, error expedita id impedit inventore
                    necessitatibus nihil, non nostrum obcaecati officia quam quod
                    saepe totam vitae voluptates? Asperiores?
                </p>
            </div>
            <ProjectSection />
            <div className="swiper-pagination mt-8 flex justify-center"></div>
        </div>
    );
};

export default Project;
