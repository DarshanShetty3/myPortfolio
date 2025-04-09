import Image from "next/image";
import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h2 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">
        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <Image
              src={"/WebHR.svg"}
              height={30}
              width={30}
              alt={"Darshan Shetty - SDE"}
            />
            <p className="text-gray-300 ">
              <span className="font-semibold"></span> Software Engineer - Dregal I Pvt Ltd.
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            July 2023 - Present,
          </p>
        </div>

        <p className="text-gray-300 pt-5">
          I am a dedicated software engineer currently working with a Non-Banking Financial Company (NBFC), where I focus on enhancing technology-driven solutions. My experience includes conducting data migration from Oracle to MySQL using Python scripts to optimize data management and performance. I have developed APIs using Java Servlets to enable seamless communication between various application components and am actively involved in front-end development using React to deliver engaging user interfaces and experiences.
          In addition, I am expanding my expertise in Node.js (Express) to streamline API integration and have created and executed unit tests to ensure robust and error-free APIs. With a strong foundation in MySQL, I specialize in database design, querying, and optimization. I also possess basic knowledge of AWS services, which I leverage for deploying and managing applications effectively. My passion lies in crafting elegant, efficient, and user-centric solutions while continuously advancing my technical skill set.
        </p>
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            ReactJS
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            HTML/CSS
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            JavaScript
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Typescript
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            NodeJS
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Java
          </div>
        </div>
      </div>
      <div className=" container mx-auto 2xl ">
        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <Image
              src={"/WebHR.svg"}
              height={30}
              width={30}
              alt={"Darshan Shetty - SDE"}
            />
            <p className="text-gray-300 ">
              <span className="font-semibold"></span> Trainee Software Developer - Credzpay fintech Pvt Ltd.
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            December 2022 - July 2023,
          </p>
        </div>
        <p className="text-gray-300 pt-5">
          Developed a cross-platform mobile application using React Native, demonstrating expertise in Android app
          development and optimizing performance for diverse devices.
          • Spearheaded front-end development for a high-performance website utilizing react.js, contributing to the
          design and implementation of scalable front-end architecture
          • Implemented responsive design principles, enhancing usability and compatibility across multiple screen sizes
          and devices.
          • Collaborated with the design team to ensure seamless integration of UI/UX elements, maintaining consistency
          and visual appeal.
        </p>
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            React Native
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Mobile Application Development
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            JavaScript
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
