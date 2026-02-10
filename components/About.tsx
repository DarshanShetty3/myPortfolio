"use client";

import React from "react";

const About: React.FC<{}> = () => {
  return (
    <>
      <section
        id="about"
        className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
        style={{ transform: "scale(0.9" }}
      >
        <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
          <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
          <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
            EXPLORE NOW
          </p>
          <p className="text-gray-300 text-center ">
            As a passionate software engineer, I thrive on the intricate dance
            between logic and creativity. Currently immersed in the dynamic world
            of Web Development, my expertise centers around ReactJS and Java, where I seamlessly
            blend technology with innovation.
            <br />
            <br />
            With a fervor for crafting elegant solutions, I navigate the
            ever-evolving landscape of software development. My journey involves
            translating concepts into code, creating seamless user experiences,
            and constantly pushing the boundaries of what&#39;s possible
          </p>
        </div>
      </section>
      <div className="text-md flex justify-center">
        <button
          onClick={() => window.open("/darshan_resume.pdf", "_blank")}
          className="z-[1] padding-20 hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-10 border-[0.1px] border-white hover:border-transparent"
        >
          Open Resume
        </button>
      </div>
    </>
  );
};

export default About;
