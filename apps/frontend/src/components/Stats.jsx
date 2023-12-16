import { useState } from "react";
import React, { useEffect } from "react";
import { stats } from "../data";
import parse from "html-react-parser";

const Stats = () => {
    const [statsData, setStatsData] = useState(null);

    useEffect(() => {
        stats().then(setStatsData);
    }, []);

    return (
        <>
            {statsData ? (
                statsData.map(({ no, title }, index) => {
                    return (
                        <div className="stats__box" key={index}>
                            <h3 className="stats__no">{no}</h3>
                            <p className="stats__title">{parse(title)}</p>
                        </div>
                    );
                })
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
};

export default Stats;
