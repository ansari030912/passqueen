import HomePage from "./components/HeroSection/HomePage";
import CertificationHome from "./components/HomeCert/CertificationHome";
import HotExamIndex from "./components/HotExams.jsx/HotExamIndex";
import LogoCloud from "./components/logos/LogoCloud";
import PriceCard from "./components/Pricing/PriceCard";
import RecentlyUpdatedCards from "./components/RecentlyUpdated/RecentlyUpdatedCards";
import Testimonials from "./components/Testimonial/Testimonials";

export default function Home() {
  return (
    <>
      <HomePage />
      <CertificationHome />
      <RecentlyUpdatedCards />
      <HotExamIndex />
      <LogoCloud />
      <PriceCard />
      <Testimonials />
    </>
  );
}

export async function generateMetadata() {
  return {
    title: `Updated Study Meterial by Tech Professionals`,
    description: `Study4Pass is a premium provider of Real and Valid Study Meterial of IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
    robots: {
      index: true,
    },
    alternates: {
      canonical: "https://study4pass.com",
    },
  };
}
