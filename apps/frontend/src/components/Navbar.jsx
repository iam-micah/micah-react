import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { links } from "../data";
import "./navbar.css";
import parse from "html-react-parser";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [navLinks, setNavLinks] = useState(null);

    useEffect(() => {
        links().then((data) => {
            setNavLinks(data);
        });
    }, []);

    return (
        <nav className="nav">
            <div
                className={`${showMenu ? "nav__menu show-menu" : "nav__menu"}`}
            >
                <ul className="nav__list">
                    {navLinks ? (
                        navLinks.map(({ name, icon, path }, index) => (
                            <li className="nav__item" key={index}>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav__link active-nav"
                                            : "nav__link"
                                    }
                                    onClick={() => setShowMenu(!showMenu)}
                                >
                                    {icon}
                                    <h3 className="nav__name">{name}</h3>
                                </NavLink>
                            </li>
                        ))
                    ) : (
                        <li>Loading...</li>
                    )}
                </ul>
            </div>

            <div
                className={`${
                    showMenu ? "nav__toggle animate-toggle " : "nav__toggle"
                }`}
                onClick={() => setShowMenu(!showMenu)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};

export default Navbar;
