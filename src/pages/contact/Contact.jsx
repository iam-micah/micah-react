import React from "react";
import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaTwitter,
    FaYoutube,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";

import "./contact.css";

const Contact = () => {
    return (
        <section className="contact section">
            <h2 className="section__title">
                Let's <span>Connect!</span>
            </h2>

            <div className="contact__container container grid">
                <div className="contact__data">
                    <h3 className="contact__title">Ready to Chat?</h3>
                    <p className="contact__description">
                        Reach Out Today! Whether it's business or casual, I'm
                        only an email away. Can't wait to hear from you!.
                    </p>

                    <div className="contact__info">
                        <div className="info__item">
                            <FaEnvelopeOpen className="info__icon" />

                            <div>
                                <span className="info__title">Email me</span>
                                <h4 className="info__desc">
                                    micah@micahnettey.com
                                </h4>
                            </div>
                        </div>

                        {/* <div className="info__item">
                            <FaPhoneSquareAlt className="info__icon" />

                            <div>
                                <span className="info__title">Call me</span>
                                <h4 className="info__desc">617-111-1111</h4>
                            </div>
                        </div> */}
                    </div>

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
                </div>

                <form className="contact__form">
                    <div className="form__input-group">
                        <div className="form__input-div">
                            <input
                                type="text"
                                placeholder="Name"
                                className="form__control"
                            />
                        </div>
                        <div className="form__input-div">
                            <input
                                type="email"
                                placeholder="Email"
                                className="form__control"
                            />
                        </div>

                        <div className="form__input-div">
                            <input
                                type="text"
                                placeholder="Subject"
                                className="form__control"
                            />
                        </div>
                    </div>

                    <div className="form__input-div">
                        <textarea
                            placeholder="Message"
                            className="form__control textarea"
                        ></textarea>
                    </div>

                    <button className="button">
                        Send Message
                        <span className="button__icon contact__button-icon">
                            <FiSend />
                        </span>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
