import React from 'react';

import PersonalInfo from '../PersonalInfo';

export default function Profile({ description }) {
  return (
    <PersonalInfo title="Profile">
      <span className="personal-info__item">{description}</span>
    </PersonalInfo>
  );
}