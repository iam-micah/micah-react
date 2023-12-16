import React from "react";
import { skills } from "../data";
import { IconContext } from "react-icons";
import * as Icons from "react-icons/fa";
import { useState, useEffect } from "react";

const Skills = () => {
    const [skillsData, setSkillsData] = useState(null);

    useEffect(() => {
        skills().then(setSkillsData);
    }, []);

    return (
        <IconContext.Provider value={{ size: "4em" }}>
            {skillsData ? (
                skillsData.map(({ title, icon }, index) => {
                    const IconComponent = Icons[icon];
                    return (
                        <div className="skill__box" key={index}>
                            {IconComponent && (
                                <IconComponent
                                    style={{ color: "var(--first-color)" }}
                                />
                            )}
                            <h3 className="skills__title">{title}</h3>
                        </div>
                    );
                })
            ) : (
                <p>Loading...</p>
            )}
        </IconContext.Provider>
    );
};

export default Skills;
