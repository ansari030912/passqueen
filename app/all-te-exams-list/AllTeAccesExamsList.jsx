"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import { Box, Button, CircularProgress } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const AllTeAccesExamsList = () => {
  const [data, setData] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState("A");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [bannerUrl, setBannerUrl] = useState({});

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const bannerResponse = await axios.get(`${Base_URL}/v1/banner`, {
          headers: {
            "x-api-key": X_API_Key,
          },
        });
        setBannerUrl(bannerResponse.data);
      } catch (error) {
        console.error("Error fetching banner:", error.message);
      }
    };
    fetchBanner();
  }, []);

  const itemsPerPage = 10;
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const fetchData = async (letter = "A") => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${Base_URL}/v1/all-exam-codes/${letter}`,
        {
          headers: {
            "x-api-key": X_API_Key,
          },
        }
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(selectedLetter);
  }, [selectedLetter]);

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedVendors = data.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <>
      {loading && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <CircularProgress />
        </Box>
      )}
      <section className="pt-6 px-6">
        {bannerUrl?.banner_link ? (
          <Link href={bannerUrl.banner_link} className="flex justify-center ">
            <img src={bannerUrl?.banner_src} alt={bannerUrl?.banner_website} />
          </Link>
        ) : (
          <div className="flex justify-center ">
            <img src={bannerUrl?.banner_src} alt={bannerUrl?.banner_website} />
          </div>
        )}
      </section>

      <section className="pt-8 lg:pt-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4 mb-12 lg:mb-0">
              <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl text-gray-600 font-semibold mb-6">
                All Test Engine Unlimited Access Exams List
              </h1>
              <p className="text-blue-500 text-lg mt-2 font-semibold max-w-xl">
                When you buy Test Engine Unlimited Access you will get all
                vendors exams access
              </p>
              <p className="text-red-500 text-base mt-2 font-semibold mb-6 max-w-xl">
                You can Easily Search Vendors Exams by their Name First
                Alphabet.
              </p>
              <p className="text-red-500 text-base mt-2 font-semibold mb-6 max-w-xl">
                Currently Searched Vendors Exams with Letter:{" "}
                <span className="text-green-500">{selectedLetter}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="w-full flex justify-end px-6">
            <div style={{ minWidth: "150px" }}>
              <div className="relative inline-block w-full max-w-xs bg-white rounded-full">
                <span className="absolute top-1/2 right-0 mr-4 transform -translate-y-1/2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.3999 8.2L9.9999 11.8L13.5999 8.2"
                      stroke="#646A69"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <select
                  className="w-full px-4 py-3 font-medium border rounded-full appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-lime-500 bg-transparent"
                  value={selectedLetter}
                  onChange={(e) => handleLetterClick(e.target.value)}
                >
                  {alphabet.map((letter) => (
                    <option key={letter} value={letter}>
                      {letter}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="pb-4 rounded-xl">
            {selectedVendors.map((vendor, index) => (
              <div key={index} className="mb-6">
                <div className="mb-4">
                  <div className="bg-clip-text px-3 text-2xl font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    {vendor.vendor_title}
                  </div>
                </div>
                {vendor.exams.map((exam, examIndex) => (
                  <div
                    key={examIndex}
                    className="py-4 px-8 mb-2 bg-white shadow-lg rounded-2xl"
                  >
                    <div className="lg:flex lg:justify-between items-start">
                      <div>
                        <h4 className="text-xl font-medium mb-1 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                          {exam.exam_code}
                        </h4>
                        <div className="inline-flex items-center">
                          <span className="font-medium text-base text-gray-900">
                            {exam.exam_name}
                          </span>
                        </div>
                      </div>
                      <div className="inline-flex flex-col justify-center items-center lg:mt-4">
                        <span className="font-medium text-red-500">
                          {exam.exam_questions}{" "}
                          <span className="text-gray-500">Questions</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}

            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-4">
              <div>
                Showing {startIndex + 1} to{" "}
                {Math.min(startIndex + itemsPerPage, data.length)} of{" "}
                {data.length} exams
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outlined"
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleNextPage}
                  disabled={currentPage >= totalPages}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllTeAccesExamsList;
