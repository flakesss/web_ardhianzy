import React from 'react';
import './ReadingGuide.css'; // Nama file CSS disamakan kembali

// Data baru untuk para filsuf
const philosophers = [
  {
    img: '/assets/reading guide/Karl Marx - Wikipedia.jpeg', // Ganti dengan path gambar Anda
    name: 'Karl Marx',
    bio: 'Karl Heinrich Marx (1818 – 1883) adalah filsuf Jerman, ekonom politik, dan revolusioner yang terkenal sebagai perintis teori historical materialism.',
  },
  {
    img: '/assets/reading guide/friedrich.jpg', // Ganti dengan path gambar Anda
    name: 'Friedrich Nietzsche',
    bio: 'Friedrich Nietzsche (1844 – 1900) adalah filsuf Jerman yang dikenal karena pemikirannya yang radikal tentang moralitas, agama, dan makna hidup.',
  },
  {
    img: '/assets/reading guide/Max Scheler (1).jpeg', // Ganti dengan path gambar Anda
    name: 'Max Scheler',
    bio: 'Max Scheler (1874 – 1928) adalah filsuf Jerman yang dikenal sebagai salah satu tokoh utama dalam tradisi fenomenologi dan filsafat nilai (axiology).',
  },
  {
    img: '/assets/reading guide/Wilhelm Dilthey (1833 – 1911).jpeg', // Ganti dengan path gambar Anda
    name: 'Wilhelm Dilthey',
    bio: 'Wilhelm Dilthey (1833 – 1911) adalah filsuf dan sejarawan Jerman yang dikenal sebagai pelopor hermeneutika modern dan ilmu-ilmu kemanusiaan.',
  },
];

export default function ReadingGuide() {
  return (
    <section id="philosophers-guide" className="section-philosophers">
      <div className="philosophers-container">
        <div className="philosophers-header">
          <h2>Meet The Philosophers</h2>
          <a href="#" className="philosophers-more-button">
            SEE ALL <span className="arrow">→</span>
          </a>
        </div>

        <div className="philosophers-grid">
          {philosophers.map((p, i) => (
            <div key={i} className="philosopher-card">
              <div className="philosopher-img">
                <img src={p.img} alt={p.name} />
              </div>
              <h3 className="philosopher-name">{p.name}</h3>
              <p className="philosopher-bio">{p.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}