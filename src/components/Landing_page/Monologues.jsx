import React from 'react';
import './Monologues.css';

const monoData = [
  {
    img: 'src/assets/monologues/Desain tanpa judul.png',
    title: 'LOREM IPSUM DOLOR SIT',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna',
    author: 'By bla bla bla',
  },
  {
    img: 'src/assets/monologues/mono1.png',
    title: 'LOREM IPSUM DOLOR SIT',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna',
    author: 'By bla bla bla',
  },
  {
    img: 'src/assets/monologues/mono2.png',
    title: 'LOREM IPSUM DOLOR SIT',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna',
    author: 'By bla bla bla',
  }
];

export default function Monologues () {
  return (
    <section id="monologues" className="section section-monologues">
      <div className="monologues-container">
        <div className="monologues-header">
          <h2>Collected Monologues</h2>
          <a href="#" className="monologues-more-button">
            MORE MONOLOGUES <span className="arrow">→</span>
          </a>
        </div>

        <div className="monologues-content">
          {monoData.map((item, i) => (
            <div key={i} className="monologue-card">
              <div className="monologue-img">
                <img src={item.img} alt={item.title} />
              </div>
              <h3 className="monologue-title">{item.title}</h3>
              <p className="monologue-excerpt">{item.excerpt}</p>
              <p className="monologue-author">{item.author}</p>
            </div>
          ))}

          <div className="monologue-card featured"
                style={{
                    backgroundImage: "url('src/assets/monologues/Group 5020.svg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                        }}>
            <h3 className="monologue-title featured-title">
              LOREM IPSUM DOLOR SIT
            </h3>
            <div className="monologue-img featured-img">
              <img src="src/assets/monologues/mono3.png " alt="Featured" />
            </div>
            <p className="monologue-excerpt featured-excerpt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
            </p>
            <p className="monologue-author featured-author">By bla bla bla</p>
            <p className="monologue-price">Rp. 50.000</p>
          </div>
        </div>
      </div>
    </section>
  );
}
