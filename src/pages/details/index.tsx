// react
import { useEffect, useState } from 'react';

// route
import { useParams } from 'react-router-dom';

// components
import Loading from '../../components/Loading';

// type
import { Movie } from '../../types/movie';

const DetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);

  const fetchMovieData = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${movieId}&apikey=8e5fae38`,
      );
      const data = await response.json();

      if (response.ok) {
        setMovie(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovieData();
  }, [movieId]);

  if (!movie) {
    return <Loading />;
  }

  return (
    <div className='container'>
      <div className='content-wrap'>
        <section>
          <div className='my-20 flex justify-around gap-5'>
            <div className='max-w-120'>
              <div className='text-3xl font-bold'>{movie.Title}</div>
              <div className='my-4 flex gap-2 [&>span]:text-gray-400'>
                <span>{movie.Released}</span>
                <span>•</span>
                <span>{movie.Runtime}</span>
                <span>•</span>
                <span>{movie.imdbRating}</span>
              </div>
              <p className='text-lg'>{movie.Plot}</p>
            </div>
            <div className='shrink-0'>
              <img src={movie.Poster} alt='' />
            </div>
          </div>
          <ul className='border-t-1 border-b-1 px-4 py-10 [&>li]:mb-4 [&>li]:flex [&>li]:gap-4'>
            <li>
              <span className='min-w-16 text-gray-400'>Genre</span>
              <span>{movie.Genre}</span>
            </li>
            <li>
              <span className='min-w-16 text-gray-400'>Director</span>
              <span>{movie.Director}</span>
            </li>
            <li className='mb-0!'>
              <span className='min-w-16 text-gray-400'>Actors</span>
              <span>{movie.Actors}</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default DetailsPage;
