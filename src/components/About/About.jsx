import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-5 "
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">

        {/* LEFT */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Nitesh Kumar
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
            <span className="text-white">I am a </span>
            <span className="text-[#8245ec]">
              <Typewriter
                words={[
                  "Fullstack Java Developer",
                  "Data Analyst",
                  "Coder",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h3>

          <p className="text-base sm:text-lg text-gray-400 mb-10 mt-6 leading-relaxed">
            I am a passionate Full-Stack Java Developer and Data Analyst fresher with a strong foundation in building responsive web applications and analyzing data to extract meaningful insights. I have hands-on experience with Java, Spring Boot, React, SQL, Python, and data analysis tools through academic and personal projects. I am eager to apply my skills to solve real-world problems and continuously learn modern technologies.
          </p>

          <a
            href="https://github.com/N123itesh/nitesh-resume"//  ***********************************************************************************************************************************************************
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 25px rgba(130,69,236,0.7)",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* RIGHT */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            {/* Glow wrapper */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-[26rem] md:h-[26rem] rounded-full">

              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full blur-2xl bg-purple-600 opacity-40"></div>

              {/* Inner glow ring */}
              {/* <div className="absolute inset-1 rounded-full shadow-[0_0_40px_rgba(130,69,236,0.8)]"></div> */}

              {/* Image */}
              <img
                src={profileImage}
                alt="Nitesh Kumar"
                className="relative w-full h-full rounded-full object-cover z-10"
              />
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
