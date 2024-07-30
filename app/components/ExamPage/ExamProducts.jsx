/* eslint-disable @next/next/no-img-element */
"use client";
import { Grid } from "@mui/material";
import moment from "moment";
import Link from "next/link";
import { useState } from "react";

const ProductSection = ({ releatedData, examData, data }) => {
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
    <section className="py-12 md:py-14">
      <div className="container mx-auto px-4">
        <Grid container spacing={2}>
          <Grid item xs={12} lg={7}>
            <div className="p-6 w-full">
              <div className="">
                <div className="flex justify-between mb-5">
                  <span className="inline-block text-xl text-indigo-500 font-black">
                    {examData?.exam_vendor_title}
                  </span>
                  <span className="text-gray-600 font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    {examData?.exam_code}
                  </span>
                </div>
                <h4 className="font-heading font-semibold text-4xl text-gray-700 mb-3">
                  {examData?.exam_title}
                </h4>
                <p className="text-gray-500 max-w-2xl font-semibold text-base">
                  Everything you need to prepare, learn & pass your
                  certification exam easily. 90 days free updates. First attempt
                  100% success.
                </p>
                {/* <div className="flex justify-between items-center">
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
                  </div> */}
              </div>
              {/* <div className="pt-8 pb-8 border-b border-gray-300">
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
                        <Link
                          href={`/exam-provider/${examData?.exam_vendor_perma}`}
                        >
                          {examData?.exam_vendor_title}
                        </Link>
                      </span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-800 font-bold">
                        Certifications:
                      </span>
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
                </div> */}
              {/* <div className="pt-8">
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
                    className="inline-block rounded-2xl px-12 w-full py-4 text-center text-white font-bold bg-indigo-500 hover:bg-indigo-600 bg-opacity-90 hover:bg-opacity-90 transition duration-200"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                </div> */}
            </div>
          </Grid>
          <Grid item xs={12} lg={5}>
            <div className="px-6 w-full rounded-3xl ">
              <div className=" border-b border-gray-300">
                {/* <div className="flex justify-between mb-5">
                    <span className="inline-block text-lg text-indigo-500 font-bold">
                      {examData?.exam_vendor_title}
                    </span>
                    <span className="text-gray-600 font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                      {examData?.exam_code}
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-2xl text-gray-800 mb-3">
                    {examData?.exam_title}
                  </h4>
                  <p className="text-gray-500 font-semibold text-sm">
                    Everything you need to prepare, learn & pass your
                    certification exam easily. 90 days free updates. First
                    attempt 100% success.
                  </p> */}
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
                      <Link
                        href={`/exam-provider/${examData?.exam_vendor_perma}`}
                      >
                        {examData?.exam_vendor_title}
                      </Link>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-800 font-bold">
                      Certifications:
                    </span>
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
                  className="inline-block rounded-2xl px-12 w-full py-4 text-center text-white font-bold bg-indigo-500 hover:bg-indigo-600 bg-opacity-90 hover:bg-opacity-90 transition duration-200"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </Grid>

          {/* <Grid item md={7}>
            <div className="p-6 w-full bg-gray-50 rounded-3xl shadow-xl">
              <div className="text-center text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-gray-500">
                Limited Time Mega Sale! (40-70% OFF) Hurry up! offer ends in 15h
                7m 9s
              </div>
            </div>
          </Grid> */}
        </Grid>
      </div>
    </section>
  );
};

export default ProductSection;
