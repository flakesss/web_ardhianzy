// src/data/articles.js

// INI ADALAH DATABASE SEMENTARA UNTUK SEMUA ARTIKEL ANDA
// Setiap artikel memiliki ID unik dan sebuah kategori.
export const allArticles = [
  // --- Kumpulan Artikel dari RESEARCH ---
  {
    id: 101,
    category: "Research",
    title: "LOREM IPSUM DOLOR SIT",
    author: "Author Name",
    date: "22 May, 2025",
    image: "/assets/research/Research (2).png",
    content: [
      { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum magna neque, ut lacinia elit ullamcorper eget. Ut lobortis ultrices lorem, id convallis urna porta eu. Aenean ullamcorper eget ipsum sed pharetra. Sed odio erat, suscipit quis massa non, aliquet tempus mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." },
      { type: "blockquote", text: "Nam a ipsum id tortor finibus vehicula. Suspendisse in facilisis elit, in vulputate elit. Donec in elit mollis, facilisis tortor non, auctor turpis." },
      { type: "subheading", text: "Nam a ipsum id tortor finibus vehicula. Suspendisse in facilisis elit, in vulputate elit. Donec in elit mollis, facilisis tortor non, auctor turpis." },
      { type: "paragraph", text: "Ut eget enim sit amet augue vulputate sodales non et velit. Proin luctus neque sit amet ullamcorper vestibulum. Ut feugiat lorem ex, at semper massa sollicitudin non. In nulla lacus, faucibus quis bibendum vel, dignissim sed ipsum." },
    ]
  },
  {
    id: 102,
    category: "Research",
    title: "CONSECTETUR ADIPISCING",
    author: "Author Name",
    date: "22 May, 2025",
    image: "/assets/research/Husk.jpg",
    content: [
      { type: "paragraph", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam." },
    ]
  },
  // ...Tambahkan 3 artikel research lainnya jika perlu

  // --- Kumpulan Artikel dari MONOLOGUES ---
  {
    id: 201,
    category: "Monologues",
    title: "Lorem Ipsum Dolor Sit",
    author: "Jane Doe",
    date: "22 May, 2025",
    image: "/assets/monologues/women.jpg",
    content: [
      { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum magna neque, ut lacinia elit ullamcorper eget. Ut lobortis ultrices lorem, id convallis urna porta eu. Aenean ullamcorper eget ipsum sed pharetra. Sed odio erat, suscipit quis massa non, aliquet tempus mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam sit amet tellus quis sem pellentesque molestie. Vestibulum ex nisl, porttitor sit amet mi a, varius sagittis ante. Nunc ac nisi quis felis fringilla feugiat. Aenean posuere orci eu dolor tempor mollis. Duis quis lobortis lorem, vitae consequat urna.Sed dapibus id ex eu pulvinar. Nunc viverra at elit at blandit. Etiam sem quam, hendrerit eu blandit quis, lacinia vitae sapien. Suspendisse convallis gravida tortor eget fermentum. Duis semper pellentesque urna, vitae maximus purus dictum eget. Praesent id lorem eu lectus posuere facilisis. Vestibulum lectus turpis, iaculis id ipsum id, scelerisque laoreet mauris. Ut neque magna, tincidunt eget sem sit amet, varius pulvinar quam. Nullam erat lorem, dictum sed metus interdum, convallis viverra risus. Nullam sed iaculis libero, at imperdiet neque. Fusce hendrerit fringilla sem nec vehicula." },
      { type: "blockquote", text: "Nam a ipsum id tortor finibus vehicula. Suspendisse in facilisis elit, in vulputate elit. Donec in elit mollis, facilisis tortor non, auctor turpis. Ut eget enim sit amet augue vulputate sodales non et velit. Proin luctus neque sit amet ullamcorper vestibulum. Ut feugiat lorem ex, at semper massa sollicitudin non. In nulla lacus, faucibus quis bibendum vel, dignissim sed ipsum. Aliquam faucibus egestas tempor. Nulla facilisi. In malesuada augue dolor, at scelerisque massa placerat sed. Donec neque enim, convallis ac lorem et, fermentum cursus purus. Vestibulum eget massa ac sapien molestie maximus sed vel odio. In hac habitasse platea dictumst." },
      { type: "subheading", text: "Nam a ipsum id tortor finibus vehicula. Suspendisse in facilisis elit, in vulputate elit. Donec in elit mollis, facilisis tortor non, auctor turpis." },
      { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum magna neque, ut lacinia elit ullamcorper eget. Ut lobortis ultrices lorem, id convallis urna porta eu. Aenean ullamcorper eget ipsum sed pharetra. Sed odio erat, suscipit quis massa non, aliquet tempus mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam sit amet tellus quis sem pellentesque molestie. Vestibulum ex nisl, porttitor sit amet mi a, varius sagittis ante. Nunc ac nisi quis felis fringilla feugiat. Aenean posuere orci eu dolor tempor mollis. Duis quis lobortis lorem, vitae consequat urna." },
    ]
  },
  {
    id: 202,
    category: "Monologues",
    title: "Lorem Ipsum Dolor Sit",
    author: "Author Monologue",
    date: "22 May, 2025",
    image: "/assets/monologues/kratzhll.jpg",
    content: [
      { type: "paragraph", text: "Ini adalah konten untuk artikel kedua dari monologues. Anda bisa mengisinya dengan teks yang lebih panjang di sini." },
    ]
  },{
    id: 203,
    category: "Monologues",
    title: "Lorem Ipsum Dolor Sit",
    author: "Author Monologue",
    date: "22 May, 2025",
    image: "/assets/monologues/kratzhll.jpg",
    content: [
      { type: "paragraph", text: "Ini adalah konten untuk artikel kedua dari monologues. Anda bisa mengisinya dengan teks yang lebih panjang di sini." },
    ]
  },{
    id: 204,
    category: "Monologues",
    title: "Lorem Ipsum Dolor Sit",
    author: "Author Monologue",
    date: "22 May, 2025",
    image: "/assets/monologues/kratzhll.jpg",
    content: [
      { type: "paragraph", text: "Ini adalah konten untuk artikel kedua dari monologues. Anda bisa mengisinya dengan teks yang lebih panjang di sini." },
    ]
  },{
    id: 205,
    category: "Monologues",
    title: "Lorem Ipsum Dolor Sit",
    author: "Author Monologue",
    date: "22 May, 2025",
    image: "/assets/monologues/kratzhll.jpg",
    content: [
      { type: "paragraph", text: "Ini adalah konten untuk artikel kedua dari monologues. Anda bisa mengisinya dengan teks yang lebih panjang di sini." },
    ]
  },{
    id: 206,
    category: "Monologues",
    title: "Lorem Ipsum Dolor Sit",
    author: "Author Monologue",
    date: "22 May, 2025",
    image: "/assets/monologues/kratzhll.jpg",
    content: [
      { type: "paragraph", text: "Ini adalah konten untuk artikel kedua dari monologues. Anda bisa mengisinya dengan teks yang lebih panjang di sini." },
    ]
  },
  // ...Lanjutkan untuk semua artikel Monologues

  // --- Kumpulan Artikel dari POP-CULTURE REVIEW ---
  {
    id: 301,
    category: "Pop-Culture Review",
    title: "Lorem Ipsum Dolor Sit",
    author: "Author Pop-Culture",
    date: "22 May, 2025",
    image: "/assets/PopCulture/pop.jpeg",
    content: [
      { type: "paragraph", text: "Ini adalah konten untuk artikel Pop-Culture. Anda bisa mengisinya dengan teks yang lebih panjang di sini." },
    ]
  },
  // ...Lanjutkan untuk semua artikel Pop-Culture

  // --- Kumpulan Artikel dari IDEAS & TRADITION ---
  {
    id: 401,
    category: "Ideas & Tradition",
    title: "Lorem Ipsum Dolor Sit",
    author: "Author Ideas",
    date: "22 May, 2025",
    image: "/assets/ideas&tradition/ideas.jpeg",
    content: [
      { type: "paragraph", text: "Ini adalah konten untuk artikel Ideas & Tradition. Anda bisa mengisinya dengan teks yang lebih panjang di sini." },
    ]
  },
  // ...Lanjutkan untuk semua artikel Ideas & Tradition
];