import React from "react";

const Resources = () => {
  const resources = [
    {
      id: 1,
      title: "Harvard Business School Finance Terms",
      description: "Learn key finance terms from Harvard Business School.",
      link: "https://online.hbs.edu/blog/post/finance-for-non-finance-professionals-finance-terms-to-know",
    },
    {
      id: 2,
      title: "Terms in Economics",
      description: "A guide to basic terms used in Economics.",
      link: "https://oxfordsummercourses.com/articles/basic-terms-used-in-economics/",
    },
    {
      id: 3,
      title: "Department of Financial Services, Government of India",
      description: "Official website of the Department of Financial Services.",
      link: "https://financialservices.gov.in/beta/en",
    },
    {
      id: 4,
      title: "Budget 2024 - Government of India",
      description:
        "Explore the Budget 2024 details from the Government of India.",
      link: "https://www.indiabudget.gov.in/",
    },
    {
      id: 5,
      title: "Four Pillars of Personal Finance",
      description: "Understand the four basic components of personal finance.",
      link: "https://spero.financial/understanding-the-four-pillars-of-personal-finance/#:~:text=Everyone%20has%20four%20basic%20components,and%20your%20current%20net%20worth.",
    },
    {
      id: 6,
      title: "Key Features of Budget 2024-2025",
      description:
        "A summary of major allocations, policy changes, and financial plans proposed in the Budget for 2024-2025.",
      link: "https://drive.google.com/file/d/1kjFUWZ_ew_18lNFInOrr9UMUzOzIVyZK/view?usp=sharing",
    },
    {
      id: 7,
      title: "Financial Terms Cheat Sheet",
      description:
        "A quick reference guide to essential financial terms and concepts for easy understanding and application.",
      link: "https://drive.google.com/file/d/1rwiUQ2C6K2oR8-WQszOVe9xpvE0c6iDY/view?usp=sharing",
    },
  ];

  return (
    <div className="min-h-screen h-full bg-bgcolor text-whitesmoke p-8">
      <h1 className="text-5xl font-bold mb-4 md:w-3/2 text-center text-blue">
        Resources
      </h1>
      <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="bg-gray-800 p-4 rounded-lg shadow-lg border border-whitesmoke"
          >
            <h2 className="text-2xl font-semibold text-blue">
              {resource.title}
            </h2>
            <p className="text-whitesmoke mt-2">{resource.description}</p>
            <a
              href={resource.link}
              className="text-blue hover:text-whitesmoke mt-4 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resource
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
