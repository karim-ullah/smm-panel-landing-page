import React from "react";
import ProcessCard from "./processCard";
const workingProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Create Account",
      description:
        "Sign up quickly using your email or social login and get instant access to all TrendLive services.",
    },
    {
      number: "02",
      title: "Add Funds",
      description:
        "Deposit funds securely via credit/debit card, bank transfer, or cryptocurrency.",
    },
    {
      number: "03",
      title: "Select Service",
      description:
        "Select from Instagram, TikTok, YouTube, or Facebook services with clear pricing and delivery times.",
    },
    {
      number: "04",
      title: "Place your order",
      description:
        "Enter your account details, select the desired quantity, and submit your order.",
    },
  ];
  return (
    <section className="bg-[radial-gradient(circle_at_right,#fff0e7_0%,transparent_42%),radial-gradient(circle_at_left_bottom,#ffe3d3_0%,transparent_35%)] py-16">
      <div className="container">
        {/* Headings */}
        <div className="text-center">
          <h4 className="w-fit uppercase border-b-3 border-border pb-1 mx-auto">
            WORKING PROCESS
          </h4>
          <h2 className="mt-4 mb-5">
            Grow Your <span className="text-primary">Socials in 4 Simple</span>{" "}
            Steps
          </h2>
          <p>
            A simple and efficient process designed to deliver fast and reliable
            results. Just place your order, and our system <br /> will handle
            the rest to help grow your social media presence smoothly.
          </p>
        </div>

        {/* Our Process Area */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-6 mt-16">
          {steps.map((step, index) => (
            <ProcessCard
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default workingProcess;
