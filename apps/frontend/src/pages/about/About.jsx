import React from "react";
import Info from "../../components/Info.jsx";
import Skills from "../../components/Skills.jsx";
import Stats from "../../components/Stats.jsx";
import { FaDownload } from "react-icons/fa";
import { resume } from "../../data.jsx";
import ResumeItem from "../../components/ResumeItem.jsx";
import Resume from "../../assets/MicahAkaiNetteyResume.pdf";
import "./about.css";
import { useState, useEffect } from "react";

const About = () => {
    const [resumeData, setResumeData] = useState(null);

    useEffect(() => {
        resume().then(setResumeData);
    }, []);

    return (
        <main className="section container">
            <section className="about">
                <h2 className="section__title">
                    About <span>Micah</span>
                </h2>

                <div className="about__container grid">
                    <div className="about__info">
                        <h3 className="section__subtitle">Personal Info</h3>

                        <ul className="info__list grid">
                            <Info />
                        </ul>

                        <a
                            href={Resume}
                            download="Micah Resume"
                            className="button"
                        >
                            Download Resume
                            <span className="button__icon">
                                <FaDownload />
                            </span>
                        </a>
                    </div>

                    <div className="stats grid">
                        <Stats />
                    </div>
                </div>
            </section>

            <div className="separator"></div>

            <section className="resume">
                <h3 className="section__subtitle subtitle__center">
                    Experience & Education
                </h3>

                <div className="resume__container grid">
                    <div className="resume__data">
                        <h4 className="resume__section-title">Experience</h4>
                        {resumeData ? (
                            resumeData.map((val) => {
                                if (val.category === "experience") {
                                    return <ResumeItem key={val.id} {...val} />;
                                }
                            })
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>

                    <div className="resume__data">
                        <h4 className="resume__section-title">Education</h4>
                        {resumeData ? (
                            resumeData.map((val) => {
                                if (val.category === "education") {
                                    return <ResumeItem key={val.id} {...val} />;
                                }
                            })
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
            </section>

            <div className="separator"></div>

            <section className="skills">
                <h3 className="section__subtitle subtitle__center">
                    My Skills
                </h3>
                <div className="skills__container grid">
                    <Skills />
                </div>
            </section>
        </main>
    );
};

export default About;
