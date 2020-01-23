import React from 'react';

import './styles.scss';

export default function Experience({ experience }) {
  const { name, date, description } = experience;
  return (
    <div className="experience__item">
      <h3 className="experience__name">{name}</h3>
      <time className="experience__date">{date}</time>
      <p className="experience__description">{description}</p>
    </div>
  );
}