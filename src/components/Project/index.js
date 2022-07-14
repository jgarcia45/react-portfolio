import React from "react";
import habitTracker from '../../assets/Products/habitTracker.png';
import doggyDaycare from '../../assets/Products/doggy-daycare.png';
import formulaOne from '../../assets/Products/FormulaOneFrenzy.png';
import runBuddy from '../../assets/Products/run_buddy.png';
import Horiseon from '../../assets/Products/Horiseon.png';
import prepProject from '../../assets/Products/prep_project.png';
import podPortfolio from '../../assets/Products/pod_portfolio.png';
import emilioHuerta from '../../assets/Products/emilio_huerta.png';

function Project() {
    return (
        // < !--Projects -- >
        <section id="Projects" className="project-section">
            <div className="flex-row">
                <h3 className="section-title primary-border">Projects</h3>
            </div>

            <div className="project-container">
                {/* <!-- Project --> */}
                <div className="project first-project">
                    <a href="https://github.com/jgarcia45/habit-tracker">
                        <img src={habitTracker} alt="" />
                        <h3>Habit Tracker</h3>
                    </a>
                </div>
                {/* <!-- Project --> */}
                <div className="project first-project">
                    <a href="https://github.com/jgarcia45/Doggy-Daycare">
                        <img src={doggyDaycare} alt="" />
                        <h3>Doggy Daycare</h3>
                    </a>
                </div>
                {/* <!-- Project --> */}
                <div className="project first-project">
                    <a href="https://github.com/jgarcia45/Formula-1-Frenzy">
                        <img src={formulaOne} alt="" />
                        <h3>Formula One Frenzy</h3>
                    </a>
                </div>
                {/* <!--Project--> */}
                <div className="project first-project">
                    <a href="https://github.com/jgarcia45/run-buddy">
                        <img src={runBuddy} alt="" />
                        <h3>Run Buddy</h3>
                    </a>
                </div>
                {/* <!--Project--> */}
                <div className="project">
                    <a href="https://github.com/jgarcia45/code-refactor-challenge">
                        <img src={Horiseon} alt="" />
                        <h3>Horiseon</h3>
                    </a>
                </div>
                {/* <!--Project--> */}
                <div className="project">
                    <a href="https://github.com/jgarcia45/prep-project-4.1.5">
                        <img src={prepProject} alt="" />
                        <h3>MLH Prep Project</h3>
                    </a>
                </div>
                {/* <!--Project--> */}
                <div className="project">
                    <a href="https://github.com/jgarcia45/pod-4.1.5-portfolio">
                        <img src={podPortfolio} alt="" />
                        <h3>MLH POD Portfolio</h3>
                    </a>
                </div>
                {/* <!--Project--> */}
                <div className="project">
                    <a href="https://github.com/jgarcia45/Emilio-Huerta">
                        <img src={emilioHuerta} alt="" />
                        <h3>Emilio Huerta</h3>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Project;