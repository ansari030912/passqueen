import ProductSection from "@/app/components/ExamPage/ExamProducts";
import ExamPageHotExam from "@/app/components/HotExams.jsx/ExamPageHotExam";
import ReleatedExams from "@/app/components/HotExams.jsx/ReleatedExams";
import LogoCloud from "@/app/components/logos/LogoCloud";
import HowToBuy from "@/app/components/Stats/HowToBuy";
import StatsCard from "@/app/components/Stats/StatsCard";
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";

import { Grid } from "@mui/material";

const page = async ({ params, searchParams }) => {
  const referral = searchParams?.ref || "";

  const releatedExams = await fetch(
    `${Base_URL}/v1/related_exams/${params?.vendor_perma}`,
    {
      headers: {
        "x-api-key": X_API_Key,
      },
    }
  );

  const releatedData = await releatedExams.json();

  const examResponce = await fetch(
    `${Base_URL}/v1/exam/${params?.exam_perma}?coupon=MEGASALE-30`,
    {
      headers: {
        "x-api-key": X_API_Key,
      },
    }
  );

  const examData = await examResponce.json();
  console.log("🚀 ~ page ~ examData:", examData);

  const response = await fetch(`${Base_URL}/v1/hot_exams`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  const data = await response.json();
  const randomReviewCount = Math.floor(Math.random() * (999 - 700 + 1)) + 700;

  return (
    <>
      <ProductSection
        data={data}
        examData={examData}
        releatedData={releatedData}
      />
      <StatsCard examData={examData} />
      <HowToBuy />
      <ExamPageHotExam data={data} />
      <LogoCloud />
      <ReleatedExams releatedData={releatedData} />
      <div className="container my-8 mx-auto">
        <Grid container className="">
          <Grid item md={12}>
            <div className="p-5 lg:p-9 h-full border bg-gray-50 rounded-3xl border-gray-200 shadow-xl">
              <h2 className="font-bold mb-12 text-center text-4xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                {examData?.exam_title} - FAQ&apos;S
              </h2>
              {examData?.exam_faqs?.map((item, i) => {
                return (
                  <div key={i}>
                    <h3 className="font-black text-gray-600 text-lg mb-3">
                      {i + 1}. {item.faq_q}
                    </h3>
                    <p className="font-semibold text-gray-500 text-base mb-5">
                      {item.faq_a}
                    </p>
                    {i !== examData.exam_faqs.length - 1 && (
                      <hr className="mb-6 border-0 h-1 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300" />
                    )}
                  </div>
                );
              })}
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default page;
export async function generateMetadata({ params }) {
  const response = await fetch(
    `${Base_URL}/v1/exam/${params.exam_perma}?coupon=MEGASALE-30`,
    {
      headers: {
        "x-api-key": X_API_Key,
      },
    }
  );
  const data = await response.json();
  return {
    title: `Updated ${data.exam_title} Exam Question and Answers by Tech Professionals`,
    description: `Dumps-Collections is a premium provider of Real and Valid Exam Question and Answers of ${data.exam_title} IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024 and become certified professional.`,
    robots: {
      index: data.index_tag ? data.index_tag : false,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://examaster.netlify.app/exam-training/${params.vendor_perma}/${params.exam_perma}`,
        },
      ],
    },
  };
}
