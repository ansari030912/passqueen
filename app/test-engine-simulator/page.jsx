/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { Grid, Typography } from "@mui/material";
import { Base_URL } from "../URL's/Base_URL";
import { X_API_Key } from "../URL's/Api_X_Key";
import CustomCaresolTestEngine from "./CustomCaresolTestEngine";

const page = async () => {
  const bannerResponec = await fetch(`${Base_URL}/v1/banner`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  const imageUrl = await bannerResponec.json();

  return (
    <>
      <section
        className=" py-6 bg-cover bg-fixed"
        style={{ backgroundImage: `url("/bg-img-1.jpg")` }}
      >
        <section className="pt-6 px-6 pb-6">
          <Link
            href={imageUrl?.banner_link}
            className="flex justify-center mb-4"
          >
            <img src={imageUrl?.banner_src} alt={imageUrl?.banner_website} />
          </Link>
        </section>
        <Typography
          variant="h2"
          fontSize={35}
          fontWeight={700}
          className="text-gray-800"
          sx={{ textAlign: "center" }}
        >
          HOW TO OPEN TEST ENGINE .passqueen FILES
        </Typography>
        <Typography
          variant="body2"
          fontSize={24}
          className="text-gray-600"
          fontWeight={600}
          sx={{ textAlign: "center", marginTop: "12px" }}
        >
          Prepare, study, and ace your certification exam effortlessly with
          everything you need.
          <br /> Enjoy 90 days of free updates and ensure 100% success on your
          first attempt.
        </Typography>
        <div className="relative py-12 overflow-hidden">
          <div className="relative container mx-auto px-4">
            <Grid container spacing={2} className="flex justify-between -mx-4">
              <Grid item xs={12} lg={5} className="px-4 mb-2 lg:mb-0">
                <div class="w-full px-4 mb-10 lg:mb-0">
                  <div class="relative max-w-sm lg:max-w-none mx-auto bg-white border-2 border-gray-100 rounded-3xl">
                    <div class="pt-2 px-2">
                      <div class="relative pt-12 pb-10 px-6 h-52 rounded-3xl bg-indigo-50 overflow-hidden">
                        <img
                          class="absolute bottom-0 left-0 w-full"
                          src="/wave-bg1.svg"
                          alt=""
                        />
                        <div class="relative text-center">
                          <span class="inline-block py-1.5 px-5 mb-6 font-semibold text-indigo-500 bg-indigo-100 rounded-full">
                            Free Test Engine Software
                          </span>
                          <span class="block text-5xl font-bold">$0.00</span>
                        </div>
                      </div>
                    </div>
                    <div class="h-8 mb-7 relative">
                      <div class="absolute left-0 top-1/2 transform -translate-y-1/2 w-full">
                        <div class="w-full border-b-8 border-dotted border-indigo-50"></div>
                      </div>
                      <div class="absolute top-0 left-0 transform -translate-x-1/2 w-8 h-8 bg-indigo-50 rounded-full"></div>
                      <div class="absolute top-0 right-0 transform translate-x-1/2 w-8 h-8 bg-indigo-50 rounded-full"></div>
                    </div>
                    <div class="px-6 pb-12">
                      <ul class="mb-12">
                        <li class="flex mb-5 items-center">
                          <img src="/green-check.svg" alt="" />
                          <span class="ml-3 text-gray-900">
                            Realistic exam simulation
                          </span>
                        </li>

                        <li class="flex mb-5 items-center">
                          <img src="/green-check.svg" alt="" />
                          <span class="ml-3 text-gray-900">
                            Several different question types
                          </span>
                        </li>

                        <li class="flex mb-5 items-center">
                          <img src="/green-check.svg" alt="" />
                          <span class="ml-3 text-gray-900">
                            Customizable exam taking mode
                          </span>
                        </li>

                        <li class="flex mb-5 items-center">
                          <img src="/green-check.svg" alt="" />
                          <span class="ml-3 text-gray-900">
                            Whole exam in a single file
                          </span>
                        </li>

                        <li class="flex mb-5 items-center">
                          <img src="/green-check.svg" alt="" />
                          <span class="ml-3 text-gray-900">
                            Open unlimited exam files
                          </span>
                        </li>

                        <li class="flex mb-5 items-center">
                          <img src="/orange-check.svg" alt="" />
                          <span class="ml-3 text-gray-900">
                            This plan don&apos;t have all exams list
                          </span>
                        </li>
                        <li class="flex items-center">
                          <img src="/orange-check.svg" alt="" />
                          <span class="ml-3 text-gray-900">
                            version 2.0.15 (required Win 8, Win 8.1 or Win 10)
                          </span>
                        </li>
                      </ul>
                      <hr className="h-6" />
                      <div class="text-center">
                        <Link
                          class="relative group inline-block py-4 px-5 items-center w-full text-gray-50 hover:text-gray-700 font-semibold bg-indigo-500 rounded-full overflow-hidden"
                          href={
                            "https://releases.passqueen.com/PassQueenTestEngine.exe"
                          }
                        >
                          <div class="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                          <div class="relative flex items-center justify-center">
                            <span class="mr-2">Download for Windows .exe</span>
                          </div>
                        </Link>
                      </div>
                      <div class="text-center -mb-6">
                        <Link
                          class="relative group inline-block py-4 px-5 items-center w-full text-gray-50 hover:text-gray-700 font-semibold bg-indigo-500 rounded-full overflow-hidden"
                          href={
                            "https://releases.passqueen.com/PassQueenTestEngine.zip"
                          }
                        >
                          <div class="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                          <div class="relative flex items-center justify-center">
                            <span class="mr-2">Download for Windows .zip</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} lg={7} className="my-2">
                <div className="flex flex-wrap h-full">
                  <div className="w-full">
                    <CustomCaresolTestEngine />
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
