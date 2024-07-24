import HomePage from "./components/HeroSection/HomePage";
import CertificationHome from "./components/HomeCert/CertificationHome";
import HotExamCard from "./components/HotExams.jsx/HotExamCard";
import HotExamIndex from "./components/HotExams.jsx/HotExamIndex";
import LogoCloud from "./components/logos/LogoCloud";
import RecentlyUpdatedCards from "./components/RecentlyUpdated/RecentlyUpdatedCards";
import Testimonials from "./components/Testimonial/Testimonials";

export default function Home() {
  return (
    <>
      <HomePage />
      <CertificationHome />
      <LogoCloud />
      <RecentlyUpdatedCards />
      <HotExamIndex />
      <Testimonials />
    </>
  );
}
