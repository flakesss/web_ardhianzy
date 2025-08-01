import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, useMap, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './TimelineOfThought.css';

// Komponen PhilosopherMarker sekarang juga menerima onMarkerClick
import PhilosopherMarker from '../PhilosopherMarker'; 

// Konfigurasi untuk setiap file peta berdasarkan tahun mulainya.
const mapDataConfig = {
  600: '/data/world_600.geo.json',
  700: '/data/world_700.geo.json',
  800: '/data/world_800.geo.json',
  900: '/data/world_900.geo.json',
  1000: '/data/world_1000.geo.json',
  1100: '/data/world_1100.geo.json',
  1200: '/data/world_1200.geo.json',
  1300: '/data/world_1300.geo.json',
  1400: '/data/world_1400.geo.json',
  1500: '/data/world_1500.geo.json',
  1600: '/data/world_1600.geo.json',
  1700: '/data/world_1700.geo.json',
  1800: '/data/world_1880.geo.json',
  1900: '/data/countries.geo.json',
};

function ZoomButtons() {
  const map = useMap();

  return (
    <div className="zoom-controls">
      <button onClick={() => map.zoomIn()} className="zoom-button" title="Zoom In">+</button>
      <button onClick={() => map.zoomOut()} className="zoom-button" title="Zoom Out">−</button>
      <button onClick={() => map.fitBounds([[90, -180], [-90, 180]])} className="zoom-button" title="Reset">⟳</button>
    </div>
  );
}

// PERUBAHAN 1: Terima props 'philosophers' dan 'onMarkerClick'
export default function TimelineOfThought({ philosophers, onMarkerClick }) {
  const startYear = 600;
  const endYear = 2000;

  const [year, setYear] = useState(startYear);
  const [mapData, setMapData] = useState(null);
  const [mapError, setMapError] = useState(null);
  const [currentMapFile, setCurrentMapFile] = useState('');

  const trackRef = useRef(null);
  const wrapperRef = useRef(null);

  const PIXELS_PER_YEAR = 2;
  const trackWidth = (endYear - startYear) * PIXELS_PER_YEAR;
  const marks = Array.from({ length: Math.floor((endYear - startYear) / 100) + 1 }, (_, i) => startYear + i * 100);

  useEffect(() => {
    const applicableYearKey = Math.floor(year / 100) * 100;
    const targetMapFile = mapDataConfig[applicableYearKey];

    if (targetMapFile && targetMapFile !== currentMapFile) {
      setCurrentMapFile(targetMapFile);
      setMapData(null);
      setMapError(null);

      fetch(targetMapFile)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Peta ${targetMapFile} tidak ditemukan (Error ${response.status})`);
          }
          return response.json();
        })
        .then(data => {
          setMapData(data);
        })
        .catch(error => {
          console.error("Gagal memuat GeoJSON:", error);
          setMapError(error.message);
        });
    }
  }, [year, currentMapFile]);

  const handleYear = e => {
    const y = Number(e.target.value);
    setYear(y);

    if (trackRef.current && wrapperRef.current) {
      const wTrack = trackRef.current.scrollWidth;
      const wWrap = wrapperRef.current.clientWidth;
      const pos = ((y - startYear) / (endYear - startYear)) * wTrack - wWrap / 2;
      wrapperRef.current.scrollTo({ left: Math.max(0, Math.min(pos, wTrack - wWrap)), behavior: 'smooth' });
    }
  };

  const mapBounds = [[90, -180], [-90, 180]];
  
  const countryStyle = {
    fillColor: '#333',
    fillOpacity: 0.5,
    color: '#888',
    weight: 1,
  };

  const onEachCountry = (country, layer) => {
    if (country.properties) {
      const countryName = country.properties.name || country.properties.NAME;
      if (countryName) {
        layer.bindPopup(countryName);
        layer.on({
          mouseover: (event) => { event.target.setStyle({ fillColor: '#666' }); },
          mouseout: (event) => { event.target.setStyle({ fillColor: '#333' }); },
        });
      }
    }
  };

  return (
    <div className="timeline-container">
      <div className="timeline-main-content">
        <div className="map-container">
          {mapError && <div className="error-overlay">{mapError}</div>}

          {!mapError && (
            <MapContainer center={[20, 0]} zoom={3} minZoom={3} maxZoom={19} style={{ width: '100%', height: '100%' }} attributionControl={false} zoomControl={false} maxBounds={mapBounds} maxBoundsViscosity={1.0}>
              <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" noWrap={true} />
              
              {mapData && (
                <GeoJSON data={mapData.features} style={countryStyle} onEachFeature={onEachCountry} key={currentMapFile} />
              )}

              {/* PERUBAHAN 2: Gunakan props 'philosophers' dan sesuaikan filter */}
              {philosophers
                .filter(p => {
                  if (!p.years) return false;
                  // Ubah "1844–1900" menjadi [1844, 1900]
                  const [start, end] = p.years.split('–').map(Number);
                  return year >= start && year <= end;
                })
                .map(p => (
                  // PERUBAHAN 3: Teruskan onMarkerClick ke PhilosopherMarker
                  <PhilosopherMarker 
                    key={p.id} 
                    philosopher={p} 
                    onMarkerClick={onMarkerClick}
                  />
                ))}
              
              <ZoomButtons />
            </MapContainer>
          )}

          <div className="year-display">{year}</div>
        </div>

        <div className="timeline-container-bottom">
          <div className="timeline-scroll-wrapper" ref={wrapperRef}>
            <div className="timeline-track" ref={trackRef} style={{ width: `${trackWidth}px` }}>
              {marks.map(m => <div key={m} className="year-mark" style={{ left: `${((m - startYear) / (endYear - startYear)) * 100}%` }}><div className="year-mark-line"></div><div className="year-mark-label">{m}</div></div>)}
              <input type="range" min={startYear} max={endYear} step="1" value={year} onChange={handleYear} className="timeline-slider" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}