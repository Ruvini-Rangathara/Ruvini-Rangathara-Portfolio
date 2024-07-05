import React from "react";

const Experience = () => {
  return (
    <>
      <section className="mt-20 py-14 bg-gray-50 pb-10">
        <div className="container mx-auto px-6 text-center">
          <h2
            className={
              " text-center text-accent text-3xl xs:text-[25px] sm:text-4xl xl:text-[40px] mb-2"
            }
          >
            My Services
          </h2>
          <p
            className={
              "text-secondary/50 text-center mb-10 text-xl xs:text-xs xl:px-44 xs:px-1 "
            }
          >
            Crafting Applications with Modern Tech Stack.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 px-16 xl:px-24 xs:px-2">
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <img
                    src="/assets/image/backend-database.png"
                    alt="Backend Development"
                    className="w-12 h-12"
                />
              </div>
              <h3 className="">Backend Development</h3>
              <p className="text-secondary/80 text-xs mt-2">
                Develop robust and scalable backend systems using modern
                frameworks and technologies to ensure high performance and security.
              </p>
              <div className="mt-4 flex items-center justify-center space-x-4">
                <img src="https://cdn.simpleicons.org/node.js/339933" alt="Node.js Icon" width="16" height="16"/>
                <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" alt="Java Icon" width="16"
                     height="16"/>
                <img src="https://cdn.simpleicons.org/spring/6DB33F" alt="Spring Icon" width="16" height="16"/>
                <img src="https://cdn.simpleicons.org/springboot/6DB33F" alt="Spring Boot Icon" width="16" height="16"/>
                <img src="https://cdn.simpleicons.org/python/3776AB" alt="Python Icon" width="16" height="16"/>
                <img src="https://cdn.simpleicons.org/mongodb/47A248" alt="MongoDB Icon" width="16" height="16"/>
                <img src="https://cdn.simpleicons.org/postgresql/336791" alt="PostgreSQL Icon" width="16" height="16"/>
                <img src="https://cdn.simpleicons.org/mysql/4479A1" alt="MySQL Icon" width="16" height="16"/>

              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <img
                    src="/assets/image/frontend.png"
                    alt="Frontend Development"
                    className="w-12 h-12"
                />
              </div>
              <h3 className="">Frontend Development</h3>
              <p className="text-secondary/80 text-xs mt-2">
                Create dynamic and responsive user interfaces with cutting-edge
                frontend technologies to provide an exceptional user experience.
              </p>
              <div className="mt-4 flex items-center justify-center space-x-4">
                <img src="https://cdn.simpleicons.org/html5/E34F26" alt="HTML5 Icon" width="16" height="16"/>
                <img src="https://cdn.simpleicons.org/css3/1572B6" alt="CSS3 Icon" width="16" height="16"/>
                <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript Icon" width="16" height="16"/>
                <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React Icon" width="16" height="16"/>
                <img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript Icon" width="16" height="16"/>
                <img src="https://cdn.simpleicons.org/redux/764ABC" alt="Redux Icon" width="16" height="16"/>
                <img src="https://cdn.simpleicons.org/bootstrap/7952B3" alt="Bootstrap Icon" width="16" height="16"/>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <img
                  src="/assets/image/other-tech.png"
                  alt="Other Technologies"
                  className="w-12 h-12"
                />
              </div>
              <h3 className="">Other Technologies</h3>
              <p className="text-secondary/80 text-xs  mt-2">
                Leverage a wide range of tools and platforms to deliver comprehensive
                solutions, including version control, cloud services, and continuous integration.
              </p>
              <div className="mt-4 flex items-center justify-center space-x-4">
                <img src="https://cdn.simpleicons.org/git/F05032" alt="Git Icon" width="16" height="16"/>
                <img src="https://cdn.simpleicons.org/github/181717" alt="GitHub Icon" width="16" height="16"/>
                <img src="https://cdn.simpleicons.org/docker/2496ED" alt="Docker Icon" width="16" height="16"/>
                <img src="https://img.icons8.com/color/48/000000/amazon-web-services.png" alt="AWS Icon" width="16" height="16"/>
                <img src="https://cdn.simpleicons.org/googlecloud/4285F4" alt="Google Cloud Icon" width="16"
                     height="16"/>
                <img src="https://cdn.simpleicons.org/linux/000000" alt="Linux Icon" width="16" height="16"/>
                  <img src="https://img.icons8.com/color/48/000000/windows-10.png" alt="Windows Icon" width="16" height="16"/>
                <img src="https://cdn.simpleicons.org/firebase/FFCA28" alt="Firebase Icon" width="16" height="16"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
