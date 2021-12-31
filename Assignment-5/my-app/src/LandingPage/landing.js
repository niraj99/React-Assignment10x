import React from "react";
import "./landing.css";
import {
    Link
  } from "react-router-dom";

export default function LandingPage (){

    return(
        <>
        <div className="main-container">
            <div className="img-container">
                <div className="img-content">
                    <img src="https://cdn.eso.org/images/large/eso1322a.jpg" alt="Pic" width="100%"></img>

                </div>
            </div>
            <div className="text-container">
                <div className="p-content"><p>10x Team 04</p></div>
                <div className="btn">
                    <Link className="Link" to="/postview"><button className="btn">Enter</button></Link>
                </div>


            </div>

        </div>
        </>
    );

}