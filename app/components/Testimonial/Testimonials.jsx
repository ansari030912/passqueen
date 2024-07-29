/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";

const reviews = [
  {
    text: "I aced my Amazon certification thanks to the detailed practice exams on Exam Prince.",
    name: "Jane Smith",
    country: "USA",
    mail: "jane.smith@example.com",
    gender: "Female",
  },
  {
    text: "The best resource for Microsoft certification prep. Exam Prince's test engine is unmatched!",
    name: "Robert Johnson",
    country: "UK",
    mail: "robert.johnson@example.com",
    gender: "Male",
  },
  {
    text: "Dell certification was a breeze with Exam Prince. Their test engine is simply the best.",
    name: "Emily Davis",
    country: "Canada",
    mail: "emily.davis@example.com",
    gender: "Female",
  },
  {
    text: "PMI exams were tough, but Exam Prince made it manageable. Fantastic test engine!",
    name: "Michael Wilson",
    country: "Australia",
    mail: "michael.wilson@example.com",
    gender: "Male",
  },
  {
    text: "The Riverbed exam was easy to tackle with the help of Exam Prince's thorough test engine.",
    name: "Jessica Taylor",
    country: "Germany",
    mail: "jessica.taylor@example.com",
    gender: "Female",
  },
  {
    text: "RSA certifications felt easier with Exam Prince’s outstanding practice tests.",
    name: "William Martinez",
    country: "France",
    mail: "william.martinez@example.com",
    gender: "Male",
  },
  {
    text: "I highly recommend Exam Prince for SAFe certification prep. Their test engine is the best!",
    name: "Linda Anderson",
    country: "Brazil",
    mail: "linda.anderson@example.com",
    gender: "Female",
  },
  {
    text: "Salesforce certification exams are well covered on Exam Prince. Excellent test engine!",
    name: "Christopher Thomas",
    country: "India",
    mail: "christopher.thomas@example.com",
    gender: "Male",
  },
  {
    text: "SANS certification prep was simplified with Exam Prince. Great resource!",
    name: "Susan Jackson",
    country: "Japan",
    mail: "susan.jackson@example.com",
    gender: "Female",
  },
  {
    text: "SAP exams are extensive, but Exam Prince's test engine covered everything I needed.",
    name: "Charles White",
    country: "Italy",
    mail: "charles.white@example.com",
    gender: "Male",
  },
  {
    text: "Exam Prince helped me pass my SAS Institute exams with ease. Their test engine is superb!",
    name: "Patricia Harris",
    country: "South Africa",
    mail: "patricia.harris@example.com",
    gender: "Female",
  },
  {
    text: "The Scaled Agile exam was tough, but Exam Prince's practice tests made it manageable.",
    name: "Daniel Lewis",
    country: "Netherlands",
    mail: "daniel.lewis@example.com",
    gender: "Male",
  },
  {
    text: "Scrum certification prep was straightforward with Exam Prince’s excellent test engine.",
    name: "Barbara Clark",
    country: "Sweden",
    mail: "barbara.clark@example.com",
    gender: "Female",
  },
  {
    text: "SDI exam prep was a breeze with Exam Prince. Highly recommend their test engine!",
    name: "Paul Robinson",
    country: "Norway",
    mail: "paul.robinson@example.com",
    gender: "Male",
  },
  {
    text: "ServiceNow certification was made easier with Exam Prince. The test engine is top-notch!",
    name: "Nancy Walker",
    country: "Mexico",
    mail: "nancy.walker@example.com",
    gender: "Female",
  },
  {
    text: "Sitecore exam prep is fantastic on Exam Prince. Great test engine!",
    name: "Kevin Hall",
    country: "Argentina",
    mail: "kevin.hall@example.com",
    gender: "Male",
  },
  {
    text: "Six Sigma certification was achievable thanks to Exam Prince's thorough test engine.",
    name: "Karen Young",
    country: "Russia",
    mail: "karen.young@example.com",
    gender: "Female",
  },
  {
    text: "Slack certification was smooth with the help of Exam Prince’s excellent test engine.",
    name: "Donald Hernandez",
    country: "Chile",
    mail: "donald.hernandez@example.com",
    gender: "Male",
  },
  {
    text: "Exam Prince made SNIA certification prep simple and effective. Highly recommended!",
    name: "Betty King",
    country: "New Zealand",
    mail: "betty.king@example.com",
    gender: "Female",
  },
  {
    text: "If you're looking for the best test engine for Cisco exams, Exam Prince is the answer!",
    name: "Thomas Wright",
    country: "Singapore",
    mail: "thomas.wright@example.com",
    gender: "Male",
  },
  {
    text: "Amazon certification prep has never been easier, thanks to Exam Prince. Excellent resource!",
    name: "Helen Lopez",
    country: "Philippines",
    mail: "helen.lopez@example.com",
    gender: "Female",
  },
  {
    text: "Exam Prince's test engine helped me pass my Microsoft exams with flying colors.",
    name: "Larry Scott",
    country: "South Korea",
    mail: "larry.scott@example.com",
    gender: "Male",
  },
  {
    text: "The best place for Dell certification prep. Exam Prince’s test engine is unbeatable!",
    name: "Margaret Green",
    country: "Spain",
    mail: "margaret.green@example.com",
    gender: "Female",
  },
  {
    text: "PMI certification was made simpler with Exam Prince’s fantastic test engine.",
    name: "Brian Adams",
    country: "Ireland",
    mail: "brian.adams@example.com",
    gender: "Male",
  },
  {
    text: "I highly recommend Exam Prince for Riverbed exam prep. Their test engine is superb!",
    name: "Dorothy Baker",
    country: "Portugal",
    mail: "dorothy.baker@example.com",
    gender: "Female",
  },
  {
    text: "RSA certification was easy to achieve with Exam Prince’s thorough practice exams.",
    name: "Kenneth Gonzalez",
    country: "Austria",
    mail: "kenneth.gonzalez@example.com",
    gender: "Male",
  },
  {
    text: "SAFe exam prep was a breeze with Exam Prince. Excellent test engine!",
    name: "Lisa Nelson",
    country: "Switzerland",
    mail: "lisa.nelson@example.com",
    gender: "Female",
  },
  {
    text: "Salesforce certification was manageable thanks to Exam Prince’s great test engine.",
    name: "Matthew Carter",
    country: "Belgium",
    mail: "matthew.carter@example.com",
    gender: "Male",
  },
  {
    text: "Exam Prince's test engine is the best for SANS certification prep. Highly recommended!",
    name: "Betty Mitchell",
    country: "Finland",
    mail: "betty.mitchell@example.com",
    gender: "Female",
  },
  {
    text: "I passed my SAP exams with ease thanks to Exam Prince. Great test engine!",
    name: "Steven Perez",
    country: "Malaysia",
    mail: "steven.perez@example.com",
    gender: "Male",
  },
  {
    text: "SAS Institute certification was easy with the help of Exam Prince’s detailed practice tests.",
    name: "Linda Roberts",
    country: "Indonesia",
    mail: "linda.roberts@example.com",
    gender: "Female",
  },
  {
    text: "Exam Prince made Scaled Agile exam prep straightforward and effective.",
    name: "George Turner",
    country: "Thailand",
    mail: "george.turner@example.com",
    gender: "Male",
  },
  {
    text: "Scrum certification was simple with Exam Prince. Their test engine is top-notch!",
    name: "Sarah Phillips",
    country: "Israel",
    mail: "sarah.phillips@example.com",
    gender: "Female",
  },
  {
    text: "SDI exam prep was efficient with Exam Prince’s excellent test engine.",
    name: "Edward Campbell",
    country: "Denmark",
    mail: "edward.campbell@example.com",
    gender: "Male",
  },
  {
    text: "ServiceNow certification was easier with Exam Prince. Highly recommend their test engine!",
    name: "Deborah Parker",
    country: "Poland",
    mail: "deborah.parker@example.com",
    gender: "Female",
  },
  {
    text: "Sitecore exam prep was effective with the help of Exam Prince’s test engine.",
    name: "Joseph Evans",
    country: "Czech Republic",
    mail: "joseph.evans@example.com",
    gender: "Male",
  },
  {
    text: "Exam Prince's test engine made Six Sigma certification a smooth process. Highly recommended!",
    name: "Dorothy Edwards",
    country: "Turkey",
    mail: "dorothy.edwards@example.com",
    gender: "Female",
  },
  {
    text: "Slack certification was straightforward with Exam Prince’s detailed practice exams.",
    name: "Larry Collins",
    country: "Hungary",
    mail: "larry.collins@example.com",
    gender: "Male",
  },
  {
    text: "SNIA exam prep was simplified with Exam Prince’s fantastic test engine.",
    name: "Sandra Stewart",
    country: "Greece",
    mail: "sandra.stewart@example.com",
    gender: "Female",
  },
  {
    text: "Cisco certification was manageable with the help of Exam Prince. Excellent test engine!",
    name: "Raymond Morris",
    country: "Iceland",
    mail: "raymond.morris@example.com",
    gender: "Male",
  },
  {
    text: "Amazon exams were easier with Exam Prince’s thorough test engine. Highly recommend!",
    name: "Sharon Rogers",
    country: "Portugal",
    mail: "sharon.rogers@example.com",
    gender: "Female",
  },
  {
    text: "I passed my Microsoft certification thanks to Exam Prince. Their test engine is the best!",
    name: "Jerry Reed",
    country: "Bulgaria",
    mail: "jerry.reed@example.com",
    gender: "Male",
  },
  {
    text: "Exam Prince’s test engine is incredibly user-friendly and effective for Riverbed exams.",
    name: "Sarah Hill",
    country: "Romania",
    mail: "sarah.hill@example.com",
    gender: "Female",
  },
  {
    text: "The RSA practice exams on Exam Prince are top-notch. The test engine is unparalleled!",
    name: "Brian Scott",
    country: "Slovakia",
    mail: "brian.scott@example.com",
    gender: "Male",
  },
  {
    text: "I passed my SAFe certification with flying colors thanks to Exam Prince. Their test engine is the best!",
    name: "Laura Green",
    country: "Lithuania",
    mail: "laura.green@example.com",
    gender: "Female",
  },
  {
    text: "Exam Prince’s test engine made my Salesforce certification preparation a breeze. Highly recommend!",
    name: "Kevin Adams",
    country: "Latvia",
    mail: "kevin.adams@example.com",
    gender: "Male",
  },
  {
    text: "The SANS exam prep on Exam Prince is outstanding. The test engine is incredibly effective!",
    name: "Lisa Baker",
    country: "Estonia",
    mail: "lisa.baker@example.com",
    gender: "Female",
  },
  {
    text: "Exam Prince has the best test engine for SAP certifications. I passed with ease!",
    name: "Eric Nelson",
    country: "Luxembourg",
    mail: "eric.nelson@example.com",
    gender: "Male",
  },
  {
    text: "I’m so grateful for Exam Prince’s test engine. It made my SAS Institute exam preparation so much easier!",
    name: "Kimberly Carter",
    country: "Malta",
    mail: "kimberly.carter@example.com",
    gender: "Female",
  },
];

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <div className="py-12 bg-white bg-fixed bg-no-repeat bg-cover relative">
      <div className="container mx-auto px-6">
        <div
          style={{
            backgroundImage: "url('/bg-3.jpg')",
          }}
          className="border-2 px-4 shadow-2xl  bg-opacity-40 bg-no-repeat bg-cover lg:px-8 py-6 rounded-3xl border-blue-200 "
        >
          <hr className="mb-20 mx-auto h-10 bg-transparent border-transparent"/>
          <div className="flex items-center justify-between gap-4 mb-16">
            <button
              onClick={prevSlide}
              className="relative z-20 border-2  border-white w-16 h-16 p-5 hidden lg:flex items-center justify-center text-white hover:text-blue-400 hover:border-white transition duration-200 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10 19L3 12M3 12L10 5M3 12L21 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div className="flex-shrink-0 w-full" key={index}>
                    <p className="bg-clip-text flex text-transparent bg-gradient-to-r from-gray-50 via-slate-50 to-neutral-50 font-black text-2xl md:text-4xl text-center max-w-6xl mx-auto tracking-tight">
                      <img className="h-6 mr-3" src="/quote-icon.svg" alt="" />
                      {review.text}
                      <img
                        className="h-6 ml-3"
                        src="/quote-icon.svg"
                        alt=""
                        style={{ transform: "scaleX(-1)" }}
                      />
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={nextSlide}
              className="relative z-20 border-2 border-white w-16 h-16 p-5 hidden lg:flex items-center justify-center text-white hover:text-blue-400 hover:border-white transition duration-200 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14 5L21 12M21 12L14 19M21 12L3 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex lg:hidden gap-4 justify-center mb-12">
            <button
              onClick={prevSlide}
              className="relative z-20 border-2 border-white w-16 h-16 p-5 flex items-center justify-center text-white hover:text-blue-500 hover:border-white transition duration-200 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10 19L3 12M3 12L10 5M3 12L21 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="relative z-20 border-2 border-white w-16 h-16 p-5 flex items-center justify-center text-white hover:text-blue-500 hover:border-white transition duration-200 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14 5L21 12M21 12L14 19M21 12L3 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div className="flex-shrink-0 w-full" key={index}>
                  <div className="border-t border-white border-opacity-10 pt-6 flex items-center justify-center gap-3 flex-wrap max-w-3xl mx-auto">
                    <img
                      className="h-11 rounded-full"
                      src={`/${review.gender}.png`}
                      alt=""
                    />
                    <p className="tracking-tight text-lg mb-1 font-medium">
                      <span className="text-white">{review.name}</span>
                      <span className="text-white text-opacity-40">
                        {" "}
                        - {review.country}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
