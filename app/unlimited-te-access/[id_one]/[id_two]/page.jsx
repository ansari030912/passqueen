/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import withAuth from "@/app/auth/RouterAuth";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import { Icon } from "@iconify/react";
import {
  Box,
  Button,
  Card,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Tooltip,
  Grid,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const UnlimitedTeAccessPage = ({ params }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [unlimitedTeAccess, setUnlimitedTeAccess] = useState(null);
  const [activationKeys, setActivationKeys] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [bannerUrl, setBannerUrl] = useState({});
  const [selectedLetter, setSelectedLetter] = useState("A");
  const [loading, setLoading] = useState(false);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    fetchData(letter);
  };

  const fetchData = async (letter) => {
    setLoading(true);
    const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    try {
      const response = await axios.get(
        `${Base_URL}/v1/account/te-unlimited-access/${params.id_one}/${params.id_two}/${letter}`,
        {
          headers: {
            "x-api-key": X_API_Key,
            Authorization: `Bearer ${loginResponse._token}`,
          },
        }
      );
      setUnlimitedTeAccess(response.data);
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setLoading(false); // Hide loading spinner
    }
  };

  const handleCopyToClipboard = (keys) => {
    navigator.clipboard.writeText(keys);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleGetKey = async (exam) => {
    setDialogOpen(true);
    const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    try {
      const response = await axios.get(
        `${Base_URL}${exam.activation_keys_url}`,
        {
          headers: {
            "x-api-key": X_API_Key,
            Authorization: `Bearer ${loginResponse._token}`,
          },
        }
      );
      setActivationKeys(response.data);
    } catch (error) {
      console.error("Error:", error.message);
    }
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

    if (!unlimitedTeAccess) {
      fetchData(selectedLetter);
    }
  }, [params.id_one, params.id_two]);

  const handleNextPage = () => {
    setPage((prevPage) =>
      Math.min(
        prevPage + 1,
        Math.ceil(unlimitedTeAccess.vendors.length / rowsPerPage) - 1
      )
    );
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 0));
  };

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

      <Dialog fullWidth open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Activation & Purchase Keys</DialogTitle>
        <Divider />
        <DialogContent>
          {activationKeys?.map((key, index) => (
            <Box key={index} width="100%" mb={2} mt={3}>
              <TextField
                variant="outlined"
                size="medium"
                fullWidth
                value={`${key.purchase_key}|${key.activation_key}`}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          handleCopyToClipboard(
                            `${key.purchase_key}|${key.activation_key}`
                          )
                        }
                      >
                        <Icon icon="akar-icons:copy" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          ))}
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button variant="contained" color="error" onClick={handleCloseDialog}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <section className="pt-6 pb-6 px-6">
        {bannerUrl?.banner_link ? (
          <Link
            href={bannerUrl.banner_link}
            className="flex justify-center mb-4"
          >
            <img src={bannerUrl?.banner_src} alt={bannerUrl?.banner_website} />
          </Link>
        ) : (
          <div className="flex justify-center mb-4">
            <img src={bannerUrl?.banner_src} alt={bannerUrl?.banner_website} />
          </div>
        )}
      </section>

      {unlimitedTeAccess?.purchase_approved && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          className="container mx-auto"
          mb={-8}
          sx={{
            flexWrap: "wrap",
            gap: 2,
            padding: { xs: "10px", sm: "15px", md: "20px" },
          }}
        ></Box>
      )}

      {unlimitedTeAccess?.purchase_valid &&
        !unlimitedTeAccess?.purchase_approved && (
          <section className="pt-6 pb-6 container mx-auto px-6">
            <div className="text-center">
              <div role="alert">
                <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                  Unlimited Test Engine Access!
                </div>
                <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                  <p>
                    Your Unlimited Test Engine access is not approved yet. We
                    are checking your payment so this might take a few hours.
                    Please contact our sales chat support or send an email to{" "}
                    <a
                      href="mailto:sales@passqueen.com"
                      className="text-blue-600"
                    >
                      sales@passqueen.com
                    </a>{" "}
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
                    Unlimited Test Engine Access
                  </h1>
                  <p className="text-blue-500 text-lg mt-2 font-semibold max-w-xl">
                    You have downloaded: {unlimitedTeAccess?.total_downloaded} \{" "}
                    {unlimitedTeAccess?.total_limit}
                  </p>
                  <p className="text-gray-500 text-base mt-2 font-semibold mb-2">
                    (Each download of a different or the same Test Engine file
                    will affect the download limit)
                  </p>
                  <p className="text-red-500 text-base mt-2 font-semibold mb-6 max-w-xl">
                    (For Activation Key. Must have to download TEST ENGINE file
                    first.)
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
                {unlimitedTeAccess?.vendors
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((vendor, index) => (
                    <div key={index} className="mb-6">
                      <div className="mb-4">
                        <div className="bg-clip-text px-3 text-2xl font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                          {vendor.vendor_title}
                        </div>
                      </div>
                      {vendor?.exams.map((exam, examIndex) => (
                        <div
                          key={examIndex}
                          className="py-4 px-8 mb-2 bg-white rounded-2xl "
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
                                    <button className="px-2 py-1 rounded-md mb-2 text-white bg-green-500 flex hover:bg-green-600">
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
                                      <div> Download Premium TE File</div>
                                    </button>
                                  </Link>
                                </div>
                                <div className="flex justify-end">
                                  <button
                                    className="px-2 py-1 rounded-md text-white bg-blue-500 ml-2 flex hover:bg-blue-600 "
                                    onClick={() => handleGetKey(exam)}
                                  >
                                    <div className="flex flex-col justify-center mr-2">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1.1em"
                                        height="1.5em"
                                        viewBox="0 0 24 24"
                                      >
                                        <g
                                          fill="white"
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                        >
                                          <path d="M15.68 5.348a2.95 2.95 0 0 0-2.953 2.946a2.95 2.95 0 0 0 2.954 2.945a2.95 2.95 0 0 0 2.954-2.945a2.95 2.95 0 0 0-2.954-2.946m-1.453 2.946a1.45 1.45 0 0 1 1.454-1.446c.806 0 1.454.65 1.454 1.446a1.45 1.45 0 0 1-1.454 1.445a1.45 1.45 0 0 1-1.454-1.445" />
                                          <path d="M9.53 20.878a2.2 2.2 0 0 0 .432-1.355c.392.116.78.13 1.152.06c.768-.146 1.337-.632 1.639-1.032l.005-.007l.005-.007a2.42 2.42 0 0 0 .396-2.02a2.9 2.9 0 0 0-.36-.85a2.2 2.2 0 0 0-.272-.393l.009-.01l.464-.462c.382.183.796.298 1.158.373a8 8 0 0 0 1.523.162c3.901 0 7.069-3.15 7.069-7.044c0-3.892-3.168-7.043-7.07-7.043c-3.9 0-7.069 3.15-7.069 7.043a6.5 6.5 0 0 0 .57 2.635l-7.256 7.226a2.37 2.37 0 0 0-.648 1.255c-.099.603.063 1.274.648 1.856l.882.878l.042.04a2.46 2.46 0 0 0 1.197.544a1.98 1.98 0 0 0 1.73-.584l.566-.564a2.33 2.33 0 0 0 1.617.276a2.62 2.62 0 0 0 1.56-.963l.006-.007zm.581-12.585c0-3.058 2.491-5.543 5.57-5.543c3.078 0 5.569 2.485 5.569 5.543c0 3.06-2.49 5.544-5.57 5.544c-.272 0-.743-.033-1.218-.13c-.497-.104-.887-.257-1.095-.43a.75.75 0 0 0-1.008.047l-.882.878c-.201.2-.395.428-.498.691c-.13.333-.088.653.06.92c.088.157.23.307.289.37l.02.021c.07.077.107.127.135.183l.027.053l.03.042l.007.01q.014.023.042.076c.038.073.082.176.11.297a.92.92 0 0 1-.15.79c-.14.183-.407.396-.714.454c-.258.049-.678.017-1.238-.54a.75.75 0 0 0-1.059 0l-.294.292a.75.75 0 0 0-.032 1.03q.018.024.055.08c.048.075.104.18.144.3c.076.225.088.466-.095.726c-.12.155-.363.332-.639.384c-.234.045-.534.012-.872-.325a.75.75 0 0 0-1.059 0l-1.029 1.025c-.165.164-.31.183-.452.162a1 1 0 0 1-.424-.187l-.857-.854c-.239-.237-.248-.42-.227-.55a.87.87 0 0 1 .227-.436l7.644-7.613a.746.746 0 0 0 .105-.925l-.002-.003a2 2 0 0 1-.082-.15a5 5 0 0 1-.538-2.232m-1.91 10.583q0 .002.004.005l-.001-.001z" />
                                        </g>
                                      </svg>{" "}
                                    </div>
                                    <div> Test Engine Access</div>
                                  </button>
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
                    Showing {page * rowsPerPage + 1} to{" "}
                    {Math.min(
                      page * rowsPerPage + rowsPerPage,
                      unlimitedTeAccess?.vendors.length
                    )}{" "}
                    of {unlimitedTeAccess?.vendors.length} exams
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outlined"
                      onClick={handlePreviousPage}
                      disabled={page === 0}
                    >
                      Previous
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={handleNextPage}
                      disabled={
                        page >=
                        Math.ceil(
                          unlimitedTeAccess?.vendors.length / rowsPerPage
                        ) -
                          1
                      }
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

export default withAuth(UnlimitedTeAccessPage);
