import { useEffect, useState } from 'react';
import useStore from '../../store/useStore';

import Loading from '../../components/Loading';
import MovieItem from '../../components/MovieItem';

const SearchResultPage = () => {
  const [movies, setMovies] = useState([]);

  const { selectedItem, searchTxt, setSearchTxt } = useStore();

  useEffect(() => {
    const savedTxt = localStorage.getItem('searchTxt');
    if (!searchTxt && savedTxt) {
      setSearchTxt(savedTxt);
    }
  }, []);

  useEffect(() => {
    if (searchTxt) {
      localStorage.setItem('searchTxt', searchTxt);
    }
  }, [searchTxt]);

  const fetchMovieData = async () => {
    const keyword = searchTxt || localStorage.getItem('searchTxt');
    if (!keyword) return;

    try {
      let apiUrl = `https://www.omdbapi.com/?s=${keyword}&apikey=8e5fae38`;

      if (selectedItem !== 'All years') {
        apiUrl += `&y=${selectedItem}`;
      }

      const response = await fetch(apiUrl);
      const data = await response.json();

      if (response.ok && data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error(error);
      setMovies([]);
    }
  };

  useEffect(() => {
    fetchMovieData();
  }, [searchTxt, selectedItem]);

  if (!movies.length) {
    return <Loading />;
  }

  return (
    <div className='container'>
      <div className='content-wrap'>
        <section>
          <div className='my-10 text-3xl font-bold'>
            Search Result ({movies.length})
          </div>

          <ul className='grid grid-cols-4 gap-4'>
            {movies.map((movie, index) => (
              <li key={index}>
                <MovieItem movie={movie} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default SearchResultPage;
