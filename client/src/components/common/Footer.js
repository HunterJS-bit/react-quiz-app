import React from "react";

import Copyright from "./Copyright";

import ScrollTop from "./ScrollTop";
import Fab from "@material-ui/core/Fab";
import ContactLogo from "../../assets/information.svg";
import Contact from "../common/Contact";
import BottomFooter from "../common/BottomFooter";


const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: ["Cool stuff", "Random feature", "Team feature", "Developer stuff", "Another one"],
  },
  {
    title: "Resources",
    description: ["Resource", "Resource name", "Another resource", "Final resource"],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];

const Footer = (props) => {
  return (
    <div>
      <Contact></Contact>
      {/* <Box mt={5}>
          <Copyright />
        </Box> */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#5000ca"
          fill-opacity="1"
          d="M0,96L30,101.3C60,107,120,117,180,144C240,171,300,213,360,197.3C420,181,480,107,540,74.7C600,43,660,53,720,96C780,139,840,213,900,213.3C960,213,1020,139,1080,117.3C1140,96,1200,128,1260,133.3C1320,139,1380,117,1410,106.7L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
      <BottomFooter></BottomFooter>
    </div>
  );
};

export default Footer;
