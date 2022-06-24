import React from "react";

function Project() {
    return (
        <section>
            <h1 style={{ backgroundColor: "lightblue" }}>Resume</h1>
            <hr />
            <p>You can download my resume here:
                <a href="https://app.rezi.io/s/09aroDdgsFPTAWV3LLwB"><button>Resume</button></a>
            </p>

            <h1 style={{ backgroundColor: "lightblue" }}>Education</h1>
            <hr />
            <h2>Michigan State University</h2>
            <h3>Full Stack Web Developer Boot Camp</h3>
            <h4>Remote</h4>
            <i style={{ borderstyle: "solid bold" }}>January 2022 - July 2022</i>
            <hr />

            <h2>California State University, Bakersfield</h2>
            <h3>Bachelor of Science (B.S.) - Computer Engineering</h3>
            <h4>Minor - Computer Science</h4>
            <i>September 2012 - December 2017</i>

            <h1 style={{ backgroundColor: "lightblue" }}>Experience</h1>
            <hr />
            <h2>Warehouse Worker</h2>
            <h3>Target</h3>
            <h4>Shafter, CA</h4>
            <i>August 2020 - Present</i>
            <hr />

            <h2>MLH Prep Fellow</h2>
            <h3>Major League Hacking</h3>
            <h4>Remote</h4>
            <i>November 2021 - November 2021</i>

            <h1 style={{ backgroundColor: "lightblue" }}>Skills</h1>
            <hr />
            <h2>Technical Skills: React, HTML, CSS, JavaScript, jQuery, Node.js, MySQL, MangoDB</h2>
            <h2>Software/Applications: Visual Studio Code, GitHub, Slack, Heroku</h2>
        </section>
    );
}

export default Project;