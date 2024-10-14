import React from "react";
import { useParams } from "react-router";
import { doc, getDoc } from "firebase/firestore";
import { fireDb } from "../firebase/FirebaseConfig";
import Comment from "./Comment";

function BlogInfo() {
  const { id } = useParams(); // Get the blog ID from URL
  const [blog, setBlog] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      try {
        const blogDoc = await getDoc(doc(fireDb, "blogPost", id));
        if (blogDoc.exists()) {
          setBlog(blogDoc.data());
        } else {
          console.log("Blog not found");
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  return (
    <div className="bg-bgcolor min-h-screen pt-8 pb-8">
      {loading ? (
        <p className="text-center text-whitesmoke">Loading...</p>
      ) : blog ? (
        <div className="max-w-4xl mx-auto p-6 border border-whitesmoke rounded-lg">
          {/* Blog Title */}
          <h1 className="text-3xl font-bold text-blue mb-4 text-center">
            {blog.title}
          </h1>
          {/* Blog Content */}
          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className="leading-relaxed text-whitesmoke mb-8"
          />
        </div>
      ) : (
        <p className="text-center text-whitesmoke">Blog not found</p>
      )}

      {/* Comment Section */}
      <Comment blogId={id} />
    </div>
  );
}

export default BlogInfo;
