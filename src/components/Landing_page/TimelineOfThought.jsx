import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './TimelineOfThought.css';

/*tombol zoom*/
function ZoomButtons() {
  const map = useMap();
  return (
    <div className="zoom-controls">
      <button onClick={() => map.zoomIn()}  className="zoom-button" title="Zoom In">+</button>
      <button onClick={() => map.zoomOut()} className="zoom-button" title="Zoom Out">−</button>
      <button
        onClick={() => map.setView([20, 0], 1.5)}
        className="zoom-button"
        title="Reset"
      >⟳</button>
    </div>
  );
}



export default function TimelineOfThought() {
  const [year, setYear] = useState(1800);
  const trackRef        = useRef(null);
  const wrapperRef      = useRef(null);

  const startYear = 200;
  const endYear   = 2020;
  const marks     = Array.from({ length: (endYear - startYear) / 50 + 1 }, (_, i) => startYear + i * 50);

  /* ----------  Handler slider  ---------- */
  const handleYear = e => {
    const y = Number(e.target.value);
    setYear(y);

    // auto‑scroll track agar slider tetap terlihat
    if (trackRef.current && wrapperRef.current) {
      const wTrack = trackRef.current.scrollWidth;
      const wWrap  = wrapperRef.current.clientWidth;
      const pos    = ((y - startYear) / (endYear - startYear)) * wTrack - wWrap / 2;
      wrapperRef.current.scrollTo({ left: Math.max(0, Math.min(pos, wTrack - wWrap)), behavior: 'smooth' });
    }
  };

  return (
    <div className="timeline-container">
      <div className="timeline-main-content">
        {/* ---- PETA ---- */}
        <div className="map-container">
          <MapContainer center={[20, 0]} zoom={1.5} minZoom={1}
                        style={{ width: '100%', height: '100%' }}
                        attributionControl={false}>
            {/* Basemap bebas ganti provider lain */}
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            <ZoomButtons />
            
          </MapContainer>
          <div className="year-display">{year}</div>
        </div>

        {/* ---- TIMELINE SLIDER ---- */}
        <div className="timeline-container-bottom">
          <div className="timeline-scroll-wrapper" ref={wrapperRef}>
            <div className="timeline-track" ref={trackRef}>
              <div className="timeline-track-line"></div>

              {marks.map(m => (
                <div key={m} className={`year-mark${m % 100 === 0 ? ' major' : ''}`}
                     style={{ left: `${((m - startYear)/(endYear-startYear))*100}%` }}>
                  <div className="year-mark-line"></div>
                  {m % 100 === 0 && <div className="year-mark-label">{m}</div>}
                </div>
              ))}

              <input type="range" min={startYear} max={endYear} step="1"
                     value={year} onChange={handleYear} className="timeline-slider" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
