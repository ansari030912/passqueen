import React from "react";
import { Base_URL } from "../URL's/Base_URL";
import { X_API_Key } from "../URL's/Api_X_Key";
import AllCertifications from "../components/certifications/AllCertifications";

const page = async () => {
  const certResponce = await fetch(`${Base_URL}/v1/certifications`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  if (!certResponce.ok) {
    throw new Error(`HTTP error! Status: ${certResponce.status}`);
  }

  const certData = await certResponce.json();

  const response = await fetch(`${Base_URL}/v1/hot_exams`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  const data = await response.json();
  return <AllCertifications certData={certData} />;
};

export default page;
