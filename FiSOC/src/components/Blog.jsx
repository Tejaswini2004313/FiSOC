import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { fireDb } from "../firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom"; // For navigation

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate(); // To navigate to the BlogInfo page

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogCollection = collection(fireDb, "blogPost");
      const blogSnapshot = await getDocs(blogCollection);
      const blogList = blogSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogList);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="bg-bgcolor text-whitesmoke pt-4 pb-4" id="blogs">
      <h1 className="text-5xl font-bold mb-4 md:w-3/2 text-center text-blue">
        Blogs
      </h1>
      <div className="px-4 lg:px-14 max-w-screen-4x1 mx-auto mt-4 mb-4">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div
                key={blog.id}
                className="mx-auto relative mb-12 cursor-pointer w-full max-w-xs"
                onClick={() => navigate(`/blog/${blog.id}`)} // Navigate to BlogInfo page
              >
                <div className="bg-bgcolor border border-whitesmoke rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-64">
                  <div className="p-6 flex flex-col justify-between h-full">
                    <h3 className="text-lg font-bold text-whitesmoke mb-2">
                      {blog.title}
                    </h3>
                    <p className="text-whitesmoke mb-4 flex-grow">
                      {blog.content.length > 100
                        ? blog.content.substring(0, 100) + "..."
                        : blog.content}
                    </p>
                    <div className="text-center mt-auto">
                      <a
                        href={`/blog/${blog.id}`}
                        className="font-bold text-blue hover:text-whitesmoke"
                      >
                        Read More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="11"
                          viewBox="0 0 17 11"
                          fill="none"
                          className="inline-block ml-2"
                        >
                          <path
                            d="M8.5 0L17 5.5M17 5.5L8.5 11"
                            stroke="#88E1FF"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-whitesmoke">No blogs available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
