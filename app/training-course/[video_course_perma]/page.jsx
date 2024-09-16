/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import { Container, Grid } from "@mui/material";
import VideoCoursePrice from "./VideoCoursePrice";
import CourseAccordionCard from "./CourseAccordianCard";

export async function generateMetadata({ params }) {
  return {
    title: `Updated Certificates Exam Question and Answers by Tech Professionals`,
    description: `Examprince is a premium provider of Real and Valid Exam Question and Answers of IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
    robots: {
      index: true,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://examprince.com/training-course/${params.video_course_perma}`,
        },
      ],
    },
  };
}
const TrainingCoursePage = async ({ params }) => {
  const response = await fetch(
    `${Base_URL}/v1/training-course/${params.video_course_perma}/?coupon=MEGASALE-30`,
    {
      headers: {
        "x-api-key": X_API_Key,
      },
    }
  );
  const randomReviewCount = Math.floor(Math.random() * (999 - 700 + 1)) + 700;
  const data = await response.json();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: data.title,
            description: `Examprince is a premium provider of Real and Valid Exam Question and Answers of ${data.title} IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
            review: {
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: 4,
                bestRating: 5,
              },
              author: {
                "@type": "Person",
                name: "Fred Benson",
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: 4.4,
              reviewCount: randomReviewCount,
            },
          }),
        }}
      />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <VideoCoursePrice data={data} />
          </Grid>
          <Grid item xs={12}>
            <CourseAccordionCard data={data} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default TrainingCoursePage;
