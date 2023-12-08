import React from "react";
import parse from "html-react-parser";
import { personalInfo } from "../data";

const Info = () => {
    return (
        <>
            {personalInfo.map(({ title, description }, index) => {
                return (
                    <li className="info__item" key={index}>
                        <span className="info__title">{title}</span>
                        <span className="info__description">
                            {parse(description)}
                        </span>
                    </li>
                );
            })}
        </>
    );
};

export default Info;
