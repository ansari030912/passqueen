"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import withAuth from "@/app/auth/RouterAuth";
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UnlimitedPDFPage = ({ params }) => {
  const router = useRouter();

  const [bannerUrl, setBannerUrl] = useState({});
  const [unlimitedTeAccess, setUnlimitedTeAccess] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState("A");
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    setCurrentPage(1); // Reset to first page when selecting a new letter
    fetchData(letter);
  };

  const fetchData = async (letter = "A") => {
    setLoading(true);
    try {
      const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
      if (!loginResponse?._token) {
        return router.push("/login");
      }
      const response = await axios.get(
        `${Base_URL}/v1/account/pdf-unlimited-access/${params.id_one}/${params.id_two}/${letter}`,
        {
          headers: {
            "x-api-key": X_API_Key,
            Authorization: `Bearer ${loginResponse._token}`,
          },
        }
      );
      setUnlimitedTeAccess(response.data);
      setTotalPages(Math.ceil(response.data.vendors.length / itemsPerPage));
      setLoading(false);
    } catch (error) {
      console.error("Error:", error.message);
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

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
    fetchData(selectedLetter);
  }, [params.id_one, params.id_two]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedVendors = unlimitedTeAccess?.vendors?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

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

      {unlimitedTeAccess?.purchase_valid &&
        !unlimitedTeAccess?.purchase_approved && (
          <section className="pt-6 pb-6 container mx-auto px-6 bg-white">
            <div className="text-center">
              <div role="alert">
                <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                  Unlimited PDF Access!
                </div>
                <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                  <p>
                    Your Unlimited PDF access is not approved yet. We are
                    checking your payment so this might take a few hours. Please
                    contact our sales chat support or send an email to{" "}
                    <Link
                      href="mailto:sales@examprince.com"
                      className="text-blue-600"
                    >
                      sales@examprince.com
                    </Link>{" "}
                    for fast approval. Thank you.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

      {unlimitedTeAccess?.purchase_approved && (
        <>
          <section className="pt-8 lg:pt-16 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center -mx-4">
                <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                  <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl text-gray-600 font-semibold mb-6">
                    Unlimited PDF Access
                  </h1>
                  <p className="text-blue-500 text-lg mt-2 font-semibold max-w-xl">
                    You have downloaded: {unlimitedTeAccess?.total_downloaded} \{" "}
                    {unlimitedTeAccess?.total_limit}
                  </p>
                  <p className="text-red-500 text-base mt-2 font-semibold mb-6 max-w-xl">
                    (Each download of a different or the same PDF file will
                    affect the download limit)
                  </p>
                </div>
                <div className="w-full lg:w-1/2 px-4">
                  <img
                    className="block"
                    src="flow-assets/career/team-members-photos.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="pb-4 bg-blueGray-50">
            <div className="container mx-auto">
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
                      name=""
                      id=""
                      className="w-full px-4 py-3 font-medium border rounded-full appearance-none cursor-pointer outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 bg-transparent relative"
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

              <div className="px-4 pb-4 rounded-xl">
                {selectedVendors?.map((vendor, index) => (
                  <div key={index} className="mb-6">
                    <div className="mb-4">
                      <div className="bg-clip-text px-3 text-2xl font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        {vendor.vendor_title}
                      </div>
                    </div>
                    {vendor?.exams.map((exam, examIndex) => (
                      <div
                        key={examIndex}
                        className="py-4 px-8 mb-2 bg-white rounded-2xl"
                      >
                        <div className="lg:flex lg:justify-between items-start">
                          <div className="mb-6 sm:mb-0">
                            <h4 className="text-xl font-medium mb-1 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                              {exam.exam_code}
                            </h4>
                            <div className="inline-flex items-center">
                              <span className="font-medium text-base text-gray-900">
                                {exam.exam_name}
                              </span>
                            </div>
                            <div>
                              <div className="inline-flex items-center">
                                <span className="font-medium text-gray-900">
                                  {exam.exam_questions}{" "}
                                  <span className="text-gray-500">
                                    Questions
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="text-lg text-black hover:text-[#65a30d] transition duration-100">
                            <div>
                              <div className="flex justify-end">
                                <Link
                                  href={`https://certsgang.com${exam.download_url}`}
                                >
                                  <button className="px-2 py-1 rounded-md lg:mt-6 text-white bg-green-500 flex hover:bg-green-600">
                                    <div className="flex flex-col justify-center mr-2">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1.2em"
                                        height="1.5em"
                                        viewBox="0 0 32 32"
                                      >
                                        <path
                                          fill="white"
                                          d="M6 3v26h20V9.6l-.3-.3l-6-6l-.3-.3zm2 2h10v6h6v16H8zm12 1.4L22.6 9H20zM15 13v5h-3l4 4l4-4h-3v-5zm-3 10v2h8v-2z"
                                        />
                                      </svg>
                                    </div>
                                    <div> Download Premium PDF File</div>
                                  </button>
                                </Link>
                              </div>
                            </div>
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
                    {Math.min(
                      startIndex + itemsPerPage,
                      unlimitedTeAccess?.vendors.length
                    )}{" "}
                    of {unlimitedTeAccess?.vendors.length} exams
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
      )}
    </>
  );
};

export default withAuth(UnlimitedPDFPage);
