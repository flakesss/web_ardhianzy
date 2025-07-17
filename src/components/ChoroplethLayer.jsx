import React, { useEffect, useRef } from 'react';
import { GeoJSON, useMap } from 'react-leaflet';
import L from 'leaflet';
import statesData from '../data/us-states.json';     // ganti dgn data Anda

/* ----------  Skala Warna  ---------- */
function getColor(d) {
  return d > 1000 ? '#800026' :
         d > 500  ? '#BD0026' :
         d > 200  ? '#E31A1C' :
         d > 100  ? '#FC4E2A' :
         d > 50   ? '#FD8D3C' :
         d > 20   ? '#FEB24C' :
         d > 10   ? '#FED976' : '#FFEDA0';
}
const style = f => ({
  fillColor: getColor(f.properties.density),
  weight: 2,
  color: 'white',
  dashArray: '3',
  fillOpacity: 0.7
});

/* ----------  Control “info” (hover)  ---------- */
function InfoControl() {
  const map = useMap();
  const infoRef = useRef(null);

  useEffect(() => {
    const info = L.control();
    info.onAdd = () => {
      infoRef.current = L.DomUtil.create('div', 'info');
      info.update();
      return infoRef.current;
    };
    info.update = (props) => {
      infoRef.current.innerHTML =
        '<h4>US Population Density</h4>' +
        (props
          ? `<b>${props.name}</b><br/>${props.density} people / mi<sup>2</sup>`
          : 'Hover over a state');
    };
    info.addTo(map);
    return () => info.remove();
  }, [map]);
  return null;
}

/* ----------  Control “legend” (static)  ---------- */
function LegendControl() {
  const map = useMap();
  useEffect(() => {
    const legend = L.control({ position: 'bottomright' });
    legend.onAdd = () => {
      const div = L.DomUtil.create('div', 'info legend');
      const grades = [0, 10, 20, 50, 100, 200, 500, 1000];
      grades.forEach((g, i) => {
        div.innerHTML +=
          `<i style="background:${getColor(g + 1)}"></i>` +
          `${g}${grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+'}`;
      });
      return div;
    };
    legend.addTo(map);
    return () => legend.remove();
  }, [map]);
  return null;
}

/* ----------  Lapisan Choropleth  ---------- */
export default function ChoroplethLayer() {
  const map = useMap();
  const geoRef = useRef();

  const highlight = e => {
    const layer = e.target;
    layer.setStyle({ weight: 5, color: '#666', dashArray: '', fillOpacity: 0.7 });
    layer.bringToFront();
    map._infoControl?.update(layer.feature.properties);            // custom property
  };
  const reset   = e => geoRef.current.resetStyle(e.target);
  const zoomTo  = e => map.fitBounds(e.target.getBounds());

  return (
    <>
      <GeoJSON
        data={statesData}
        style={style}
        onEachFeature={(f, layer) => {
          layer.on({ mouseover: highlight, mouseout: reset, click: zoomTo });
        }}
        ref={geoRef}
      />
      <InfoControl />
      <LegendControl />
    </>
  );
}
