import React from 'react';
import {StyleBtn} from "../styles/styles";
import {  Link } from "react-router-dom";

function Title() {
    return (
        <div className = "title">
            <div className = "menu-options">
            <Link to ="/game"><StyleBtn className = "menu-button" style = {{color:"red"}} >Play Space Populators</StyleBtn></Link>
            <Link to ="/game2"><StyleBtn className = "menu-button" style = {{color:"purple"}} >Play VS</StyleBtn></Link>
            <Link to = "/instructions"> <StyleBtn className = "menu-button" style = {{color:"blue"}} >Instructions</StyleBtn></Link>
           
            </div>
            
        </div>
    )
}

export default Title;
