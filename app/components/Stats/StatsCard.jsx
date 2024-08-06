/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const StatsCard = ({ examData }) => {
  const [startCount, setStartCount] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);
  const [randomBuyedNumber, setRandomBuyedNumber] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCount(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer && sectionRef.current) {
        observer.unobserve(sectionRef?.current);
      }
    };
  }, []);

  useEffect(() => {
    function getRandomNumber() {
      const min = 100000;
      const max = 1200000;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function getRandomBuyedNumber() {
      const min = 5000;
      const max = 35000;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    setRandomBuyedNumber(getRandomBuyedNumber());
    setRandomNumber(getRandomNumber());
  }, []);

  return (
    <>
      <section ref={sectionRef} className="py-10 bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap lg:flex-nowrap ">
            <div className="w-full md:w-1/2 mb-3 lg:mb-0 lg:w-1/4 px-4 py-6 text-center border-2 border-gray-200 shadow-md rounded-2xl mx-2 border-spacing-1">
              <p className="text-md lg:text-base font-semibold text-gray-600">
                <span>Real Exam Comes</span>
                <span className="text-xs py-1 px-2 ml-1 font-semibold text-green-600 bg-green-100 rounded-full">
                  Weekly
                </span>
              </p>
              <p className="my-1 text-3xl lg:text-4xl font-bold font-heading">
                {startCount && (
                  <CountUp
                    start={0}
                    end={examData.exam_last_week_word_to_word}
                    duration={2}
                    suffix="%"
                    className=" bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                  />
                )}
              </p>
              <span className="text-sm lg:text-base font-semibold text-gray-500">
                Word to Word
              </span>
            </div>
            <div className="w-full md:w-1/2 mb-3 lg:mb-0 lg:w-1/4 px-4 py-6 text-center border-2 border-gray-200 shadow-md rounded-2xl mx-2">
              <p className="text-md lg:text-base font-semibold text-gray-600">
                <span>Customers Passed Exam</span>
                <span className="text-xs py-1 px-2 ml-1 font-semibold text-blue-600 bg-blue-100 rounded-full">
                  Monthly
                </span>
              </p>
              <p className="my-1 text-3xl lg:text-4xl font-bold font-heading ">
                {startCount && (
                  <CountUp
                    start={0}
                    end={examData.exam_last_week_average_score}
                    duration={2}
                    suffix="%"
                    className=" bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                  />
                )}
              </p>
              <span className="text-sm lg:text-base font-semibold text-gray-500">
                Average Score
              </span>
            </div>
            <div className="w-full md:w-1/2 mb-3 lg:mb-0 lg:w-1/4 px-4 py-6 text-center  border-2 border-gray-200 shadow-md rounded-2xl mx-2">
              <p className="text-md lg:text-base font-semibold text-gray-600">
                <span>Exam Poupularity</span>
                <span className="text-xs py-1 px-2 ml-1 font-semibold text-purple-600 bg-purple-100 rounded-full">
                  Last 6 Month
                </span>
              </p>
              <p className="my-1 text-3xl lg:text-4xl font-bold font-heading">
                {startCount && (
                  <CountUp
                    start={0}
                    end={randomNumber}
                    duration={2}
                    className=" bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                  />
                )}
              </p>
              <span className="text-sm lg:text-base font-semibold text-gray-500">
                Users Search for this Exam
              </span>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 py-6 border-2 border-gray-200 shadow-md rounded-2xl mx-2 text-center">
              <p className="text-md lg:text-base font-semibold  text-gray-600">
                <span>Product Sales</span>
                <span className="text-xs py-1 px-2 ml-1 font-semibold text-yellow-600 bg-yellow-100 rounded-full">
                  Yearly
                </span>
              </p>
              <p className="my-1 text-3xl lg:text-4xl font-bold font-heading">
                {startCount && (
                  <CountUp
                    start={0}
                    end={randomBuyedNumber}
                    duration={2}
                    suffix=""
                    className=" bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                  />
                )}
              </p>
              <span className="text-sm lg:text-base font-semibold text-gray-500">
                Total Users Buy Exams
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* ////////////// */}
      <section class="pt-8 pb-10 bg-blue-50 bg-cover bg-fixed">
        <div class="container mx-auto px-4">
          <h1 class="font-bold uppercase text-center text-3xl md:text-3xl mb-12">
            What is in Premium File?
          </h1>
          <div class="flex flex-wrap justify-center -m-2">
            {examData?.question_types?.map((item, i) => {
              return (
                <div class="w-full sm:w-1/2 lg:w-auto p-2" key={i}>
                  <span class="border-2 border-indigo-100 rounded-xl hover:bg-indigo-50 bg-gray-50 text-gray-600 font-semibold hover:text-indigo-600 px-4 h-14 flex items-center justify-center transition duration-200">
                    <span class="text-lg font-bold bg-clip-text text-transparent flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                      <img src="/green-check.svg" className="mr-3" alt="" />{" "}
                      {item.question_type}{" "}
                      <span className=" text-gray-400 px-2">-------</span>{" "}
                      {item.question_type_count}
                    </span>
                  </span>
                </div>
              );
            })}
            {examData.exam_topics.map((item, i) => {
              return (
                <div class="w-full sm:w-1/2 lg:w-auto p-2" key={i}>
                  <span class="border-2 border-indigo-100 rounded-xl hover:bg-indigo-50 bg-gray-50 text-gray-600 font-semibold hover:text-indigo-600 px-4 h-14 flex items-center justify-center transition duration-200">
                    <span class="text-lg font-bold bg-clip-text text-transparent flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                      <img src="/green-check.svg" className="mr-3" alt="" />{" "}
                      {item.topic}{" "}
                      <span className=" text-gray-400 px-2">-------</span>{" "}
                      {item.topic_questions}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsCard;
