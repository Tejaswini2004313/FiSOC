import React from "react";
import logo2 from "../assets/logo2.png";
import beArtsy from "../assets/beArtsy.png";
import tradetrek from "../assets/tradetrek.jpg";
import orientation from "../assets/orientation.jpg";

const Events = () => {
  return (
    <div className="bg-bgcolor text-whitesmoke pt-1 pb-1" id="pastEvents">
      <h1 className="text-5xl font-bold mb-4 md:w-3/2 text-center text-blue">
        Past Events
      </h1>
      <div className="px-4 lg:px-14 max-w-screen-4x1 mx-auto mt-1 mb-1">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row items-center gap-4">
          {" "}
          {/* Reduced gap */}
          <div className="rounded-lg overflow-hidden w-64 h-64 md:w-96 md:h-96">
            <img
              src={tradetrek}
              alt=""
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
          <div className="md:w-3/4 mx-auto md:ml-4 mt-4 md:mt-0">
            {" "}
            {/* Adjusted margin and reduced gap */}
            <h2 className="text-3xl text-whitesmoke font-semibold mb-2 md:w-4/5">
              TradeTrek
            </h2>
            <p className="md:w-11/12 text-lg text-whitesmoke mb-4">
              TradeTrek involved 20 teams and 40 players. Each team had two
              players each, representing their country on the playground of
              trade. Each country owned a set of resources, and had to fulfill a
              pre-assigned goal, by buying quantifiable subgoals. By trading
              with other countries, they had to not only fulfill their goals,
              but also maximize their profits. Participants indulged in intense
              deliberations and deals, and excitement was buzzing in the air
              throughout. The day closed with a fierce Auction round, where
              countries could sell off their excess resources to increase their
              profit margin, and buy remnant subgoals to fulfill their goals.
              Participants whole-heartedly indulged in auctioning battles, with
              two or more countries vying for the same resources.
            </p>
          </div>
        </div>

        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row items-center gap-4">
          {" "}
          {/* Reduced gap */}
          <div className="md:w-3/4 mx-auto md:ml-4 mt-4 md:mt-0">
            {" "}
            {/* Adjusted margin and reduced gap */}
            <h2 className="text-3xl text-whitesmoke font-semibold mb-2 md:w-4/5">
              Be.artsy: Personal Finance Session
            </h2>
            <p className="md:w-11/12 text-lg text-whitesmoke mb-4">
              In an exclusive collaboration with Be.artsy, the official
              awareness partner for the Government of India, the National Stock
              Exchange, and the Bombay Stock Exchange, for a special Financial
              Literacy Session. CA Dipti Bhate Thakkar FiSOC Report 2023-2024 7
              imparted invaluable insights into the world of personal finance,
              and helped us understand how we can save and grow our money.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden w-64 h-64 md:w-96 md:h-96">
            <img
              src={beArtsy}
              alt=""
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>

        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row items-center gap-4">
          {" "}
          {/* Reduced gap */}
          <div className="rounded-lg overflow-hidden w-64 h-64 md:w-96 md:h-96">
            <img
              src={orientation}
              alt=""
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
          <div className="md:w-3/4 mx-auto md:ml-4 mt-4 md:mt-0">
            {" "}
            {/* Adjusted margin and reduced gap */}
            <h2 className="text-3xl text-whitesmoke font-semibold mb-2 md:w-4/5">
              Orientation
            </h2>
            <p className="md:w-11/12 text-lg text-whitesmoke mb-4">
              We kicked off the new academic year with an orientation session
              aimed at recruiting new team members. The event began with our
              heads discussing the foundation of the club, followed by a review
              of the events we have organized. Each head from our various teams
              then spoke about their roles and what their teams contribute to
              the club. We also imparted valuable financial knowledge to the
              attendees, enhancing their understanding of this crucial aspect.
              Previous team members shared their feedback and experiences,
              providing insightful perspectives. Overall, it was a great event
              that helped students learn more about the club and its activities,
              fostering a sense of community and enthusiasm among the new
              recruits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
