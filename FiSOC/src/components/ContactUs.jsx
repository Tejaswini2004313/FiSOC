import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const ContactUs = () => {
  const form = useRef();
  const [message, setMessage] = useState(""); // State to hold the success message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_FiSOC24", "template_FiSOC24", form.current, {
        publicKey: "uR5oAPkBq4mnpuUDp",
      })
      .then(
        () => {
          setMessage("Email sent successfully!"); // Set the success message
          form.current.reset(); // Clear the form fields
          setTimeout(() => setMessage(""), 3000); // Clear the message after 3 seconds
        },
        (error) => {
          setMessage("Failed to send email."); // Set the error message
          console.log("FAILED...", error.text);
          setTimeout(() => setMessage(""), 3000); // Clear the message after 3 seconds
        }
      );
  };

  return (
    <div className="bg-bgcolor text-whitesmoke pt-4 pb-4" id="contactUs">
      <h1 className="text-5xl font-bold mb-4 md:w-3/2 text-center text-blue">
        Contact Us
      </h1>
      <div className="px-4 lg:px-14 max-w-screen-xl mx-auto mt-2 mb-8 flex flex-col md:flex-row gap-8">
        {/* Form Section */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="md:w-1/2 flex flex-col space-y-4 bg-gray-800 p-1 rounded-lg shadow-lg"
          style={{ marginRight: "2rem" }} // Shift form slightly to the right
        >
          <label className="text-lg">Name</label>
          <input
            type="text"
            name="user_name"
            className="p-2 border border-gray-600 rounded"
            style={{ color: "black" }}
          />
          <label className="text-lg">Email</label>
          <input
            type="email"
            name="user_email"
            className="p-2 border border-gray-600 rounded"
            style={{ color: "black" }}
          />
          <label className="text-lg">Message</label>
          <textarea
            name="message"
            className="p-2 border border-gray-600 rounded"
            style={{ color: "black" }}
          />
          <input
            type="submit"
            value="Send"
            className="p-2 bg-blue text-bgcolor rounded cursor-pointer hover:bg-blue-700 transition duration-300"
          />
        </form>

        {/* Contact Information Section */}
        <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4">
          <p className="md:text-lg text-whitesmoke">
            Email:{" "}
            <a href="mailto:fisoc@cumminscollege.in" className="text-blue">
              fisoc@cumminscollege.in
            </a>
          </p>
          <p className="md:text-lg text-whitesmoke">
            Finance and Economics Club of MKSSS Cummins College of Engineering,
            Pune
          </p>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a
              href="https://www.instagram.com/fisoc_ccew?igsh=bDlqb2gyZWIzaWo0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-whitesmoke hover:text-blue"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/in/finance-and-economics-club-ccoew-a978a4249/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-whitesmoke hover:text-blue"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>

      {/* Message Popup */}
      {message && (
        <div className="mt-4 p-4 bg-green-600 text-white rounded-lg shadow-lg text-center">
          {message}
        </div>
      )}
    </div>
  );
};

export default ContactUs;
