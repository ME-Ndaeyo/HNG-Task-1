import React from "react";
import zuriLogo from '../resources/zuri-logo.svg';
import I4GLogo from '../resources/I4G-Logo.webp';

export default function Footer(){
    return <section className="footer">
        <img src={zuriLogo} alt='zuri logo'/>
        <p>HNG Internship 9 Frontend Task</p>
        <img src={I4GLogo} alt='I4G logo' className="i4g-logo"/>
    </section>
}