/* eslint-disable @next/next/no-img-element */
import { Grid } from "@mui/material";
import Link from "next/link";
import ExamAddToCart from "./ExamAddToCart";

const ProductSection = ({ examData }) => {
  return (
    <section className="pb-6 pl-4 pt-12 mb-6">
      <div className="container mx-auto px-4">
        <Grid
          container
          spacing={2}
          // sx={{ boxShadow: "inset 0px 0px 10px 1px rgba(0, 0, 0, 0.1)" }}

          // className=" rounded-3xl bg-white pb-10"
        >
          <Grid item xs={12} lg={7}>
            <div className="pr-4 lg:pl-4">
              <div className="bg-indigo-50 border-4 border-gray-100 lg:mt-6 px-4 md:text-center py-4 rounded-2xl">
                <div className="lg:text-xl font-black text-indigo-500">
                  {examData?.exam_code} : Exam Training - {examData?.exam_title}
                </div>
              </div>
            </div>
            <div className="p-6 w-full">
              <div className="">
                <div className="flex justify-between">
                  <span className="inline-block text-xl text-stone-500 font-black">
                    {examData?.exam_vendor_title}
                  </span>
                  <span className="text-gray-600 font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    {examData?.exam_code}
                  </span>
                </div>
                <span className="lg:hidden">
                  <h4 className="font-heading mt-10 font-semibold text-xl text-gray-700 mb-3">
                    {examData?.exam_title}
                  </h4>
                  <p className="text-gray-500 max-w-7xl font-semibold text-base">
                    Everything you need to prepare, learn & pass your
                    certification exam easily. 90 days free updates. First
                    attempt 100% success.
                  </p>
                  <ol className="list-disc pl-4 mt-2 text-base mb-2 text-indigo-500">
                    <li>Verified By IT Certified Experts</li>
                    <li>100% Accurate Answers</li>
                    <li>100% Money Back Guarantee</li>
                    <li>Instant Downloads</li>
                    <li>Free Fast Exam Updates</li>
                    <li>96.6% World Wide Exam Pass Rate.</li>
                  </ol>
                  <div class="flex flex-wrap items-center gap-2 mt-4 -mb-6">
                    <div class="flex gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M10.8586 4.71245C11.2178 3.60688 12.7819 3.60688 13.1412 4.71245L14.4246 8.66261C14.5853 9.15703 15.046 9.49179 15.5659 9.49179H19.7193C20.8818 9.49179 21.3651 10.9793 20.4247 11.6626L17.0645 14.1039C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3957C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.296C12.2846 17.9905 11.7151 17.9905 11.2945 18.296L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3957L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.1039L3.57508 11.6626C2.63463 10.9793 3.11796 9.49179 4.28043 9.49179H8.43387C8.95374 9.49179 9.41448 9.15703 9.57513 8.66261L10.8586 4.71245Z"
                          fill="#FFB11A"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M10.8586 4.71245C11.2178 3.60688 12.7819 3.60688 13.1412 4.71245L14.4246 8.66261C14.5853 9.15703 15.046 9.49179 15.5659 9.49179H19.7193C20.8818 9.49179 21.3651 10.9793 20.4247 11.6626L17.0645 14.1039C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3957C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.296C12.2846 17.9905 11.7151 17.9905 11.2945 18.296L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3957L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.1039L3.57508 11.6626C2.63463 10.9793 3.11796 9.49179 4.28043 9.49179H8.43387C8.95374 9.49179 9.41448 9.15703 9.57513 8.66261L10.8586 4.71245Z"
                          fill="#FFB11A"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M10.8586 4.71245C11.2178 3.60688 12.7819 3.60688 13.1412 4.71245L14.4246 8.66261C14.5853 9.15703 15.046 9.49179 15.5659 9.49179H19.7193C20.8818 9.49179 21.3651 10.9793 20.4247 11.6626L17.0645 14.1039C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3957C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.296C12.2846 17.9905 11.7151 17.9905 11.2945 18.296L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3957L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.1039L3.57508 11.6626C2.63463 10.9793 3.11796 9.49179 4.28043 9.49179H8.43387C8.95374 9.49179 9.41448 9.15703 9.57513 8.66261L10.8586 4.71245Z"
                          fill="#FFB11A"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M10.8586 4.71245C11.2178 3.60688 12.7819 3.60688 13.1412 4.71245L14.4246 8.66261C14.5853 9.15703 15.046 9.49179 15.5659 9.49179H19.7193C20.8818 9.49179 21.3651 10.9793 20.4247 11.6626L17.0645 14.1039C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3957C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.296C12.2846 17.9905 11.7151 17.9905 11.2945 18.296L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3957L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.1039L3.57508 11.6626C2.63463 10.9793 3.11796 9.49179 4.28043 9.49179H8.43387C8.95374 9.49179 9.41448 9.15703 9.57513 8.66261L10.8586 4.71245Z"
                          fill="#FFB11A"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M10.8586 4.71245C11.2178 3.60688 12.7819 3.60688 13.1412 4.71245L14.4246 8.66261C14.5853 9.15703 15.046 9.49179 15.5659 9.49179H19.7193C20.8818 9.49179 21.3651 10.9793 20.4247 11.6626L17.0645 14.1039C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3957C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.296C12.2846 17.9905 11.7151 17.9905 11.2945 18.296L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3957L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.1039L3.57508 11.6626C2.63463 10.9793 3.11796 9.49179 4.28043 9.49179H8.43387C8.95374 9.49179 9.41448 9.15703 9.57513 8.66261L10.8586 4.71245Z"
                          fill="#FFB11A"
                        ></path>
                      </svg>
                    </div>
                    <span class="text-sm font-bold text-gray-600">
                      5.0 (793 reviews)
                    </span>
                  </div>
                </span>

                <Grid className="hidden lg:inline-flex" container spacing={2}>
                  <Grid item md={5}>
                    <img
                      src="/product2.png"
                      className="hidden lg:inline-flex lg:h-80 xl:h-96"
                      alt=""
                    />
                  </Grid>
                  <Grid item md={7}>
                    <h4 className="font-heading mt-10 font-semibold text-2xl text-gray-700 mb-3">
                      {examData?.exam_title} Study Meterial & Test Engine
                    </h4>
                    <p className="text-gray-500 max-w-7xl font-semibold text-base">
                      Everything you need to prepare, learn & pass your
                      certification exam easily. 90 days free updates. First
                      attempt 100% success.
                    </p>

                    <ol className="list-disc pl-4 mt-2 text-base mb-2 text-indigo-500">
                      <li>Verified By IT Certified Experts</li>
                      <li>100% Accurate Answers</li>
                      <li>Instant Downloads</li>
                      <li>100% Money Back Guarantee</li>
                      <li>Free Fast Exam Updates</li>
                    </ol>
                    <Grid container spacing={2}>
                      <Grid item md={12}>
                        <div class="flex flex-wrap items-center gap-2">
                          <div class="flex gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewbox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M10.8586 4.71245C11.2178 3.60688 12.7819 3.60688 13.1412 4.71245L14.4246 8.66261C14.5853 9.15703 15.046 9.49179 15.5659 9.49179H19.7193C20.8818 9.49179 21.3651 10.9793 20.4247 11.6626L17.0645 14.1039C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3957C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.296C12.2846 17.9905 11.7151 17.9905 11.2945 18.296L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3957L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.1039L3.57508 11.6626C2.63463 10.9793 3.11796 9.49179 4.28043 9.49179H8.43387C8.95374 9.49179 9.41448 9.15703 9.57513 8.66261L10.8586 4.71245Z"
                                fill="#FFB11A"
                              ></path>
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewbox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M10.8586 4.71245C11.2178 3.60688 12.7819 3.60688 13.1412 4.71245L14.4246 8.66261C14.5853 9.15703 15.046 9.49179 15.5659 9.49179H19.7193C20.8818 9.49179 21.3651 10.9793 20.4247 11.6626L17.0645 14.1039C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3957C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.296C12.2846 17.9905 11.7151 17.9905 11.2945 18.296L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3957L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.1039L3.57508 11.6626C2.63463 10.9793 3.11796 9.49179 4.28043 9.49179H8.43387C8.95374 9.49179 9.41448 9.15703 9.57513 8.66261L10.8586 4.71245Z"
                                fill="#FFB11A"
                              ></path>
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewbox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M10.8586 4.71245C11.2178 3.60688 12.7819 3.60688 13.1412 4.71245L14.4246 8.66261C14.5853 9.15703 15.046 9.49179 15.5659 9.49179H19.7193C20.8818 9.49179 21.3651 10.9793 20.4247 11.6626L17.0645 14.1039C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3957C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.296C12.2846 17.9905 11.7151 17.9905 11.2945 18.296L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3957L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.1039L3.57508 11.6626C2.63463 10.9793 3.11796 9.49179 4.28043 9.49179H8.43387C8.95374 9.49179 9.41448 9.15703 9.57513 8.66261L10.8586 4.71245Z"
                                fill="#FFB11A"
                              ></path>
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewbox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M10.8586 4.71245C11.2178 3.60688 12.7819 3.60688 13.1412 4.71245L14.4246 8.66261C14.5853 9.15703 15.046 9.49179 15.5659 9.49179H19.7193C20.8818 9.49179 21.3651 10.9793 20.4247 11.6626L17.0645 14.1039C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3957C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.296C12.2846 17.9905 11.7151 17.9905 11.2945 18.296L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3957L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.1039L3.57508 11.6626C2.63463 10.9793 3.11796 9.49179 4.28043 9.49179H8.43387C8.95374 9.49179 9.41448 9.15703 9.57513 8.66261L10.8586 4.71245Z"
                                fill="#FFB11A"
                              ></path>
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewbox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M10.8586 4.71245C11.2178 3.60688 12.7819 3.60688 13.1412 4.71245L14.4246 8.66261C14.5853 9.15703 15.046 9.49179 15.5659 9.49179H19.7193C20.8818 9.49179 21.3651 10.9793 20.4247 11.6626L17.0645 14.1039C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3957C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.296C12.2846 17.9905 11.7151 17.9905 11.2945 18.296L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3957L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.1039L3.57508 11.6626C2.63463 10.9793 3.11796 9.49179 4.28043 9.49179H8.43387C8.95374 9.49179 9.41448 9.15703 9.57513 8.66261L10.8586 4.71245Z"
                                fill="#FFB11A"
                              ></path>
                            </svg>
                          </div>
                          <span class="text-sm font-bold text-gray-600">
                            5.0 (793 reviews)
                          </span>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className="border-t border-gray-300">
                    <Link
                      href={`https://dumpsarena.com/demo-dl-pdf/4e2da258b7b54f8b9a870c00182efbb2`}
                    >
                      <button className="inline-block rounded-2xl  px-12 w-full py-4 text-center text-white font-bold opacity-90 border-2 border-red-300 bg-red-500 hover:bg-red-600 bg-opacity-90 hover:bg-opacity-90 transition duration-200">
                        Download Free Demo PDF
                      </button>
                    </Link>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={5}>
            <ExamAddToCart examData={examData} />
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default ProductSection;
