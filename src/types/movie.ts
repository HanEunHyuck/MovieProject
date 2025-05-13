export type Rating = {
  Source: string;
  Value: string;
};

export type Movie = {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: number;
  Ratings: Rating[];
};
