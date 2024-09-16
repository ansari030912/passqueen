"use client";
import React, { useState } from "react";

const ScAccesVideoCourse = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [selectedLecture, setSelectedLecture] = useState(null);
  const [currentSource, setCurrentSource] = useState(null);

  const handleClickOpen = (lecture) => {
    setSelectedLecture(lecture);
    setCurrentSource(lecture?.lecture_videos[0]); // Set the initial source to the first video
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedLecture(null);
    setCurrentSource(null); // Reset the source when the dialog is closed
  };

  const handleSourceChange = (source) => {
    setCurrentSource(source); // Change the video source
  };

  return (
    <div className="pt-1 mt-12 border-t border-gray-100">
      <div className="flex flex-col items-center w-full py-8 px-2">
        {data?.sections?.map((item, index) => {
          const { section_title, lectures } = item;
          return (
            <div
              key={index}
              className="mb-12 w-full max-w-8xl mx-auto py-6 sm:p-4"
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center bg-blue-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 14 14"
                  >
                    <path
                      fill="white"
                      fillRule="evenodd"
                      d="M8.09.084a.75.75 0 1 0-.232 1.482A5.502 5.502 0 0 1 7 12.5a5.5 5.5 0 0 1-5.116-3.475a.75.75 0 1 0-1.394.552A7.002 7.002 0 0 0 14 7A7 7 0 0 0 8.09.084M6.164.661a.75.75 0 0 1-.54.914a5.5 5.5 0 0 0-.735.246a.75.75 0 1 1-.576-1.385q.453-.19.938-.314a.75.75 0 0 1 .913.54ZM3.185 1.894a.75.75 0 0 1-.016 1.06a5.6 5.6 0 0 0-.95 1.225a.75.75 0 1 1-1.302-.744a7 7 0 0 1 1.208-1.557a.75.75 0 0 1 1.06.016M.916 5.28a.75.75 0 0 1 .638.847a6 6 0 0 0-.054.775a.75.75 0 0 1-1.5 0q0-.5.069-.984a.75.75 0 0 1 .847-.638M4.5 8.882V5.118a1 1 0 0 1 1.447-.894l3.764 1.882a1 1 0 0 1 0 1.788L5.947 9.776A1 1 0 0 1 4.5 8.882"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="ml-4 font-semibold w-full lg:text-xl text-gray-800 text-lg">
                  {section_title}
                </h3>
              </div>
              <ul className="space-y-4">
                {lectures.map((lecture, lectureIndex) => (
                  <li
                    key={lectureIndex}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-md text-gray-700 shadow-md rounded-md p-3 cursor-pointer"
                    onClick={() => handleClickOpen(lecture)}
                  >
                    <div className="flex w-full justify-between items-center">
                      <span className="text-sm font-semibold">
                        <span className="text-blue-500">
                          {lecture.lecture_seq}.
                        </span>{" "}
                        {lecture.lecture_title}
                      </span>
                      <span className="text-blue-600 font-semibold text-nowrap ml-2 text-sm sm:text-right">
                        <div className="flex flex-col bg-blue-100 px-2 py-1 rounded-full justify-center">
                          {lecture.lecture_duration}
                        </div>
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        {/* Dialog */}
        {open && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg w-11/12 md:w-2/3 lg:w-1/2">
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-xl font-semibold">
                  {selectedLecture?.lecture_title}
                </h2>
                <button onClick={handleClose} className="text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-x"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <video
                  key={currentSource?.source} // Key prop forces video reload when source changes
                  controls
                  className="w-full h-64"
                >
                  <source
                    src={currentSource?.source}
                    type={`video/${currentSource?.type}`}
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-4 border-t flex justify-between">
                <div className="flex justify-center space-x-2">
                  {selectedLecture?.lecture_videos.map((video, index) => (
                    <button
                      key={index}
                      onClick={() => handleSourceChange(video)}
                      className={`px-4 py-2 rounded-md ${
                        currentSource?.source === video.source
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      Source {index + 1}
                    </button>
                  ))}
                </div>
                
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScAccesVideoCourse;
