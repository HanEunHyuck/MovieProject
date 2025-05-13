import { Link } from 'react-router-dom';

import { Movie } from '../types/movie';

const MovieItem = ({ movie }: { movie: Movie }) => {
  return (
    <Link to={`/details/${movie.imdbID}`} type='button'>
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder_img.png'}
        alt={movie.Title}
        className='w-full'
        onError={e => {
          e.currentTarget.src = '/placeholder_img.png';
        }}
      />
      <div className='truncate text-2xl'>{movie.Title}</div>
      <div className='flex gap-2'>
        <div>{movie.Year}</div>
        <div>{movie.Ratings?.[0]?.Value || '평점 없음'}</div>
      </div>
    </Link>
  );
};

export default MovieItem;
