// route
import { Routes, Route } from 'react-router-dom';

// pages
import {
  DetailsPage,
  MainPage,
  NotFoundPage,
  WishlistPage,
  SearchResultPage,
} from './pages';

// components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// css
import './App.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/details/:movieId' element={<DetailsPage />} />

        <Route path='/wishlist' element={<WishlistPage />} />

        <Route path='/search-result' element={<SearchResultPage />} />

        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
