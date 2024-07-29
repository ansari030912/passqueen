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
