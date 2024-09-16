/* eslint-disable @next/next/no-img-element */
import React from "react";

const CommentPostCard = () => {
  return (
    <section class="relative overflow-hidden">
      <div class="flex flex-wrap">
        <div class="relative w-full md:w-5/12 pt-12 pb-52 sm:pb-64 md:pb-80 lg:pb-0 md:pt-24 px-6 lg:pr-10 bg-gray-100">
          <div class="mx-auto lg:mr-0 max-w-sm">
            <h1 class="font-heading tracking-tight text-4xl xs:text-5xl font-bold text-gray-800 mb-4">
              Get in touch!
            </h1>
            <p class="max-w-xs text-lg text-gray-600">
              Looking for more information or want to try out our paid plans?
            </p>
          </div>
          <img
            class="absolute bottom-0 left-0"
            src="aurora-assets/contact/line-half-circle-dark.png"
            alt=""
          />
        </div>
        <div class="w-full md:w-7/12 py-12 md:py-24 px-6 md:pl-12 xl:pl-24 bg-white">
          <div class="max-w-lg mx-auto lg:mx-0 lg:max-w-2xl">
            <form action="">
              <div class="flex flex-wrap -mx-4 mb-8 items-center">
                <div class="w-full lg:w-1/2 px-4 mb-4">
                  <label class="block mb-1 text-sm font-medium" for="">
                    Name
                  </label>
                  <input
                    class="py-2 px-4 h-11 w-full text-gray-500 placeholder-gray-500 bg-gray-50 border border-gray-100 focus:border-yellowGreen-800 rounded-md outline-none ring ring-transparent focus:ring-yellowGreen-800"
                    type="text"
                    placeholder="First name"
                  />
                </div>

                <div class="w-full lg:w-1/2 px-4 mb-4">
                  <label class="block mb-1 text-sm font-medium" for="">
                    Email
                  </label>
                  <input
                    class="py-2 px-4 h-11 w-full text-gray-500 placeholder-gray-500 bg-gray-50 border border-gray-100 focus:border-yellowGreen-800 rounded-md outline-none ring ring-transparent focus:ring-yellowGreen-800"
                    type="email"
                    placeholder="john@email.com"
                  />
                </div>

                <div class="w-full px-4">
                  <label class="block mb-1 text-sm font-medium" for="">
                    Comment
                  </label>
                  <textarea
                    class="block py-2 px-4 w-full h-44 text-gray-500 placeholder-gray-500 bg-gray-50 border border-gray-100 focus:border-yellowGreen-800 rounded-md outline-none ring ring-transparent focus:ring-yellowGreen-800 resize-none"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
              </div>
              <button
                class="group relative inline-flex items-center justify-center h-12 w-32 px-5 text-center text-base text-teal-800 font-bold bg-white rounded-lg transition duration-300"
                type="submit"
              >
                <div class="absolute top-0 left-0 w-full h-full rounded-lg ring ring-gray-200 animate-pulse group-hover:ring-0 transition duration-300"></div>
                <span>Submit</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommentPostCard;
