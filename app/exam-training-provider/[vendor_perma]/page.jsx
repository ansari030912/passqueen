import SingleVendor from "@/app/components/vendors/SingleVendor";
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import React from "react";

const page = async ({ params }) => {
  const vendorResponce = await fetch(
    `${Base_URL}/v1/vendor/${params.vendor_perma}`,
    {
      headers: {
        "x-api-key": X_API_Key,
      },
    }
  );
  const randomReviewCount = Math.floor(Math.random() * (999 - 700 + 1)) + 700;
  const vendorData = await vendorResponce.json();

  const response = await fetch(`${Base_URL}/v1/hot_exams`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  const data = await response.json();
  return <SingleVendor vendorData={vendorData} />;
};

export default page;

export async function generateMetadata({ params }) {
  const response = await fetch(`${Base_URL}/v1/vendor/${params.vendor_perma}`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  const metaDATA = await response.json();
  return {
    title: `Updated ${metaDATA.vendor_title} Exam Training by Tech Professionals`,
    description: `PassQueen is a premium provider of Real and Valid Exam Training of ${metaDATA.vendor_title} IT certification Exams. Pass your certification exam easily with pdf and test engine exams in 2024.`,
    robots: {
      index: metaDATA?.index_tag,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://passqueen.com/exam-training-provider/${params?.vendor_perma}`,
        },
      ],
    },
  };
}
