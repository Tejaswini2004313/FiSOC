import React from "react";
import about from "../assets/about.jpg";

const About = () => {
  return (
    <div className="bg-bgcolor text-whitesmoke pt-12 pb-12" id="about">
      <h1 className="text-5xl font-bold mb-8 md:w-3/2 text-center text-blue">
        About Us
      </h1>{" "}
      <div className="px-4 lg:px-14 max-w-screen-4x1 mx-auto mt-2 mb-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex justify-center items-center w-full md:w-1/2">
            <div className="relative w-full aspect-w-1 aspect-h-1">
              <img
                src={about}
                alt="About Us"
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
          <div className="md:w-full mx-auto md:ml-8 mt-4 md:mt-0">
            <h2 className="text-3xl text-whitesmoke font-semibold mb-4 w-full">
              The Finance and Economics Club (FiSOC)
            </h2>
            <p className="w-full text-lg text-whitesmoke mb-8">
              The Finance and Economics Club (FiSOC) provides a platform for
              ardent students to come together to learn the intriguing world of
              finance and economics through seminars/webinars with industry
              experts and organizing debates and discussions to explore career
              opportunities in the financial sector. We aim to complement the
              mission of our college by spreading knowledge about financial
              independence among women.
            </p>
            <p className="text-lg text-whitesmoke mb-8">
              Head Student Coordinator: Snigdha Srivastava
            </p>
            <p className="text-lg text-whitesmoke mb-8">
              Email Id: snigdha.srivastava@cumminscollege.in
            </p>
            <p className="text-lg text-whitesmoke mb-8">
              Faculty coordinator : Prof. Parag Chaware
            </p>
            <p className="text-lg text-whitesmoke mb-8">
              Club Email Id: fisoc@cumminscollege.in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
