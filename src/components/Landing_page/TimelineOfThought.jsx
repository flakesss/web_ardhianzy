import React, { useState, useRef, useEffect } from 'react';
import './TimelineOfThought.css';

export default function TimelineOfThought() {
  const [currentYear, setCurrentYear] = useState(1800);
  const [zoomLevel, setZoomLevel] = useState(1);
  const mapRef = useRef(null);

  const startYear = 200;
  const endYear = 2025;
  const yearMarks = [];
  for (let y = startYear; y <= endYear; y += 100) yearMarks.push(y);

  const handleZoomIn = () => setZoomLevel(z => Math.min(z + 0.2, 3));
  const handleZoomOut = () => setZoomLevel(z => Math.max(z - 0.2, 0.5));
  const handleReset = () => { setZoomLevel(1); setCurrentYear(1800); };

  const handleTimelineChange = e => setCurrentYear(Number(e.target.value));

  const timelinePosition = ((currentYear - startYear) / (endYear - startYear)) * 100;

  return (
    <div className="timeline-container">
      <div className="timeline-header">
        <h1 className="timeline-title">Timeline of Thought</h1>
        <p className="timeline-subtitle">Explore the Evolution of Philosophical Ideas Through Time</p>
      </div>

      <div className="timeline-main-content">
        <div className="zoom-controls">
          <button className="zoom-button" onClick={handleZoomIn}>+</button>
          <button className="zoom-button" onClick={handleZoomOut}>−</button>
          <button className="zoom-button" onClick={handleReset}>⟳</button>
        </div>

        <div className="map-container">
          <div
            className="map-content"
            ref={mapRef}
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <div className="map-placeholder">
              <div className="map-placeholder-text">
                <p>Map Area</p>
                <p style={{ fontSize: '14px', opacity: 0.7 }}>
                  Peta akan ditampilkan di sini
                </p>
              </div>
            </div>
            {/* Philosopher markers go here */}
          </div>
          <div className="year-display">{currentYear}</div>
        </div>

        <div className="timeline-container-bottom">
          <div className="timeline-track">
            {yearMarks.map(year => (
              <div
                key={year}
                className={`year-mark${year % 500 === 0 ? ' major' : ''}`}
                style={{ left: `${((year - startYear) / (endYear - startYear)) * 100}%` }}
              >
                <div className="year-mark-line"></div>
                <div className="year-mark-label">{year}</div>
              </div>
            ))}

            <input
              type="range"
              min={startYear}
              max={endYear}
              value={currentYear}
              onChange={handleTimelineChange}
              className="timeline-slider"
            />

            <div
              className="current-indicator"
              style={{ left: `${timelinePosition}%` }}
            >
              <div className="indicator-dot"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
