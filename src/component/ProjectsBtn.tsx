import {HiArrowRight} from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
      <div className={'mx-auto xl:mx-0'}>
        <div className={' relative w-[120px] h-[120px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'}>
          <img src={'/my-project.png'}
                 alt={''}
                 className={'animate-spin-slow w-full h-full max-w-[110px] max-h-[110px]'}
          />
          <HiArrowRight className={'absolute text-[#9F9F9F] text-2xl group-hover:translate-x-2 transition-all duration-300'}/>
        </div>
      </div>
  );
};

export default ProjectsBtn;