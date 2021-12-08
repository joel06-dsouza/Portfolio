import React from "react";
// import web from "../src/images/img1.svg";
//import { NavLink } from "react-router-dom";

const Common = (props) => {
    return( 
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid ">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>
                                {props.name}
                                <strong className="brand-name"> Joel Dsouza</strong>
                                </h1>
                                <h2 className="my-3">
                                    <b>{props.name2}</b>
                                </h2>
                                <div className="mt-3">
                                    <a href={props.visit} className="btn-get-started">
                                    {props.btname}
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={props.imgsrc} className="img-fluid animated" alt="commonpage"/>
                            </div>
                        </div>
                        
                    </div>  
                </div>
            </section>
<br></br>
            <footer className="w-100 bg-light text-center">
                <p> © 2020 Joel Dsouza | All Rights Reserved | Terms and Condition Apply </p>
            </footer>    
        </>
    );   
};

export default Common;