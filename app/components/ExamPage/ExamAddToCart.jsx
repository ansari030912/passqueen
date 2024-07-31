/* eslint-disable @next/next/no-img-element */
"use client";
import moment from "moment";
import Link from "next/link";
import React, { useState } from "react";

const ExamAddToCart = ({ examData }) => {
  const [selectedOption, setSelectedOption] = useState(
    examData.exam_prices[0]?.cart
  );
  const [selectedProduct, setSelectedProduct] = useState(
    examData.exam_prices[0]
  );

  const handleChange = (event) => {
    const newSelectedCart = event.target.value;
    setSelectedOption(newSelectedCart);
    const newSelectedProduct = examData.exam_prices.find(
      (price) => price.cart === newSelectedCart
    );
    setSelectedProduct(newSelectedProduct);
  };

  const handleAddToCart = () => {
    console.log({
      examVendorTitle: examData?.exam_vendor_title,
      examCode: examData?.exam_code,
      examTitle: examData?.exam_title,
      selectedProduct,
    });
  };

  return (
    <div className="px-6 w-full rounded-3xl ">
      <div className=" border-b border-t lg:border-t-0 border-gray-300">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="block text-red-500 font-serif text-lg font-semibold line-through mb-1">
              ${selectedProduct?.full_price} USD
            </span>
            <h4 className="text-2xl font-bold font-serif text-green-500 mb-1">
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
                  href={`/vendor-mock-exam/${examData?.exam_vendor_perma}/${item?.cert_perma}`}
                >
                  {item.cert_title},{"  "}
                </Link>
              ))}
            </span>
          </div>
        </div>
      </div>
      <div className="pt-8">
        <div className="sm:flex w-full mb-8">
          <div className="w-full">
            <span className="block mb-3 rounded-xl w-full font-bold text-gray-800">
              Select Product
            </span>
            <select
              className="bg-transparent rounded-xl w-full border border-gray-300 pl-2 bg-white py-4 text-blue-500 font-semibold outline-none"
              value={selectedOption}
              onChange={handleChange}
            >
              {examData.exam_prices.map((price, index) => (
                <option
                  className=" bg-white py-6 font-semibold text-gray-900"
                  key={index}
                  value={price.cart}
                >
                  {price.title} -{" "}
                  <span className="text-blue-500 font-serif">
                    %{price?.off} OFF
                  </span>
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          className="inline-block rounded-2xl px-12 w-full py-4 text-center text-white font-bold opacity-90 border-2 border-indigo-300 bg-indigo-500 hover:bg-indigo-600 bg-opacity-90 hover:bg-opacity-90 transition duration-200"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ExamAddToCart;
