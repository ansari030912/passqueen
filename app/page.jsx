import HomePage from "./components/HeroSection/HomePage";
import LogoCloud from "./components/logos/LogoCloud";
import RecentlyUpdatedCards from "./components/RecentlyUpdated/RecentlyUpdatedCards";

export default function Home() {
  return (
    <>
      <HomePage />
      <LogoCloud />
      <RecentlyUpdatedCards />
    </>
  );
}
