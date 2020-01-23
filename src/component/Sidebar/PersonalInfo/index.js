import React from 'react';

import './styles.scss';

export default function PersonalInfo({ title, children }) {
  return (
    <div className="personal-info">
      <h3 className="personal-info__title">{title}</h3>
      <hr className="personal-info__separator" />
      {children}
    </div>
  );
}