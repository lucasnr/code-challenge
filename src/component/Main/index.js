import React from 'react';

import "../../assets/css/block/meritCard.css";

export function Content({ content }) {
    const { name, date, description } = content;
    return (
        <div className="meritCard">
            <h3 className="meritCard-title">{ name }</h3>
            <time className="meritCard-date">{ date }</time>
            <p className="meritCard-text">{ description }</p>
        </div>
    );
}