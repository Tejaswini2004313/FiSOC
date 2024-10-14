import React from "react";
import NLComment from "./NLComment"; // Import the NLComment component

const Newsletter2 = () => {
  return (
    <div
      className="min-h-screen bg-bgcolor text-whitesmoke p-8"
      id="newsletters"
    >
      <h1 className="text-5xl font-bold mb-4 md:w-3/2 text-center text-blue">
        Newsletter
      </h1>
      <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg border border-whitesmoke">
        <h2 className="text-3xl font-semibold text-blue mb-4">
          Company Newsletters: An In-Depth Resource
        </h2>
        <p className="text-lg mb-6">
          Our Company Newsletters serve as an invaluable resource, offering
          detailed profiles of various leading companies. Each edition is
          carefully curated to provide:
        </p>

        <ul className="list-disc list-inside text-lg space-y-3">
          <li>
            <strong>The Nature of Their Work:</strong> An overview of what the
            company does, including its core business areas and services.
          </li>
          <li>
            <strong>Company History:</strong> A look into the company's origins,
            growth, and significant milestones that have shaped its journey.
          </li>
          <li>
            <strong>Work Culture Insights:</strong> An exploration of the
            company’s work environment, including its values, employee
            engagement practices, and workplace diversity.
          </li>
          <li>
            <strong>Technological Background:</strong> Information on the
            technological advancements and innovations that the company is
            leveraging in its operations.
          </li>
          <li>
            <strong>Management and Executive Board:</strong> A spotlight on the
            key leaders steering the company, including details on the executive
            team and board of directors.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-blue mt-6 mb-4">
          Featured Companies
        </h3>
        <p className="text-lg mb-4">
          In this volume, we’ve focused on the following companies, each known
          for its significant impact in the financial sector:
        </p>

        <ul className="list-disc list-inside text-lg space-y-2">
          <li>
            <a
              href="https://waiting-voice-97b.notion.site/D-E-Shaw-8dbbd17c6a1841af8ea180c954c2161e"
              className="text-blue hover:text-whitesmoke"
              target="_blank"
              rel="noopener noreferrer"
            >
              D.E. Shaw
            </a>
          </li>
          <li>
            <a
              href="https://waiting-voice-97b.notion.site/Barclays-d8a4e6823ed74217aad64c2bf4466f92"
              className="text-blue hover:text-whitesmoke"
              target="_blank"
              rel="noopener noreferrer"
            >
              Barclays
            </a>
          </li>
          <li>
            <a
              href="https://waiting-voice-97b.notion.site/Credit-Suisse-da84fe0fbae640a5b4a048e58e70fff4"
              className="text-blue hover:text-whitesmoke"
              target="_blank"
              rel="noopener noreferrer"
            >
              Credit Suisse
            </a>
          </li>
          <li>
            <a
              href="https://waiting-voice-97b.notion.site/Deutsche-Bank-95376082cf144ce897bdac2f25d421a8"
              className="text-blue hover:text-whitesmoke"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deutsche Bank
            </a>
          </li>
          <li>
            <a
              href="https://waiting-voice-97b.notion.site/Citi-193ea9c4b41245aabe8134de2e28d4ca"
              className="text-blue hover:text-whitesmoke"
              target="_blank"
              rel="noopener noreferrer"
            >
              Citi
            </a>
          </li>
          <li>
            <a
              href="https://waiting-voice-97b.notion.site/Goldman-Sachs-4301596dbffa4d88b9f3ac4598e439ed"
              className="text-blue hover:text-whitesmoke"
              target="_blank"
              rel="noopener noreferrer"
            >
              Goldman Sachs
            </a>
          </li>
          <li>
            <a
              href="https://waiting-voice-97b.notion.site/JPMC-b6aa96b5e7f441e0b7d9ff90a149d02e"
              className="text-blue hover:text-whitesmoke"
              target="_blank"
              rel="noopener noreferrer"
            >
              JPMC
            </a>
          </li>
          <li>
            <a
              href="https://waiting-voice-97b.notion.site/Wells-Fargo-b777b5dd231c43da968ced0758cb5e3e"
              className="text-blue hover:text-whitesmoke"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wells Fargo
            </a>
          </li>
          <li>
            <a
              href="https://waiting-voice-97b.notion.site/UBS-73a9ae68b22245c49bfd3e147fb98f73"
              className="text-blue hover:text-whitesmoke"
              target="_blank"
              rel="noopener noreferrer"
            >
              UBS
            </a>
          </li>
        </ul>
      </div>
      {/* Comment Section */}
      <NLComment /> {/* Include the NLComment component here */}
    </div>
  );
};

export default Newsletter2;
