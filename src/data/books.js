// src/data/books.js

// --- DATABASE PENULIS ---
export const allAuthors = [
  {
    id: 10,
    name: "Friedrich Nietzsche",
    image: "/assets/reading guide/friedrich.jpg",
    bio: "Friedrich Nietzsche (1844–1900) adalah seorang filsuf Jerman, kritikus budaya, penyair, dan komponis yang memberikan pengaruh besar pada filsafat modern."
  },
  // Tambahkan penulis lain di sini
];

// --- DATABASE BUKU ---
export const allBooks = [
  {
    id: 25,
    title: "ECCE HOMO",
    authorId: 10, // Merujuk ke ID Friedrich Nietzsche
    coverImg: "/assets/reading guide/Ecce Homo.jpeg",
    description: "Sebuah otobiografi filosofis yang provokatif dan introspektif."
  },
  {
    id: 26,
    title: "THUS SPOKE ZARATHUSTRA",
    authorId: 10,
    coverImg: "/assets/reading guide/Thus Spoke Zarathustra.jpeg",
    description: "Novel alegoris yang memperkenalkan konsep-konsep sentral Nietzsche."
  },
  {
    id: 28,
    title: "BEYOND GOOD AND EVIL",
    authorId: 10,
    coverImg: "/assets/reading guide/cc68a255-f8b0-4d15-9798-e0e5ac96320f.jpeg",
    description: "Kritik tajam terhadap tradisi filsafat dan moralitas Barat."
  },
  // Tambahkan buku lain di sini
];

// --- DATABASE JALUR MEMBACA (READING GUIDES) ---
export const allReadingGuides = [
  {
    id: 1,
    title: "Ecce Homo Reading Path",
    authorId: 10, // Penulis utama dari path ini
    excerpt: "Panduan ini akan membawa Anda melalui beberapa karya kunci Nietzsche untuk memahami konteks dan pemikiran yang memuncak pada otobiografi filosofisnya, Ecce Homo.",
    targetBookId: 25, // Hanya ID dari buku target
    steps: [ // Daftar urutan hanya berisi ID buku
      { order: 1, bookId: 26 },
      { order: 2, bookId: 28 },
    ]
  },
];