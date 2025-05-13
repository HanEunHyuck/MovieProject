import { useEffect, useState } from 'react';

import MovieItem from '../../components/MovieItem';
import Loading from '../../components/Loading';

import { Movie } from '../../types/movie';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import movieData from '../../data/data.json';

import shuffle from '../../utils/shuffle';

const MainPage = () => {
  // const movieId = 'tt3896198';
  // const [movies, setMovies] = useState<Movie[]>([]);

  // const fetchMovieData = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://www.omdbapi.com/?i=${movieId}&apikey=8e5fae38`,
  //     );
  //     const data = await response.json();

  //     if (response.ok) {
  //       setMovies(data);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchMovieData();
  // }, []);

  // if (!movies) {
  //   return <Loading />;
  // }

  const shuffledMovie = shuffle(movieData).slice(0, 5);

  return (
    <div className='container'>
      <main>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className='main-swiper'
        >
          {shuffledMovie.map((movie, index) => (
            <SwiperSlide key={index}>
              <div className='flex items-center justify-center gap-5'>
                <img
                  src={
                    movie.Poster !== 'N/A'
                      ? movie.Poster
                      : '/placeholder_img.png'
                  }
                  alt={movie.Title}
                  className='w-full'
                  onError={e => {
                    e.currentTarget.src = '/placeholder_img.png';
                  }}
                />
                <div className='flex flex-col'>
                  <div className='truncate text-2xl'>{movie.Title}</div>
                  <div>
                    <div>{movie.Year}</div>
                    <div>{movie.Ratings?.[0]?.Value || '평점 없음'}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
      <div className='content-wrap'>
        <section>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={true}
            modules={[Pagination]}
          >
            {shuffledMovie.map((movie, index) => (
              <SwiperSlide key={index}>
                <MovieItem movie={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </div>
  );
};

export default MainPage;
