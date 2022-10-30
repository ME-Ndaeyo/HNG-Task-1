import React from "react";
import avatar from "../resources/avatar.png";
import share from "../resources/share.svg";
import ellipsis from "../resources/ellipsis.svg";

export default function Profile(){
    return (
      <section className="profile-box">
        <img src={avatar} alt="man holding microphone" id="profile__img"/>
        <h4 id="twitter">ME_Ndaeyo</h4>

        {/********SLACK USERNAME*********/}
        {/* <h4 id="slack">bobbiie</h4> */}
        
        <div className="share-box">
            <img src={share} alt='share logo' className="share"/>
            <img src={ellipsis} alt='ellipsis logo' className="ellipsis"/>
        </div>
      </section>
    );
}