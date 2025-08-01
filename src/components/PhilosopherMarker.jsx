import React, { useState } from 'react';
import { Marker } from 'react-leaflet';
import L from 'leaflet';
import './PhilosopherMarker.css';

export default function PhilosopherMarker({ philosopher, onMarkerClick }) {
  // 1. Kembalikan state untuk mengelola kartu
  const [isExpanded, setIsExpanded] = useState(false);

  // Icon untuk versi kecil (lingkaran berdenyut)
  const smallIcon = new L.divIcon({
    className: 'philosopher-marker-small',
    html: '<div></div>',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });

  // 2. Kembalikan definisi untuk kartu besar (largeIcon)
  const largeIconHTML = `
    <div class="photo-container">
      <img src="${philosopher.image}" alt="${philosopher.name}" class="philosopher-photo" />
    </div>
    
    <div class="philosopher-details" data-action="open-bio">
      <p class="philosopher-years">${philosopher.years}</p>
      <h3 class="philosopher-name">${philosopher.name}</h3>
    </div>
  `;

  const largeIcon = new L.divIcon({
    className: 'philosopher-card-wrapper', 
    html: largeIconHTML,
    iconSize: [160, 210],
    iconAnchor: [80, 105], 
  });

  // 4. Logika klik yang baru
  const handleMarkerClick = (e) => {
    // Cek apakah elemen yang diklik (atau parent-nya) memiliki atribut data-action="open-bio"
    const isBioClick = e.originalEvent.target.closest('[data-action="open-bio"]');

    if (isBioClick) {
      // Jika ya, panggil fungsi untuk membuka panel biografi
      onMarkerClick(philosopher.id);
    } else {
      // Jika tidak, ganti status kartu (besar/kecil)
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Marker
      position={philosopher.coordinates}
      icon={isExpanded ? largeIcon : smallIcon}
      eventHandlers={{
        click: handleMarkerClick,
      }}
    />
  );
}