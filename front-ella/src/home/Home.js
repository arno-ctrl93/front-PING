import React from "react";
import "./Home.css";
import logo from "./Totally_Spies_logo.png";

export default function Home() {
    return (
        <div className="Home">
            <div className="lander">
                <h1>ELLA</h1>
                <p className="text-muted">Welcome to ELLA IDE</p>
                <img src={ logo } alt='Tottaly Spies' className='TS-logo' />
            </div>
        </div>
    );
}