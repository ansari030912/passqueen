/* eslint-disable react/jsx-key */
"use client";
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Typography, Tooltip } from "@mui/material";
import Link from "next/link";
import moment from "moment";

const ProductsPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null); // Keeps track of the currently open accordion
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
      const response = await axios.get(`${Base_URL}/v1/account/products`, {
        headers: {
          "x-api-key": X_API_Key,
          Authorization: `Bearer ${loginResponse._token}`,
        },
      });
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleAccordion = (index) => {
    setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="pt-24 pb-36 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 font-heading font-semibold text-3xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Purchase Products
        </h2>
        <div className="max-w-9xl mx-auto bg-gradient-cyan p-0.5">
          {data?.length <= 0 ? (
            <div className="my-6 text-3xl font-bold text-red-500 text-center h-80 flex flex-col justify-center pb-8">
              <h2>There Is No Purchase Product In Your Account History.</h2>
            </div>
          ) : (
            <div className="flex flex-wrap">
              <div className="w-full">
                {data.map((row, index) => (
                  <div key={index}>
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        toggleAccordion(index);
                      }}
                      className="cursor-pointer pb-0.5 bg-gradient-cyan"
                    >
                      <div className="py-2 px-5">
                        <div className="flex flex-wrap bg-white shadow-lg px-4 justify-between -mx-5">
                          <div className="flex-1 p-2">
                            <p className="font-heading font-semibold text-lg ">
                              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                                {row.product_vendor
                                  ? row.product_vendor
                                  : row.product_type_detail}{" "}
                                {row.product_code !==
                                  "Unlimited Test Engine Access" &&
                                row.product_code !== "Unlimited PDF Access"
                                  ? `- ${row.product_code}`
                                  : ""}
                              </span>
                              <span
                                className={`lg:text-center text-base font-semibold ml-2 px-2 py-1 rounded-full ${
                                  row.product_expired
                                    ? "text-red-500 bg-red-100"
                                    : "text-green-500 bg-green-100"
                                } font-bold`}
                              >
                                {row.product_expired ? "Expired" : "Active"}
                              </span>
                            </p>
                            <p className="w-full font-semibold text-base text-gray-500">
                              {row.product_name ? row.product_name : ""}
                            </p>
                            <p
                              className={`font-semibold text-sm ${
                                row.product_expired
                                  ? "text-red-500"
                                  : "text-green-500"
                              }`}
                            >
                              {moment(row.product_expiry_date).format("LL")}
                            </p>
                            <div
                              className={`visibility-item overflow-hidden duration-500 ${
                                activeAccordion === index
                                  ? "h-auto mt-4 border-t-2 pt-5 border-t-gray-200"
                                  : "h-0"
                              }`}
                              style={{ transition: "height 0.5s ease" }}
                              onClick={(e) => e.stopPropagation()} // Prevents the accordion from closing when clicking inside
                            >
                              {activeAccordion === index && (
                                <Grid container item xs={12} spacing={1}>
                                  {row?.product_access?.map((product, i) => (
                                    <Grid item xs={12} lg={4} key={i}>
                                      {product?.type === "download_pdf" && (
                                        <Tooltip title="Download Premium PDF">
                                          <Link
                                            href={`https://certsgang.com${product.url}`}
                                            passHref
                                          >
                                            <Typography
                                              variant="button"
                                              className="flex justify-center bg-green-600 font-bold text-white"
                                              style={{
                                                padding: "4px 8px",
                                                borderRadius: "4px",
                                                display: "flex",
                                                alignItems: "center",
                                              }}
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1.5em"
                                                height="1.5em"
                                                viewBox="0 0 24 24"
                                                style={{ marginRight: "8px" }}
                                              >
                                                <g
                                                  fill="none"
                                                  stroke="white"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth="2"
                                                >
                                                  <path
                                                    strokeDasharray="20"
                                                    strokeDashoffset="20"
                                                    d="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"
                                                  >
                                                    <animate
                                                      fill="freeze"
                                                      attributeName="stroke-dashoffset"
                                                      dur="0.4s"
                                                      values="20;0"
                                                    />
                                                  </path>
                                                  <path
                                                    strokeDasharray="16"
                                                    strokeDashoffset="16"
                                                    d="M6 19h12"
                                                  >
                                                    <animate
                                                      fill="freeze"
                                                      attributeName="stroke-dashoffset"
                                                      begin="0.5s"
                                                      dur="0.2s"
                                                      values="16;0"
                                                    />
                                                  </path>
                                                </g>
                                              </svg>
                                              Download PDF
                                            </Typography>
                                          </Link>
                                        </Tooltip>
                                      )}
                                      {product?.type === "te_access" && (
                                        <Tooltip title="Test Engine Access">
                                          <Link
                                            href={`/te-access/${product?.prams?.payment_id}/${product?.prams?.exam_id}/${product?.prams?.rel_id}`}
                                            passHref
                                          >
                                            <Typography
                                              variant="button"
                                              className="flex justify-center bg-yellow-400 text-white font-bold"
                                              style={{
                                                padding: "4px 8px",
                                                borderRadius: "4px",
                                                display: "flex",
                                                alignItems: "center",
                                              }}
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1.5em"
                                                height="1.5em"
                                                style={{ marginRight: "8px" }}
                                                viewBox="0 0 24 24"
                                              >
                                                <g
                                                  fill="currentColor"
                                                  fill-rule="evenodd"
                                                  clip-rule="evenodd"
                                                >
                                                  <path d="M15.68 5.348a2.95 2.95 0 0 0-2.953 2.946a2.95 2.95 0 0 0 2.954 2.945a2.95 2.95 0 0 0 2.954-2.945a2.95 2.95 0 0 0-2.954-2.946m-1.453 2.946a1.45 1.45 0 0 1 1.454-1.446c.806 0 1.454.65 1.454 1.446a1.45 1.45 0 0 1-1.454 1.445a1.45 1.45 0 0 1-1.454-1.445" />
                                                  <path d="M9.53 20.878a2.2 2.2 0 0 0 .432-1.355c.392.116.78.13 1.152.06c.768-.146 1.337-.632 1.639-1.032l.005-.007l.005-.007a2.42 2.42 0 0 0 .396-2.02a2.9 2.9 0 0 0-.36-.85a2.2 2.2 0 0 0-.272-.393l.009-.01l.464-.462c.382.183.796.298 1.158.373a8 8 0 0 0 1.523.162c3.901 0 7.069-3.15 7.069-7.044c0-3.892-3.168-7.043-7.07-7.043c-3.9 0-7.069 3.15-7.069 7.043a6.5 6.5 0 0 0 .57 2.635l-7.256 7.226a2.37 2.37 0 0 0-.648 1.255c-.099.603.063 1.274.648 1.856l.882.878l.042.04a2.46 2.46 0 0 0 1.197.544a1.98 1.98 0 0 0 1.73-.584l.566-.564a2.33 2.33 0 0 0 1.617.276a2.62 2.62 0 0 0 1.56-.963l.006-.007zm.581-12.585c0-3.058 2.491-5.543 5.57-5.543c3.078 0 5.569 2.485 5.569 5.543c0 3.06-2.49 5.544-5.57 5.544c-.272 0-.743-.033-1.218-.13c-.497-.104-.887-.257-1.095-.43a.75.75 0 0 0-1.008.047l-.882.878c-.201.2-.395.428-.498.691c-.13.333-.088.653.06.92c.088.157.23.307.289.37l.02.021c.07.077.107.127.135.183l.027.053l.03.042l.007.01q.014.023.042.076c.038.073.082.176.11.297a.92.92 0 0 1-.15.79c-.14.183-.407.396-.714.454c-.258.049-.678.017-1.238-.54a.75.75 0 0 0-1.059 0l-.294.292a.75.75 0 0 0-.032 1.03q.018.024.055.08c.048.075.104.18.144.3c.076.225.088.466-.095.726c-.12.155-.363.332-.639.384c-.234.045-.534.012-.872-.325a.75.75 0 0 0-1.059 0l-1.029 1.025c-.165.164-.31.183-.452.162a1 1 0 0 1-.424-.187l-.857-.854c-.239-.237-.248-.42-.227-.55a.87.87 0 0 1 .227-.436l7.644-7.613a.746.746 0 0 0 .105-.925l-.002-.003a2 2 0 0 1-.082-.15a5 5 0 0 1-.538-2.232m-1.91 10.583q0 .002.004.005l-.001-.001z" />
                                                </g>
                                              </svg>
                                              Test Engine Access
                                            </Typography>
                                          </Link>
                                        </Tooltip>
                                      )}
                                      {product?.type === "sc_access" && (
                                        <Tooltip title="Start Training Course">
                                          <Link
                                            href={`/sc-access/${product?.prams?.payment_id}/${product?.prams?.exam_id}`}
                                            passHref
                                          >
                                            <Typography
                                              variant="button"
                                              className="flex justify-center bg-red-600 font-bold text-sm text-white"
                                              style={{
                                                padding: "4px 8px",
                                                borderRadius: "4px",
                                                display: "flex",
                                                alignItems: "center",
                                              }}
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1.5em"
                                                height="1.5em"
                                                style={{ marginRight: "8px" }}
                                                viewBox="0 0 2048 2048"
                                              >
                                                <path
                                                  fill="currentColor"
                                                  d="M1760 1590q66 33 119 81t90 107t58 128t21 142h-128q0-79-30-149t-82-122t-123-83t-149-30q-80 0-149 30t-122 82t-83 123t-30 149h-128q0-73 20-142t58-128t91-107t119-81q-75-54-117-135t-43-175q0-79 30-149t82-122t122-83t150-30q79 0 149 30t122 82t83 123t30 149q0 94-42 175t-118 135m-224-54q53 0 99-20t82-55t55-81t20-100q0-53-20-99t-55-82t-81-55t-100-20q-53 0-99 20t-82 55t-55 81t-20 100q0 53 20 99t55 82t81 55t100 20m-512 80q-32 37-58 77t-46 86q-53-55-128-85t-152-30H256V384H128v1408h787q-14 31-23 63t-15 65H0V256h256V128h384q88 0 169 27t151 81q69-54 150-81t170-27h384v128h256v640q-58-57-128-95V384h-128v369q-32-9-64-13t-64-4V256h-256q-70 0-136 24t-120 71zm-128-13V351q-54-46-120-70t-136-25H384v1280h256q67 0 132 17t124 50"
                                                />
                                              </svg>
                                              Start Training Course
                                            </Typography>
                                          </Link>
                                        </Tooltip>
                                      )}
                                      {product?.type ===
                                        "unlimited_te_access" && (
                                        <Tooltip title="Unlimited Test Engine Access">
                                          <Link
                                            href={`/unlimited-te-access/${product?.prams.payment_id}/${product?.prams.rel_id}`}
                                            passHref
                                          >
                                            <Typography
                                              variant="button"
                                              className="flex justify-center bg-yellow-400 font-bold text-white"
                                              style={{
                                                padding: "4px 8px",
                                                borderRadius: "4px",
                                                display: "flex",
                                                alignItems: "center",
                                              }}
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1.5em"
                                                height="1.5em"
                                                viewBox="0 0 16 16"
                                                style={{ marginRight: "8px" }}
                                              >
                                                <g
                                                  fill="none"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                >
                                                  <path
                                                    stroke="white"
                                                    d="m1.875 8l.686-2.743a1 1 0 0 1 .97-.757h10.938a1 1 0 0 1 .97 1.243l-.315 1.26M6 13.5H2.004A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
                                                  />
                                                  <path
                                                    stroke="white"
                                                    d="m13.158 9.16l-4.272 4.253c-.558.555-.45 1.31-.064 1.694c.406.404 1.077.641 1.743-.022l4.269-4.25M12.5 8.5l.5.5l1 1l1 1l.5.5m-3.478 2.006H8.96"
                                                  />
                                                </g>
                                              </svg>
                                              Unlimited TE Access
                                            </Typography>
                                          </Link>
                                        </Tooltip>
                                      )}
                                      {product?.type ===
                                        "unlimited_pdf_access" && (
                                        <Tooltip title="Unlimited PDF Access">
                                          <Link
                                            href={`/unlimited-pdf-access/${product?.prams.payment_id}/${product?.prams.rel_id}`}
                                            passHref
                                          >
                                            <Typography
                                              variant="button"
                                              className="flex justify-center bg-green-600 font-bold text-white"
                                              style={{
                                                padding: "4px 8px",
                                                borderRadius: "4px",
                                                display: "flex",
                                                alignItems: "center",
                                              }}
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1.5em"
                                                height="1.5em"
                                                style={{ marginRight: "8px" }}
                                                viewBox="0 0 16 16"
                                              >
                                                <path
                                                  fill="none"
                                                  stroke="white"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                  d="M2.8 14.34c1.81-1.25 3.02-3.16 3.91-5.5c.9-2.33 1.86-4.33 1.44-6.63c-.06-.36-.57-.73-.83-.7c-1.02.06-.95 1.21-.85 1.9c.24 1.71 1.56 3.7 2.84 5.56c1.27 1.87 2.32 2.16 3.78 2.26c.5.03 1.25-.14 1.37-.58c.77-2.8-9.02-.54-12.28 2.08c-.4.33-.86 1-.6 1.46c.2.36.87.4 1.23.15h0Z"
                                                />
                                              </svg>
                                              Unlimited PDF Access
                                            </Typography>
                                          </Link>
                                        </Tooltip>
                                      )}
                                    </Grid>
                                  ))}
                                </Grid>
                              )}
                            </div>
                          </div>
                          <div className="w-auto p-2">
                            {activeAccordion !== index ? (
                              <div className="pt-1">
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
                                    stroke="#7274F2"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            ) : (
                              <div className="p-1">
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M3.75 7.5L9 2.25M9 2.25L14.25 7.5M9 2.25V15.75"
                                    stroke="#7274F2"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
