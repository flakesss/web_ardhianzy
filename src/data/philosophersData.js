// src/data/philosophersData.js

const philosophers = [


  {
    id: 1, 
    name: 'Friedrich Nietzsche',
    years: '1844–1900',
    coordinates: [51.3397, 12.3731], 
    image: '/assets/philosophers/Friedrich Nietzsche.jpg',
    flag: '/assets/philosophers/GERMANY.jpg', 
    birthDate: '15 OCT 1844',
    deathDate: '25 AUG 1900',
    birthPlace: 'Röcken, Lützen, Jerman',
    deathPlace: 'Weimar, Jerman',
    description: `Friedrich Nietzsche adalah filsuf Jerman yang mengguncang fondasi moral religius Eropa dengan seruannya bahwa “Tuhan telah mati.” Warisannya membekas kuat dalam eksistensialisme, psikoanalisis, dan kritik budaya modern.`,
    books: [
      { title: 'Ecce Homo', cover: '/assets/reading guide/Ecce Homo.jpeg' }, 
      { title: 'Thus Spoke Zarathustra', cover: '/assets/books/zarathustra.jpg' },
    ]
  },

  {
    id: 2,
    name: 'Albert Camus',
    years: '1913–1960',
    coordinates: [48.8566, 2.3522], 
    image: '/assets/philosophers/Albert Camus.jpg',
    flag: '/assets/philosophers/FRANCE.jpg',
    birthDate: '07 NOV 1913',
    deathDate: '04 JAN 1960',
    birthPlace: 'Mondovi, Aljazair Prancis',
    deathPlace: 'Villeblevin, Prancis',
    description: `Albert Camus adalah seorang filsuf, penulis, dan jurnalis Prancis kelahiran Aljazair. Ia adalah tokoh sentral dalam absurdisme, aliran pemikiran yang mengeksplorasi konflik antara pencarian makna dalam hidup manusia dan kebisuan alam semesta.`,
    books: [
      { title: 'The Stranger', cover: '/assets/books/the-stranger.jpg' },
      { title: 'The Plague', cover: '/assets/books/the-plague.jpg' },
    ]
  },

  
];

export default philosophers;