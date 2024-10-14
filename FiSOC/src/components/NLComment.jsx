import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { fireDb } from "../firebase/FirebaseConfig";

const NLComment = () => {
  const [fullName, setFullName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [allComments, setAllComments] = useState([]);

  // Fetch all comments for the newsletter
  useEffect(() => {
    const fetchComments = async () => {
      const commentsQuery = query(
        collection(fireDb, "newslettersComments"), // Change to your collection path
        orderBy("time", "desc")
      );
      const unsubscribe = onSnapshot(commentsQuery, (snapshot) => {
        const comments = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAllComments(comments);
      });

      return () => unsubscribe(); // Cleanup listener on unmount
    };
    fetchComments();
  }, []);

  // Add a comment
  const addComment = async () => {
    if (!fullName || !commentText) return; // Check for empty fields
    try {
      const commentRef = collection(fireDb, "newslettersComments"); // Change to your collection path
      await addDoc(commentRef, {
        fullName,
        commentText,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      });
      setFullName(""); // Clear input field
      setCommentText(""); // Clear textarea
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      {/* Leave a Comment Form */}
      <div className="p-4 border border-whitesmoke rounded-lg bg-gray-900 mb-6">
        <h3 className="text-xl font-semibold text-blue mb-4">
          Leave a Comment
        </h3>
        <input
          type="text"
          placeholder="Your Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full p-2 mb-3 text-black rounded" // Ensure text color is black
        />
        <textarea
          placeholder="Your Comment"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          rows="4"
          className="w-full p-2 mb-3 text-black rounded" // Ensure text color is black
        />
        <button
          onClick={addComment}
          className="w-full py-2 bg-blue text-white rounded-lg hover:bg-blue-dark transition duration-300" // Changed to bg-blue-600 for a darker blue
        >
          Post Comment
        </button>
      </div>

      {/* Display Comments */}
      <h2 className="text-2xl font-semibold text-center text-blue mb-4">
        Comments
      </h2>
      {allComments.length > 0 ? (
        <div className="space-y-4">
          {allComments.map((comment) => (
            <div
              key={comment.id}
              className="p-4 border border-whitesmoke rounded-lg bg-gray-800 shadow-lg"
            >
              <div className="flex items-center mb-2">
                <h3 className="text-lg font-bold text-white">
                  {comment.fullName}
                </h3>
                <p className="ml-2 text-sm text-gray-400">{comment.date}</p>
              </div>
              <p className="text-whitesmoke text-md">{comment.commentText}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-whitesmoke">No comments yet</p>
      )}
    </div>
  );
};

export default NLComment;
