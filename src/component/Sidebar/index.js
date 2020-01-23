import React from 'react';

import Header from './Header';
import Profile from './Profile';
import Contact from './Contact';
import Skills from './Skills';

import './styles.scss';

export default function Sidebar({ profile }) {
  const { name, image, profession, description, contact, skills } = profile;
  return (
    <aside className="sidebar">
      <Header name={name} image={image} profession={profession} />
      <Profile description={description} />
      <Contact contact={contact} />
      <Skills skills={skills} />
    </aside>
  );
}
