import React from "react";
import avatar from "../resources/avatar.png";
import share from "../resources/share.svg";
import ellipsis from "../resources/ellipsis.svg";

export default function Avatar(props){
    return (
      <section className="avatar-box">
        <img src={avatar} alt="avatar" id="avatar" />
        <h4 className="avatar-name">{props.name}</h4>
        <div className="share-box">
            <img src={share} alt='share logo' className="share"/>
            <img src={ellipsis} alt='ellipsis logo' className="ellipsis"/>
        </div>
      </section>
    );
}