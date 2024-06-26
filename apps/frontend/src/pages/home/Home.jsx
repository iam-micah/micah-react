import React from "react";
import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";
import Resume from "../../assets/MicahAkaiNetteyResume.pdf";
import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaTwitter,
    FaYoutube,
    FaInstagram,
    FaDownload,
    FaLinkedin,
} from "react-icons/fa";
import { Container, Box, Typography, LinearProgress } from "@mui/material";

const ProgressSection = () => {
    const progressItems = [
        { label: "Forex", progress: 0 },
        { label: "Content Creation", progress: 0 },
        { label: "Stock", progress: 0 },
    ];

    return (
        <Container className="progress-section">
            {progressItems.map((item, index) => (
                <Box key={index} className="progress-item">
                    <Typography variant="h6" className="progress-label">
                        {item.label}
                        <span className="progress-percentage">
                            {item.progress}%
                        </span>
                    </Typography>
                    <LinearProgress
                        variant="determinate"
                        value={item.progress}
                        className="progress-bar"
                    />
                </Box>
            ))}
        </Container>
    );
};

const Home = () => {
    return (
        <section className="home section grid">
            {/* <img src={Profile} alt="" className="home__img" /> */}
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/EMWmVRp85-Q"
                title="why do I always wear a beanie? answering the million dollar question | 1M - 01"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>

            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title">
                        <span>#DO</span> HARD THINGS
                    </h1>

                    <ProgressSection />

                    <p className="home__description">
                        Hello Hello Hello... <br />
                        I'm Micah Nettey, a Software Engineer at Meta. I'm also
                        a YouTuber (check out my channel at the link below)
                        <br />
                        <br />I am starting my next big journey of becoming a
                        millionaire . You can follow this journey on my YouTube
                        channel.
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
        </section>
    );
};

export default Home;
