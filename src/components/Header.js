import React from "react";
import "./Header.css";
import { animateScroll as scroll } from "react-scroll";

import logo from "./assets/PBv3.png";

export default function Header(){
    return(
        <div className="head">
            <img src={logo} alt="logo" onClick={() => scroll.scrollToTop()}/>
        </div>
    );
};