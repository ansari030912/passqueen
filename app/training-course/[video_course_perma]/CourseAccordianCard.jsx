"use client";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Icon } from "@iconify/react";
import { Divider } from "@mui/material";

const CourseAccordionCard = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleChange = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div className="bg-gray-50 flex flex-col items-center justify-center relative overflow-hidden">
      {data?.sections?.map((item, index) => {
        const { section_title, secion_lectures, secion_duration, lectures } =
          item;
        return (
          <Accordion
            className="text-white bg-indigo-500 bg-opacity-90"
            key={index}
            expanded={index === expandedIndex}
            onChange={() => handleChange(index)}
            sx={{ width: "100%", mb: "4px" }}
          >
            <AccordionSummary
              expandIcon={
                <Icon
                  icon="material-symbols:expand-more"
                  width="1.2em"
                  height="1.2em"
                  style={{ color: "white" }}
                />
              }
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
            >
              <div className="flex items-center gap-2">
                <Icon
                  icon="streamline:live-video-solid"
                  width="1.2em"
                  height="1.2em"
                  style={{ color: "white" }}
                />
                <h4 className="font-medium text-sm text-white">
                  {section_title}
                </h4>
              </div>
            </AccordionSummary>
            <Divider color="white" />
            <AccordionDetails>
              <div className="w-full bg-white p-1 mt-2">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-500 tracking-wider">
                        Lectures
                      </th>
                      <th className="px-6 py-3 border-b-2 hidden lg:table-cell border-gray-300 text-sm leading-4 text-gray-500 text-right tracking-wider">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {lectures.map((lecture, lectureIndex) => {
                      const { lecture_seq, lecture_title, lecture_duration } =
                        lecture;
                      return (
                        <tr key={lectureIndex}>
                          <td className="px-6 py-2 whitespace-no-wrap border-b text-justify border-gray-500 text-blue-900 text-md leading-5">
                            {lecture_seq}. {lecture_title}
                            <span className="lg:hidden">
                              <span className="relative inline-block px-3 py-1 font-semibold text-red-500 leading-tight">
                                <span
                                  aria-hidden
                                  className="absolute inset-0"
                                ></span>
                                <span className="relative text-xs">
                                  - {lecture_duration}
                                </span>
                              </span>
                            </span>
                          </td>
                          <td className="px-6 py-2 hidden lg:table-cell whitespace-no-wrap border-b text-blue-900 border-gray-500 text-md text-right leading-5">
                            <span className="relative inline-block px-3 py-1 font-semibold text-red-500 leading-tight">
                              <span
                                aria-hidden
                                className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                              ></span>
                              <span className="relative text-xs">
                                {lecture_duration}
                              </span>
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default CourseAccordionCard;
