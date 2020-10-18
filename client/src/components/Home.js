import React from "react";
import Hero from "./common/Hero";
import Features from "../components/Home/FeaturesSection/Features";
import Testemonials from "../components/Home/Testemonials";
import BlogSection from './Home/BlogSection/BlogSection';

const Home = (props) => {
  return (
    <div className="main">
      <Hero></Hero>
      <div>
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
          </defs>
          <g class="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7"></use>
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)"></use>
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)"></use>
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff"></use>
          </g >
        </svg >
      </div>
      <Features></Features>
      <BlogSection></BlogSection>
      <Testemonials />
    </div>
  );
};

export default Home;
