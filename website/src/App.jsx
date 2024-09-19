import "./App.css";
import Hero from "./components/Hero";
import Fairlaunch from "./components/fairlaunc";
import HomePage from "./pages/HomePage";
import About from "./components/about";
import Liquidity from "./components/liquidity";
import HowToPlay from "./components/howtoplay";
import Contest from "./components/contest";
import RoadMap from "./components/RoadMap";
import Featured from "./components/featured";
import Donate from "./components/donation";
import Team from "./components/team";
import Faq from "./components/FAQ";
import Grab from "./components/grad";
import SocialIcon from "./components/bottompart";
function App() {
  return (
    <>
      <HomePage />
      <Hero />
      <Fairlaunch />
      <About />
      <Liquidity />
      <HowToPlay />
      <Contest />
      <RoadMap />
      <Featured />
      <Donate />
      <Team />
      <Faq />
      <Grab />
      <SocialIcon />
    </>
  );
}

export default App;
