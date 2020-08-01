import React from 'react';
import {StyleBtn} from "../styles/styles";
import { BrowserRouter as Link } from "react-router-dom";

function Title() {
    return (
        <div className = "title">
            <div className = "menu-options">
            <Link to ="/game"><StyleBtn className = "menu-button" style = {{color:"red"}} >Play Space Populators</StyleBtn></Link>
            <Link to = "/home"> <StyleBtn className = "menu-button" style = {{color:"blue"}} >Instructions</StyleBtn></Link>
            <StyleBtn className = "menu-button" style = {{color:"yellow"}} >More Info</StyleBtn>
            </div>
            
        </div>
    )
}

export default Title;
