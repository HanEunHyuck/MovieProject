// react
import { useMemo, useState } from 'react';

// route
import { Link } from 'react-router-dom';

// components
import MovieItem from '../../components/MovieItem';
import Dropdown from '../../components/Dropdown';
import Input from '../../components/Input';

// library
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// data
import movieData from '../../data/data.json';

// utils
import shuffle from '../../utils/shuffle';

// store
import useStore from '../../store/useStore';

const YEARS = ['All years', '2023', '2022', '2021', '2020'];

const MainPage = () => {
  const [text, setText] = useState('');

  const { setSelectedItem } = useStore();

  useMemo(() => setSelectedItem(YEARS[0]), []);

  const shuffledMovies = useMemo(() => shuffle(movieData).slice(0, 5), []);

  const rateSortMovies = useMemo(() => {
    return [...movieData]
      .sort((a, b) => parseFloat(b.imdbRating) - parseFloat(a.imdbRating))
      .slice(0, 10);
  }, []);

  const latestMovies = useMemo(() => {
    return [...movieData]
      .sort((a, b) => parseFloat(b.Year) - parseFloat(a.Year))
      .slice(0, 10);
  }, []);

  return (
    <div className='container'>
      <main>
        <Swiper
          pagination={true}
          autoplay={true}
          modules={[Pagination, Autoplay]}
          className='main-swiper'
        >
          {shuffledMovies.map((movie, index) => (
            <SwiperSlide key={index}>
              <Link to={`details/${movie.imdbID}`}>
                <div className='relative z-1 flex items-center justify-center gap-6 py-40'>
                  <img src={movie.Poster} alt={movie.Title} className='h-120' />
                  <div className='flex flex-col gap-3 text-center font-bold'>
                    <div className='max-w-120 text-4xl'>{movie.Title}</div>
                    <div className='text-xl text-red-500'>
                      {movie.imdbRating}
                    </div>
                  </div>
                </div>
                <div className='absolute inset-0 bg-gradient-to-t from-[#FD3C1A] via-transparent to-transparent opacity-25'>
                  <img
                    src={movie.Poster}
                    alt=''
                    className='h-full w-full overflow-hidden object-cover opacity-30'
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
      <div className='content-wrap'>
        <section className='mb-10 flex gap-4'>
          <Dropdown items={YEARS} onSelect={setSelectedItem} />
          <Input
            type='search'
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder='Enter Movie Title'
          />
        </section>
        <section>
          <h2 className='section-title'>Rate</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={28}
            navigation={true}
            modules={[Navigation]}
            className='section-swiper'
          >
            {rateSortMovies.map((movie, index) => (
              <SwiperSlide key={index}>
                <span className='absolute top-2 left-4 text-6xl'>
                  {index + 1}
                </span>
                <MovieItem movie={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <div className='mx-auto my-16 max-w-330'>
          <img src='./main_bg_logo1.png' alt='' />
        </div>

        <section>
          <h2 className='section-title'>Latest Release</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={28}
            navigation={true}
            modules={[Navigation]}
            className='section-swiper'
          >
            {latestMovies.map((movie, index) => (
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
