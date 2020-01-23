import React from 'react';

import PersonalInfo from '../PersonalInfo';

export default function Contact({ contact }) {
  if (contact == null)
    return null;

  const { tel, cel, address, website, mail } = contact;
  return (
    <PersonalInfo title="Contact">
      <div className="personal-info__item-container">
        <span className="personal-info__item">{tel}</span>
        <span className="personal-info__item">{cel}</span>
      </div>

      <div className="personal-info__item-container">
        <span className="personal-info__item">{address}</span>
      </div>

      <div className="personal-info__item-container">
        <span className="personal-info__item">{website}</span>
        <span className="personal-info__item personal-info__item--email">{mail}</span>
      </div>
    </PersonalInfo>
  );
}