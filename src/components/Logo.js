import React from "react";
import slackLogo from "../resources/slack-logo.png";
import githubLogo from "../resources/github-logo.png";

export default function Logo(){
    return <section className="logos">
        <img src={slackLogo} alt="slack-logo"/>
        <img src={githubLogo} alt="githb-logo"/>
    </section>
}