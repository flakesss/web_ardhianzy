// src/components/Community.jsx
import React from 'react';
import './Community.css';

export default function Community() {
  return (
    <section id="community" className="community-section">
      <div className="community-container">
        <div className="community-card">
          <h2>CHECK OUR COMMUNITY</h2>
          <ul className="community-list">
            <li>Dialogue: ngobrol santai &amp; curhat bareng</li>
            <li>Reading: rekomendasi buku, artikel, dan insight</li>
            <li>Debate: debat sehat &amp; tukar pikiran</li>
          </ul>
          <button className="community-button">
            JOIN OUR DISCORD
            <img
              src="/assets/icon/discord.svg"
              alt="Discord"
              className="discord-icon"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
