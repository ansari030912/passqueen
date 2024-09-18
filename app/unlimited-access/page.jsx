/* eslint-disable @next/next/no-img-element */
import React from "react";
import PriceCard from "../components/Pricing/PriceCard";
import { Base_URL } from "../URL's/Base_URL";
import { X_API_Key } from "../URL's/Api_X_Key";
import Link from "next/link";

const page = async () => {
  const response = await fetch(
    `${Base_URL}/v1/unlimited_access/?coupon=MEGASALE-30`,
    {
      headers: {
        "x-api-key": X_API_Key,
      },
    }
  );

  const data = await response.json();
  const bannerResponec = await fetch(`${Base_URL}/v1/banner`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  const imageUrl = await bannerResponec.json();

  return (
    <div className="py-10">
      <Link href={imageUrl?.banner_link} className="flex justify-center mb-4">
        <img src={imageUrl?.banner_src} alt={imageUrl?.banner_website} />
      </Link>
      <PriceCard data={data} />
    </div>
  );
};

export default page;

export async function generateMetadata() {
  return {
    title: `Pass Queen Unlimited Exam Training Access`,
    description: `PassQueen is a premium provider of Real and Valid Exam Training of IT certification Exams. Pass your certification exam easily with pdf and test engine exams in 2024.`,
    robots: {
      index: true,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://passqueen.com/unlimited-access`,
        },
      ],
    },
  };
}
