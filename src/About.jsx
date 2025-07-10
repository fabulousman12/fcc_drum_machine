// src/About.js
import React from 'react';

const About = () => {
  return (
    <div style={{
      padding: '2rem',
      textAlign: 'center',
      color: 'var(--text-color)',
      maxWidth: '800px',
      margin: 'auto'
    }}>
      <h2 style={{ fontSize: '2rem', color: 'var(--accent)' }}>About BeatMaker</h2>
      <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>
        <strong>BeatMaker</strong> is a powerful yet easy-to-use drum machine built with React. Designed for music lovers,
        producers, and hobbyists, you can:
      </p>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
        <li>🎹 Tap or press keys to play sounds</li>
        <li>🎙️ Record and loop your beat ideas</li>
        <li>🎛️ Layer tracks, jam live, and have fun!</li>
      </ul>
      <p style={{ marginTop: '1rem' }}>
        Created with ❤️ using React, JavaScript, and Web Audio APIs.
        By Jit
      </p>
    </div>
  );
};

export default About;
