import HomePage from "./components/HeroSection/HomePage";
import CertificationHome from "./components/HomeCert/CertificationHome";
import LogoCloud from "./components/logos/LogoCloud";
import RecentlyUpdatedCards from "./components/RecentlyUpdated/RecentlyUpdatedCards";

export default function Home() {
  return (
    <>
      <HomePage />
      <CertificationHome />
      <LogoCloud />
      <RecentlyUpdatedCards />
    </>
  );
}
