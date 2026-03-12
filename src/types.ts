export interface Game {
  id: string;
  title: string;
  category: string;
  rating: number;
  image: string;
  downloads: string;
  isTrending?: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
}
