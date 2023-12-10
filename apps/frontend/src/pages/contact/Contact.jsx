import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

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
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_73opnkf",
                "template_5aipbu8",
                form.current,
                "Uf2xH3xr2OvTCh2Op"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        e.target.reset();
    };

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

                <form
                    className="contact__form"
                    ref={form}
                    onSubmit={sendEmail}
                    // method="post"
                    // action="/info.php"
                >
                    <div className="form__input-group">
                        <div className="form__input-div">
                            <input
                                type="text"
                                placeholder="Name"
                                className="form__control"
                                // id="name"
                                name="name"
                                required
                            />
                        </div>
                        <div className="form__input-div">
                            <input
                                type="email"
                                placeholder="Email"
                                className="form__control"
                                // id="email"
                                name="email"
                                required
                            />
                        </div>

                        <div className="form__input-div">
                            <input
                                type="text"
                                placeholder="Subject"
                                className="form__control"
                                // id="subject"
                                name="subject"
                                required
                            />
                        </div>
                    </div>

                    <div className="form__input-div">
                        <textarea
                            placeholder="Message"
                            className="form__control textarea"
                            // id="message"
                            name="message"
                            required
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
