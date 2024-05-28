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

const Home = () => {
    return (
        <section className="home section grid">
            {/* <img src={Profile} alt="" className="home__img" /> */}
            <iframe
                width="1339"
                height="753"
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
                        <span>#Open</span> To Work
                    </h1>

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
