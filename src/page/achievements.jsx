import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaTrophy, FaCertificate } from "react-icons/fa";

const achievements = [
  {
    icon: <FaCertificate className="text-accent text-2xl" />,
    title: "Batch Top – GDSE 61",
    org: "Institute of Software Engineering (IJSE)",
    year: "2024",
    tags: ["Academic Excellence"],
    desc: "Achieved batch top rank in Graduate Diploma in Software Engineering (GDSE 61).",
  },
  {
    icon: <FaTrophy className="text-accent text-2xl" />,
    title: "2nd Place – PSR Vlogs Hackathon",
    org: "PSR Vlogs",
    year: "2024",
    tags: ["Hackathon", "Microservices"],
    desc: "Secured 2nd place by developing a distributed Hotel Booking Microservices System.",
  },
];

const AchievementCard = ({ item }) => (
  <div className="w-full max-w-[360px] md:max-w-[420px] px-4 bg-purple-50 border border-gray p-4 rounded-2xl flex flex-col">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white shadow-sm">
        {item.icon}
      </div>
      <div>
        <h3 className="text-xs font-semibold">{item.title}</h3>
        <p className="text-secondary/60 text-xxs">
          {item.org} • {item.year}
        </p>
      </div>
    </div>

    <p className="text-secondary/80 xl:text-xxs xs:text-xxs mt-1">
      {item.desc}
    </p>

    <div className="mt-3 flex flex-wrap gap-1">
      {item.tags.map((t, i) => (
        <span key={i} className="service-name">
          {t}
        </span>
      ))}
    </div>
  </div>
);

const Achievements = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: false, mirror: false });
  }, []);

  const [startCounting, setStartCounting] = useState(false);
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: false,
    threshold: 0.15,
  });

  useEffect(() => {
    setStartCounting(statsInView);
  }, [statsInView]);

  return (
    <section id="achievements_id" className="py-14 xl:py-14 xs:py-6">
      {/* Header */}
      <div data-aos="fade-up" className="text-center mb-6">
        <h2 className="text-accent text-3xl mb-2">Achievements</h2>
        <p className="text-secondary/50 text-xl xs:text-xs xs:px-8">
          Recognitions, certifications, and community contributions.
        </p>
      </div>

      {/* Cards Carousel */}
      <div className="container mx-auto px-4 xs:px-0 xl:px-8 flex justify-center">
        <Swiper
          data-aos="zoom-in"
          spaceBetween={24}
          slidesPerView={1}
          // centeredSlides
          pagination={{ clickable: true }}
          // autoplay={{ delay: 3500, disableOnInteraction: false }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="pb-14 max-w-6xl"
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
        >
          {achievements.map((a, idx) => (
            <SwiperSlide key={idx} className="!w-auto flex justify-center">
              <AchievementCard item={a} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Highlight Stats */}
      {/* <div
        ref={statsRef}
        className="mt-2 xl:mt-0 flex gap-6 justify-center flex-wrap xl:w-[50vw] xs:w-[90vw] mx-auto"
      >
        <div className="flex justify-center items-center flex-col">
          <div className="text-[22px] xl:text-3xl text-accent mb-1">
            {startCounting && <CountUp start={0} end={12} duration={3} />} +
          </div>
          <div className="text-center px-1 text-secondary xl:text-xs text-xs xs:text-[12px] uppercase tracking-[1px] max-w-[140px]">
            Certifications & Badges
          </div>
        </div>

        <div className="flex justify-center items-center flex-col">
          <div className="text-[22px] xl:text-3xl text-accent mb-1">
            {startCounting && <CountUp start={0} end={4} duration={3} />} +
          </div>
          <div className="text-center px-1 text-secondary xl:text-xs text-xs xs:text-[12px] uppercase tracking-[1px] max-w-[140px]">
            Hackathons & Awards
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Achievements;
