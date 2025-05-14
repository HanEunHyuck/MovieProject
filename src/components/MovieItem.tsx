import { Link } from 'react-router-dom';

import { Movie } from '../types/movie';

const MovieItem = ({ movie }: { movie: Movie }) => {
  return (
    <Link to={`/details/${movie.imdbID}`}>
      <img
        src={movie.Poster}
        alt={movie.Title}
        className='h-100 w-full object-fill'
        onError={e => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = '/placeholder_img.png';
        }}
      />
      <span className='mt-4 block truncate text-2xl font-bold'>
        {movie.Title}
      </span>
      <span className='flex gap-2 text-lg'>
        <span>{movie.Year}</span>
        <span className='text-red-500'>{movie.imdbRating}</span>
      </span>
    </Link>
  );
};

export default MovieItem;
