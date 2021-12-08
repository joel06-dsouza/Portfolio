import React from "react";
import web from "../src/images/img1.svg";
//import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
    return( 
        <>
            <Common 
                name= 'A More On '
                name2='Programmer Developer Designer' 
                imgsrc={web} 
                visit="/about" 
                btname="Get Started" 
            />
        </>
    );   
};

export default Home;