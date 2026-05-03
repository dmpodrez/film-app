export interface Film {
  id: number;
  title: string;
  year: number;
  rating: number;
  duration: number;
  description: string;
  image: string;
  favorite: boolean;
}

  export const films: Film[] = [
  {
    id: 1,
    title: 'Inception',
    year: 2010,
    rating: 8.8,
    duration: 148,
    description: 'A thief who steals corporate secrets through dream-sharing technology is given a chance to erase his criminal history.',
    image: 'https://via.placeholder.com/150',
    favorite: false
  },
  {
    id: 2,
    title: 'Interstellar',
    year: 2014,
    rating: 8.7,
    duration: 169,
    description: 'A team of explorers travels through a wormhole in space in an attempt to save humanity.',
    image: 'https://via.placeholder.com/150',
    favorite: false
  },
  {
    id: 3,
    title: 'The Dark Knight',
    year: 2008,
    rating: 9.0,
    duration: 152,
    description: 'Batman faces the Joker, a criminal mastermind who wants to create chaos in Gotham City.',
    image: 'https://via.placeholder.com/150',
    favorite: false
  },
  {
    id: 4,
    title: 'The Matrix',
    year: 1999,
    rating: 8.7,
    duration: 136,
    description: 'A hacker discovers that his reality is a simulated world controlled by machines.',
    image: 'https://via.placeholder.com/150',
    favorite: false
  },
  {
    id: 5,
    title: 'Fight Club',
    year: 1999,
    rating: 8.8,
    duration: 139,
    description: 'An office worker forms an underground fight club that becomes something much bigger.',
    image: 'https://via.placeholder.com/150',
    favorite: false
  },
  {
    id: 6,
    title: 'Forrest Gump',
    year: 1994,
    rating: 8.8,
    duration: 142,
    description: 'The life story of Forrest Gump, a kind man who accidentally becomes part of major historical events.',
    image: 'https://via.placeholder.com/150',
    favorite: false
  },
  {
    id: 7,
    title: 'Pulp Fiction',
    year: 1994,
    rating: 8.9,
    duration: 154,
    description: 'Several criminal stories in Los Angeles connect in unexpected ways.',
    image: 'https://via.placeholder.com/150',
    favorite: false
  },
  {
    id: 8,
    title: 'Gladiator',
    year: 2000,
    rating: 8.5,
    duration: 155,
    description: 'A betrayed Roman general seeks revenge after becoming a gladiator.',
    image: 'https://via.placeholder.com/150',
    favorite: false
  },
  {
    id: 9,
    title: 'The Shawshank Redemption',
    year: 1994,
    rating: 9.3,
    duration: 142,
    description: 'Two prisoners form a deep friendship while trying to survive life in prison.',
    image: 'https://via.placeholder.com/150',
    favorite: false
  },
  {
    id: 10,
    title: 'The Green Mile',
    year: 1999,
    rating: 8.6,
    duration: 189,
    description: 'A prison guard meets a death row inmate with a mysterious gift.',
    image: 'https://via.placeholder.com/150',
    favorite: false
  },
  {
    id: 11,
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
    rating: 8.9,
    duration: 178,
    description: 'A hobbit begins a dangerous journey to destroy a powerful ring.',
    image: 'https://via.placeholder.com/150',
    favorite: false
  },
  {
    id: 12,
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
    rating: 9.0,
    duration: 201,
    description: 'The final battle for Middle-earth begins as Frodo continues his mission.',
    image: 'https://via.placeholder.com/150',
    favorite: false
  }
];