import React from 'react';

import PersonalInfo from '../PersonalInfo';

export default function Skills({ skills }) {
  if (skills == null)
    return null;

  return (
    <PersonalInfo title="Skills">
      {skills.map(skill =>
        (
          <>
            <span className="personal-info__skill">{skill.name}</span>
            <div className="personal-info__skill-loader">
              <div className="personal-info__skill-loader__content"
                style={{ width: skill.value }}></div>
            </div>
          </>
        )
      )}
    </PersonalInfo>
  );
}
