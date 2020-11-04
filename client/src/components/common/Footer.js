import React from "react";


import ScrollTop from "./ScrollTop";
import Fab from "@material-ui/core/Fab";
import Contact from "../common/Contact";
import BottomFooter from "../common/BottomFooter";

const Footer = (props) => {
  return (
    <div>
      <Contact></Contact>
      <div class="wave-block">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#187cd2" fill-opacity="1" d="M0,256L48,229.3C96,203,192,149,288,128C384,107,480,117,576,133.3C672,149,768,171,864,176C960,181,1056,171,1152,144C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <BottomFooter></BottomFooter>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          Test
        </Fab>
      </ScrollTop>
    </div>
  );
};

export default Footer;
