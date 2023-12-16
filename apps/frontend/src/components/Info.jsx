import React, { useState, useEffect } from "react"; // Import useState
import parse from "html-react-parser";
import { personalInfo } from "../data";

const Info = () => {
    const [personalInfoData, setPersonalInfoData] = useState(null);

    useEffect(() => {
        personalInfo().then(setPersonalInfoData);
    }, []);

    return (
        <>
            {personalInfoData ? (
                personalInfoData.map(({ title, description }, index) => (
                    <li className="info__item" key={index}>
                        <span className="info__title">{title}</span>
                        <span className="info__description">
                            {parse(description)}
                        </span>
                    </li>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
};

export default Info;
