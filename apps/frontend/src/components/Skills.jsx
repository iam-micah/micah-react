import React from "react";
import { skills } from "../data";
import { IconContext } from "react-icons";
import * as Icons from "react-icons/fa"; // import all icons from Font Awesome

const Skills = () => {
    return (
        <IconContext.Provider value={{ size: "4em" }}>
            {skills.map(({ title, icon }, index) => {
                const IconComponent = Icons[icon]; // get the specific icon component
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
            })}
        </IconContext.Provider>
    );
};

export default Skills;
