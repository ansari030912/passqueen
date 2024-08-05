/* eslint-disable @next/next/no-img-element */
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import { Grid } from "@mui/material";
import Link from "next/link";

const page = async ({ params }) => {
  const response = await fetch(
    `${Base_URL}/v1/certification/${params.cert_perma}?coupon=MEGASALE-30`,
    {
      headers: {
        "x-api-key": X_API_Key,
      },
    }
  );

  const examData = await response.json();
  const randomReviewCount = Math.floor(Math.random() * (999 - 700 + 1)) + 700;

  return (
    <section className=" py-16">
      <div className="px-6 container mx-auto w-full rounded-3xl">
        <h1 className="text-center text-3xl md:text-4xl ">
          <span className="bg-clip-text font-bold mr-6 text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            {examData.vendor_title} <span className="text-gray-700">- Certification Exams</span>
          </span>
        </h1>
        <div className=" border-t-2 border-gray-200 mt-6">
          <div className="sm:flex w-full mb-6">
            <div className="w-full">
              <span className="block mb-3 rounded-xl w-full font-bold mt-3 text-gray-800"></span>

              <Grid container spacing={1}>
                {examData.cert_multiple_exams &&
                examData.cert_multiple_exams.length > 0 ? (
                  examData.cert_multiple_exams.map((exam, index) => (
                    <Grid
                      item
                      xs={12}
                      md={6}
                      key={index} // Corrected from 'i' to 'index'
                      className="relative group"
                    >
                      <Link
                        href={`/exam-training/${params.vendor_perma}/${exam.exam_perma}`} // Corrected from 'item.vendor_perma' to 'exam.exam_vendor_perma'
                        className="text-lg justify-between border-2 p-3 bg-white hover:bg-gray-100 flex relative"
                      >
                        <div className="flex font-bold w-full text-gray-500">
                          <img
                            src="/product2.png"
                            className="mr-3 hidden lg:inline-flex h-24"
                            alt=""
                          />
                          <div className="flex flex-col w-full justify-center">
                            <div className="pr-2 font-semibold text-indigo-400">
                              <span className="font-bold">
                                {exam.exam_title}
                              </span>
                              <div className="pr-2 font-semibold text-indigo-400">
                                <span className="lg:flex lg:justify-between mt-3">
                                  <span className="text-gray-400 font-bold">
                                    #{" "}
                                    <span className="font-bold text-indigo-400">
                                      {exam.exam_questions}
                                    </span>{" "}
                                    ----- Exam are Avaiable
                                  </span>{" "}
                                  <span
                                    className={`text-sm font-semibold ${
                                      exam.exam_retired
                                        ? "text-red-500 bg-red-100 rounded-full px-3 py-1"
                                        : "text-green-500 bg-green-100 rounded-full px-3 py-1"
                                    }`}
                                  >
                                    {exam.exam_retired
                                      ? "Retired"
                                      : "New Arrival"}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-indigo-50 bg-opacity-70 backdrop-blur-sm flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Link
                            style={{ fontSize: "14px" }}
                            href={`/exam-training/${params.vendor_perma}/${exam.exam_perma}`} // Corrected from 'item.vendor_perma' to 'exam.exam_vendor_perma'
                            className="bg-indigo-500 opacity-90 px-3 py-1 font-bold rounded-lg shadow-lg border-indigo-400 text-white shadow-neutral-300 border-2"
                          >
                            {exam.exam_vendor_title}
                          </Link>
                        </div>
                      </Link>
                    </Grid>
                  ))
                ) : (
                  <div className="text-center w-full text-gray-500">
                    No exams available.
                  </div>
                )}
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
