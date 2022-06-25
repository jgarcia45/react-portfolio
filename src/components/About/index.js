import React from "react";
import profileImage from '../../assets/Profile/profile_photo.jpg';

function About() {
    return (
        <section>
            <h1 id="about">About Me</h1>
            <img src={profileImage} className="hero-image" style={{ width: "20%" }} alt="Profile Photo" />
            <p>
                Full Stack Web Developer who recently earned a certificate in full stack web development from Michigan State University Coding Bootcamp and Bachelors in Computer Engineering with a Minor in Computer Science from California State University, Bakersfield.
                Honed and applied skills in JavaScript, CSS, React.js, and SQL to create user-friendly applications. Highly adept at problem solving, coding, and analyzing software with others to create a successful product.
                Excited to develop scalable solutions and user-friendly products for the end user.
            </p>
        </section>
    )
}

export default About;