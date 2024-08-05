"use client";
/* eslint-disable @next/next/no-img-element */
import { Grid } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const AllCertifications = ({ certData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = certData?.filter((vendor) =>
    vendor.vendor_title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className="pt-8 pb-10 bg-cover bg-fixed">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-3xl md:text-4xl ">
          <span className="bg-clip-text font-bold mr-6 text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            PASSQUEEN.COM
          </span>
          <span className="text-gray-500 font-semibold ">
            All Exam Training Providers
          </span>
        </h1>
        <div className="pb-4 pl-3 flex justify-end border-b-2 border-b-gray-200 mb-4 pt-4">
          <div className="relative mt-1">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block pt-2 pb-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <Grid container spacing={2}>
          {filteredData.map((item, i) => {
            return (
              <Grid
                item
                xs={12}
                md={4}
                lg={3}
                key={i}
                className="relative group"
              >
                <div
                  href={`/exam-certification-provider/${item.vendor_perma}`}
                  className="text-lg justify-between border-2 p-3 bg-white hover:bg-gray-100 flex relative"
                >
                  <div className="flex font-bold text-gray-500">
                    <img src="/product2.png" className="mr-3 h-16" alt="" />
                    <div className="flex flex-col justify-center">
                      <div>{item?.vendor_title}</div>
                      <div className="pr-2 font-semibold text-indigo-400">
                        #{" "}
                        <span className="font-bold">{item?.vendor_certs}</span>
                        <span className="text-gray-400 font-bold">
                          {" "}
                          ----- Certs are Avaiable
                        </span>{" "}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-indigo-50 bg-opacity-70 backdrop-blur-sm flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link
                        style={{ fontSize: "14px" }}
                        href={`/exam-certification-provider/${item.vendor_perma}`}
                        className="bg-indigo-500 opacity-90 px-3 py-1 font-bold rounded-lg shadow-lg border-indigo-400 text-white shadow-neutral-300 border-2"
                      >
                        {item?.vendor_title}
                      </Link>
                    </div>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </section>
  );
};

export default AllCertifications;
