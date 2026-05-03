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
    description: 'Dream inside a dream',
    image: 'https://via.placeholder.com/150',
    favorite: false
  },
  {
    id: 2,
    title: 'Interstellar',
    year: 2014,
    rating: 8.6,
    duration: 169,
    description: 'Space travel',
    image: 'https://via.placeholder.com/150',
    favorite: false
  },
  {
    id: 3,
    title: 'Batman',
    year: 2008,
    rating: 9.0,
    duration: 152,
    description: 'Dark Knight',
    image: 'https://via.placeholder.com/150',
    favorite: false
  }
];