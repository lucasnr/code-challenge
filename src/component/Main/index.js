import React from 'react';

import Experience from './Experience';

import './styles.scss';

export default function Main({ profile }) {
  const { experience, education } = profile;

  return (
    <main className="main">
      <div className="experience">
        <h2 className="experience__title">Work Experience</h2>

        {experience.map(experience => (
          <Experience experience={experience} />
        ))}
      </div>
      
      <div className="experience">
        <h2 className="experience__title">Education</h2>
        {education.map(education => (
          <Experience experience={education} />
        ))}
      </div>
    </main>
  );
}
