import React from "react";
import AllVendors from "../components/vendors/AllVendors";
import { Base_URL } from "../URL's/Base_URL";
import { X_API_Key } from "../URL's/Api_X_Key";

const page = async () => {
  const vendorResponce = await fetch(`${Base_URL}/v1/vendors`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  if (!vendorResponce.ok) {
    throw new Error(`HTTP error! Status: ${vendorResponce.status}`);
  }

  const vendorData = await vendorResponce.json();

  const response = await fetch(`${Base_URL}/v1/hot_exams`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  const data = await response.json();
  return <AllVendors vendorData={vendorData} />;
};

export default page;
export async function generateMetadata() {
  return {
    title: `Updated Exam Training by Tech Professionals`,
    description: `PassQueen is a premium provider of Real and Valid Exam Training of IT certification Exams. Pass your certification exam easily with pdf and test engine exams in 2024.`,
    robots: {
      index: true,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://passqueen.com/exam-training-providers`,
        },
      ],
    },
  };
}
