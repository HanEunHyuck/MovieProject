import { Routes, Route } from "react-router-dom";

import { DetailsPage, MainPage, NotFoundPage, WishlistPage, SearchResultPage } from "./pages";

import "./App.css";
import "swiper/css";
import "swiper/css/pagination";
import Header from "./components/layout/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<MainPage />}
        />
        <Route
          path="/details/:movieId"
          element={<DetailsPage />}
        />

        <Route
          path="/wishlist"
          element={<WishlistPage />}
        />

        <Route
          path="/search-result"
          element={<SearchResultPage />}
        />

        <Route
          path="/*"
          element={<NotFoundPage />}
        />
      </Routes>
    </>
  );
};

export default App;
