import React from "react";
import { Carousel } from "flowbite-react";
import logo2 from "../assets/logo.png";

const Home = () => {
  const handleQuizClick = () => {
    window.location.href = "https://kahoot.com/";
  };

  return (
    <div className="bg-bgcolor" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2x1 mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="md:w-1/3 mx-auto ml-1">
              <img src={logo2} alt="" className="w-48 h-48 md:w-64 md:h-64" />
            </div>
            {/* here text */}
            <div className="md:w-1/2 mx-auto mr-6">
              <h1 className="text-5xl font-semibold mb-4 text-whitesmoke md:w-3/4 leading-snug">
                Welcome to <span className="text-blue leading-snug">FiSOC</span>
              </h1>
              <p className="text-whitesmoke text-base mb-2">
                Finance and Economics Club
              </p>
            </div>
          </div>

          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="md:w-1/3 mx-auto ml-1">
              <img src={logo2} alt="" className="w-48 h-48 md:w-64 md:h-64" />
            </div>
            {/* here text */}
            <div className="md:w-1/2 mx-auto mr-6">
              <h1 className="text-5xl font-semibold mb-4 text-whitesmoke md:w-3/4 leading-snug">
                {" "}
                <span className="text-blue leading-snug">Objectives</span>
              </h1>
              <p className="text-whitesmoke text-base mb-8">
                ● To learn about money as a life skill.
                <br />● To explore career and internship opportunities in the
                field of finance. <br />● To understand how decentralized
                finance is changing the financial landscape through technology
                and how we as engineers can contribute. <br />● To provide a
                platform for finance and economics enthusiasts to build a
                community and share ideas.
                <br />● To spread awareness about basics of personal finance and
                budgeting.
              </p>
            </div>
          </div>

          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="md:w-1/3 mx-auto ml-1">
              <img src={logo2} alt="" className="w-48 h-48 md:w-64 md:h-64" />
            </div>
            {/* here text */}
            <div className="md:w-1/2 mx-auto mr-6">
              <h1 className="text-5xl font-semibold mb-4 text-whitesmoke md:w-3/4 leading-snug">
                Ready to test your{" "}
                <span className="text-blue leading-snug">
                  Finance and Economics knowledge?
                </span>
              </h1>
              <p className="text-whitesmoke text-base mb-8">
                Finance and Economics Club
              </p>
              <button
                onClick={handleQuizClick} // Added onClick handler
                className="mt-4 px-8 py-3 bg-[#88e1ff] text-white font-semibold rounded-lg shadow-lg hover:bg-[#25799b] transition duration-300 ease-in-out transform hover:scale-105"
              >
                Take the Quiz
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
