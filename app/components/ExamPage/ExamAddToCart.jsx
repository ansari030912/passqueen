/* eslint-disable @next/next/no-img-element */
"use client";
import { Grid } from "@mui/material";
import moment from "moment";
import Link from "next/link";
import React, { useState } from "react";

const ExamAddToCart = ({ examData }) => {
  const [selectedOption, setSelectedOption] = useState(
    examData?.exam_prices?.[0]?.cart || null
  );
  const [selectedProduct, setSelectedProduct] = useState(
    examData?.exam_prices?.[0] || null
  );

  const handleChange = (selectedCart, product) => {
    setSelectedOption(selectedCart);
    setSelectedProduct(product);
  };

  const handleAddToCart = () => {
    console.log({
      examVendorTitle: examData?.exam_vendor_title,
      examCode: examData?.exam_code,
      examTitle: examData?.exam_title,
      selectedProduct,
    });
  };

  if (!examData || !examData.exam_prices || examData.exam_prices.length === 0) {
    return <div>No exam data available.</div>;
  }

  return (
    <div className="px-6 w-full rounded-3xl ">
      <div className="border-b border-t lg:border-t-0 border-gray-300">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="block text-red-500  text-lg font-semibold line-through mb-1">
              ${selectedProduct?.full_price} USD
            </span>
            <h4 className="text-2xl font-bold  text-green-500 mb-1">
              ${selectedProduct?.price} USD
            </h4>
          </div>
          <img
            src="/product2.png"
            className="h-32 lg:h-32"
            alt="pass-queen-mockup"
          />
        </div>
      </div>
      <div className="pt-8 pb-8 border-b border-gray-300">
        <div className="w-full ">
          <div className="flex mb-2">
            <span className="text-gray-800 font-bold">
              Latest updated date:
            </span>
            <span className="ml-auto text-sm font-semibold text-indigo-500">
              {moment(examData?.exam_update_date).format("LL")}
            </span>
          </div>

          <div className="flex mb-2">
            <span className="text-gray-800 font-bold">
              Latest Questions & Answers:
            </span>
            <span className="ml-auto text-sm font-semibold text-indigo-500">
              {examData.exam_questions}
            </span>
          </div>
          <div className="flex mb-2">
            <span className="text-gray-800 font-bold">
              Exam Question Provider:
            </span>
            <span className="ml-auto text-sm font-semibold text-right hover:underline text-indigo-500">
              <Link href={`/exam-provider/${examData?.exam_vendor_perma}`}>
                {examData?.exam_vendor_title}
              </Link>
            </span>
          </div>
          <div className="flex">
            <span className="text-gray-800 font-bold">Certifications:</span>
            <span className="ml-auto text-sm text-right font-semibold">
              {examData?.exam_certs?.map((item, i) => (
                <Link
                  key={i}
                  className="hover:underline text-right text-indigo-500"
                  href={`/vendor-exam-training/${examData?.exam_vendor_perma}/${item?.cert_perma}`}
                >
                  {item.cert_title},{"  "}
                </Link>
              ))}
            </span>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <div className="sm:flex w-full mb-6">
          <div className="w-full">
            <span className="block mb-3 rounded-xl w-full font-bold text-gray-800">
              Select Product
            </span>

            <Grid container spacing={1}>
              {examData.exam_prices.map((price, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <div
                    onClick={() => handleChange(price.cart, price)}
                    className={`bg-indigo-50 flex justify-between border-2 mb-2 cursor-pointer ${
                      selectedOption === price.cart
                        ? "border-indigo-300"
                        : "border-indigo-50"
                    } text-sm rounded-xl text-center py-2 px-2 font-bold`}
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                      {price.title}
                    </span>
                    <span className="text-blue-500 ">
                      {price?.off}% OFF
                    </span>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
        <div className="border-t mb-4 border-gray-300"></div>
        <button
          className="inline-block rounded-2xl px-12 w-full  py-4 text-center text-white font-bold opacity-90 border-2 border-indigo-300 bg-indigo-500 hover:bg-indigo-600 bg-opacity-90 hover:bg-opacity-90 transition duration-200"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ExamAddToCart;
