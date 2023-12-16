import React from "react";
import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";
import Resume from "../../assets/micah-akai-nettey-resume.pdf";
import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaTwitter,
    FaYoutube,
    FaInstagram,
    FaDownload,
    FaLinkedin,
} from "react-icons/fa";
import { LinksData, PersonalInfoData, ResumeData, StatsData } from "../../data";

const Home = () => {
    return (
        <section className="home section grid">
            {/* <img src={Profile} alt="" className="home__img" /> */}
            <iframe
                className="home__img"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/UPAXCEYxB4w?si=iXY8baIfIIkND7Lt"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>

            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title">
                        <span>#Open</span> To Work
                    </h1>

                    <p className="home__description">
                        Hello Hello Hello... <br />
                        I'm Micah Nettey, a Computer Science major with an
                        entrepreneurial flair at Tufts University. I'm also a
                        YouTuber (check out my channel at the link below)
                        <br />
                        <br />
                        I'm on the lookout for my next adventure in Software
                        Engineering, so if you've got any opportunies for me to
                        explore, please reach out to me on my contact page, or
                        just shoot me an email at{" "}
                        <a href="mailto:micah@micahnettey.com">
                            micah@micahnettey.com
                        </a>
                        . Let's make some magic happen together!
                    </p>
                    <div className="contact__socials">
                        <a
                            href="https://www.linkedin.com/in/micah-nettey/"
                            className="contact__social-link"
                            title="LinkedIn"
                            target="_blank"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="https://www.youtube.com/@micahnettey"
                            className="contact__social-link"
                            title="Career YouTube channel"
                            target="_blank"
                        >
                            <FaYoutube />
                        </a>

                        <a
                            href="https://www.instagram.com/micahnettey/"
                            className="contact__social-link"
                            title="Personal Instagram"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="https://twitter.com/micahnettey"
                            className="contact__social-link"
                            title="Personal Twitter"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitter />
                        </a>
                    </div>

                    <div className="button-container">
                        <Link to="/about" className="button">
                            Curious? More About Me{" "}
                            <span className="button__icon">
                                <FaArrowRight />
                            </span>
                        </Link>
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
                </div>
            </div>

            {/* <div>
                <LinksData />
            </div>

            <div>
                <PersonalInfoData />
            </div>

            <div>
                <StatsData />
            </div>

            <div>
                <ResumeData />
            </div> */}
        </section>
    );
};

export default Home;
