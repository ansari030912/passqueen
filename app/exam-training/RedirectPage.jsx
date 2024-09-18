"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const RedirectPage = ({ examData }) => {
  const router = useRouter();

  useEffect(() => {
    // Check if both `exam_title` and `exam_vendor_title` exist in `examData`
    if (!examData?.exam_title || !examData?.exam_vendor_title) {
      router.push("/"); // Redirect to the homepage
    }
  }, [examData, router]);

  return <div></div>;
};

export default RedirectPage;
