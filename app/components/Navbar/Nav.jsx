"use client";
/* eslint-disable @next/next/no-img-element */
import { Avatar, Card } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Nav = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loginResponse, setLoginResponse] = useState(null);
  const [cartResponce, setCartResponce] = useState(null);
  const [searchData, setSearchData] = useState([]);
  const [vendorData, setVendorData] = useState([]);
  const [certificationData, setCertificationData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleSignOut = () => {
    localStorage.removeItem("loginResponse");
    window.location.reload();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${Base_URL}/v1/coupons`, {
          headers: {
            "x-api-key": X_API_Key,
          },
        });
        localStorage.setItem("coupons", JSON.stringify(response.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const storedLoginResponse = localStorage.getItem("loginResponse");
      if (storedLoginResponse) {
        setLoginResponse(JSON.parse(storedLoginResponse));
      }
    }
    if (typeof localStorage !== "undefined") {
      const storedLoginResponse = localStorage.getItem("CartProducts");
      if (storedLoginResponse) {
        setCartResponce(JSON.parse(storedLoginResponse));
      }
    }
  }, []);

  const truncatedEmail =
    loginResponse?.email?.length > 10
      ? `${loginResponse?.email?.slice(0, 10)}...`
      : loginResponse?.email;
  const truncatedName =
    loginResponse?.name?.length > 12
      ? `${loginResponse?.name?.slice(0, 12)}...`
      : loginResponse?.name;

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const closeNav = () => {
    setIsNavVisible(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (value) => {
    setSearchValue(value);
    router.push("#");
  };

  const filteredData = searchData
    .filter((item) =>
      item.code.toLowerCase().startsWith(searchValue.toLowerCase())
    )
    .slice(0, 30);

  const filteredVendors = vendorData
    .filter((item) =>
      item.slug.toLowerCase().startsWith(searchValue.toLowerCase())
    )
    .slice(0, 10);

  const filteredCertifications = certificationData
    .filter((item) =>
      item.slug.toLowerCase().startsWith(searchValue.toLowerCase())
    )
    .slice(0, 10);

  const handleExamPage = (exam) => {
    router.push(`/exam-training/${exam.vendor}/${exam.slug}`);
    setSearchValue("");
  };
  const handleVendorPage = (exam) => {
    router.push(`/exam-provider/${exam}`);
    setSearchValue("");
  };
  const handleCertificationPage = (exam) => {
    router.push(`/vendor-exam-training/${exam.vendor}/${exam.slug}`);
    setSearchValue("");
  };

  const fetchData = async () => {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        const storedExamData = localStorage.getItem("searchData");
        if (storedExamData) {
          setSearchData(JSON.parse(storedExamData));
        } else {
          const examResponse = await axios.get(
            `https://dumpsarena.com/exam-search`
          );
          setSearchData(examResponse.data);
          localStorage.setItem("searchData", JSON.stringify(examResponse.data));
        }

        const storedVendorData = localStorage.getItem("vendorData");
        if (storedVendorData) {
          setVendorData(JSON.parse(storedVendorData));
        } else {
          const vendorResponse = await axios.get(
            `https://dumpsarena.com/vendor-search`
          );
          setVendorData(vendorResponse.data);
          localStorage.setItem(
            "vendorData",
            JSON.stringify(vendorResponse.data)
          );
        }

        const storedCertificationData =
          localStorage.getItem("certificationData");
        if (storedCertificationData) {
          setCertificationData(JSON.parse(storedCertificationData));
        } else {
          const certificationResponse = await axios.get(
            `https://dumpsarena.com/certification-search`
          );
          setCertificationData(certificationResponse.data);
          localStorage.setItem(
            "certificationData",
            JSON.stringify(certificationResponse.data)
          );
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <div className="container mx-auto max-w-8xl">
        <nav className="relative">
          <div className="h-20 py-4 px-6">
            <div className="flex h-full -mx-4 items-center justify-between">
              <div className="w-10/12 px-4">
                <div className="flex items-center">
                  <Link
                    className="inline-block h-5 mb-3 mr-6 flex-shrink-0"
                    href="/"
                  >
                    <img
                      src="/img/pass_queen_dark.png"
                      height={"180px"}
                      width={"180px"}
                      alt="Pass Queen"
                    />
                  </Link>
                  <div className="hidden bg-gray-50 lg:flex w-full max-w-xs items-center px-6 border border-white rounded-full">
                    <input
                      className="h-10 w-full bg-gray-50 border-0 text-sm text-gray-500 placeholder-gray-500 outline-none"
                      type="search"
                      placeholder="Search..."
                      value={searchValue}
                      onChange={(e) => {
                        const { value } = e.target;
                        handleSearch(value);
                      }}
                    />
                    <button
                      className="inline-block ml-auto text-coolGray-400 hover:text-rhino-500"
                      type="submit"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.33333 11.6667C9.27885 11.6667 11.6667 9.27885 11.6667 6.33333C11.6667 3.38782 9.27885 1 6.33333 1C3.38782 1 1 3.38782 1 6.33333C1 9.27885 3.38782 11.6667 6.33333 11.6667Z"
                          stroke="#5D5B64"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.0001 13L10.1001 10.1"
                          stroke="#5D5B64"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex items-right">
                <a
                  className="inline-flex mr-10 items-right text-sm text-nowrap font-semibold hover:text-indigo-500 text-opacity-90 text-gray-600"
                  href="#"
                >
                  <span className="mr-2 underline-offset-2 font-bold">
                    Vendors
                  </span>
                </a>
                <a
                  className="inline-flex mr-10 items-right text-sm text-nowrap font-semibold hover:text-indigo-500 text-opacity-90 text-gray-600"
                  href="#"
                >
                  <span className="mr-2 underline-offset-2 font-bold">
                    Certifications
                  </span>
                </a>
                <a
                  className="inline-flex mr-10 items-right text-sm text-nowrap font-semibold hover:text-indigo-400 text-opacity-90 text-gray-600"
                  href="#"
                >
                  <span className="mr-2 underline-offset-2 font-bold">
                    Unlimited Access
                  </span>
                </a>
                <a
                  className="inline-flex items-right text-sm text-nowrap font-semibold hover:text-indigo-400 text-opacity-90 text-gray-600"
                  href="#"
                >
                  <span className="mr-2 underline-offset-2 font-bold">
                    Video Courses
                  </span>
                </a>
              </div>
              <div className="w-1/2 px-4">
                <div className="flex items-center justify-end">
                  <a
                    className="group bg-indigo-500 opacity-90 mr-6 px-3 rounded-lg shadow-lg border-indigo-400 shadow-neutral-300 border-2 py-3 inline-flex items-center text-sm"
                    href="#"
                  >
                    <span className="md:mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M10.5 10h4m-2-2v4m4 9a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-8 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M3.71 5.4h15.214c1.378 0 2.373 1.27 1.995 2.548l-1.654 5.6C19.01 14.408 18.196 15 17.27 15H8.112c-.927 0-1.742-.593-1.996-1.452zm0 0L3 3"
                        />
                      </svg>
                    </span>
                    <span className="hidden 2xl:inline-block text-white font-semibold">
                      Cart
                    </span>
                  </a>
                  <a
                    className="group bg-indigo-500 opacity-90 px-3 rounded-lg shadow-lg border-indigo-400 shadow-neutral-300 border-2 py-3 inline-flex items-center text-sm"
                    href="#"
                  >
                    <span className="md:mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 19c0-2.21-2.686-4-6-4s-6 1.79-6 4m16-3v-3m0 0v-3m0 3h-3m3 0h3M9 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8"
                        />
                      </svg>
                    </span>
                    <span className="hidden 2xl:inline-block text-white font-semibold">
                      Sign In / Sign Up
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="bg-white border-white" style={{ paddingTop: "2px" }} />
          <div className="flex w-full items-center justify-between lg:hidden h-14 py-3 px-6 ">
            <div className="bg-gray-50 lg:flex w-full max-w-xs items-center px-6 border border-white rounded-full">
              <input
                className="h-10 w-full bg-gray-50 border-0 text-sm text-gray-500 placeholder-gray-500 outline-none"
                type="search"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => {
                  const { value } = e.target;
                  handleSearch(value);
                }}
              />
            </div>
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="lg:hidden text-coolGray-400 hover:text-coolGray-600"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 6H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 18H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
      <div
        className={`${
          mobileNavOpen ? "block" : "hidden"
        } fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50`}
      >
        <div
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="fixed inset-0 bg-purple-100 opacity-70"
        ></div>
        <nav className="relative flex flex-col pt-12 pb-6 px-8 w-full h-full bg-white overflow-y-auto">
          <div className="flex mb-12 items-center">
            <a className="inline-block mr-auto" href="#">
              <img className="h-8" src="/img/pass_queen_dark.png" alt="Logo" />
            </a>
            <button onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6L18 18"
                  stroke="#252E4A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="py-12 mb-auto">
            <ul className="flex-col">
              <li className="mb-3">
                <a
                  className="group mr-6 inline-flex items-center text-base"
                  href="#"
                >
                  <span className="mr-2 text-purple-400">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3334 13.3333V12C13.3334 11.2928 13.0525 10.6145 12.5524 10.1144C12.0523 9.61429 11.374 9.33334 10.6667 9.33334H5.33341C4.62617 9.33334 3.94789 9.61429 3.4478 10.1144C2.9477 10.6145 2.66675 11.2928 2.66675 12V13.3333"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.99992 6.66667C9.47268 6.66667 10.6666 5.47276 10.6666 4C10.6666 2.52724 9.47268 1.33334 7.99992 1.33334C6.52716 1.33334 5.33325 2.52724 5.33325 4C5.33325 5.47276 6.52716 6.66667 7.99992 6.66667Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="font-semibold text-rhino-700">Login</span>
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="group mr-6 inline-flex items-center text-base"
                  href="#"
                >
                  <span className="mr-2 text-purple-400">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1208_8162)">
                        <path
                          d="M14.1941 3.07455C13.8536 2.73389 13.4493 2.46365 13.0043 2.27927C12.5594 2.0949 12.0824 2 11.6008 2C11.1191 2 10.6422 2.0949 10.1972 2.27927C9.75224 2.46365 9.34795 2.73389 9.00745 3.07455L8.30078 3.78122L7.59411 3.07455C6.90632 2.38676 5.97347 2.00036 5.00078 2.00036C4.02809 2.00036 3.09524 2.38676 2.40745 3.07455C1.71965 3.76235 1.33325 4.69519 1.33325 5.66788C1.33325 6.64057 1.71965 7.57342 2.40745 8.26122L3.11411 8.96788L8.30078 14.1545L13.4874 8.96788L14.1941 8.26122C14.5348 7.92071 14.805 7.51643 14.9894 7.07145C15.1738 6.62648 15.2687 6.14954 15.2687 5.66788C15.2687 5.18623 15.1738 4.70929 14.9894 4.26431C14.805 3.81934 14.5348 3.41505 14.1941 3.07455V3.07455Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </span>
                  <span className="font-semibold text-rhino-700">Favorite</span>
                </a>
              </li>
              <li className="mb-12">
                <a
                  className="inline-flex items-center text-base text-purple-400 hover:text-blue-400"
                  href="#"
                >
                  <span className="mr-2 text-purple-400">
                    <svg
                      width="18"
                      height="17"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.99992 15.3333C7.36811 15.3333 7.66658 15.0349 7.66658 14.6667C7.66658 14.2985 7.36811 14 6.99992 14C6.63173 14 6.33325 14.2985 6.33325 14.6667C6.33325 15.0349 6.63173 15.3333 6.99992 15.3333Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.3334 15.3333C14.7016 15.3333 15.0001 15.0349 15.0001 14.6667C15.0001 14.2985 14.7016 14 14.3334 14C13.9652 14 13.6667 14.2985 13.6667 14.6667C13.6667 15.0349 13.9652 15.3333 14.3334 15.3333Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.66675 1.33334H4.33341L6.12008 10.26C6.18104 10.5669 6.34802 10.8426 6.59178 11.0389C6.83554 11.2351 7.14055 11.3393 7.45341 11.3333H13.9334C14.2463 11.3393 14.5513 11.2351 14.7951 11.0389C15.0388 10.8426 15.2058 10.5669 15.2667 10.26L16.3334 4.66667H5.00008"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="font-semibold text-rhino-700">Cart</span>
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="flex items-center text-base font-bold text-rhino-700"
                  href="#"
                >
                  <span className="mr-2 underline font-semibold">Home</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.47315 10.36L12.2398 6.58667C12.3023 6.52469 12.3519 6.45096 12.3857 6.36972C12.4196 6.28848 12.437 6.20134 12.437 6.11333C12.437 6.02533 12.4196 5.93819 12.3857 5.85695C12.3519 5.77571 12.3023 5.70198 12.2398 5.64C12.1149 5.51583 11.9459 5.44614 11.7698 5.44614C11.5937 5.44614 11.4247 5.51583 11.2998 5.64L7.96648 8.94L4.66648 5.64C4.54157 5.51583 4.3726 5.44614 4.19648 5.44614C4.02036 5.44614 3.85139 5.51583 3.72648 5.64C3.66349 5.70174 3.61337 5.77537 3.57904 5.85662C3.54471 5.93787 3.52685 6.02513 3.52648 6.11333C3.52685 6.20154 3.54471 6.28879 3.57904 6.37004C3.61337 6.45129 3.66349 6.52492 3.72648 6.58667L7.49315 10.36C7.55557 10.4277 7.63134 10.4817 7.71568 10.5186C7.80001 10.5556 7.89108 10.5746 7.98315 10.5746C8.07521 10.5746 8.16628 10.5556 8.25062 10.5186C8.33495 10.4817 8.41072 10.4277 8.47315 10.36Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="flex items-center text-base font-bold text-rhino-700"
                  href="#"
                >
                  <span className="mr-2 underline font-semibold">Pages</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.47315 10.36L12.2398 6.58667C12.3023 6.52469 12.3519 6.45096 12.3857 6.36972C12.4196 6.28848 12.437 6.20134 12.437 6.11333C12.437 6.02533 12.4196 5.93819 12.3857 5.85695C12.3519 5.77571 12.3023 5.70198 12.2398 5.64C12.1149 5.51583 11.9459 5.44614 11.7698 5.44614C11.5937 5.44614 11.4247 5.51583 11.2998 5.64L7.96648 8.94L4.66648 5.64C4.54157 5.51583 4.3726 5.44614 4.19648 5.44614C4.02036 5.44614 3.85139 5.51583 3.72648 5.64C3.66349 5.70174 3.61337 5.77537 3.57904 5.85662C3.54471 5.93787 3.52685 6.02513 3.52648 6.11333C3.52685 6.20154 3.54471 6.28879 3.57904 6.37004C3.61337 6.45129 3.66349 6.52492 3.72648 6.58667L7.49315 10.36C7.55557 10.4277 7.63134 10.4817 7.71568 10.5186C7.80001 10.5556 7.89108 10.5746 7.98315 10.5746C8.07521 10.5746 8.16628 10.5556 8.25062 10.5186C8.33495 10.4817 8.41072 10.4277 8.47315 10.36Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="flex items-center text-base font-bold text-rhino-700"
                  href="#"
                >
                  Products
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="flex items-center text-base font-bold text-rhino-700"
                  href="#"
                >
                  Blog
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="flex items-center text-base font-bold text-rhino-700"
                  href="#"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  className="flex items-center text-base font-semibold hover:text-indigo-400 text-opacity-90 text-gray-600"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-center text-sm text-coolGray-400">
              passqueen.com
            </p>
          </div>
        </nav>
      </div>
      {searchValue && (
        <div>
          <ul
            style={{
              backgroundColor: "white",
              color: "gray",
              padding: "0",
              margin: "0",
              listStyle: "none",
              position: "absolute",
              left: 0,
              borderRadius: "0px",
            }}
            className="lg:z-50 w-full"
          >
            <Card
              sx={{ maxHeight: "500px", overflowY: "auto", padding: "10px" }}
            >
              <li
                style={{
                  padding: "10px",
                  border: "1px solid #7274F2",
                  textAlign: "center",
                }}
              >
                <b>See all search for &quot;{searchValue}&quot;</b>
              </li>
              <li
                className="bg-indigo-500 text-white font-bold text-xl text-center"
                style={{
                  padding: "10px",
                  borderTop: "1px solid #7274F2",
                  borderLeft: "1px solid #7274F2",
                  borderRight: "1px solid #7274F2",
                  borderBottom: "1px solid #7274F2",
                }}
              >
                Exams - {filteredData.length}
              </li>
              {filteredData.map((item, index) => (
                <div
                  key={item.code}
                  onClick={() => handleExamPage(item)}
                  style={{ cursor: "pointer" }}
                >
                  <li
                    style={{
                      padding: "10px",
                      borderTop: "1px solid #7274F2",
                      borderLeft: "1px solid #7274F2",
                      borderRight: "1px solid #7274F2",
                      borderBottom: "1px solid #7274F2",
                    }}
                    className="hover:bg-gray-200 flex"
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/package-small-min_optimized.png"
                      className="mr-3 mt-1"
                      variant="rounded"
                    />
                    <div>
                      <div className="text-gray-700 font-bold">
                        {item.code} - ({item.code})
                      </div>
                      <div>{item.name}</div>
                    </div>
                  </li>
                </div>
              ))}
              <li
                className="bg-indigo-500 text-white font-bold text-xl text-center"
                style={{
                  padding: "10px",
                  borderTop: "1px solid #7274F2",
                  borderLeft: "1px solid #7274F2",
                  borderRight: "1px solid #7274F2",
                  borderBottom: "1px solid #7274F2",
                }}
              >
                Vendors - {filteredVendors.length}
              </li>
              {filteredVendors.map((item, index) => (
                <div
                  key={item.code}
                  onClick={() => handleVendorPage(item.slug)}
                  style={{ cursor: "pointer" }}
                >
                  <li
                    style={{
                      padding: "10px",
                      borderTop: "1px solid #7274F2",
                      borderLeft: "1px solid #7274F2",
                      borderRight: "1px solid #7274F2",
                      borderBottom: "1px solid #7274F2",
                    }}
                    className="hover:bg-gray-200 flex"
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/img-1.png"
                      className="mr-3 mt-1"
                      variant="rounded"
                    />
                    <div>
                      <div className="text-gray-700 font-bold">{item.slug}</div>
                      <div>{item.name}</div>
                    </div>
                  </li>
                </div>
              ))}
              <li
                className="bg-indigo-500 text-white font-bold text-xl text-center"
                style={{
                  padding: "10px",
                  borderTop: "1px solid #7274F2",
                  borderLeft: "1px solid #7274F2",
                  borderRight: "1px solid #7274F2",
                  borderBottom: "1px solid #7274F2",
                }}
              >
                Certifications - {filteredCertifications.length}
              </li>
              {filteredCertifications.map((item, index) => (
                <div
                  key={item.code}
                  onClick={() => handleCertificationPage(item)}
                  style={{ cursor: "pointer" }}
                >
                  <li
                    style={{
                      padding: "10px",
                      borderTop: "1px solid #7274F2",
                      borderLeft: "1px solid #7274F2",
                      borderRight: "1px solid #7274F2",
                      borderBottom: "1px solid #7274F2",
                    }}
                    className="hover:bg-gray-200 flex"
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/package-small-min_optimized.png"
                      className="mr-3 mt-1"
                      variant="rounded"
                    />
                    <div>
                      <div className="text-gray-700 font-bold">{item.slug}</div>
                      <div>{item.name}</div>
                    </div>
                  </li>
                </div>
              ))}
            </Card>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Nav;
