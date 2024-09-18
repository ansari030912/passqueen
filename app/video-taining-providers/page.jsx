/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Container, Grid } from "@mui/material";
import AllVideoCourses from "./AllVideoCourses";
import Link from "next/link";
import { Base_URL } from "../URL's/Base_URL";
import { X_API_Key } from "../URL's/Api_X_Key";

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
          url: `https://passqueen.com/video-taining-providers`,
        },
      ],
    },
  };
}
const AllVideoCoursesPage = async ({ searchParams }) => {
  const referral = searchParams?.ref || "";
  const randomReviewCount = Math.floor(Math.random() * (999 - 700 + 1)) + 700;
  const bannerResponec = await fetch(`${Base_URL}/v1/banner`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  const imageUrl = await bannerResponec.json();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: "Video Courses",
            description: `PassQueen is a premium provider of Real and Valid Exam Training of IT certification Exams. Pass your certification exam easily with pdf and test engine exams in 2024.`,
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
          <Grid item xs={12}>
            <Link
              href={imageUrl?.banner_link}
              className="flex justify-center mt-6 mb-4"
            >
              <img src={imageUrl?.banner_src} alt={imageUrl?.banner_website} />
            </Link>
          </Grid>
          <Grid item xs={12}>
            <AllVideoCourses referral={referral} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AllVideoCoursesPage;
