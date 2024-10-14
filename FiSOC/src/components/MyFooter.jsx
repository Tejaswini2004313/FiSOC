import React from "react";
import logo from "../assets/logo.png";
import { Footer } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const MyFooter = () => {
  return (
    <div className="bg-gray">
      <Footer container className="bg-gray">
        <div className="w-full bg-gray">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 bg-gray p-0">
            {" "}
            {/* Removed padding */}
            <div className="space-y-4 mb-8">
              <a
                href=""
                className="text-2xl font-semibold flex items-center space-x-3"
              >
                <img
                  src={logo}
                  alt=""
                  className="w-10 inline-block items-center"
                />
                <span>FiSOC</span>
              </a>
              <p className="mb-1">Created By Team FiSOC </p>
              <p>© 2024 All Rights Reserved </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col>
                  <Footer.Link>FiSOC</Footer.Link>
                  <Footer.Link href="#"></Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col>
                  <Footer.Link href="https://www.linkedin.com/in/finance-and-economics-club-ccoew-a978a4249/">
                    LinkedIn
                  </Footer.Link>
                  <Footer.Link href="https://www.instagram.com/fisoc_ccew?igsh=bDlqb2gyZWIzaWo0">
                    Instagram
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link>Privacy Policy</Footer.Link>
                  <Footer.Link>Terms &amp; Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="FiSOC™" year={2024} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <a
                href="https://www.instagram.com/fisoc_ccew?igsh=bDlqb2gyZWIzaWo0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-black hover:gray"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              {/* <Footer.Icon
                href="https://www.linkedin.com/in/finance-and-economics-club-ccoew-a978a4249/"
                icon={BsGithub}
              /> */}
              <a
                href="https://www.linkedin.com/in/finance-and-economics-club-ccoew-a978a4249/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-black hover:gray"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default MyFooter;
