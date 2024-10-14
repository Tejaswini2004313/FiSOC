import React from "react";
import { useNavigate } from "react-router-dom";
import photo1 from "../assets/blog.jpg";
import photo2 from "../assets/newsletter.png";
import photo3 from "../assets/resources.webp";

const Content = () => {
  const navigate = useNavigate();

  const newsletters = [
    {
      id: 1,
      title: "BLOGS",
      image: photo1,
      link: "/blog", // Updated link
    },
    {
      id: 2,
      title: "NEWSLETTERS",
      image: photo2,
      link: "/newsletter", // Updated link
    },
    {
      id: 3,
      title: "RESOURCES",
      image: photo3,
      link: "/resources", // Updated link
    },
  ];

  return (
    <div className="bg-bgcolor text-whitesmoke pt-4 pb-4" id="content">
      <h1 className="text-5xl font-bold mb-4 md:w-3/2 text-center text-blue">
        Content
      </h1>
      <div className="px-4 lg:px-14 max-w-screen-4x1 mx-auto mt-4 mb-4">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
          {newsletters.map((newsletter) => (
            <div
              key={newsletter.id}
              onClick={() => navigate(newsletter.link)}
              className="mx-auto relative mb-12 cursor-pointer"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={newsletter.image}
                  alt={newsletter.title}
                  className="object-cover w-full h-full hover:scale-95 transition-all duration-300"
                />
              </div>
              <div className="text-center px-4 py-8 bg-bgcolor shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
                <h3 className="mb-3 text-whitesmoke font-semibold">
                  {newsletter.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
