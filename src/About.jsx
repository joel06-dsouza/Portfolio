import React from "react";
import web from "../src/images/img3.svg";
//import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = () => {
    return( 
        <>
          <Common 
            name= 'About'
            name2= 'Person who loves to help. Passionate Coder who is open to work with anyone. Active in managing groups and complete the work within the given deadline.' 
            imgsrc={web} 
            visit="/contact" 
            btname="Contact Now" 
          />
        </>
    );   
};

export default About;