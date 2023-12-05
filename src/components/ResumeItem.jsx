import React from "react";
import parse from "html-react-parser";

const ResumeItem = ({ icon, year, title, desc, techstack }) => {
    return (
        <div className="resume__item">
            <div className="resume__icon-container">
                <div className="resume__icon">{icon}</div>
                <span className="resume__date">{year}</span>
            </div>
            <h3 className="resume__subtitle">{parse(title)}</h3>
            <p className="resume__description">{parse(desc)}</p>
            <p className="resume__techstack">{techstack}</p>
        </div>
    );
};

export default ResumeItem;
