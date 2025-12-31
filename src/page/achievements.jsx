import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaTrophy, FaCertificate } from "react-icons/fa";

const achievements = [
  {
    icon: <FaCertificate className="text-accent text-xl" />,
    title: "Batch Top – GDSE 61",
    org: "Institute of Software Engineering",
    year: "2024",
    tags: ["Academic Excellence"],
    desc: "Achieved batch top rank in Graduate Diploma in Software Engineering.",
  },
  {
    icon: <FaTrophy className="text-accent text-xl" />,
    title: "2nd Place – Hackathon",
    org: "PSR Vlogs",
    year: "2024",
    tags: ["Hackathon", "Microservices"],
    desc: "Secured 2nd place by developing a distributed Hotel Booking System.",
  },
  {
    icon: <FaTrophy className="text-accent text-xl" />,
    title: "1st Place – Debate Competition",
    org: "British Way English Academy",
    year: "2025",
    tags: ["Public Speaking", "Debate"],
    desc: "Won first place at the debate competition conducted by British Way English Academy.",
  },
];

const AchievementCard = ({ item }) => (
  <div className="bg-purple-50 border shadow-md p-6 rounded-lg flex flex-col h-full">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-sm">
        {item.icon}
      </div>
      <div>
        <h3 className="text-sm font-semibold leading-tight">
          {item.title}
        </h3>
        <p className="text-[11px] text-secondary/60">
          {item.org} • {item.year}
        </p>
      </div>
    </div>

    <p className="text-[12px] text-secondary/80 mt-1 leading-relaxed text-justify">
      {item.desc}
    </p>

    <div className="mt-3 flex flex-wrap gap-1">
      {item.tags.map((t, i) => (
        <span
          key={i}
          className="px-2 py-[2px] text-[10px] rounded-md bg-white border text-secondary"
        >
          {t}
        </span>
      ))}
    </div>
  </div>
);

const Achievements = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section
      id="achievements_id"
      className="xl:px-44 xs:px-10 xs:mt-10 mb-6"
    >
      {/* Header */}
      <div data-aos="fade-up" className="text-center mb-6">
        <h2 className="text-accent text-3xl mb-2">Achievements</h2>
        <p className="text-secondary/50 text-xl xs:text-xs">
          Recognitions, certifications, and community contributions.
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        data-aos="fade-up"
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="pb-10"
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {achievements.map((item, idx) => (
          <SwiperSlide key={idx} className="flex justify-center">
            <AchievementCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Achievements;
